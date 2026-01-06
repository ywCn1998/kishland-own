"use client"
import {
    ExtraFooterInformation,
} from "@/components/shared/ui";
import { Button, Container, Divider, Stack, Typography } from "@mui/material";
import React from "react";


import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import PagesIcon from "@mui/icons-material/Pages";
import CustomAccordion from "@/components/shared/collapse/collapse";
import TourDetails from "./tourDetails";
import TextIcon from "@/components/shared/textIcon";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { BreadCrumbFa } from "@/components/shared/breadCrumb/breadCrumbFa";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import Steps from "./steps";
import Image from "next/image";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import LuggageOutlinedIcon from "@mui/icons-material/LuggageOutlined";
import FlightOutlinedIcon from "@mui/icons-material/FlightOutlined";
import LocalCafeOutlinedIcon from "@mui/icons-material/LocalCafeOutlined";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import ReusableSwiper from "@/components/shared/reusableSwiper";
import BedroomParentIcon from '@mui/icons-material/BedroomParentOutlined';
import TicketCard from "@/components/shared/cards/tour/ticketCard";
import TourDetailsMobile from "../tourDetailsMobile";



const steps = [
    {
        title: "انتخاب تور",
        description: "توضیح این مرحله",
        iconPast: <CheckBoxIcon fontSize="small" sx={{ color: "#FF8C0B" }} />,
        iconActive: (
            <CheckBoxOutlineBlankIcon fontSize="small" sx={{ color: "#FF8C0B" }} />
        ),
        iconFuture: <PagesIcon fontSize="small" sx={{ color: "#E1E6F0" }} />,
    },
    {
        title: "اطلاعات مسافران",
        description: "مشاهده تفریحات",
        iconPast: <CheckBoxIcon fontSize="small" sx={{ color: "#FF8C0B" }} />,
        iconActive: (
            <CheckBoxOutlineBlankIcon fontSize="small" sx={{ color: "#FF8C0B" }} />
        ),
        iconFuture: <PagesIcon fontSize="small" sx={{ color: "#E1E6F0" }} />,
    },
    {
        title: "بازبینی اطلاعات",
        description: "توضیح این مرحله",
        iconPast: <CheckBoxIcon fontSize="small" sx={{ color: "#FF8C0B" }} />,
        iconActive: (
            <CheckBoxOutlineBlankIcon fontSize="small" sx={{ color: "#FF8C0B" }} />
        ),
        iconFuture: <PagesIcon fontSize="small" sx={{ color: "#E1E6F0" }} />,
    },
    {
        title: "پرداخت آنلاین",
        description: "درگاه پرداخت کلیه کارت‌های شتاب",
        iconPast: <CheckBoxIcon fontSize="small" sx={{ color: "#FF8C0B" }} />,
        iconActive: (
            <CheckBoxOutlineBlankIcon fontSize="small" sx={{ color: "#FF8C0B" }} />
        ),
        iconFuture: <PagesIcon fontSize="small" sx={{ color: "#E1E6F0" }} />,
    },
    {
        title: "صدور بلیط",
        description: "خوش بگذره :)",
        iconPast: <CheckBoxIcon fontSize="small" sx={{ color: "#FF8C0B" }} />,
        iconActive: (
            <CheckBoxOutlineBlankIcon fontSize="small" sx={{ color: "#FF8C0B" }} />
        ),
        iconFuture: <PagesIcon fontSize="small" sx={{ color: "#E1E6F0" }} />,
    },
];

const userInfo = [
    {
        fullName: "علیرضا رودی",
        nationalId: "۰۴۵۰۱۴۵۶۹۸",
        birthDate: "۱۳۹۹/۰۴/۲۰",
    },
    {
        fullName: "علیرضا رودی",
        nationalId: "۰۴۵۰۱۴۵۶۹۸",
        birthDate: "۱۳۹۹/۰۴/۲۰",
    },
    {
        fullName: "علیرضا رودی",
        nationalId: "۰۴۵۰۱۴۵۶۹۸",
        birthDate: "۱۳۹۹/۰۴/۲۰",
    }
];


