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
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import RHFSelect from "@/components/shared/form/RHFSelect";
import FormProvider from "@/providers/FormProvider";
import RHFDatePicker from "@/components/shared/form/RHFDatePicker";
import useSearch from "../hooks/useSearch";
import { RoomCard } from "@/components/shared/cards/tour/roomCard";
import RoomCardDetailsResponsive from "@/components/shared/cards/tour/roomCardDetailsResponsive";
import TextIcon from "@/components/shared/textIcon";
import WarningIcon from '@mui/icons-material/Warning';
// import ChooseTicketSlider from "@/components/shared/ui/chooseTicketSlider";
import { useState } from "react";
import ShowMoreButton from "@/components/shared/showMoreButton";
import DaysSwiper from "@/app/[locale]/(main)/entertainment/list/detail/_components/dateSlider";
import { DayItem } from "@/app/[locale]/(main)/entertainment/list/detail/page";
import RHFPassengerPicker from "@/components/shared/form/RHFPassengerPicker";

export default function RoomsList({ days }: { days: DayItem[] }) {
    const { methods, OnSubmit } = useSearch();
    const [openMore, setOpenMore] = useState(false)

    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up("md"));
    return (
        <>
            <Stack className="md:border-1! border-slate-200! rounded-2xl!" sx={{ p: { xs: 2, md: 8 } }}>
                <Stack className="flex! flex-col! gap-3! md:gap-4!" mb={2}>
                    <Stack className="flex! flex-row! justify-between! items-start! md:items-center! gap-2! md:gap-0!">
                        <Typography className="text-xl! md:text-3xl! font-semibold!">لیست اتاق ها</Typography>
                        <Typography className="text-sm! md:text-base!" color="text.secondary">{30} اتاق خالی موجود است</Typography>
                    </Stack>
                    <Divider className="md:hidden! mt-2!" />
                    <FormProvider methods={methods}>
                        <Grid container spacing={3} className="flex flex-row-reverse! ">

                            <Grid
                                size={12}
                                spacing={3}
                                className=" reveal"
                            >
                                <Stack className="flex! flex-col! md:flex-row! gap-3!">
                                    <Stack className="w-full! md:w-9/12! md:border-1! border-slate-200! p-1! rounded-2xl! flex flex-col md:flex-row bg-white reveal">
                                        <Grid container className="flex! flex-row!">
                                            {/* فیلد موبایل - نمایش ترکیبی */}
                                            <Grid size={6} sx={{ display: { xs: "block", md: "none" } }}>
                                                <Box sx={{ minWidth: 10, p: 1, pb: 0 }}>
                                                    <RHFDatePicker
                                                        startName="startDate"
                                                        endName="endDate"

                                                        label="ورود و خروج"
                                                        startIcon={
                                                            <BusinessCenterIcon sx={{ color: "primary.main" }} />
                                                        }
                                                    />
                                                </Box>
                                            </Grid>

                                            {/* فیلدهای دسکتاپ */}
                                            <Grid size="grow" sx={{ display: { xs: "none", md: "block" } }}>
                                                <Box sx={{ minWidth: 10, p: 1, pb: 0 }}>
                                                    <RHFDatePicker
                                                        startName="startDate"
                                                        endName="endDate"
                                                        isStart={true}
                                                        label="تاریخ ورود"
                                                        startIcon={
                                                            <BusinessCenterIcon sx={{ color: "primary.main" }} />
                                                        }
                                                    />
                                                </Box>
                                            </Grid>
                                            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, }} flexItem variant="middle" />

                                            <Grid size="grow" sx={{ display: { xs: "none", md: "block" } }}>
                                                <Box sx={{ minWidth: 10, p: 1, pb: 0 }}>
                                                    <RHFDatePicker
                                                        startName="startDate"
                                                        endName="endDate"
                                                        label="تاریخ خروج"
                                                        startIcon={
                                                            <BusinessCenterIcon sx={{ color: "primary.main" }} />
                                                        }
                                                    />
                                                </Box>
                                            </Grid>
                                            <Divider orientation="vertical" flexItem variant="middle" className="md:block! hidden!" />
                                            {/* <Divider orientation="horizontal" sx={{ display: { xs: "block", md: "hidden" }, }} flexItem variant="middle" /> */}

                                            <Grid size="grow">
                                                <Box sx={{ minWidth: 10, p: 1, pb: 0 }} >
                                                    <RHFPassengerPicker name="passengers" label="مسافران و تعداد اتاق" startIcon={
                                                        <BusinessCenterIcon sx={{ color: "primary.main" }} />
                                                    } />

                                                </Box>
                                            </Grid>
                                        </Grid>

                                    </Stack>
                                    <Box sx={{ minWidth: 10, p: 2, pb: 0, fontSize: 20 }} className="border-2 border-slate-200! rounded-2xl! w-full! md:w-3/12!">
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



                <Stack className="hidden! md:block!" spacing={2}>
                    <RoomCard />
                    <RoomCard />
                    <RoomCard />
                    <RoomCard />
                </Stack>
                <Stack className="md:hidden!" spacing={2}>
                    <RoomCardDetailsResponsive />
                    <RoomCardDetailsResponsive />
                    <RoomCardDetailsResponsive />
                    <RoomCardDetailsResponsive />
                </Stack>



                {/* selected room */}
                <Stack className="border-1! border-slate-200! p-5! rounded-2xl!" mt={2} sx={{ p: { xs: 3, md: 5 } }}>
                    <TextIcon className="border-1! rounded-xl p-4! w-full! text-sm! mb-5!" sx={{ borderColor: "error.main", color: "error.main", backgroundColor: "error.200", p: { xs: 3, md: 4 }, fontSize: { xs: "0.75rem", md: "0.875rem" }, mb: { xs: 4, md: 5 } }} startIcon={<WarningIcon sx={{ fontSize: { xs: "1.125rem", md: "1.25rem" }, ml: { xs: 2, md: 3 } }} />} text="این اتاق در تاریخ انتخابی شما خدمات ارائه نمیدهد و قیمت مشخصی ندارد. به منظور رزرو این اتاق تارخ خود را تغییر دهید." />
                    <Stack className="hidden! md:block!">
                        <RoomCard borderLess={true} />
                    </Stack>
                    <Stack className="md:hidden!">
                        <RoomCardDetailsResponsive borderLess={true} />
                    </Stack>
                    {/* <ChooseTicketSlider perView={5} data={cardData} hasStep={false} /> */}
                    <DaysSwiper items={days} />


                    <Stack className="flex! flex-row! gap-4! w-full!" mt={2} sx={{ flexDirection: { xs: "column", md: "row" }, gap: { xs: 3, md: 4 } }}>
                        <Button variant="outlined" className="rounded-lg! text-nowrap! border-1! w-full! text-base! md:text-lg!" sx={{ color: "primary", borderColor: "primary.main" }}>لیست انتظار </Button>
                        <Button variant="outlined" className="rounded-lg! text-nowrap! border-1! w-full! text-base! md:text-lg! border-slate-400! text-black!" >تغییر تاریخ رزرو</Button>
                    </Stack>

                </Stack>

                <ShowMoreButton className="text-black! border-2! border-slate-200! rounded-lg! mt-5! py-5" labelOpen="مشاهده اتاق های بیشتر" labelClose="مشاهده اتاق های کمتر" onChange={setOpenMore} />

            </Stack>
        </>
    )
}
