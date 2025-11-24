"use client"
import Table from "@/components/shared/table";
import { ITableHeadCell } from "@/models/table";
import { Button, Grid, Stack, Typography, IconButton, Box, Container } from "@mui/material";
import Row from "../_components/tableRow";
import Image from "next/image";
import TextIcon from "@/components/shared/textIcon";
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import { Add } from "@mui/icons-material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Link from "next/link";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { headerTitleAtom } from "@/store/atomHeader";
import FixedBottomButton from "@/components/shared/fixedBottomBotton/fixedBottomBotton";
import AddIcon from '@mui/icons-material/Add';

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
    const [, setHeaderTitle] = useAtom(headerTitleAtom);

    useEffect(() => {
        setHeaderTitle("لیست مسافران");
    }, []);

    const tableRows = data.map((item: any, index: number) => (
        <Row key={String("user" + index)} {...item} index={index} />
    ));

    return (
        <Container maxWidth="xl" disableGutters>
            {/* Banner - Desktop Only */}
            <Stack className="hidden! md:block! w-full! relative! h-[150px]!">
                <Image alt="banner" src={`/images/panel/history-banner.png`} fill />
            </Stack>

            <Stack className="md:border-1! border-slate-200! rounded-2xl! p-4! mt-2! md:mt-8!">
                <Stack className="hidden! md:flex! flex-row! items-center! justify-between!">
                    <TextIcon className="text-base! px-2!" text="لیست مسافران" startIcon={<Groups2OutlinedIcon className="text-2xl!" />} />
                    <Button variant="outlined" className="text-sm! md:text-base! text-black! rounded-xl! w-full! md:w-auto!" startIcon={<Add />}>افزودن مسافر جدید</Button>
                </Stack>

                {/* Desktop Table */}
                <Box className="hidden! md:block!">
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
                            sx={{ mt: 2 }}
                            loading={false}
                            headCells={headCells}
                            rows={tableRows ?? []}
                        />
                    </Grid>
                </Box>

                {/* Mobile Passenger Cards */}
                <Stack className="flex! md:hidden! flex-col! gap-3!">
                    {data.map((item) => (
                        <PassengerCard
                            key={item.id}
                            id={item.id}
                            fullName={item.fullName}
                            gender={item.gender}
                            nationalCode={item.nationalCode}
                            birthDate={item.birthDate}
                            ageGroup={item.ageGroup}
                        />
                    ))}
                </Stack>
            </Stack>
            <Stack className="md:hidden!">
                <FixedBottomButton py={1.2}>
                    <Button className="w-full! text-base! text-black! py-5! text-white!" startIcon={<AddIcon className="text-2xl!" />} variant="contained" sx={{ backgroundColor: "primary.main" }}>افزودن مسافر جدید</Button>
                </FixedBottomButton>
            </Stack>
        </Container>
    )
}

// Passenger Card Component for mobile
function PassengerCard({
    id,
    fullName,
    gender,
    nationalCode,
    birthDate,
    ageGroup
}: {
    id: number;
    fullName: string;
    gender: string;
    nationalCode: string;
    birthDate: string;
    ageGroup: string;
}) {
    return (
        <Stack className="flex! flex-col! p-4! rounded-2xl! border-1! border-slate-200! bg-white! relative!">
            {/* Action Icons - Top Left */}
            <Stack className="flex! flex-row! gap-2! absolute! top-4! left-4!">
                <IconButton component={Link} href={`${id}`} size="small">
                    <EditOutlinedIcon sx={{ fontSize: 20, color: "text.secondary" }} />
                </IconButton>
                <IconButton size="small">
                    <DeleteOutlineOutlinedIcon sx={{ fontSize: 20, color: "text.secondary" }} />
                </IconButton>
            </Stack>

            {/* Passenger Name and Age Group - Top Right */}
            <Stack className="flex! flex-row! items-center! gap-2! mb-4!">
                <Typography className="font-semibold! text-base!">
                    {fullName}
                </Typography>
                <Typography className="text-xs!" color="text.secondary">
                    {ageGroup}
                </Typography>
            </Stack>

            {/* Passenger Details */}
            <Stack className="flex! flex-col! gap-3!">
                {/* National Code / Passport */}
                <Stack className="flex! flex-row! justify-between! items-center!">
                    <Typography className="text-xs!" color="text.secondary">
                        کد ملی / پاسپورت
                    </Typography>
                    <Typography className="text-sm!" fontWeight={500}>
                        {nationalCode}
                    </Typography>
                </Stack>

                {/* Gender */}
                <Stack className="flex! flex-row! justify-between! items-center!">
                    <Typography className="text-xs!" color="text.secondary">
                        جنسیت
                    </Typography>
                    <Typography className="text-sm!" fontWeight={500}>
                        {gender}
                    </Typography>
                </Stack>

                {/* Birth Date */}
                <Stack className="flex! flex-row! justify-between! items-center!">
                    <Typography className="text-xs!" color="text.secondary">
                        تاریخ تولد
                    </Typography>
                    <Typography className="text-sm!" fontWeight={500}>
                        {birthDate}
                    </Typography>
                </Stack>
            </Stack>


        </Stack>
    );
}