export default function ReserveStatus({ isSuccess = true, code = 554574 }: { isSuccess: boolean, code: number }) {
    const title = isSuccess ? <TextIcon className="text-black! text-lg! font-semibold!" text="رزرو با موفقیت انجام شد" startIcon={<CheckCircleIcon color="success" />} /> : <TextIcon className="text-black! text-lg! font-semibold!" text="رزرو با مشکل مواجه شده!" startIcon={<HighlightOffIcon color="error" />} />
    return (
        <div
            style={{ display: "flex", flexDirection: "column", }}
            className="mb-10!"
        >
            <Container
                className="hidden! md:block!"
                maxWidth="xl"
                sx={{
                    marginBottom: 5,
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                }}
            >
                <Stack
                    display={{ xs: "none", lg: "flex" }}
                    flexDirection={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    <Stack className="w-full!">
                        <BreadCrumbFa />
                    </Stack>
                </Stack>

                <Stack className="hidden! md:inline!">
                    <Steps steps={steps} />
                </Stack>

                <Container maxWidth="lg">
                    <Stack className="border-1! border-slate-200! rounded-2xl! p-5! pt-2!">
                        <CustomAccordion defaultExpanded={true} title={title}>
                            {!isSuccess && (
                                <Typography sx={{ backgroundColor: "text.secondary" }} className="mt-4! mb-2! py-4! px-3! text-lg! rounded-2xl! text-white! text-center!">
                                    در صورتی کسر وجه از حساب شما ظرف مدت 72 ساعت برگشت داده خواهد شد. جهت پیگیری احتمالی تا دریافت کامل وجه کد رهگیری <span className="font-semibold!">{code}</span> نزد خود نگه دارید
                                </Typography>
                            )}
                            <TourDetails />
                            {isSuccess ? (
                                <Stack className="flex! flex-row! gap-8! w-full!" mt={4}>
                                    <Button className="w-full! text-2xl! text-black!" variant="outlined" startIcon={<LocalPrintshopIcon className="text-2xl!" />}>چاپ بلیط</Button>
                                    <Button className="w-full! text-2xl! text-white!" sx={{ backgroundColor: "text.secondary" }}>بازگشت</Button>
                                </Stack>
                            ) : (
                                <Stack className="flex! flex-row! gap-8! w-full!" mt={4}>
                                    <Button className="w-full! text-2xl! text-black!" variant="outlined" >ارتباط با پشتیبانی</Button>
                                    <Button className="w-full! text-2xl! text-white!" sx={{ backgroundColor: "success.main" }}>تلاش مجدد</Button>
                                    <Button className="w-full! text-2xl! text-white!" sx={{ backgroundColor: "text.secondary" }}>بازگشت</Button>
                                </Stack>
                            )}
                        </CustomAccordion>
                    </Stack>
                </Container>


                <Stack sx={{ mt: 10 }}>
                    <ExtraFooterInformation
                        honerOfColobrate={false}
                        moreToRead={true}
                        companies={false}
                    />
                </Stack>
            </Container>






            {/* responsive */}

            <Stack className="md:hidden! px-4!">
                <Stack sx={{ backgroundColor: "text.secondary" }} className="rounded-xl! p-4!">
                    <Typography className="text-white! font-semibold! text-lg!">
                        شماره بلیط: {code}
                    </Typography>
                    <Typography className="text-slate-300! text-sm!" mt={1.5}>
                        22,000,000 تومان پرداخت موفق
                    </Typography>
                </Stack>

                {/* ------------------------------------------------------ */}

                <Stack className="border-1 border-slate-200! rounded-2xl! py-4! px-4!" mt={4}>
                    <Typography className="text-center! text-2xl! font-semibold!" color="success.main">رزرو موفق</Typography>
                    <Divider orientation="horizontal" sx={{ my: 2 }} />

                    <Stack className="w-full! h-[160px]! relative! rounded-xl">
                        <Image alt="ship" src="/images/ship-view.png" fill />
                    </Stack>
                    <Stack className="flex! flex-row! justify-center! items-center! gap-7!" mt={2}>
                        <WifiOutlinedIcon sx={{ fontSize: 22, color: "text.secondary" }} />
                        <LuggageOutlinedIcon sx={{ fontSize: 22, color: "text.secondary" }} />
                        <FlightOutlinedIcon sx={{ fontSize: 22, color: "text.secondary" }} />
                        <LocalCafeOutlinedIcon sx={{ fontSize: 22, color: "text.secondary" }} />
                        <LocalCafeOutlinedIcon sx={{ fontSize: 22, color: "text.secondary" }} />
                    </Stack>

                    <Stack className="flex! flex-row! justify-start! items-center!" mt={2}>
                        <TextIcon startIcon={<FavoriteOutlinedIcon className="text-lg!" />} className="text-sm!" text="34 گردشگر پیشنهادمی کنند" sx={{ color: 'success.main' }} />
                        <Divider orientation="vertical" className="h-7! bg-slate-200! mx-4!" />
                        <TextIcon sx={{ color: "primary.100" }} startIcon={<StarOutlinedIcon />} text="4.9" className="ml-6!" />
                    </Stack>

                    <Stack className="flex! flex-col! gap-3!" my={2} >
                        <Typography className="font-semibold! text-xl!" mb={1}>
                            تور ۴ روز هتل کوروش
                        </Typography>
                        <Typography color="text.secondary" className="text-xs! leading-6!">تور کیش از تهران با اقامت ۴ شب در هتل ۵ ستاره کوروش، همراه با بلیط رفت و برگشت هوایی و امکانات رفاهی لوکس.</Typography>
                    </Stack>
                    <ReusableSwiper
                        dots={false}
                        slidePerviewLg={9}
                        slidePerViewXs={"auto"}
                        spaceBetween={10}
                        pagination={true}
                    >
                        <Button variant="outlined" className="rounded-xl! text-xs! text-slate-400! py-3! px-3! h-11" startIcon={<BedroomParentIcon />}>ترانسفر فرودگاهی (رایگان)</Button>
                        <Button variant="outlined" className="rounded-xl! text-xs! text-slate-400! py-3! px-3! h-11">شام و صبحانه</Button>
                        <Button variant="outlined" className="rounded-xl! text-xs! text-slate-400! py-3! px-3! h-11" startIcon={<WifiOutlinedIcon />}>اینترنت رایگان</Button>
                    </ReusableSwiper>


                    <Stack className="">
                        <Stack className="flex! flex-row! justify-between! items-center" my={2}>
                            <Typography fontSize={10} color="text.secondary"> قیمت هر نفر برای ۳ شب و ۲ روز</Typography>
                            <Typography color="secondary.main" className="text-xl!" fontWeight={700}>850000 تومان</Typography>
                        </Stack>
                    </Stack>
                </Stack>

                {/* ------------------------------------------------------ */}
                <Stack className="border-1 border-slate-200! rounded-2xl! py-4!" mt={4}>
                    <Stack className="w-full! flex! flex-col! gap-5 px-4!">
                        <TicketCard ticketStatus="hasBought" />
                        <TicketCard ticketStatus="canBuyTicket" />
                    </Stack>
                </Stack>

                {/* ------------------------------------------------------ */}
                <Stack mt={2} spacing={2}>
                    {
                        userInfo.map((item, index) => (
                            <TourDetailsMobile {...item} key={"tourdetailsmobile" + index} />
                        ))
                    }
                </Stack>
            </Stack>
        </div>
    );
}
