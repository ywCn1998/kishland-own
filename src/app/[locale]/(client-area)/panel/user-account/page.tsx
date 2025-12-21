"use client"
import { Avatar, Box, Button, Container, Grid, Stack, Typography, useMediaQuery, useTheme, IconButton } from "@mui/material";
import SideBar from "../_components/sidebar/sidebar";
import FormProvider from "@/providers/FormProvider";
import useAccount from "./hooks/useAccount";
import TextIcon from "@/components/shared/textIcon";
import { DeleteOutlineOutlined, LocalSeeOutlined, AccountBalanceWalletOutlined, KeyboardArrowLeftOutlined, PersonOutlined, CreditCardOutlined, LanguageOutlined, PhoneOutlined } from '@mui/icons-material';

import { useState, useEffect } from "react";
import PersonalInformation from "./_components/personalInformation";
import { ExtraFooterInformation } from "@/components/shared/ui";
import ContactInformation from "./_components/contactInformation";
import PassportInformation from "./_components/passportInformation";
import BankAccountInformation from "./_components/bankAccountInformation";
import { useAtom } from "jotai";
import { headerTitleAtom } from "@/store/atomHeader";
import MainTabs from "@/components/shared/mainTabs";

const tabs = [
    {
        id: "personal",
        label: "اطلاعات شخصی",
        icon: PersonOutlined,
        iconElement: <PersonOutlined className="text-2xl!" />,
        component: <PersonalInformation />,
    },
    {
        id: "contact",
        label: "اطلاعات تماس",
        icon: PhoneOutlined,
        iconElement: <PhoneOutlined className="text-2xl!" />,
        component: <ContactInformation />,
    },
    {
        id: "passport",
        label: "اطلاعات پاسپورت",
        icon: LanguageOutlined,
        iconElement: <LanguageOutlined className="text-2xl!" />,
        component: <PassportInformation />,
    },
    {
        id: "bank",
        label: "اطلاعات حساب بانکی",
        icon: CreditCardOutlined,
        iconElement: <CreditCardOutlined className="text-2xl!" />,
        component: <BankAccountInformation />,
    },
];

const tabItemsForMainTabs = tabs.map((tab) => ({
    label: tab.label,
    icon: tab.icon,
}));

export default function UserAccount() {
    const { OnSubmit, methods } = useAccount()
    const [activeTab, setActiveTab] = useState("personal");
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [, setHeaderTitle] = useAtom(headerTitleAtom);

    useEffect(() => {
        setHeaderTitle("حساب کاربری");
    }, []);
    return (
        <Container maxWidth={"xl"} disableGutters>
            <FormProvider methods={methods} onSubmit={OnSubmit}>
                {/* Header Section - Desktop unchanged, Mobile responsive */}
                <Stack
                    className="h-[100px]! md:h-[130px]! md:border-1! border-slate-200! p-4! md:px-8! rounded-2xl! flex! flex-row! justify-between! items-center!"
                    sx={{
                        backgroundColor: {
                            xs: "background.paper", md: "white"
                        }
                    }
                    }
                >
                    <Stack className="flex! justify-between! md:justify-start! flex-row! gap-2 items-center! w-full! md:w-auto!" >
                        <Avatar src="" className="md:h-20! w-16! md:w-20! h-16! ml-4! md:ml-3!" />
                        <Stack direction={"row"} spacing={{ xs: 0, md: 1 }} alignItems={"center"} >
                            {
                                !isMobile ? (
                                    <>
                                        <Button variant="text" sx={{ color: "secondary.main" }} startIcon={<LocalSeeOutlined className="text-blue-700! text-3xl!" />}>{"تغییر تصویر"}</Button>
                                        <Button variant="text" sx={{ color: "error.main" }} startIcon={<DeleteOutlineOutlined className="text-red-600! text-3xl!" />}>{"حدف تصویر"}</Button>
                                    </>
                                ) : (
                                    <>
                                        <IconButton><LocalSeeOutlined className="text-blue-500! text-3xl!" /></IconButton>
                                        <IconButton><DeleteOutlineOutlined className="text-red-500! text-3xl!" /></IconButton>
                                    </>
                                )
                            }
                        </Stack>
                    </Stack>
                    <Stack className="hidden! md:flex! border-1! border-slate-200! p-3! rounded-2xl! flex-col! gap-5! w-4/12!" sx={{ width: { xs: "100%", md: "33.333%" }, mt: { xs: 2, md: 0 } }}>
                        <Stack className="flex! flex-row! justify-between! items-center!">
                            <TextIcon className="text-sm!" text="کیف پول" startIcon={<AccountBalanceWalletOutlined className="text-xl!" />} />
                            <Button endIcon={<KeyboardArrowLeftOutlined />} sx={{ color: "primary", p: 0 }} className="text-sm!">افزایش</Button>
                        </Stack>
                        <Typography className="text-xl!" color="secondary" fontWeight={500} sx={{ fontFamily: "var(--font-lahzeh)" }}>
                            موجودی : 1,541,000 تومان
                        </Typography>
                    </Stack>
                </Stack>

                {/* Tabs Section - Mobile Only (sliding tabs with black border) */}
                <Box sx={{ display: { xs: "block", md: "none" }, mt: 3 }}>
                    <MainTabs
                        data={tabItemsForMainTabs}
                        border={false}
                        borderBottom={true}
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
                                color: activeTab === tab.id ? "white" : "black",
                                fontFamily: "var(--font-lahzeh)",
                            }}
                        >
                            {tab?.label}
                        </Button>
                    ))}
                </Stack>

                {/* Content Section */}
                <Stack className="w-full! md:border-1! border-slate-200! rounded-2xl! p-4!" mt={2} sx={{ fontFamily: "var(--font-lahzeh)", p: { xs: 3, md: 4 } }}>
                    {tabs.find((tab) => tab.id === activeTab)?.component}
                </Stack>
            </FormProvider>
        </Container >
    )
}
