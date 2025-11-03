"use client"
import Table from "@/components/shared/table";
import { ITableHeadCell } from "@/models/table";
import { Button, Grid, Stack } from "@mui/material";
import Row from "./_components/tableRow";
import Image from "next/image";
import TextIcon from "@/components/shared/textIcon";
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import { Add, MoreOutlined } from "@mui/icons-material";

const headCells: ITableHeadCell[] = [
    {
        id: "fullName",
        label: "#",
        align: "left",
    },
    {
        id: "gender",
        label: "شناسه تیکت",
        align: "left",
    },
    {
        id: "nationalCode",
        label: "موضوع",
        align: "left",
    },
    {
        id: "birthDate",
        label: "آخرین برزو رسانی",
        align: "left",
    },
    {
        id: "ageGroup",
        label: "وضعیت",
        align: "left",
    },
    {
        id: "actions",
        label: "عملیات",
        align: "left",
    },
];

const data = [
    {
        ticketId: "55414",
        subject: "استرداد بلیط",
        lastUpdate: "۲ ساعت پیش",
        status: "pending",
    },
    {
        ticketId: "55413",
        subject: "استرداد بلیط",
        lastUpdate: "۳ روز پیش",
        status: "answered",
    },
    {
        ticketId: "55411",
        subject: "استرداد بلیط",
        lastUpdate: "۵ روز پیش",
        status: "closed",
    },
];

export default function Support() {
    const tableRows = data.map((item: any, index: number) => (
        <Row key={String("ticket" + index)} {...item} index={index} />
    ));

    return (
        <Stack maxWidth={"xl"}>
            <Stack className="w-full! relative! h-[150px]!">
                <Image alt="banner" src={`/images/panel/history-banner.png`} fill />
            </Stack>

            <Stack className="border-1! border-slate-200! rounded-2xl p-4!">

                <Stack className="flex! flex-row! items-center! justify-between!">
                    <TextIcon className="text-base! px-2!" text="تیکت های شما" startIcon={<MoreOutlined className="text-2xl!" />} />
                    <Button variant="outlined" className="text-base! text-black! rounded-xl!" startIcon={<Add />}>افزودن درخواست جدید</Button>
                </Stack>


                <Grid
                    size={{ lg: 12 }}
                    mt={3}
                    sx={{
                        alignSelf: "center",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Table
                        // pagination={accounts?.pagination!}
                        sx={{ mt: 2 }}
                        loading={false}
                        headCells={headCells}
                        rows={tableRows ?? []}
                    />
                </Grid>
            </Stack>
        </Stack>
    )
}