"use client"
import {
    ExtraFooterInformation,
} from "@/components/shared/_components";
import { Button, Container, Stack, Typography } from "@mui/material";
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


export default function ReserveStatus({ isSuccess = true, code = 554574 }: { isSuccess: boolean, code: number }) {
    const title = isSuccess ? <TextIcon className="text-black! text-lg! font-semibold!" text="رزرو با موفقیت انجام شد" startIcon={<CheckCircleIcon color="success" />} /> : <TextIcon className="text-black! text-lg! font-semibold!" text="رزرو با مشکل مواجه شده!" startIcon={<HighlightOffIcon color="error" />} />
    return (
        <div
            style={{ display: "flex", flexDirection: "column", }}
            className="mb-10!"
        >

            <Container
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

                <Steps steps={steps} />


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
        </div>
    );
}
