"use client"
import { Stack, Container } from "@mui/material";

import {
    CategorySlider,
} from "@/components/shared/_components";
import { BannerSection } from "./_components";
import TicketTypeSection from "./_components/ticketType";
import ChooseTicketSection from "./_components/chooseTicket";
import ToursSection from "./_components/tours";
import { useAtom } from "jotai";
import {
    headerDateAtom,
    headerLeftItemAtom,
    headerTitleAtom,
} from "@/store/atomHeader";
import { useEffect } from "react";
import { ListAlt } from "@mui/icons-material";

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

    const [, setHeaderTitle] = useAtom(headerTitleAtom);
    const [, setDate] = useAtom(headerDateAtom);
    const [, setLefItem] = useAtom(headerLeftItemAtom);

    useEffect(() => {
        setHeaderTitle("کشتی تفریحی امیر کبیر ");
        setDate("4 فروردین 1404 ");
        setLefItem(<ListAlt />);
    }, []);

    return (
        <Stack
            style={{ display: "flex", flexDirection: "column", overflowX: "hidden" }}
            className="mb-1!"
        >
            <Container maxWidth="xl" sx={{ marginBottom: 0, px: { xs: 0, md: 2 } }}>
                <Stack className="hidden! md:inline!">
                    <CategorySlider />

                    {/* step 1 */}
                    <Stack gap={0}>
                        <BannerSection />
                        <BannerSection hasTitle={true} />
                    </Stack>
                </Stack>

                {/* step 2 */}
                <Stack mt={{ xs: 0, md: 10 }}>
                    {/* mobile breadcrump */}
                    <TicketTypeSection />
                </Stack>

                {/* step 3 */}
                <Stack mt={10} >
                    <ChooseTicketSection data={cardData} />
                </Stack>


                <Stack mt={{ xs: 0, md: 3 }} pt={{ xs: 2, md: 0 }} sx={{ backgroundColor: { xs: "background.paper", md: "white" } }}>
                    {/* tours */}
                    <ToursSection />
                </Stack>

            </Container>






            {/* <ExtraFooterInformation /> */}
        </Stack >
    );
}
