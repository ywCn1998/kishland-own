"use client"

import { Button, Stack, Typography } from "@mui/material"
import Image from "next/image"
import TextIcon from "@/components/shared/textIcon";
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import AssuredWorkloadOutlinedIcon from '@mui/icons-material/AssuredWorkloadOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import { ITableHeadCell } from "@/models/table";
import Table from "@/components/shared/table";
import Row from "./_components/tableRow";

const headCells: ITableHeadCell[] = [
    {
        id: "fullName",
        label: "#",
        align: "left",
    },
    {
        id: "gender",
        label: "شناسه پیگیری",
        align: "left",
    },
    {
        id: "nationalCode",
        label: "تاریخ پرداخت",
        align: "left",
    },
    {
        id: "birthDate",
        label: "مبلغ (تومان)",
        align: "left",
    },
    {
        id: "ageGroup",
        label: "وضعیت",
        align: "left",
    },
    {
        id: "actions",
        label: "چاپ رسید",
        align: "left",
    },
];

const data = [
    {
        trackingId: "55414",
        payDate: "1404/01/02",
        price: "5,000,000",
        status: "success",
    },
    {
        trackingId: "55414",
        payDate: "1404/01/02",
        price: "5,000,000",
        status: "bankPending",
    },
    {
        trackingId: "55414",
        payDate: "1404/01/02",
        price: "5,000,000",
        status: "failed",
    },
    {
        trackingId: "55414",
        payDate: "1404/01/02",
        price: "5,000,000",
        status: "canceled",
    },
    {
        trackingId: "55414",
        payDate: "1404/01/02",
        price: "5,000,000",
        status: "backMoney",
    },
    {
        trackingId: "55414",
        payDate: "1404/01/02",
        price: "5,000,000",
        status: "pending",
    },
    {
        trackingId: "55414",
        payDate: "1404/01/02",
        price: "5,000,000",
        status: "security",
    },
];

export default function Wallet() {

    const tableRows = data.map((item: any, index: number) => (
        <Row key={String("ticket" + index)} {...item} index={index} />
    ));

    return (
        <Stack maxWidth={"xl"}>
            <Stack className="w-full! relative! h-[150px]!">
                <Image alt="banner" src={`/images/panel/history-banner.png`} fill />
            </Stack>

            <Stack className="border-1! border-slate-200! rounded-2xl p-4!">
                <Stack sx={{ backgroundColor: "secondary.50" }} className="flex! flex-row! justify-between! items-center! p-4! rounded-2xl!">
                    <TextIcon className="text-black! text-sm!" text="موجودی کیف پول من" gap={1} startIcon={<WalletOutlinedIcon sx={{ color: "text.secondary" }} className="text-2xl!" />} />
                    <Typography className="font-semibold!">25.000 تومان</Typography>
                </Stack>

                <Stack className="flex! flex-row! gap-8! w-full!" mt={2}>
                    <Button className="w-full! text-lg! py-3! text-white! rounded-2xl!" variant="contained" startIcon={<AccountBalanceWalletOutlinedIcon className="text-white! text-3xl!" />}>افزایش موجودی کیف پول</Button>
                    <Button className="w-full! text-base! py-3! text-black! rounded-2xl!" sx={{ fontWeight: 300 }} variant="outlined" startIcon={<CreditScoreOutlinedIcon className="text-2xl!" />}>برداشت از کیف پول</Button>
                </Stack>
            </Stack>


            <Stack className="border-1! border-slate-200! rounded-2xl p-4!" mt={4}>
                <Stack className="flex! flex-row! gap-8! w-full!">
                    <Button className="w-full! text-xl! text-white! py-5! rounded-2xl!" startIcon={<AssuredWorkloadOutlinedIcon className="text-white! text-2xl!" />} sx={{ backgroundColor: "secondary.main", fontWeight: 300 }} variant="contained">واریزی ها</Button>
                    <Button className="w-full! text-lg! text-black! py-5! rounded-2xl!" sx={{ fontWeight: 300 }} startIcon={<MedicalServicesOutlinedIcon className="text-2xl!" />} variant="outlined"> برداشت ها</Button>
                </Stack>


                <Stack className="flex! flex-row! justify-between! items-center! p-4! rounded-2xl!" mt={2}>
                    <TextIcon className="text-lg!" text="لیست واریزی ها" gap={1} startIcon={<ReceiptLongOutlinedIcon sx={{ color: "text.secondary" }} className="text-2xl!" />} />
                    <Button variant="outlined" className="rounded-2xl! text-black!" startIcon={<DownloadOutlinedIcon />}>دانلود خروجی اکسل</Button>
                </Stack>


                <Table
                    // pagination={accounts?.pagination!}
                    sx={{ mt: 2 }}
                    loading={false}
                    headCells={headCells}
                    rows={tableRows ?? []}
                />
            </Stack>

        </Stack>
    )
}