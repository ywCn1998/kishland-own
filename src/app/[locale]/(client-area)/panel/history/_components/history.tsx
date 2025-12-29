"use client"

import { Button, Stack, Container, Box, useMediaQuery, useTheme } from "@mui/material"
import Image from "next/image"
import VisibilityIcon from '@mui/icons-material/Visibility';
import FestivalOutlinedIcon from '@mui/icons-material/FestivalOutlined';
import SailingOutlinedIcon from '@mui/icons-material/SailingOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import HotelHistory from "./hotelHistory";
import { useEffect, useState } from "react";
import MainTabs from "@/components/shared/mainTabs";
import { headerTitleAtom } from "@/store/atomHeader";
import { useAtom } from "jotai";

const tabs = [
    {
        id: "all",
        label: "مشاهده همه",
        icon: VisibilityIcon,
        iconElement: <VisibilityIcon className="text-2xl!" />,
        component: () => <>مشاهده</>,
    },
    {
        id: "tour",
        label: "سفارشات تور",
        icon: FestivalOutlinedIcon,
        iconElement: <FestivalOutlinedIcon className="text-2xl!" />,
        component: () => <>سفارشات</>,
    },
    {
        id: "entertainment",
        label: "سفارشات تفریح",
        icon: SailingOutlinedIcon,
        iconElement: <SailingOutlinedIcon className="text-2xl!" />,
        component: () => <>سفارشات</>,
    },
    {
        id: "hotel",
        label: "سفارشات هتل",
        icon: HotelOutlinedIcon,
        iconElement: <HotelOutlinedIcon className="text-2xl!" />,
        component: (orderId: number) => <HotelHistory orderId={orderId} />,
    },
];

const tabItemsForMainTabs = tabs.map((tab) => ({
    label: tab.label,
    icon: tab.icon,
}));


export default function History({ orderId = 35457478 }: { orderId: number }) {
    const [activeTab, setActiveTab] = useState("hotel");
    const [, setHeaderTitle] = useAtom(headerTitleAtom);

    useEffect(() => {
        setHeaderTitle("سفارشات");
    }, []);
    return (
        <Container maxWidth={"xl"} disableGutters>
            <Stack className="hidden! md:block! w-full! relative! h-[100px]! md:h-[150px]!">
                <Image alt="banner" src={`/images/panel/history-banner.png`} fill />
            </Stack>

            {/* Tabs Section - Mobile Only (sliding tabs with black border) */}
            <Box sx={{ display: { xs: "block", md: "none" }, mt: 0 }}>
                <MainTabs
                    data={tabItemsForMainTabs}
                    border={false}
                    icons={true}
                    IconsInMobile={false}
                    bgColor="white"
                    activeTabBorderColor="#000"
                    iconPosition="start"
                    value={tabs.findIndex(t => t.id === activeTab)}
                    onChange={(_, v) => setActiveTab(tabs[v].id)}
                    tabStyle={{
                        fontSize: { xs: 12, sm: 14 },
                        px: 0,
                        py: 2,
                        "&.Mui-selected": {
                            color: "#000",
                        },
                    }}
                />
            </Box>

            {/* Tabs Section - Desktop (unchanged) */}
            <Stack className="hidden! md:flex! flex-row! gap-6 items-center! w-full!" mt={3} sx={{ display: { xs: "none", md: "flex" } }}>
                {tabs?.map((tab) => (
                    <Button
                        className={`w-3/12! text-black! py-5! text-lg! ${activeTab === tab.id ? "text-white!" : "text-black!"}`}
                        startIcon={<tab.icon className="text-2xl!" />}
                        key={tab.id}
                        variant={activeTab === tab.id ? "contained" : "outlined"}
                        onClick={() => setActiveTab(tab.id)}
                        sx={{
                            backgroundColor: activeTab === tab.id ? "secondary.main" : "white",
                            color: activeTab === tab.id ? "white" : "black"
                        }}
                    >
                        {tab?.label}
                    </Button>
                ))}
            </Stack>

            {/* Content Section */}
            <Stack className="w-full!" mt={2} sx={{ px: { xs: 0, md: 0 } }}>
                {tabs.find((tab) => tab.id === activeTab)?.component(orderId)}
            </Stack>
        </Container>
    )
}
