"use client"
import { Stack, Container, Typography, Rating, Button, IconButton, Grid, Box } from "@mui/material";
import {
    CategorySlider,
    ExtraFooterInformation,
} from "@/components/shared/ui";
import HotelBannerSearchTicketSection from "@/components/shared/ui/banner/hotelBannerSearchTicket";
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
import TextNumber from "@/components/shared/textNumber";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';


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
            <Container maxWidth="xl" disableGutters sx={{ px: { xs: 0, md: 2 } }} >
                <Stack className="hidden! md:block!">
                    <CategorySlider />
                </Stack>

                {/* step 1 */}
                <Stack mb={4} className="hidden! md:block!">
                    <HotelBannerSearchTicketSection nights="4" location="تور مشهد به کیش" startDate="2 تیر" endDate="6 تیر" peoplesNumber="2 بزرگسال" fromWhere="مشهد" />
                </Stack>

                <Stack className="w-full! flex! flex-row! md:hidden! items-center! justify-between! mb-5! py-4" sx={{ backgroundColor: "background.paper" }}>
                    <TextNumber className="px-3!" numberClassName="md:text-lg!" alignItems="start" number={2} text={
                        <Stack>
                            <Typography className="font-semibold! text-base! text-black! text-right! mb-2!">انتخاب محل اقامت</Typography>
                            <Typography color="text.secondary" className=" text-xs! text-right! ">از بین اتاق های هتل کوروش اتاق اقامتی خود را انتخاب کنید</Typography>
                        </Stack>
                    } />
                </Stack>

                <Stack className="md:border-1! border-slate-200! px-4! md:px-10! py-1! md:py-6! rounded-2xl!">
                    <Stack className="flex! flex-col-reverse! md:flex-row! justify-between! gap-4! ">
                        <Stack className="flex! flex-col! gap-3! md:gap-4! pt-4! ">
                            <Typography className="text-xl! md:text-3xl! font-bold!">هتل بین المللی کیش
                            </Typography>
                            <Stack className="flex! flex-row! gap-3! md:gap-6! items-start! justify-between! md:items-center! ">
                                <Stack className="flex! flex-row! items-center! gap-2!">
                                    <Rating
                                        name="hover-feedback"
                                        value={5}
                                        precision={0.5}
                                        size="small"
                                        sx={{ "& .MuiRating-icon": { fontSize: { xs: "1rem", md: "1.5rem" } } }}
                                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                    />
                                    <Typography color="primary.main" className="text-xs! md:text-sm!">هتل 5 ستاره</Typography>
                                </Stack>
                                <TextIcon endIcon={<StarsIcon color="success" className="text-lg! md:text-xl!" />} className="text-xs! md:text-sm!" sx={{ color: "text.secondary" }} text="(32 نظر) 4.8/5" />
                            </Stack>
                            <Stack className="flex! flex-row! gap-2! md:gap-3! items-start! md:items-center! justify-between!">
                                <TextIcon className="text-xs! md:text-sm!" text="تقاطع بلوار سنایی و بلوار دریا" startIcon={<LocationPinIcon color="error" className="text-lg! md:text-xl!" />} />
                                <Button className="text-xs! p-0! md:text-xs!" color="secondary" variant="text" endIcon={<KeyboardBackspaceIcon />}>مسیریابی</Button>
                            </Stack>
                        </Stack>

                        <Box className="p-0!">
                            <Stack className="flex! flex-row! justify-between! gap-2! items-center! md:items-start!">
                                <TextIcon
                                    startIcon={<LocalOfferIcon className="text-sm!" />}
                                    text={"تا 25 % تخفیف"}
                                    className="w-fit! rounded-lg px-3! py-4! bg-[#FFE5E5]! text-center! font-normal! text-xs! md:text-sm whitespace-nowrap! hidden! md:inline!"
                                    sx={{ color: "#FA5050" }}
                                />
                                <Typography
                                    variant="button"
                                    className="text-nowrap! rounded-lg p-3! md:p-4! w-1/3! md:w-auto! text-center! text-white! text-xs! "
                                    sx={{ backgroundColor: "#13D397" }}
                                >
                                    خیلی خوب
                                </Typography>

                                <Stack className="flex flex-row! gap-2! items-center">
                                    <IconButton className="border-1! border-slate-200! rounded-lg! h-10! w-10! md:h-12! md:w-12!">
                                        <FavoriteBorderIcon className="text-lg! md:text-xl!" />
                                    </IconButton>
                                    <IconButton className="border-1! border-slate-200! rounded-lg! h-10! w-10! md:h-12! md:w-12!">
                                        <ShareIcon className="text-lg! md:text-xl!" />
                                    </IconButton>
                                </Stack>
                            </Stack>
                            <TextIcon
                                startIcon={<LocalOfferIcon className="text-sm!" />}
                                text={<span className="text-center!">تا 25 % تخفیف</span>}
                                className="rounded-lg px-3! py-2.5! mt-2 bg-[#FFE5E5]! flex! justify-center! font-normal! text-xs! whitespace-nowrap! md:hidden! w-full! mt-2!"
                                sx={{ color: "#FA5050" }}
                            />
                        </Box>

                    </Stack>


                    <Grid container spacing={1.5} mt={3} mb={5} className="hidden! md:flex!">
                        {services.map((item, index) => (
                            <Grid size="grow" key={"service" + index}>
                                <Button sx={{ backgroundColor: "white" }} className="h-16! rounded-lg! p-0! w-full! border-1! border-slate-200! text-black! text-sm!" startIcon={item.icon}>{item.label}</Button>
                            </Grid>
                        ))}
                        <Grid size="grow">
                            <Button sx={{ backgroundColor: "text.secondary" }} className="h-16! rounded-lg! text-white! p-0! w-full! text-sm!">مشاهده کامل خدمات</Button>
                        </Grid>
                    </Grid>
                    <Stack className="flex! flex-col! md:hidden! gap-3!" mt={3} mb={5}>
                        <Stack
                            sx={{
                                display: "grid",
                                gridTemplateColumns: "repeat(2, 1fr)",
                                gap: 1.5,
                            }}
                        >

                            {services.map((item, index) => (
                                <Button
                                    key={"service" + index}
                                    sx={{ backgroundColor: "white" }}
                                    className="h-14! rounded-lg! p-0! w-full! border-1! border-slate-200! text-black! text-xs!"
                                    startIcon={item.icon}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </Stack>

                        <Button
                            sx={{ backgroundColor: "text.secondary" }}
                            className="h-14! px-3! rounded-lg! text-white! w-full! text-xs!"
                        >
                            مشاهده کامل خدمات
                        </Button>
                    </Stack>

                    <Stack className="hidden! md:block!">
                        <ViewsOfHotel />
                    </Stack>
                    <Stack className="md:hidden!">
                        <ViewsOfHotel isHotelLocation isIntegrated hasDetails={false} />
                    </Stack>
                </Stack>

                <Stack className="hidden! md:block!">
                    <Details />
                </Stack>
                <Stack className="md:hidden!">
                    <Details isMobile={true} />
                </Stack>

            </Container>


            <ExtraFooterInformation honerOfColobrate={false} companies={false}  />
        </Stack >
    );
}
