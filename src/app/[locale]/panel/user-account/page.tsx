"use client"
import { Avatar, Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import SideBar from "../_components/sidebar/sidebar";
import FormProvider from "@/providers/FormProvider";
import useAccount from "./_hook/useAccount";
import TextIcon from "@/components/shared/textIcon";
import { DeleteOutlineOutlined, LocalSeeOutlined, AccountBalanceWalletOutlined, KeyboardArrowLeftOutlined, PersonOutlined, CreditCardOutlined, LanguageOutlined, PhoneOutlined } from '@mui/icons-material';

import { useState } from "react";
import PersonalInformation from "./_components/personalInformation";

const tabs = [
    {
        id: "personal",
        label: "اطلاعات شخصی",
        icon: <PersonOutlined sx={{ fontSize: 20 }} />,
        component: <PersonalInformation />,
    },
    {
        id: "contact",
        label: "اطلاعات تماس",
        icon: <PhoneOutlined sx={{ fontSize: 20 }} />,
        component: <div>Contact Info Component</div>,
    },
    {
        id: "passport",
        label: "اطلاعات پاسپورت",
        icon: <LanguageOutlined sx={{ fontSize: 20 }} />,
        component: <div>Passport Info Component</div>,
    },
    {
        id: "bank",
        label: "اطلاعات حساب بانکی",
        icon: <CreditCardOutlined sx={{ fontSize: 20 }} />,
        component: <div>Bank Account Info Component</div>,
    },
];

export default function UserAccount() {
    const { OnSubmit, methods } = useAccount()
    const [activeTab, setActiveTab] = useState("personal");
    return (
        <Container maxWidth={"xl"}>
            <Grid container>
                <Grid size={2.5}>
                    <SideBar />
                </Grid>
                <Grid size={9.5}>
                    <FormProvider methods={methods} onSubmit={OnSubmit}>
                        <Stack className="h-[130px]! border-1! border-slate-200! p-4! px-8! rounded-2xl! flex! flex-row! justify-between! items-center!">
                            <Stack className="flex! flex-row! gap-2 items-center!">
                                <Avatar src="" className="h-20! w-20! ml-3!" />
                                <Button variant="text" sx={{ color: "secondary.main", p: 1 }} startIcon={<LocalSeeOutlined className="text-blue-700! text-3xl!" />}>تغییر تصویر</Button>
                                <Button variant="text" sx={{ color: "error.main", p: 1 }} startIcon={<DeleteOutlineOutlined className="text-red-600! text-3xl!" />}>حدف تصویر</Button>
                            </Stack>
                            <Stack className="border-1! border-slate-200! p-3! rounded-2xl! flex! flex-col! gap-5! w-4/12!">
                                <Stack className="flex! flex-row! justify-between! items-center!">
                                    <TextIcon className="text-sm!" text="کیف پول" startIcon={<AccountBalanceWalletOutlined className="text-xl!" />} />
                                    <Button endIcon={<KeyboardArrowLeftOutlined />} sx={{ color: "primary", p: 0 }} className="text-sm!">افزایش</Button>
                                </Stack>
                                <Typography className="text-xl!" color="secondary" fontWeight={500} >
                                    موجودی : 1,541,000 تومان
                                </Typography>
                            </Stack>
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
                        <Stack className="w-full! border-1! border-slate-200! rounded-2xl! p-4!" mt={2}>
                            {tabs.find((tab) => tab.id === activeTab)?.component}
                        </Stack>
                    </FormProvider>
                </Grid>
            </Grid>
        </Container>
    )
}