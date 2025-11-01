"use client"
import Table from "@/components/shared/table";
import { ITableHeadCell } from "@/models/table";
import { Button, Grid, Stack } from "@mui/material";
import Row from "../_components/tableRow";
import Image from "next/image";
import TextIcon from "@/components/shared/textIcon";
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import { Add } from "@mui/icons-material";

const headCells: ITableHeadCell[] = [
    {
        id: "fullName",
        label: "نام مسافر",
        align: "left",
    },
    {
        id: "gender",
        label: "جنسیت",
        align: "left",
    },
    {
        id: "nationalCode",
        label: "کد ملی / پاسپورت",
        align: "left",
    },
    {
        id: "birthDate",
        label: "تاریخ تولد",
        align: "left",
    },
    {
        id: "ageGroup",
        label: "رده سنی",
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
        id: 1,
        fullName: "قاسم سبجانی",
        gender: "مرد",
        nationalCode: "۰۸۵۰۱۲۳۴۵",
        birthDate: "۱۳۷۵/۰۴/۱۵",
        ageGroup: "بزرگسال",
    },
    {
        id: 2,
        fullName: "قاسم سبجانی",
        gender: "مرد",
        nationalCode: "۰۸۵۰۱۲۳۴۵",
        birthDate: "۱۳۷۵/۰۴/۱۵",
        ageGroup: "بزرگسال",
    },
];

export default function PassengerList() {
    const tableRows = data.map((item: any, index: number) => (
        <Row key={String("user" + index)} {...item} index={index} />
    ));

    return (
        <Stack maxWidth={"xl"}>
            <Stack className="w-full! relative! h-[150px]!">
                <Image alt="banner" src={`/images/panel/history-banner.png`} fill />
            </Stack>

            <Stack className="border-1! border-slate-200! rounded-2xl p-4!">

                <Stack className="flex! flex-row! items-center! justify-between!">
                    <TextIcon className="text-base! px-2!" text="لیست مسافران" startIcon={<Groups2OutlinedIcon className="text-2xl!" />} />
                    <Button variant="outlined" className="text-base! text-black! rounded-xl!" startIcon={<Add />}>افزودن مسافر جدید</Button>
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