"use client"
import {
    Grid,
    Stack,
    Typography,
    Button,
    Box,
    MenuItem,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SportsRugbyIcon from "@mui/icons-material/SportsRugby";
import RHFSelect from "@/components/shared/form/RHFSelect";
import FormProvider from "@/providers/FormProvider";
import RHFDatePicker from "@/components/shared/form/RHFDatePicker";
import useSearch from "../_hook/useSearch";
import { RoomCard } from "@/components/shared/cards/tour/roomCard";
import TextIcon from "@/components/shared/textIcon";
import WarningIcon from '@mui/icons-material/Warning';
// import ChooseTicketSlider from "@/components/shared/_components/chooseTicketSlider";
import { useState } from "react";
import ShowMoreButton from "@/components/shared/showMoreButton";
import ChooseTicketSlider from "@/components/shared/_components/chooseTicketSlider";


const cardData = [
    { date: "۱۶ فروردین", price: "7.2" },
    { date: "۱۴ فروردین", price: "11.3" },
    { date: "۱۳ فروردین", price: "14.8", color: "red" },
    { date: "۱۲ فروردین", price: "7.7", color: "green" },
    { date: "۱۱ فروردین", price: "10.1" },
    { date: "۱۱ فروردین", price: "10.1" },
    { date: "۱۱ فروردین", price: "10.1" },

];

export default function RoomsList() {
    const { methods, OnSubmit } = useSearch();
    const [openMore, setOpenMore] = useState(false)

    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up("md"));
    return (
        <>
            <Stack className="border-1! border-slate-200! p-8! rounded-2xl!">
                <Stack className="flex! flex-col! gap-4!" mb={5}>
                    <Stack className="flex! flex-row! justify-between! items-center">
                        <Typography className="text-3xl! font-semibold!">لیست اتاق ها</Typography>
                        <Typography className="" color="text.secondary">{30} اتاق خالی موجود</Typography>
                    </Stack>
                    <FormProvider methods={methods}>
                        <Grid container spacing={3} className="flex flex-row-reverse! ">

                            <Grid
                                size={12}
                                spacing={3}
                                className=" reveal"
                            >
                                <Stack className="flex! flex-row! gap-5!">
                                    <Stack className="w-9/12 border-2! border-slate-200! p-1! rounded-2xl! flex flex-col md:flex-row bg-white reveal">
                                        <Grid container  >
                                            <Grid size="grow" sx={{ display: { xs: "none", md: "block" } }}>
                                                <Box sx={{ minWidth: 120, p: 1 }}>
                                                    <RHFDatePicker
                                                        name="startDate"
                                                        label="تاریخ ورود"
                                                        startIcon={
                                                            <BusinessCenterIcon sx={{ color: "primary.main" }} />
                                                        }
                                                    />
                                                </Box>
                                            </Grid>
                                            <Divider orientation="vertical" sx={{ display: { xs: "hidden", md: "block" }, }} flexItem variant="middle" />

                                            <Grid size="grow">
                                                <Box sx={{ minWidth: 120, p: 1 }}>
                                                    <RHFDatePicker
                                                        name="endDate"
                                                        label={isMd ? "تاریخ خروج" : "تاریخ رفت و برگشت"}
                                                        startIcon={
                                                            <BusinessCenterIcon sx={{ color: "primary.main" }} />
                                                        }
                                                    />
                                                </Box>
                                            </Grid>
                                            <Divider orientation="vertical" sx={{ display: { xs: "hidden", md: "block" }, }} flexItem variant="middle" />
                                            <Divider orientation="horizontal" sx={{ display: { xs: "block", md: "hidden" }, }} flexItem variant="middle" />

                                            <Grid size="grow">
                                                <Box sx={{ minWidth: 120, p: 1 }} >
                                                    <RHFSelect
                                                        name="number"
                                                        isSelect={false}
                                                        label="مسافران و تعداد اتاق"
                                                        startIcon={<BusinessCenterIcon />}
                                                    >
                                                        <MenuItem value="مشهد">4 تفر</MenuItem>
                                                    </RHFSelect>
                                                </Box>
                                            </Grid>
                                        </Grid>

                                    </Stack>
                                    <Box sx={{ minWidth: 120, p: 2, fontSize: 20 }} className="border-2 border-slate-200! rounded-2xl! w-3/12!">
                                        <RHFSelect
                                            name="sort"
                                            label="مرتب سازی"
                                            startIcon={<BusinessCenterIcon />}
                                        >
                                            <MenuItem value="همراه با صبحانه">همراه با صبحانه</MenuItem>
                                            <MenuItem value="تهران">همراه با ناهار</MenuItem>
                                        </RHFSelect>
                                    </Box>
                                </Stack>

                            </Grid>
                        </Grid>
                    </FormProvider >
                </Stack>



                <Stack className="" gap={2}>
                    <RoomCard />
                    <RoomCard />
                    <RoomCard />
                    <RoomCard />
                </Stack>



                {/* selected room */}
                <Stack className="border-1! border-slate-200! p-5! rounded-2xl!" mt={2}>
                    <TextIcon className="border-1! rounded-xl p-4! w-full! text-sm! mb-5!" sx={{ borderColor: "error.main", color: "error.main", backgroundColor: "error.200" }} startIcon={<WarningIcon className="text-xl! ml-3!" />} text="این اتاق در تاریخ انتخابی شما خدمات ارائه نمیدهد و قیمت مشخصی ندارد. به منظور رزرو این اتاق تارخ خود را تغییر دهید." />
                    <RoomCard borderLess={true} />
                    <ChooseTicketSlider perView={5} data={cardData} hasStep={false} />
                    <Stack className="flex! flex-row! gap-4! w-full!" mt={2}>
                        <Button variant="outlined" className="rounded-lg! border-1! w-full! text-lg!" sx={{ color: "primary", borderColor: "primary.main" }}>لیست انتظار </Button>
                        <Button variant="outlined" className="rounded-lg! border-1! w-full! text-lg! border-slate-400! text-black!" >تغییر تاریخ رزرو</Button>
                    </Stack>

                </Stack>

                <ShowMoreButton className="text-black! border-2! border-slate-200! rounded-lg! mt-5! py-5" labelOpen="مشاهده اتاق های بیشتر" labelClose="مشاهده اتاق های کمتر" onChange={setOpenMore} />

            </Stack>
        </>
    )
}