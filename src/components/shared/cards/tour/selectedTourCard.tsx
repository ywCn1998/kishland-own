'use client'
import { AccessTimeOutlined, CloudCircle, LocationOn, LocationOnOutlined, MapOutlined, PinOutlined, Search, WhatshotOutlined } from "@mui/icons-material";
import { Button, Divider, Grid, Rating, Stack, Typography } from "@mui/material";

// @ts-ignore
import { UilFire, UilMapMarker } from '@iconscout/react-unicons';
import Image from "next/image";
import { RateBar } from "@/components/shared/ratebar";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextIcon from "@/components/shared/textIcon";
import BedroomParentIcon from '@mui/icons-material/BedroomParent';

interface IProps {
    onClick?: (val: boolean) => void
}

export function SelectedTourCard({
    onClick,
}: IProps) {
    return (
        <Grid size={{ md: 12 }}  >
            <Stack
                alignItems={"center"}
                // reveal
                className="flex w-full flex-col border-1 border-slate-200 rounded-2xl   p-4"
            >

                <Stack
                    display={'flex'} flexDirection={'row'}
                    alignItems={'center'} sx={{
                        position: 'relative',
                        width: '100%',
                        gap: 2,
                        height: "160px"
                    }}>

                    <Stack className={`relative! h-full! ${"w-4/12!"}`}>
                        <Image src={`/images/building-card.png`} fill alt="building" />
                    </Stack>


                    <Stack
                        direction="row"
                        className="w-full h-full!"
                        sx={{ alignItems: "stretch" }} // ensure children stretch vertically
                    >
                        {/* -------- LEFT SIDE -------- */}
                        <Stack className={`w-3/4 flex flex-col! justify-around! h-full! py-3!`}>


                            <Typography
                                className=" text-2xl!"
                                fontWeight={500}
                            >
                                تور ۴ روز هتل کوروش
                            </Typography>

                            <Stack className="flex! flex-row! items-center! gap-1!">
                                <Rating name="read-only" value={5} readOnly />
                                <Stack component={"span"} className="text-sm!" color="primary.main">هتل {5} ستاره</Stack>
                            </Stack>

                            <Stack className="flex! flex-row! gap-2! ">
                                <TextIcon text="اتاق: دو تخته اکونومی رو به دریا" startIcon={<BedroomParentIcon />} className="text-sm! border-slate-200! border-1! w-fit! rounded-xl! p-3!" />
                                <TextIcon text="شام و صبحانه" className="border-slate-200! border-1! w-fit! rounded-xl! p-3! text-sm!" />
                                <TextIcon text="ترانسفر فرودگاهی" className="border-slate-200! border-1! w-fit! rounded-xl! p-3! text-sm!" />
                            </Stack>
                        </Stack>



                        {/* -------- RIGHT SIDE -------- */}
                        <Stack className="w-1/4 flex flex-col! relative!">
                            <Stack className={`absolute! flex flex-col! w-full gap-4 items-center! mt-6!`}>
                                <Typography variant="caption" color="text.secondary" className=" text-center text-xs! text-nowrap!">
                                    قیمت کل تور ۲ مسافر : 18,900,000 تومان
                                </Typography>
                                <Typography className="text-2xl! font-bold! text-left!" color="secondary.main" >18,500,000 تومان</Typography>
                            </Stack>
                        </Stack>
                    </Stack>



                </Stack>




            </Stack>
        </Grid>
    )
}