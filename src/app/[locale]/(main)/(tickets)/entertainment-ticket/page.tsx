"use client";
import { Button, Container, Stack } from "@mui/material";
import Steps from "@/components/shared/sections/reserve/steps";
import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";
import { BreadCrumbFa } from "@/components/shared/breadCrumb/breadCrumbFa";
import { InformationSection, PriceDetailsSection } from "./_components";
import RulesList from "@/app/[locale]/(main)/(tickets)/_common/RulesList";
import { LocalPrintshop } from "@mui/icons-material";
import { useAtom } from "jotai";
import { headerTitleAtom } from "@/store/atomHeader";
import { useEffect } from "react";

const steps = [
    {
        title: "انتخاب تور",
        iconPast: <CheckBox sx={{ color: "primary.main" }} />,
        iconActive: <CheckBox sx={{ color: "primary.main" }} />,
        iconFuture: <CheckBoxOutlineBlank />,
    },
    {
        title: "اطلاعات مسافران",
        iconPast: <CheckBox sx={{ color: "primary.main" }} />,
        iconActive: <CheckBox sx={{ color: "primary.main" }} />,
        iconFuture: <CheckBoxOutlineBlank />,
    },
    {
        title: "بازبینی اطلاعات",
        iconPast: <CheckBox sx={{ color: "primary.main" }} />,
        iconActive: <CheckBox sx={{ color: "primary.main" }} />,
        iconFuture: <CheckBoxOutlineBlank />,
    },
    {
        title: "پرداخت آنلاین",
        iconPast: <CheckBox sx={{ color: "primary.main" }} />,
        iconActive: <CheckBox sx={{ color: "primary.main" }} />,
        iconFuture: <CheckBoxOutlineBlank />,
    },
    {
        title: "صدور بلیط",
        iconPast: <CheckBox sx={{ color: "primary.main" }} />,
        iconActive: <CheckBox sx={{ color: "primary.main" }} />,
        iconFuture: <CheckBoxOutlineBlank />,
    },
];

const reservationInfo = {
    organizer: {
        name: "علیرضا رودی",
        phone: "09994844884"
    },
    ticket: {
        trackingNumber: "12737757878",
        issueDate: "1403/06/07",
        issueTime: "17:30",
        referenceNumber: "EFDEJDF034843490",
        sance: "سانس ساعت 20:00",
        seat: "صندلی اکونومی (اقتصادی)",
        showTime: "17 شهریور 1403",
        quantity: 3,
    },
    event: {
        title: "جنگ شبانه یازل شو کیش",
        performer: "علیرضا رودی",
        date: "چهارشنبه 7 شهریور 1403",
        time: "22:00",
        venue: "سالن کنسرت کلوپ (اختصاصی)",
        address: "مشهد، خیابان امام رضا، بین امام رضا ۳۴ و ۳۶",
        description: "جنگ پازل شو با حضور اكبر اقبالى و آرش شاهوران و به تهیه کنندگی و کارگردانی آرتین شاهوران  و عسل افشاری هر شب در كنسرت هال پارك دلفين ها اجرا مى شود. اين برنامه با ١١ سال سابقه درخشان و حضور هنرمندان صاحب نام عرصه طنز و موسيقى و دريافت چندین تنديس و لوح تقدير از سازمان منطقه آزاد كيش، در رده ی پر افتخارترين برنامه های هنری كشور قرار دارد.",
        location: {
            lat: 36.295450,
            lng: 59.605150,
        },
    },
    seat: {
        section: "بالکن سمت چپ",
        row: "B",
        seatNumbers: [9, 10]
    },
    quantity: 2,
    pricing: {
        basePrice: 40000000,
        discount: 40000000,
        totalPaid: 40000000,
    },
}


export default function Tickets() {
    const [, setHeaderTitle] = useAtom(headerTitleAtom);
    useEffect(() => {
      setHeaderTitle("بلیط تفریحی");
    }, []);
    return (
        <Container maxWidth="xl" className="mb-10!">
            <Stack className="w-full! hidden! md:block! mb-8!">
                <BreadCrumbFa />
            </Stack>
            <Steps steps={steps} isTicketPage={true} mt={"15px"} />
            <InformationSection info={reservationInfo} />

            <div className="mt-5!">
                <PriceDetailsSection info={reservationInfo} />
            </div>

            <div className="mt-6!">
                <RulesList />
            </div>

            <Stack className="hidden! md:flex! flex-row! gap-8! w-full!" mt={4}>
                <Button className="w-full! text-xl! text-black!" variant="outlined" startIcon={<LocalPrintshop className="text-2xl!" />}>چاپ بلیط</Button>
                <Button className="w-full! text-xl! text-white!" variant="contained" sx={{ backgroundColor: "primary.main" }}>دانلود بلیط</Button>
            </Stack>
        </Container>
    );
}

