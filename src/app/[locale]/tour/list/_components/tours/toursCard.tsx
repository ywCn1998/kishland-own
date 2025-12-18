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
import ChangeRoomDrawer from "../changeRoomDrawer";
import { useState } from "react";

interface IProps {
    onClick?: (val: boolean) => void
    isLocationModal?: boolean;
}

export function TourCard({
    onClick,
    isLocationModal = false
}: IProps) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
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
                        height: "255px"
                    }}>

                    {/* <img
                        src={'/images/entertainment/list/jong.jpg'}
                        className="h-[265px]"
                    /> */}
                    <Stack className={`relative! h-full! ${isLocationModal ? "w-3/12!" : "w-5/12!"}`}>
                        <Image src={`/images/building-card.png`} fill alt="building" />
                    </Stack>


                    <Stack
                        direction="row"
                        className="w-full"
                        sx={{ alignItems: "stretch" }} // ensure children stretch vertically
                    >
                        {/* -------- LEFT SIDE -------- */}
                        <Stack className={`w-3/4 flex flex-col! ${isLocationModal && "mt-2!"}`}>
                            <Stack className="text-white! flex flex-row! gap-2 justify-between! w-full!">
                                <Button startIcon={<UilFire />} sx={{ backgroundColor: "error.main" }} className="text-sm! text-white! h-10! rounded-lg!" variant="contained">
                                    پیشنهاد ویژه کیش لندیار
                                </Button>
                                {!isLocationModal && (
                                    <Button onClick={handleOpen} className="bg-slate-500! text-white! h-10! rounded-lg! text-sm!" variant="contained">
                                        تغییر تایپ اتاق
                                    </Button>
                                )}

                            </Stack>

                            <Typography
                                className="mt-6! mb-2! text-2xl!"
                                fontWeight={500}
                            >
                                تور ۴ روز هتل کوروش
                            </Typography>

                            <Stack className="flex! flex-row! items-center! gap-1!">
                                <Rating name="read-only" value={5} readOnly />
                                <Stack component={"span"} className="text-sm!" color="primary.main">هتل {5} ستاره</Stack>
                            </Stack>

                            {!isLocationModal && (
                                <>
                                    <Stack className="flex flex-col! gap-3 mt-4">
                                        <Typography color="textSecondary" className="text-sm!">
                                            اتاق: دو تخته اکونومی رو به دریا
                                        </Typography>
                                        <Typography color="textSecondary" className="text-sm!">
                                            وعده غذایی: صبحانه و ناهار
                                        </Typography>
                                    </Stack>
                                    <Button variant="text" color="info" className="w-fit! p-0! mt-5!" endIcon={<ArrowBackIcon />}>
                                        مشاهده روی نقشه
                                    </Button>
                                </>
                            )}


                            {isLocationModal && (
                                <>
                                    <Stack className="flex! flex-row! gap-2! mb-3! mt-3!">
                                        <TextIcon text="اتاق: دو تخته اکونومی رو به دریا" startIcon={<BedroomParentIcon />} className="border-slate-200! border-1! w-fit! rounded-xl! p-3!" />
                                        <TextIcon text="شام و صبحانه" className="border-slate-200! border-1! w-fit! rounded-xl! p-3!" />
                                        <TextIcon text="ترانسفر فرودگاهی" className="border-slate-200! border-1! w-fit! rounded-xl! p-3!" />
                                    </Stack>
                                    <Typography
                                        className="w-full mb-2! text-xs!"
                                        color="text.secondary"
                                    >
                                        قیمت تور هر بزرگسال
                                    </Typography>

                                    <Typography className=" font-bold! text-xl! mb-2!" color="secondary.main">
                                        8,500,000 تومان
                                    </Typography>
                                </>
                            )}

                        </Stack>

                        {/* -------- DIVIDER -------- */}
                        {!isLocationModal && (
                            <Divider
                                orientation="vertical"
                                flexItem
                                sx={{
                                    mx: 4,
                                    border: 0,
                                    borderRight: (theme) =>
                                        `2px dashed ${theme.palette.divider}`,
                                    borderImage: (theme) =>
                                        `repeating-linear-gradient(
                             to bottom,
                             ${theme.palette.divider} 0,
                             ${theme.palette.divider} 15px,
                             transparent 15px,
                             transparent 30px
                           ) 1`, // custom dash pattern
                                }}
                            />
                        )}

                        {/* -------- RIGHT SIDE -------- */}
                        <Stack className="w-1/4 flex flex-col! relative!">

                            {isLocationModal ? (
                                <>
                                    <Button variant="text" color="info" className="absolute! left-2!   w-fit! p-0! mt-3!" endIcon={<ArrowBackIcon />}>
                                        مشاهده روی نقشه
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Typography
                                        className="w-full text-center text-xs! mb-5!"
                                        color="text.secondary"
                                    >
                                        قیمت تور هر بزرگسال
                                    </Typography>

                                    <Typography className="text-center font-bold! text-xl!" color="secondary.main">
                                        8,500,000 تومان
                                    </Typography>
                                </>
                            )}

                            <Stack className={`absolute! bottom-0! flex ${isLocationModal ? "flex-col!" : "flex-col-reverse!"} w-full gap-4`}>
                                <Typography variant="caption" color="text.secondary" className="mt-10! text-center text-xs!">
                                    قیمت کل تور ۲ مسافر : 18,900,000 تومان
                                </Typography>
                                <Button
                                    onClick={() => onClick!(true)}
                                    variant="contained" fullWidth className="text-white! px-2! text-sm!" href={isLocationModal ? "/fa/tour/reserve" : "/fa/tour/hotel-location"}>
                                    {isLocationModal ? "انتخاب اتاق" : "خرید تور با این هتل"}
                                </Button>
                            </Stack>
                        </Stack>
                    </Stack>



                </Stack>



                <ChangeRoomDrawer open={open} setOpen={setOpen} />
            </Stack>
        </Grid>
    )
}
