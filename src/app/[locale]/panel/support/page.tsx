"use client"
import Table from "@/components/shared/table";
import { ITableHeadCell } from "@/models/table";
import { Button, Grid, Stack, Typography, Chip, Box, Container, Divider } from "@mui/material";
import Row from "./_components/tableRow";
import Image from "next/image";
import TextIcon from "@/components/shared/textIcon";
import { Add, MoreOutlined } from "@mui/icons-material";
import Link from "next/link";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { headerTitleAtom } from "@/store/atomHeader";
import { statuses } from "./_components/tableRow";
import FixedBottomButton from "@/components/shared/fixedBottomBotton/fixedBottomBotton";
import AddIcon from '@mui/icons-material/Add';

const statusColors: Record<string, string> = {
    pending: "primary.main",
    answered: "secondary.main",
    closed: "text.secondary",
};

const statusBackground: Record<string, string> = {
    pending: "primary.50",
    answered: "secondary.50",
    closed: "background.paper",
};

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
        ticketId: "55487",
        subject: "استرداد بلیط",
        description: "من نمی تونم بلیط مو لغو کنم",
        lastUpdate: "۲۳ اردیبهشت ۱۴۰۴",
        status: "pending",
    },
    {
        ticketId: "55413",
        subject: "استرداد بلیط",
        description: "من نمی تونم بلیط مو لغو کنم",
        lastUpdate: "۲۳ اردیبهشت ۱۴۰۴",
        status: "answered",
    },
    {
        ticketId: "55411",
        subject: "استرداد بلیط",
        description: "من نمی تونم بلیط مو لغو کنم",
        lastUpdate: "۲۳ اردیبهشت ۱۴۰۴",
        status: "closed",
    },
];



export default function Support() {
    const [, setHeaderTitle] = useAtom(headerTitleAtom);

    useEffect(() => {
        setHeaderTitle("تیکت ها");
    }, []);

    const tableRows = data.map((item: any, index: number) => (
        <Row key={String("ticket" + index)} {...item} index={index} />
    ));

    return (
        <Container maxWidth="xl" disableGutters>
            {/* Banner - Desktop Only */}
            <Stack className="hidden! md:block! w-full! relative! h-[150px]! md:mb-8!">
                <Image alt="banner" src={`/images/panel/history-banner.png`} fill />
            </Stack>

            <Stack className="md:border-1! border-slate-200! rounded-2xl! p-4! pt-0! md:p-4!" sx={{ backgroundColor: { xs: "background.paper", md: "white" } }}>
                <Stack className="hidden! md:flex! flex-row! items-center! justify-between!">
                    <TextIcon className="text-base! px-2!" text="تیکت های شما" startIcon={<MoreOutlined className="text-2xl!" />} />
                    <Button component={Link} href="/fa/panel/support/new-ticket" variant="outlined" className="text-sm! md:text-base! text-black! rounded-xl! w-full! md:w-auto!" startIcon={<Add />}>افزودن درخواست جدید</Button>
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

                {/* Mobile Ticket Cards */}
                <Stack className="flex! md:hidden! flex-col! gap-3! mt-4!">
                    {data.map((item, index) => (
                        <TicketCard
                            key={index}
                            ticketId={item.ticketId}
                            subject={item.subject}
                            description={item.description}
                            lastUpdate={item.lastUpdate}
                            status={item.status}
                            index={index}
                        />
                    ))}
                </Stack>
            </Stack>
            <Stack className="md:hidden!">
                <FixedBottomButton py={2}>
                    <Button className="w-full! text-base! text-white! py-5!" startIcon={<AddIcon />} variant="contained" sx={{ backgroundColor: "primary.main" }}>افزودن تیکت جدید</Button>
                </FixedBottomButton>
            </Stack>
        </Container>
    )
}


// Ticket Card Component in mobile
function TicketCard({
    ticketId,
    subject,
    description,
    lastUpdate,
    status,
    index
}: {
    ticketId: string;
    subject: string;
    description: string;
    lastUpdate: string;
    status: string;
    index: number;
}) {
    return (
        <Stack className="flex! flex-col! p-4! rounded-2xl! border-1! border-slate-200! bg-white!">
            {/* Top Section */}
            <Stack className="flex! flex-row! justify-between! items-start!">
                {/* Right Side - Ticket ID */}
                <Stack className="flex! flex-col!">
                    <Typography className="text-xs! mb-1!" color="text.secondary">
                        شناسه تیکت
                    </Typography>
                    <Typography className="text-base!" fontWeight={500}>
                        {ticketId}
                    </Typography>
                </Stack>

                {/* Left Side - Status Badge and Date */}
                <Stack className="flex! flex-row-reverse! items-center! gap-2!">
                    <Chip
                        label={statuses[status as keyof typeof statuses] || status}
                        variant="outlined"
                        sx={{
                            "&.MuiChip-root": {
                                border: "none",
                                backgroundColor: statusBackground[status] || "background.paper",
                                color: statusColors[status] || "#333",
                                fontSize: 12,
                                borderRadius: 1,
                                py: 0.5,
                                px: { xs: 0, md: 1 },
                                fontWeight: 500,
                            },
                        }}
                    />
                    <Typography className="text-xs!" color="text.secondary">
                        {lastUpdate}
                    </Typography>
                </Stack>
            </Stack>

            {/* Divider */}
            <Divider sx={{ my: 2 }} />

            {/* Bottom Section */}
            <Stack className="flex! flex-col! gap-2!">
                <Typography className="text-base!" fontWeight={500}>
                    {subject}
                </Typography>
                <Typography className="text-sm!" color="text.secondary">
                    {description}
                </Typography>
            </Stack>
        </Stack>
    );
}