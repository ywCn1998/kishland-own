'use client'
import { AccessTimeOutlined, CloudCircle, LocationOn, LocationOnOutlined, MapOutlined, PinOutlined, Search, WhatshotOutlined } from "@mui/icons-material";
import { Button, Divider, Grid, Rating, Stack, Typography } from "@mui/material";

// @ts-ignore
import { UilFire, UilMapMarker } from '@iconscout/react-unicons';
import TextIcon from "../../textIcon";
import {
    Star as StarIcon,
    Stars as StarsIcon,
    KeyboardArrowDown
} from '@mui/icons-material';


export function WideListCard({
    onClick,
    isHotelListCard = false
}: {
    onClick?: (val: boolean) => void
    isHotelListCard?: boolean
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
                        src={!isHotelListCard ? "/images/entertainment/list/jong.jpg" : "/images/building1.png"}
                        className="h-[265px] w-4/12 rounded-xl!"
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

                            {!isHotelListCard && (
                                <Stack>
                                    <Typography color="textSecondary">(32 نظر) 4.8/5</Typography>
                                </Stack>
                            )}

                            <Stack className="flex flex-col-reverse! justify-between " gap={isHotelListCard ? 2 : 0} mt={isHotelListCard ? 2 : 6}>
                                <Stack className="flex flex-row! gap-2">
                                    <UilMapMarker color={'#FA5050'} />
                                    <Typography color="textSecondary">
                                        آدرس : تقاطع بلوار سنایی و بلوار دریا
                                    </Typography>
                                </Stack>
                                {
                                    isHotelListCard && (
                                        <Stack className="flex! flex-row! gap-3! items-center! mb-2!">
                                            <Rating
                                                name="hover-feedback"
                                                value={5}
                                                precision={0.5}
                                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                            />
                                            <TextIcon endIcon={<StarsIcon color="success" className="text-xl!" />} className="text-sm!" sx={{ color: "text.secondary" }} text="(32 نظر) 4.8/5" />
                                        </Stack>
                                    )
                                }
                            </Stack>

                            <Stack className="flex flex-row! items-center gap-2" mt={!isHotelListCard ? 2.5 : 4}>
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

                            <Typography className="text-center mt-10! line-through">
                                8,800,000 تومان
                            </Typography>
                            <Typography className="text-center font-bold! text-xl!" color="secondary.main">
                                8,500,000 تومان
                            </Typography>

                            <Stack className="absolute! bottom-0! flex flex-col! w-full gap-4">
                                <Typography variant="caption" className="mt-4! text-center">
                                    شروع قیمت برای یک نفر
                                </Typography>
                                <Button
                                    onClick={() => onClick!(true)}
                                    variant="contained" fullWidth className="text-white! ">
                                    <Typography variant="button">رزرو بلیط</Typography>
                                </Button>
                            </Stack>
                        </Stack>
                    </Stack>



                </Stack>


                {
                    isHotelListCard &&
                    <Button sx={{ color: "text.secondary" }} className="w-full! bg-slate-100! rounded-xl! py-3! mt-4!" endIcon={<KeyboardArrowDown />}>رزرو سریع</Button>
                }

            </Stack>
        </Grid>
    )
}
