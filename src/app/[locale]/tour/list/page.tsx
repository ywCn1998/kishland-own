import { Stack, Container, Typography } from "@mui/material";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

import {
    CategorySlider,
} from "@/components/shared/_components";
import { BannerSection } from "./_components";
import TicketTypeSection from "./_components/ticketType";
import ChooseTicketSection from "./_components/chooseTicket";
import ToursSection from "./_components/tours";


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


export default function List(
    // { params }: { params: { locale: string } }
) {
    // const { locale } = params;

    // setRequestLocale(locale);

    return (
        <Stack
            style={{ display: "flex", flexDirection: "column", overflowX: "hidden" }}
            className="mb-1!"
        >
            <Container maxWidth="xl" sx={{ marginBottom: 0, px: { xs: 0, md: 2 } }}>
                <Stack className="hidden! md:inline!">
                    <CategorySlider />

                    {/* step 1 */}
                    <Stack gap={10}>
                        <BannerSection />
                        <BannerSection hasTitle={true} />
                    </Stack>
                </Stack>

                {/* step 2 */}
                <Stack mt={10}>
                    <TicketTypeSection />
                </Stack>

                {/* step 3 */}
                <Stack mt={10} >
                    <ChooseTicketSection data={cardData} />
                </Stack>


                <Stack mt={3}>
                    {/* tours */}
                    <ToursSection />
                </Stack>

            </Container>






            {/* <ExtraFooterInformation /> */}
        </Stack >
    );
}
