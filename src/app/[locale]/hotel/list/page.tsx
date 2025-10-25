import { Stack, Container, Typography, Grid } from "@mui/material";
import { setRequestLocale } from "next-intl/server";

import {
    CategorySlider,
    CommonQuestions,
    ExtraFooterInformation,
} from "@/components/shared/_components";
import HotelBannerSearchTicketSection from "@/components/shared/_components/banner/hotelBannerSearchTicket";
import MainTabs from "@/components/shared/mainTabs";
import ListSection from "./_components/listSection";
import FilterBox from "../../entertainment/list/_components/filterBox";
import HotelCategory from "./_components/hotelCategory";
import ChanceCard from "../../entertainment/list/_components/chanceCard";



const cardData = [
    { date: "۱۶ فروردین", price: "7.2" },
    { date: "۱۵ فروردین", price: "8" },
    { date: "۱۴ فروردین", price: "11.3" },
    { date: "۱۳ فروردین", price: "14.8", color: "red" },
    { date: "۱۲ فروردین", price: "7.7", color: "green" },
    { date: "۱۱ فروردین", price: "10.1" },
    { date: "۱۰ فروردین", price: "4" },
    { date: "۱۰ فروردین", price: "5" },
    { date: "۱۰ فروردین", price: "6" },
    { date: "۱۰ فروردین", price: "7" },

];


export default function List() {
    // const { locale } = params;

    // setRequestLocale(locale);

    return (
        <Stack
            style={{ display: "flex", flexDirection: "column", overflowX: "hidden" }}
            className="mb-10!"
        >
            <Container maxWidth="xl" sx={{ marginBottom: 0, px: { xs: 0, md: 2 } }}>
                <CategorySlider />

                {/* step 1 */}
                <Stack gap={10}>
                    <HotelBannerSearchTicketSection peoplesNumber="2 بزرگسال" location="تور مشهد به کیش" endDate="6 تیر" startDate="2 تیر" fromWhere="مشهد" nights="" />
                    {/* <BannerSection location="تور مشهد به کیش" /> */}
                </Stack>

                <Grid container mt={6} spacing={2}>
                    <Grid size={3}>
                        <Stack className="border-1 border-slate-200  rounded-xl p-4">
                            {/* <ChanceCard
                                title='شانس امروزتو امتحان کن !'
                                description='هر روز یک گردونه شانس با کلی جایزه'
                                btn_title='بچرخون'
                                img='/images/entertainment/list/chance.png'
                                onClick={() => console.log('dsaf')}
                            /> */}
                            <FilterBox />
                        </Stack>
                    </Grid>
                    <Grid size={9}>
                        <ListSection />
                    </Grid>
                </Grid>

            </Container>


            {/* دیگر پیشنهادات */}



            <Container maxWidth="xl">
                <CommonQuestions hasFooter={false} />

                <HotelCategory />
            </Container>



            <ExtraFooterInformation moreToRead={true} companies={false} honerOfColobrate={false} />
        </Stack >
    );
}
