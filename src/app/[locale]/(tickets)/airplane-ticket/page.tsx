"use client";
import { Container, Stack } from "@mui/material";
import Steps from "@/components/shared/sections/reserve/steps";
import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";
import { InformationSection, PriceDetailsSection, RulesList } from "../_common";
import AboutSection from "@/components/shared/ui/extraFooterInformation/_components/information";
import { BreadCrumbFa } from "@/components/shared/breadCrumb/breadCrumbFa";
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
    passenger: {
        fullName: "علیرضا یودی",
        phone: "09998884468",
    },
    room: {
        customerCount: 1,
        boardCount: 1,
        type: "نفره",
        board: "تخت تنها",
    },
    hotel: {
        name: "هتل بین المللی قصر مشهد",
        city: "مشهد",
        stars: 3,
        nights: 2,
        address: "مشهد، خیابان امام رضا، بین امام رضا ۳۴ و ۳۶",
        images: {
            main: "hotel-main.jpg",
            gallery: ["room.jpg", "lobby.jpg"],
        },
        location: {
            lat: 36.295450,
            lng: 59.605150,
        },
    },
    stay: {
        checkIn: {
            date: "جمعه ۲۶ مرداد",
            time: "14:00",
        },
        checkOut: {
            date: "یکشنبه ۲۸ مرداد",
            time: "12:00",
        },
    },
    services: {
        airportPickup: true,
        hotelTransfer: true,
    },
    pricing: {
        basePrice: 40000000,
        hotelTax: 4000000,
        discount: 40000000,
        totalPaid: 40000000,
        currency: "تومان",
    },
};


export default function Tickets() {
    const [, setHeaderTitle] = useAtom(headerTitleAtom);
    useEffect(() => {
      setHeaderTitle("بلیط هواپیما");
    }, []);
    return (
        <Container maxWidth="xl" className="mb-10!">
            <Stack className="w-full! mb-8! hidden! md:block!">
                <BreadCrumbFa />
            </Stack>
            <Steps steps={steps} isTicketPage={true} mt="15px"/>
            <InformationSection info={reservationInfo} />

            <div className="mt-5!">
                <PriceDetailsSection info={reservationInfo} />
            </div>

            <div className="mt-5!">
                <RulesList />
            </div>

            <AboutSection />

        </Container>
    );
}

