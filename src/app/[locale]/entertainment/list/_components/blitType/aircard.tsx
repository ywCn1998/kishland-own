'use client'
import { AccessTimeOutlined, CloudCircle, LocationOn, LocationOnOutlined, MapOutlined, PinOutlined, Search, WhatshotOutlined } from "@mui/icons-material";
import { Button, Divider, Grid, Stack, Typography } from "@mui/material";

// @ts-ignore
import { UilFire, UilMapMarker } from '@iconscout/react-unicons';



export function AirCard({
    onClick
}: {
    onClick: (val: boolean) => void
}) {
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
                        gap: 2
                    }}>

                    <img
                        src={'/images/entertainment/list/jong.jpg'}
                        className="h-[265px]"
                    />


                    <Stack
                        direction="row"
                        className="w-full"
                        sx={{ alignItems: "stretch" }} // ensure children stretch vertically
                    >
                        {/* -------- LEFT SIDE -------- */}
                        <Stack className="w-3/4 flex flex-col!">
                            <Stack className="text-white! bg-[#FA5050] self-start p-3 rounded-lg flex flex-row! gap-2">
                                <UilFire />
                                <Typography>پیشنهاد ویژه کیش لندیار</Typography>
                            </Stack>

                            <Typography
                                className="mt-4!"
                                sx={{ fontSize: "26px" }}
                                fontWeight={500}
                            >
                                جنگ شبانه پازل شو کیش
                            </Typography>

                            <Stack>
                                <Typography color="textSecondary">(32 نظر) 4.8/5</Typography>
                            </Stack>

                            <Stack className="flex flex-row! gap-2 mt-12">
                                <UilMapMarker color={'#FA5050'} />
                                <Typography color="textSecondary">
                                    آدرس : تقاطع بلوار سنایی و بلوار دریا
                                </Typography>
                            </Stack>

                            <Stack className="flex flex-row! items-center gap-2 mt-2">
                                <Stack className="border-1 border-slate-200 rounded-xl flex flex-row! px-3 py-3 ">
                                    <AccessTimeOutlined sx={{ color: "#626E94" }} />
                                    <Typography color="textSecondary">180 دقیقه</Typography>
                                </Stack>

                                <Stack className="border-1 border-slate-200 rounded-xl flex flex-row! px-3 py-3 ">
                                    <Typography>دارای کافی شاپ</Typography>
                                </Stack>

                                <Stack className="border-1 border-slate-200 rounded-xl flex flex-row! px-3 py-3 ">
                                    <Typography>خانوادگی</Typography>
                                </Stack>
                            </Stack>
                        </Stack>

                        {/* -------- DIVIDER -------- */}
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

                        {/* -------- RIGHT SIDE -------- */}
                        <Stack className="w-1/4 flex flex-col! relative! h-[265px]">
                            <Typography
                                variant="button"
                                className="rounded-lg py-3 bg-[#FFE5E5] w-full text-center text-[#FA5050]"
                            >
                                تا 25 % تخفیف
                            </Typography>

                            <Typography className="text-center mt-4! line-through">
                                8,800,000 تومان
                            </Typography>
                            <Typography variant="body2" className="text-center font-bold!">
                                8,500,000 تومان
                            </Typography>

                            <Stack className="absolute! bottom-0! flex flex-col! w-full gap-4">
                                <Typography variant="caption" className="mt-4! text-center">
                                    شروع قیمت برای یک نفر
                                </Typography>
                                <Button
                                    onClick={() => onClick(true)}
                                    variant="contained" fullWidth className="text-white! " >
                                    <Typography variant="button">رزرو بلیط</Typography>
                                </Button>
                            </Stack>
                        </Stack>
                    </Stack>



                </Stack>




            </Stack>
        </Grid>
    )
}