"use client"
import MainTabs from "@/components/shared/mainTabs";
import ShowMoreButton from "@/components/shared/showMoreButton";
import { Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import RoomsList from "./roomsList";
import HotelServices from "./services";
import RulesOfHotel from "@/components/shared/ui/rules";
import PeopleComments from "@/components/shared/ui/peopleComments";
import CartTotal from "./cartTotal";
import { DayItem } from "@/app/[locale]/(main)/entertainment/list/detail/page";

const tabData = [
    { label: "توضیحات هتل" },
    { label: "لیست اتاق ها" },
    { label: "درباره هتل" },
    { label: "امکانات و اطلاعات" },
    { label: "قوانین و مقررات" },
    { label: "نظرات کاربران" },
]

const checkTime = [
    {
        text: "15:00",
        time: "ساعت ورود"
    },
    {
        text: "12:00",
        time: "ساعت خروج"
    },
    {
        text: "198",
        time: "تعداد اتاق"
    },
    {
        text: "16",
        time: "تعداد طبقه"
    },
    {
        text: "100 نفر",
        time: "ظرفیت لابی"
    },
    {
        text: "دریا و خیابان",
        time: "ویو هتل"
    }
]

const days: DayItem[] = [
    { id: "d1", dateFa: "۲۰ فروردین", nameFa: "چهارشنبه" },
    { id: "d2", dateFa: "۲۱ فروردین", nameFa: "پنج‌شنبه", isWeekend: true },
    { id: "d3", dateFa: "۲۲ فروردین", nameFa: "جمعه", isWeekend: true },
    { id: "d4", dateFa: "۲۳ فروردین", nameFa: "شنبه" },
    { id: "d5", dateFa: "۲۴ فروردین", nameFa: "یک‌شنبه" },
    { id: "d6", dateFa: "۲۵ فروردین", nameFa: "دو شنبه", isWeekend: true },
    { id: "d7", dateFa: "۲۶ فروردین", nameFa: "سه‌شنبه" },
    { id: "d8", dateFa: "۲۷ فروردین", nameFa: "چهارشنبه" },
    { id: "d9", dateFa: "۲۸ فروردین", nameFa: "پنج‌شنبه", isWeekend: true },
    { id: "d10", dateFa: "۲۹ فروردین", nameFa: "جمعه", isWeekend: true },
    { id: "d11", dateFa: "۳۰ فروردین", nameFa: "شنبه" },
    { id: "d12", dateFa: "۳۱ فروردین", nameFa: "یک‌شنبه" },
    { id: "d13", dateFa: "۱ اردیبهشت", nameFa: "دو شنبه", isWeekend: true },
    { id: "d14", dateFa: "۲ اردیبهشت", nameFa: "سه‌شنبه" },
];
export default function Details({ isMobile }: { isMobile?: boolean }) {
    const [open, setOpen] = useState(false)
    // const [openMore, setOpenMore] = useState(false)

    return (
        <Grid container spacing={2.5}>
            <Grid size={{ xs: 12, md: 9 }}>
                {/* <MainTabs data={tabData}  /> */}

                <Stack className="md:border-1! p-5! border-slate-200! rounded-2xl!" mb={{ xs: 2, md: 5 }} sx={{ p: { xs: 3, md: 5 } }}>
                    <Typography color="text.secondary" className="text-sm! md:text-lg! leading-8! md:leading-10!" mb={5}>
                        هتل بین المللی کیش یکی از جذاب ترین هتل های جزیره کیش می باشد که لول 5 ستاره را از آن خود کرده است. این هتل کیش در سال 1396 آغاز به فعالیت نموده و ساختمانی 13 طبقه با 342 اتاق دارد. هتل 5 ستاره بین المللی کیش جزء هتل های پر طرفدار گردشگران تور کیش می باشد. ...
                    </Typography>

                    <ShowMoreButton onChange={setOpen} />

                    {open && (
                        <>
                            <Grid container spacing={2.5} mt={2}>
                                {checkTime.map((item, index) => (
                                    <Grid size={{ xs: 6, md: "grow" }} key={"ckeckTime" + index} >
                                        <Stack className="md:border-1! border-slate-200! rounded-xl! h-20! md:h-28! flex! flex-col! justify-center! px-3! md:items-center! gap-2! md:gap-4!">
                                            <Typography className="text-base! md:text-lg!" fontWeight={600}>{item?.text}</Typography>
                                            <Typography className="text-xs! md:text-sm!" color="text.secondary">{item?.time}</Typography>
                                        </Stack>
                                    </Grid>
                                ))}
                            </Grid>
                            {/* <ShowMoreButton className="text-black! border-2! border-slate-200! rounded-lg! mt-5!" labelOpen="مشاهده اطلاعات بیشتر" labelClose="مشاهده اطلاعات کمتر" onChange={setOpenMore} /> */}
                        </>
                    )}
                </Stack>
                <Divider variant="fullWidth" sx={{ display: { md: "none" } }} />
                <RoomsList days={days} />


                <HotelServices />


                <Stack className="md:border-1 border-slate-200! px-4! py-8! rounded-xl" my={4} sx={{ px: { xs: 3, md: 4 }, py: { xs: 6, md: 8 } }}>
                    <Typography className="text-xl! md:text-2xl! " fontWeight={600} mb={1}>قوانین و مقررات هتل  </Typography>
                    <RulesOfHotel />
                </Stack>

                <PeopleComments />

            </Grid>
            <Grid size={{ xs: 12, md: 3 }} className="hidden! md:block!">
                <CartTotal />
            </Grid>
        </Grid>
    )
}
