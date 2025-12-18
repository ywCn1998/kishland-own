"use client"

import { Button, Stack, Typography, Container, Chip, IconButton, Box } from "@mui/material"
import Image from "next/image"
import TextIcon from "@/components/shared/textIcon";
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import AssuredWorkloadOutlinedIcon from '@mui/icons-material/AssuredWorkloadOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { ITableHeadCell } from "@/models/table";
import Table from "@/components/shared/table";
import Row from "./_components/tableRow";
import MainTabs from "@/components/shared/mainTabs";
import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { headerTitleAtom } from "@/store/atomHeader";
import FixedBottomButton from "@/components/shared/fixedBottomBotton/fixedBottomBotton";
import DownloadIcon from '@mui/icons-material/Download';
import ChargeWalletModal from "@/components/shared/modal/walletModals/chargeWalletModal";
import WithdrawModal from "@/components/shared/modal/walletModals/withdrawModal";

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
        payDate: "1403/08/23",
        price: "586,000,000",
        status: "success",
    },
    {
        trackingId: "55414",
        payDate: "1403/08/23",
        price: "586,000,000",
        status: "bankPending",
    },
    {
        trackingId: "55414",
        payDate: "1403/08/23",
        price: "586,000,000",
        status: "canceled",
    },
    {
        trackingId: "55414",
        payDate: "1403/08/23",
        price: "586,000,000",
        status: "security",
    },
    {
        trackingId: "55414",
        payDate: "1403/08/23",
        price: "586,000,000",
        status: "backMoney",
    },
    {
        trackingId: "55414",
        payDate: "1403/08/23",
        price: "586,000,000",
        status: "canceled",
    },
];

const statusLabels = {
    success: "تراکنش موفق",
    bankPending: "در انتظار تایید بانکی",
    failed: "تراکنش ناموفق",
    canceled: "لغو شده",
    backMoney: "بازگشت وجه",
    pending: "در انتظار تایید",
    security: "نیاز به بررسی امنیتی"
};

const statusColors: Record<string, string> = {
    success: "secondary.main",
    pending: "primary.main",
    bankPending: "primary.main",
    failed: "error.main",
    canceled: "error.main",
    backMoney: "success.main",
    security: "text.secondary",
};

const statusBackground: Record<string, string> = {
    success: "secondary.50",
    pending: "primary.50",
    bankPending: "primary.50",
    failed: "error.50",
    canceled: "error.50",
    backMoney: "success.50",
    security: "background.paper",
};



const tabItems = [
    {
        id: "all",
        label: "همه",
        icon: undefined,
    },
    {
        id: "deposit",
        label: "واریز",
        icon: AssuredWorkloadOutlinedIcon,
    },
    {
        id: "withdrawal",
        label: "برداشت",
        icon: MedicalServicesOutlinedIcon,
    },
];

const tabItemsForMainTabs = tabItems.map((tab) => ({
    label: tab.label,
    icon: tab.icon,
}));

