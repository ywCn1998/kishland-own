'use client'
import { AccessTimeOutlined, CloudCircle, LocationOn, LocationOnOutlined, MapOutlined, PersonOutlined, PinOutlined, Search, WhatshotOutlined } from "@mui/icons-material";
import { Button, Divider, Grid, Stack, Typography } from "@mui/material";

// @ts-ignore
import { UilFire, UilMapMarker } from '@iconscout/react-unicons';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';

export function HotelHistoryCard({
    onClick
}: {
    onClick?: (val: boolean) => void
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

                    <Stack
                        direction="row"
                        className="w-full"
                        sx={{ alignItems: "stretch" }} // ensure children stretch vertically
                    >
                        {/* -------- LEFT SIDE -------- */}
                        <Stack className="w-4/5 flex flex-col! gap-2!">
                            <Stack className="flex! flex-row! justify-between! items-center">
                                <Stack className="flex! flex-col! gap-3!">
                                    <Typography className="font-bold! text-xl!">
                                        هتل بین المللی کیش
                                    </Typography>

                                    <Typography className="" color="text.secondary">
                                        شماره سفارش : 554874512
                                    </Typography>
                                </Stack>

                                <Button sx={{ color: "text.secondary" }} className="text-sm! px-4! py-2! rounded-lg!" variant="outlined" endIcon={<PersonOutlined className="text-2xl!" />}>2 نفر مسافر</Button>
                            </Stack>
                            <Stack sx={{ backgroundColor: "background.paper" }} className="rounded-2xl! p-4! flex! flex-row-reverse! ">
                                <Stack className="w-2/12! flex! items-end! justify-end! text-left">
                                    <Typography color="text.secondary" className="text-sm!" mb={1} fontWeight={300}>
                                        مبلغ نهایی
                                    </Typography>
                                    <Typography color="text.secondary" className="text-base!" fontWeight={400}>
                                        15,500,000 تومان
                                    </Typography>
                                </Stack>
                                <Stack className="w-10/12! flex! flex-row! items-center! gap-4! relative!">
                                    <Stack>
                                        <Typography color="text.secondary" className="text-xs!" mb={1} fontWeight={300}>
                                            تاریخ ورود
                                        </Typography>
                                        <Typography color="text.secondary" className="text-sm!" fontWeight={400}>
                                            پنج شنبه 11 اردیبهشت 1404 | ساعت 14:00
                                        </Typography>
                                    </Stack>
                                    {/* <Stack> */}
                                    <KeyboardBackspaceOutlinedIcon sx={{ color: "text.secondary" }} />
                                    {/* </Stack> */}
                                    <Stack>
                                        <Typography color="text.secondary" className="text-xs!" mb={1} fontWeight={300}>
                                            تاریخ خروج
                                        </Typography>
                                        <Typography color="text.secondary" className="text-sm!" fontWeight={400}>
                                            پنج شنبه 11 اردیبهشت 1404 | ساعت 14:00
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>

                        </Stack>

                        {/* -------- DIVIDER -------- */}
                        <Divider
                            orientation="vertical"
                            flexItem
                            sx={{
                                mx: 2,
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
                        <Stack className="w-1/5 flex flex-col! relative! justify-between!">
                            <Typography variant="button" className="bg-[#FFF9EC]! text-center! rounded-xl! py-3! font-normal! text-xs!" color="primary">در انتظار پرداخت</Typography>

                            <Stack className="flex! flex-col! text-center! justify-end!">
                                <Typography color="error.main" className="text-sm!">تا 05:23 فرصت پرداخت دارید</Typography>
                                <Button variant="contained" sx={{ backgroundColor: "success.main", color: "white", mt: .5 }} className="text-white py-3!">پرداخت سفارش</Button>
                            </Stack>
                        </Stack>
                    </Stack>



                </Stack>




            </Stack>
        </Grid>
    )
}