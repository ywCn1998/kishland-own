"use client"

import { Stack, Container, Grid } from "@mui/material";
import {
    CategorySlider,
    CommonQuestions,
    ExtraFooterInformation,
} from "@/components/shared/ui";
import HotelBannerSearchTicketSection from "@/components/shared/ui/banner/hotelBannerSearchTicket";
import ListSection from "./_components/listSection";
import FilterBox from "../../entertainment/list/_components/filterBox";
import HotelCategory from "./_components/hotelCategory";
import { useAtom } from "jotai";
import {
    headerDateAtom,
    headerLeftItemAtom,
    headerTitleAtom,
} from "@/store/atomHeader";
import { useEffect } from "react";
import { ListAlt } from "@mui/icons-material";
import { BlitType } from "../../entertainment/list/_components/blitType";
import FilterContainer from "../../entertainment/list/_components/filterBox/_components/filterContainer";
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
            className="mb-10! bg-[#F5F7FA]! md:bg-white!"
        >
            <Container maxWidth="xl" disableGutters sx={{ marginBottom: 0, px: { xs: 0, md: 2 } }}>
                <Stack className="hidden! md:block!">
                    <CategorySlider />
                </Stack>

                {/* step 1 */}
                <Stack gap={10} className="hidden! md:block!">
                    <HotelBannerSearchTicketSection peoplesNumber="2 بزرگسال" location="تور مشهد به کیش" endDate="6 تیر" startDate="2 تیر" fromWhere="مشهد" nights="" />
                    {/* <BannerSection location="تور مشهد به کیش" /> */}
                </Stack>

                <Grid container mt={{ xs: 3, md: 6 }} spacing={2} >
                    <Grid
                        size={{ md: 3 }}
                        className="flex! flex-row! gap-2! md:p-0! px-5!"
                    >
                        <Grid className="md:hidden! w-9/12! md:w-auto!">
                            <BlitType />
                        </Grid>
                        <Grid className=" w-3/12! md:w-auto! flex! flex-col! gap-4!">
                            <Stack className="mt-[-32px]!">
                                <ChanceCard
                                    title="شانس امروزتو امتحان کن !"
                                    description="هر روز یک گردونه شانس با کلی جایزه"
                                    btn_title="بچرخون"
                                    img="/images/entertainment/list/chance.png"
                                    onClick={() => console.log("dsaf")}
                                    className="hidden! md:flex!"
                                />
                            </Stack>
                            <Stack className="md:border-1 border-slate-200  rounded-xl! md:p-4  md:w-auto!">
                                <FilterContainer />
                            </Stack >

                        </Grid>
                    </Grid>
                    <Grid size={{ xs: 12, md: 9 }}>
                        <ListSection />
                    </Grid>
                </Grid>
            </Container>
            
            <Container maxWidth="xl" className="md:block! hidden!">
                <CommonQuestions hasFooter={false} />
                 <HotelCategory />
            </Container> 



            <ExtraFooterInformation moreToRead={true} companies={false} honerOfColobrate={false} />
        </Stack >
    );
}
