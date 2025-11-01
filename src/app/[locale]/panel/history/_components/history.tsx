"use client"

import { Button, Stack } from "@mui/material"
import Image from "next/image"
import VisibilityIcon from '@mui/icons-material/Visibility';
import FestivalOutlinedIcon from '@mui/icons-material/FestivalOutlined';
import SailingOutlinedIcon from '@mui/icons-material/SailingOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import HotelHistory from "./hotelHistory";
import { useState } from "react";

const tabs = [
    {
        id: "all",
        label: "مشاهده همه",
        icon: <VisibilityIcon className="text-2xl!" />,
        component: () => <>مشاهده</>,
    },
    {
        id: "tour",
        label: "سفارشات تور",
        icon: <FestivalOutlinedIcon className="text-2xl!" />,
        component: () => <>سفارشات</>,
    },
    {
        id: "entertainment",
        label: "سفارشات تفریح",
        icon: <SailingOutlinedIcon className="text-2xl!" />,
        component: () => <>سفارشات</>,
    },
    {
        id: "hotel",
        label: "سفارشات هتل",
        icon: <HotelOutlinedIcon className="text-2xl!" />,
        component: (orderId: number) => <HotelHistory orderId={orderId} />,
    },
];


export default function History({ orderId = 35457478 }: { orderId: number }) {
    const [activeTab, setActiveTab] = useState("hotel");

    return (
        <Stack maxWidth={"xl"}>
            <Stack className="w-full! relative! h-[150px]!">
                <Image alt="banner" src={`/images/panel/history-banner.png`} fill />
            </Stack>


            <Stack className="flex! flex-row! gap-6 items-center! w-full!" mt={3}>
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
            <Stack className="w-full!" mt={2}>
                {tabs.find((tab) => tab.id === activeTab)?.component(orderId)}
            </Stack>
        </Stack>
    )
}