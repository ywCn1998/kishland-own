'use client'
import { Button, Divider, Grid, IconButton, Stack, Typography } from "@mui/material";

// @ts-ignore
import { UilFire, UilMapMarker } from '@iconscout/react-unicons';
import BlogCard from "@/components/shared/cards/blogCard";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MarkChatUnreadOutlinedIcon from '@mui/icons-material/MarkChatUnreadOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import TextIcon from "@/components/shared/textIcon";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import WordTooltip from "@/components/shared/ui/wordTooltip";
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import BedroomParentIcon from '@mui/icons-material/BedroomParentOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';


export function SuggestionsCard({
    onClick
}: {
    onClick?: (val: boolean) => void
}) {
    return (
        <Grid size={{ md: 12 }}  >
            <Stack
                alignItems={"center"}
                // reveal
                className="flex w-full flex-col border-1 border-slate-200 rounded-2xl p-4 h-[300px]! "
            >

                <Grid
                    container
                    sx={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',      // ✅ fill fixed height
                        minHeight: 0,        // ✅ prevent children from pushing height
                    }}
                    className="w-full! h-full!"
                    spacing={2}
                >

                    <Grid size={3} className="h-full!">
                        <Grid size={12} className="flex! flex-row! gap-3! h-4/5!">

                            <Stack className="w-1/3! gap-3!">
                                <BlogCard className="rounded-xl!" boxShadow={0} overlay="none" imageUrl="/images/building.png" height={"35%"} />
                                <BlogCard className="rounded-xl!" boxShadow={0} overlay="none" imageUrl="/images/building.png" height={"65%"} />
                            </Stack>

                            <Stack className="w-2/3!">
                                <BlogCard className="rounded-xl!" boxShadow={0} overlay="none" imageUrl="/images/building.png" />
                            </Stack>
                        </Grid>
                        <Grid size={12} mt={1} className="h-1/5! ">
                            <Stack className="w-full! rounded-2xl! h-full! flex! flex-row-reverse! justify-between! items-center! px-3!" sx={{ backgroundColor: "background.paper" }}>

                                <IconButton className="p-1!">
                                    <LocalPhoneOutlinedIcon className="text-3xl! text-slate-400!" />
                                </IconButton>
                                {/* -------- */}
                                <IconButton className="p-1!">
                                    <MarkChatUnreadOutlinedIcon className="text-3xl! text-slate-400!" />
                                </IconButton>
                                {/* -------- */}
                                <IconButton className="p-1!">
                                    <ErrorOutlineOutlinedIcon className="text-3xl! text-slate-400!" />
                                </IconButton>
                                {/* -------- */}
                                <IconButton className="p-1!">
                                    <PlaceOutlinedIcon className="text-3xl! text-slate-400!" />
                                </IconButton>
                            </Stack>
                        </Grid>
                    </Grid>



                    <Grid size={9}
                        className="w-full h-full! flex! flex-row!"
                    >
                        {/* -------- LEFT SIDE -------- */}
                        <Stack className="w-3/4 flex flex-col! h-full! justify-between!">
                            <Stack className="flex! flex-col! gap-3! relative!">
                                <Stack className="flex! flex-row! justify-start! items-center! gap-3! mt-2!">
                                    <TextIcon startIcon={<FavoriteOutlinedIcon className="text-lg!" />} className="text-sm!" text="34 گردشگر پیشنهادمی کنند" sx={{ color: 'success.main' }} />
                                    <Divider orientation="vertical" />
                                    <TextIcon sx={{ color: "primary.100" }} startIcon={<StarOutlinedIcon />} text="4.9" />
                                    <div className="absolute! left-0! border-2! border-slate-400! p-1! rounded-full!">
                                        <FavoriteBorderOutlinedIcon className=" text-2xl! text-slate-400!" />
                                    </div>
                                </Stack>
                            </Stack>

                            <Typography className="font-semibold! text-2xl!">هتل بین المللی کیش </Typography>

                            <WordTooltip limit={145} className="w-full! text-justify!" sx={{ color: "text.secondary" }} text="تل بین المللی کیش یکی از جذاب ترین هتل های جزیره کیش می باشد که لول 5 ستاره را از آن خود کرده است. این هتل کیش در سال 1396 آغاز به فعالیت نموده وتل بین المللی کیش یکی از جذاب ترین هتل های جزیره کیش می باشد که لول 5 ستاره را از آن خود کرده است. این هتل کیش در سال 1396 آغاز به فعالیت نموده و" />


                            <Stack className="flex! flex-col! ">
                                <TextIcon startIcon={<FmdGoodOutlinedIcon className="text-xl!" />} text="آدرس : تقاطع بلوار سنایی و بلوار دریا" className="text-slate-400! text-base!" />

                                <Stack className="flex! flex-row! gap-2! mt-3!">
                                    <Button variant="outlined" className="rounded-xl! text-xs! text-slate-400! py-3! px-3!" startIcon={<BedroomParentIcon />}>ترانسفر فرودگاهی (رایگان)</Button>
                                    <Button variant="outlined" className="rounded-xl! text-xs! text-slate-400! py-3! px-3!">شام و صبحانه</Button>
                                    <Button variant="outlined" className="rounded-xl! text-xs! text-slate-400! py-3! px-3!" startIcon={<WifiOutlinedIcon />}>اینترنت رایگان</Button>
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
                        <Stack className="w-1/4 flex flex-col! relative! items-center! justify-between! py-11!">
                            <Typography className="text-sm!" sx={{ color: "text.secondary" }}>
                                شروع قیمت برای <Typography component={"span"} sx={{ color: "primary.main" }} className="text-sm!">1 شب</Typography>
                            </Typography>
                            <Typography sx={{ color: "secondary.main" }} className="text-2xl!" fontWeight={600}>
                                8,500,000 تومان
                            </Typography>
                            <Button
                                onClick={() => onClick!(true)}
                                variant="contained" fullWidth className="text-white! font-semibold! mt-2!">
                                انتخاب اتاق و رزرو
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>




            </Stack>
        </Grid>
    )
}
