"use client"
import { Button, Typography, Stack, Container, Grid, IconButton, Box, Divider, MenuItem, useTheme, useMediaQuery } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SearchIcon from "@mui/icons-material/Search";
import RoomServiceIcon from '@mui/icons-material/RoomService';
import DateRangeIcon from '@mui/icons-material/DateRange';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import TextIcon from "@/components/shared/textIcon";
import TextNumber from "@/components/shared/textNumber";
import LocationPinIcon from '@mui/icons-material/LocationPin';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from "react";
import RHFSelect from "../../form/RHFSelect";
import RHFDatePicker from "../../form/RHFDatePicker";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import useSearch from "./hooks/useSearch";
import FormProvider from "@/providers/FormProvider";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function HotelBannerSearchTicketSection({ location, fromWhere, startDate, endDate, nights, peoplesNumber }: { location: string, fromWhere: string, startDate: string, endDate: string, nights: string, peoplesNumber: string }) {
    const [searchBar, setSearchBar] = useState(false);

    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up("md"));

    const { methods, OnSubmit } = useSearch();

    return (
        <Stack maxWidth="xl">
            <Stack sx={{ backgroundColor: "background.paper" }} className={`px-2! ${searchBar ? "h-[250px]!" : "h-[200px]!"} w-full! flex! flex-col! justify-center! items-center! rounded-2xl! border-1! border-slate-200!`}>
                <Stack className="flex! items-center! justify-center! relative! h-6/12! border-b-1! border-slate-200! w-full! ">
                    <Typography className="flex! text-4xl! ">
                        رزرو هتل {location}
                    </Typography>
                    {
                        searchBar && (
                            <Button onClick={() => setSearchBar(false)} variant="text" color="secondary" className="p-2! absolute! left-5! text-lg! font-light!" endIcon={<KeyboardArrowUpIcon className="text-3xl!" />}>بستن</Button>
                        )
                    }
                </Stack>
                <Stack className={`${searchBar ? "h-7/12! px-5!" : "h-6/12! px-0!"} w-full! py-5!`}>
                    <FormProvider methods={methods} className={`flex! items-center! flex-row! w-full! justify-center! h-full! relative! rounded-2xl! ${searchBar ? "bg-white" : "bg-transparent"}`}>


                        <Stack className="flex! flex-row! justify-center! gap-16! w-full!">
                            {
                                !searchBar ? (
                                    <>
                                        <TextIcon text={`از ${fromWhere}`} startIcon={<LocationPinIcon fontSize="medium" />} />
                                        <TextIcon text={`از ${startDate} تا ${endDate} (${nights})`} startIcon={<DateRangeIcon fontSize="medium" />} />
                                        <TextIcon text={peoplesNumber} startIcon={<PersonIcon fontSize="medium" />} />
                                    </>
                                ) : (
                                    <Grid container sx={{ width: "95%" }}>
                                        <Grid size="grow" >
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
                                        <Divider orientation="vertical" sx={{ display: { xs: "hidden", md: "block" }, }} flexItem variant="middle" />

                                        <Grid size="grow" sx={{ display: { xs: "none", md: "block" } }}>
                                            <Box sx={{ minWidth: 120, p: 1 }}>
                                                <RHFDatePicker
                                                    startName="startDate"
                                                    endName="endDate"
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
                                                    startName="startDate"
                                                    endName="endDate"
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
                                )
                            }
                        </Stack>
                        <Stack className="flex! justify-center! absolute! left-3!   ">
                            <IconButton
                                className="w-full md:w-14 md:h-14 h-16 "
                                sx={{ bgcolor: "primary.main", borderRadius: 1 }}
                            >
                                <Typography className="text-white pl-1 text-lg text-extralight md:hidden ">بزن بریم</Typography>
                                <IconButton onClick={() => setSearchBar(true)}>
                                    <SearchIcon className="text-white" />
                                </IconButton>
                            </IconButton>
                        </Stack>
                    </FormProvider>
                </Stack>
            </Stack>
        </Stack >
    );
}
