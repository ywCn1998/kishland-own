"use client"

import { Box, Button, Stack } from "@mui/material"
import Image from "next/image"
import VisibilityIcon from '@mui/icons-material/Visibility';
import FestivalOutlinedIcon from '@mui/icons-material/FestivalOutlined';
import SailingOutlinedIcon from '@mui/icons-material/SailingOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import { useEffect, useState } from "react";
import FavoriteHotels from "./_components/favoriteHotels";
import { headerTitleAtom } from "@/store/atomHeader";
import { useAtom } from "jotai";
import MainTabs from "@/components/shared/mainTabs";

const tabs = [
    {
        id: "all",
        label: "مشاهده همه",
        icon: <VisibilityIcon className="text-2xl!" />,
        component: <>مشاهده</>,
    },
    {
        id: "tour",
        label: "تورها",
        icon: <FestivalOutlinedIcon className="text-2xl!" />,
        component: <>سفارشات</>,
    },
    {
        id: "entertainment",
        label: "تفریحات",
        icon: <SailingOutlinedIcon className="text-2xl!" />,
        component: <>سفارشات</>,
    },
    {
        id: "hotel",
        label: "هتل ها",
        icon: <HotelOutlinedIcon className="text-2xl!" />,
        component: <FavoriteHotels />,
    },
];


export default function Favorites() {
    const [activeTab, setActiveTab] = useState("hotel");
    const [, setHeaderTitle] = useAtom(headerTitleAtom);

    useEffect(() => {
        setHeaderTitle("علاقه مندی ها");
    }, []);

    return (
        <Stack maxWidth={"xl"}>
            <Stack className="hidden! md:block! w-full! relative! h-[150px]!">
                <Image alt="banner" src={`/images/panel/history-banner.png`} fill />
            </Stack>


            <Stack className="hidden! md:flex! flex-row! gap-6 items-center! w-full!" mt={3}>
                {
                    tabs?.map((tab) => (
                        <>
                            <Button className={`w-3/12! text-black! py-5! text-lg! ${activeTab === tab.id ? "text-white!" : "text-black!"}`}
                                startIcon={tab.icon}
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
                        </>
                    ))
                }
            </Stack>
            <Box className="md:hidden!">
                <MainTabs
                    data={tabs}
                    border={false}
                    // borderBottom={true}
                    icons={true}
                    IconsInMobile={false}
                    bgColor="white"
                    activeTabBorderColor="#000"
                    iconPosition="start"
                    value={tabs.findIndex(t => t.id === activeTab)}
                    onChange={(_, v) => setActiveTab(tabs[v].id)}
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
            <Stack className="w-full! md:mt-6! py-5 md:py-0 px-4! md:px-0!" sx={{ backgroundColor: { xs: "background.paper", md: "white" } }}>
                {tabs.find((tab) => tab.id === activeTab)?.component}
            </Stack>
        </Stack>
    )
}
