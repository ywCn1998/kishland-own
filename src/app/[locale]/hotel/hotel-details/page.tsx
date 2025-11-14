"use client"
import { Stack, Container, Typography, Rating, Button, IconButton, Grid } from "@mui/material";
import {
    CategorySlider,
    ExtraFooterInformation,
} from "@/components/shared/_components";
import HotelBannerSearchTicketSection from "../../../../components/shared/_components/banner/hotelBannerSearchTicket";
import TextIcon from "@/components/shared/textIcon";

import {
    Star as StarIcon,
    Stars as StarsIcon,
    LocationPin as LocationPinIcon,
    KeyboardBackspace as KeyboardBackspaceIcon,
    FavoriteBorder as FavoriteBorderIcon,
    Share as ShareIcon,
    Restaurant as RestaurantIcon,
    LocalCafe as LocalCafeIcon,
    CameraAlt as CameraAltIcon,
    AirportShuttle as AirportShuttleIcon,
    DirectionsCar as DirectionsCarIcon,
    Visibility as VisibilityIcon,
    ListAlt,
} from '@mui/icons-material';
import ViewsOfHotel from "../../tour/(landing)/_components/ViewsOfHotelSection";
import { useAtom } from "jotai";
import {
    headerDateAtom,
    headerLeftItemAtom,
    headerTitleAtom,
} from "@/store/atomHeader";
import { useEffect } from "react";
import Details from "./_components/details";



const services = [
    { label: "شام و صبحانه", icon: <RestaurantIcon color="primary" /> },
    { label: "کافی شاپ", icon: <LocalCafeIcon color="primary" /> },
    { label: "عکس رایگان", icon: <CameraAltIcon color="primary" /> },
    { label: "ترنسفر فرودگاهی (رایگان)", icon: <AirportShuttleIcon color="primary" /> },
    { label: "ترنسفر راه‌آهن (رایگان)", icon: <DirectionsCarIcon color="primary" /> },
];




export default function HotelDetails() {
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
            className="mb-10!"
        >
            <Container maxWidth="xl" sx={{ px: { xs: 0, md: 2 } }} >
                <Stack className="hidden! md:block!">
                    <CategorySlider />
                </Stack>

                {/* step 1 */}
                <Stack mb={4} className="hidden! md:block!">
                    <HotelBannerSearchTicketSection nights="4" location="تور مشهد به کیش" startDate="2 تیر" endDate="6 تیر" peoplesNumber="2 بزرگسال" fromWhere="مشهد" />
                </Stack>

                <Stack className="border-slate-200! border-1! px-10! py-6! rounded-2xl!">
                    <Stack className="flex! flex-row! justify-between!">
                        <Stack className="flex! flex-col! gap-4! pt-4! ">
                            <Typography className="text-3xl! font-bold!">هتل بین المللی کیش
                            </Typography>
                            <Stack className="flex! flex-row! gap-6! items-center!">
                                <Stack className="flex! flex-row! items-center! gap-2!">
                                    <Rating
                                        name="hover-feedback"
                                        value={5}
                                        precision={0.5}
                                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                    />
                                    <Typography color="primary.main" className="text-sm!">هتل 5 ستاره</Typography>
                                </Stack>
                                <TextIcon endIcon={<StarsIcon color="success" className="text-xl!" />} className="text-sm!" sx={{ color: "text.secondary" }} text="(32 نظر) 4.8/5" />
                            </Stack>
                            <Stack className="flex! flex-row! gap-3! items-center">
                                <TextIcon className="text-sm!" text="تقاطع بلوار سنایی و بلوار دریا" startIcon={<LocationPinIcon color="error" className="text-xl!" />} />
                                <Button className="text-xs! p-0!" color="secondary" variant="text" endIcon={<KeyboardBackspaceIcon />}>مسیریابی</Button>
                            </Stack>
                        </Stack>

                        <Stack className="flex! flex-row! gap-2! items-start!">
                            <Typography
                                variant="button"
                                className="rounded-lg p-3 bg-[#FFE5E5]  text-nowrap! text-center text-[#FA5050]"
                            >
                                تا 25 % تخفیف
                            </Typography>
                            {/* <TextIcon text=" تا 25 % تخفیف" className="flex! items-center! px-3! font-semibold! rounded-lg h-12! bg-[#FFE5E5]! w-full text-center text-[#FA5050]!" /> */}
                            <Typography
                                variant="button"
                                className="rounded-lg p-3 w-full text-center text-white!"
                                sx={{ backgroundColor: "#13D397" }}
                            >
                                خیلی خوب
                            </Typography>

                            <IconButton className="border-1! border-slate-200! rounded-lg! h-12! w-12!">
                                <FavoriteBorderIcon />
                            </IconButton>
                            <IconButton className="border-1! border-slate-200! rounded-lg! h-12! w-12!">
                                <ShareIcon />
                            </IconButton>
                        </Stack>
                    </Stack>


                    <Grid container spacing={1.5} mt={3} mb={5}>
                        {services.map((item, index) => (
                            <Grid size="grow">
                                <Button sx={{ backgroundColor: "white" }} className="h-16! rounded-lg! p-0! w-full! border-1! border-slate-200! text-black! " startIcon={item.icon}>{item.label}</Button>
                            </Grid>
                        ))}
                        <Grid size="grow">
                            <Button sx={{ backgroundColor: "text.secondary" }} className="h-16! rounded-lg! text-white! p-0! w-full!">مشاهده کامل خدمات</Button>
                        </Grid>
                    </Grid>

                    <ViewsOfHotel />
                </Stack>

                <Details />

            </Container>

            <ExtraFooterInformation honerOfColobrate={false} companies={false} />
        </Stack >
    );
}
