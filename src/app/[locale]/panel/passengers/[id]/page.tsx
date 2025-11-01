"use client"
import { Button, Typography, Stack } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import { DeleteOutlineOutlined, LocalSeeOutlined, AccountBalanceWalletOutlined, KeyboardArrowLeftOutlined, PersonOutlined, CreditCardOutlined, LanguageOutlined, PhoneOutlined } from '@mui/icons-material';
import { useState } from "react";
import PersonalInformation from "./_components/personalInformation";


const tabs = [
    {
        id: "personal",
        label: "اطلاعات کلی مسافر",
        icon: <PersonOutlined className="text-2xl!" />,
        component: <PersonalInformation />,
    },
    {
        id: "contact",
        label: "اطلاعات تماس",
        icon: <PhoneOutlined className="text-2xl!" />,
        component: <></>,
    },
    {
        id: "passport",
        label: "اطلاعات پاسپورت",
        icon: <LanguageOutlined className="text-2xl!" />,
        component: <></>,
    },
];

export default function passengerDetails() {
    const { id } = useParams()
    const [activeTab, setActiveTab] = useState("personal");
    const router = useRouter()
    return (
        <Stack>
            <Stack className="border-1! border-slate-200! py-4 px-6! rounded-2xl! flex! flex-row! justify-between! items-center!">
                <Typography className="font-semibold! text-base!">
                    {/* جزئیات سفارش {id} */}
                    جزئیات مسافر قاسم سبحانی
                </Typography>
                <Button onClick={() => router.back()} variant="text" className="p-1! text-base!" sx={{ color: "text.secondary" }} endIcon={<KeyboardArrowLeftOutlinedIcon />}>
                    برگشت
                </Button>
            </Stack>

            <Stack className="flex! flex-row! gap-6 items-center! w-full!" mt={3}>
                {
                    tabs?.map((tab) => (
                        <>
                            <Button className={`w-4/12! text-black! py-5! text-lg! ${activeTab === tab.id ? "text-white!" : "text-black!"}`}
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
            <Stack className="w-full! border-1! border-slate-200! rounded-2xl! p-4!" mt={3}>
                {tabs.find((tab) => tab.id === activeTab)?.component}
            </Stack>
        </Stack>
    )
}