export default function Wallet() {
    const [activeTab, setActiveTab] = useState(1); // Start with "واریز" (deposit) tab
    const [, setHeaderTitle] = useAtom(headerTitleAtom);
    const [openChargeWalletModal, setOpenChargeWalletModal] = useState(false);
    const [openWithdrawModal, setOpenWithdrawModal] = useState(false);
    const handleOpenChargeWalletModal = () => {
        setOpenChargeWalletModal(!openChargeWalletModal);
    };
    const handleOpenWithdrawModal = () => {
        setOpenWithdrawModal(!openWithdrawModal);
    };
    useEffect(() => {
        setHeaderTitle("کیف پول");
    }, []);

    const tableRows = data.map((item: any, index: number) => (
        <Row key={String("ticket" + index)} {...item} index={index} />
    ));

    return (
        <Container maxWidth="xl" disableGutters>
            {/* Banner - Desktop Only */}
            <Stack className="hidden! md:block! w-full! relative! h-[150px]!">
                <Image alt="banner" src={`/images/panel/history-banner.png`} fill />
            </Stack>

            {/* Wallet Balance Section */}
            <Stack className="border-1! border-slate-200! rounded-2xl! p-4! md:p-4!" sx={{ mx: { xs: 2, md: 0 }, mt: { xs: 2, md: 4 } }}>
                <Stack sx={{ backgroundColor: "secondary.50" }} className="flex! flex-row! justify-between! items-center! p-4! rounded-2xl!">
                    <TextIcon className="text-black! text-xs! md:text-sm!" text="موجودی کیف پول من" gap={1} startIcon={<WalletOutlinedIcon sx={{ color: "text.secondary" }} className="text-xl! md:text-2xl!" />} />
                    <Typography className="font-semibold! text-base! md:text-lg!">250,000 تومان</Typography>
                </Stack>

                <Stack className="flex! flex-col! md:flex-row! gap-2! md:gap-8! w-full!" mt={2}>
                    <Button className="w-full! text-sm! md:text-lg! py-5! md:py-3! text-white! rounded-2xl md:rounded-xl! md:rounded-2xl!" variant="contained" startIcon={<AccountBalanceWalletOutlinedIcon className="text-xl! md:text-3xl!" />} onClick={handleOpenChargeWalletModal}>افزایش موجودی کیف پول</Button>
                    <Button className="w-full! text-sm! md:text-base! py-5! md:py-3! text-black! rounded-2xl md:rounded-xl! md:rounded-2xl!" sx={{ fontWeight: 300 }} variant="outlined" startIcon={<CreditScoreOutlinedIcon className="text-xl! md:text-2xl!" />} onClick={handleOpenWithdrawModal}>برداشت از کیف پول</Button>
                </Stack>
            </Stack>

            {/* Transaction Tabs and List Section */}
            <Stack className="md:border-1! border-slate-200! rounded-2xl! p-4! md:p-4!" mt={4} sx={{ mx: { xs: 0, md: 0 } }}>
                {/* Tabs - Mobile Only */}
                <Box className="md:hidden! mb-4!">
                    <MainTabs
                        data={tabItemsForMainTabs}
                        border={false}
                        borderBottom={true}
                        icons={true}
                        IconsInMobile={false}
                        bgColor="white"
                        activeTabBorderColor="#000"
                        iconPosition="start"
                        value={activeTab}
                        onChange={(_, v) => setActiveTab(v)}
                        tabStyle={{
                            fontSize: 14,
                            px: 0,
                            py: 2,
                            "&.Mui-selected": {
                                color: "#000",
                            },
                        }}
                    />
                </Box>

                {/* Tabs - Desktop */}
                <Stack className="hidden! md:flex! flex-row! gap-8! w-full!">
                    <Button
                        className={`w-full! text-xl! py-5! rounded-2xl! ${activeTab === 1 ? "text-white!" : "text-black!"}`}
                        startIcon={<AssuredWorkloadOutlinedIcon className={`text-2xl! ${activeTab === 1 ? "text-white!" : ""}`} />}
                        sx={{
                            backgroundColor: activeTab === 1 ? "secondary.main" : "transparent",
                            fontWeight: 300
                        }}
                        variant={activeTab === 1 ? "contained" : "outlined"}
                        onClick={() => setActiveTab(1)}
                    >
                        واریزی ها
                    </Button>
                    <Button
                        className={`w-full! text-lg! py-5! rounded-2xl! ${activeTab === 2 ? "text-white!" : "text-black!"}`}
                        startIcon={<MedicalServicesOutlinedIcon className="text-2xl!" />}
                        sx={{ fontWeight: 300 }}
                        variant={activeTab === 2 ? "contained" : "outlined"}
                        onClick={() => setActiveTab(2)}
                    >
                        برداشت ها
                    </Button>
                </Stack>

                {/* List Header */}
                {/* <Stack className="flex! flex-col! md:flex-row! justify-between! items-start! md:items-center! gap-3! md:gap-0! p-4! md:p-4! rounded-2xl!" mt={2}>
                    <TextIcon className="text-base! md:text-lg!" text="لیست واریزی ها" gap={1} startIcon={<ReceiptLongOutlinedIcon sx={{ color: "text.secondary" }} className="text-xl! md:text-2xl!" />} />
                    <Button variant="outlined" className="rounded-xl! md:rounded-2xl! text-black! text-xs! md:text-base! w-full! md:w-auto!" startIcon={<DownloadOutlinedIcon className="text-lg! md:text-xl!" />}>دانلود خروجی اکسل</Button>
                </Stack> */}

                {/* Desktop Table */}
                <Box className="hidden! md:block!">
                    <Table
                        sx={{ mt: 2 }}
                        loading={false}
                        headCells={headCells}
                        rows={tableRows ?? []}
                    />
                </Box>

                {/* Mobile Transaction Cards */}
                <Stack className="flex! md:hidden! flex-col! gap-3! mt-4!">
                    {data.map((item, index) => (
                        <TransactionCard
                            key={index}
                            trackingId={item.trackingId}
                            payDate={item.payDate}
                            price={item.price}
                            status={item.status}
                            index={index}
                        />
                    ))}
                </Stack>
            </Stack>
            <Stack className="md:hidden!">
                <FixedBottomButton py={1.2}>
                    <Button className="w-full! text-base! text-black! py-6!" startIcon={<DownloadIcon className="text-2xl!" />} variant="outlined">دانلود اکسل تراکنش</Button>
                </FixedBottomButton>
            </Stack>
            <ChargeWalletModal open={openChargeWalletModal} setOpen={setOpenChargeWalletModal} />
            <WithdrawModal open={openWithdrawModal} setOpen={setOpenWithdrawModal} />
        </Container>
    )
}


// Transaction Card Component
function TransactionCard({
    trackingId,
    payDate,
    price,
    status,
    index
}: {
    trackingId: string;
    payDate: string;
    price: string;
    status: string;
    index: number;
}) {
    return (
        <Stack className="flex! flex-row! justify-between! items-center! p-3! rounded-xl! border-1! border-slate-200! bg-white!">
            <Stack className="flex! flex-row! items-center! gap-3!">
                <Stack className="flex! flex-col! gap-4!">
                    <Typography className="text-sm! font-semibold!">
                        {price} تومان
                    </Typography>
                    <TextIcon startIcon={<CallReceivedIcon sx={{ color: "success.main" }} />} text={trackingId} className="text-xs!" />
                </Stack>
            </Stack>
            <Stack className="flex! flex-col! items-center! gap-4!">
                <Chip
                    label={statusLabels[status as keyof typeof statusLabels] || status}
                    variant="outlined"
                    sx={{
                        "&.MuiChip-root": {
                            border: "none",
                            backgroundColor: statusBackground[status] || "background.paper",
                            color: statusColors[status] || "#333",
                            fontSize: 12,
                            borderRadius: 1,
                            py: 0.5,
                            px: 0.5,
                        },
                    }}
                />
                <Typography className="text-xs!" color="text.secondary">
                    {payDate}
                </Typography>
            </Stack>

        </Stack>
    );
}
