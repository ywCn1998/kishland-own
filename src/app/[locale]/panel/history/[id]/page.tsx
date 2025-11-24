"use client";

import { Button, Divider, Grid, Stack, Typography, Container, useMediaQuery, useTheme, IconButton, Box } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import BlogCard from "@/components/shared/cards/blogCard";
import TextIcon from "@/components/shared/textIcon";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import DownloadIcon from '@mui/icons-material/Download';
import Image from "next/image";
import { headerTitleAtom } from "@/store/atomHeader";
import { useEffect } from "react";
import { useAtom } from "jotai";
import FixedBottomButton from "@/components/shared/fixedBottomBotton/fixedBottomBotton";


const details = [
    { label: "شماره سفارش", value: "8745454135" },
    { label: "اتاق", value: "انفره - 1 تخت تنها" },
    { label: "شماره تماس", value: "09938891448" },
    { label: "نام رزرو کننده", value: "علیرضا رودی" },
];

const priceDetails = [
    { label: "قیمت پایه", value: "40.000.000 تومان" },
    { label: "مالیات هتل", value: "40.000.000 تومان" },
    { label: "تخفیف", value: "40.000.000 تومان" },
    { label: "مجموع پرداختی", value: "40.000.000 تومان", highlight: true },
];


export default function HistoryDetails() {
    const params = useParams();
    const id = params.id; // this matches the folder name [id]
    const router = useRouter();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [, setHeaderTitle] = useAtom(headerTitleAtom);

    useEffect(() => {
        setHeaderTitle("جزئیات سفارش");
    }, []);
    return (
        <Container maxWidth="xl" disableGutters sx={{ px: { xs: 0, md: 0 }, pb: { xs: 4, md: 0 } }}>
            {/* Header Section - Desktop */}
            {!isMobile && (
                <Stack className="border-1! border-slate-200! py-4 px-6! rounded-2xl! flex! flex-row! justify-between! items-center! mb-3!">
                    <Typography className="font-semibold! text-base!">
                        جزئیات سفارش {id}
                    </Typography>
                    <Button onClick={() => router.back()} variant="text" className="p-1! text-base!" sx={{ color: "text.secondary" }} endIcon={<KeyboardArrowLeftOutlinedIcon />}>
                        برگشت
                    </Button>
                </Stack>
            )}

            <Stack className="md:border-1! border-slate-200! rounded-2xl!  md:p-4!" sx={{ mx: { xs: 0, md: 0 }, mt: { xs: 2, md: 0 } }}>
                {/* Order ID - Mobile Only */}
                {isMobile && (
                    <>
                        <Stack className="px-4!">
                            <Typography className="font-semibold! text-lg! text-start!">
                                #{id}
                            </Typography>
                        </Stack>
                        <div className="md:hidden! w-full border-b-6 border-slate-200! mt-4! mb-6! " />
                    </>
                )}

                {/* Order Details Section */}
                {isMobile ? (
                    <>
                        <Stack className="flex! flex-col! gap-4! px-4!">
                            {details.map((item) => (
                                <Stack key={item.label} className="flex! flex-row! justify-between! items-center!">
                                    <Typography className="text-xs!" color="text.secondary">{item.label}</Typography>
                                    <Typography className="text-sm!" fontWeight={500}>{item.value}</Typography>
                                </Stack>
                            ))}
                        </Stack>

                        <div className="md:hidden! w-full border-b-6! border-slate-200! my-6!" />
                    </>
                ) : (
                    <Stack className="flex! flex-row-reverse! justify-between!">
                        {details.map((item) => (
                            <Stack key={item.label} textAlign="left" spacing={1}>
                                <Typography className="text-sm!" color="text.secondary">{item.label}</Typography>
                                <Typography fontWeight={500}>{item.value}</Typography>
                            </Stack>
                        ))}
                    </Stack>
                )}
                <Divider variant="fullWidth" orientation="horizontal" sx={{ my: 2 }} className="hidden! md:block!" />

                {/* Image Gallery and Map */}
                {isMobile ? (
                    <Stack className="flex! flex-col! gap-3! mb-4! px-4!">
                        {/* Image Grid - Mobile */}
                        <Stack className="flex! flex-row! gap-2!">
                            <Stack className="w-1/2!">
                                <BlogCard imageUrl="/images/building.png" />
                            </Stack>
                            <Stack className="w-1/2! flex! flex-col! gap-2!">
                                <BlogCard imageUrl="/images/building.png" height={"48%"} />
                                <BlogCard imageUrl="/images/building.png" height={"52%"} />
                            </Stack>
                        </Stack>
                        {/* Map - Mobile */}
                        <Stack className="w-full! h-[200px]! relative! rounded-xl! overflow-hidden!">
                            <Image alt="map-sample" src="/images/panel/sample-map.png" fill className="object-cover!" />
                        </Stack>
                    </Stack>
                ) : (
                    <Grid container spacing={2}>
                        <Grid size={5} className="flex! flex-row! gap-4!">
                            <Stack className="w-1/2! gap-4!">
                                <BlogCard imageUrl="/images/building.png" height={"42%"} />
                                <BlogCard imageUrl="/images/building.png" height={"58%"} />
                            </Stack>
                            <Stack className="w-1/2!">
                                <BlogCard imageUrl="/images/building.png" />
                            </Stack>
                        </Grid>
                        <Grid size={7}>
                            <Stack className="h-[100%]! relative!">
                                <Image alt="map-sample" src="/images/panel/sample-map.png" fill />
                            </Stack>
                        </Grid>
                    </Grid>
                )}
                {/* ------------------------- */}

                <Stack mt={3} className="">
                    <Typography variant="h4" fontWeight={600} mb={2} className="text-lg! md:text-2xl!">هتل بین المللی قصر مشهد</Typography>
                    <Typography color="text.secondary" className="text-xs! md:text-lg!" fontWeight={500}>هتل بین المللی قصر مشهد/ سه ستاره / 1 شب اقامت</Typography>

                    <Stack>
                        <Typography color="text.secondary" fontWeight={500} className="text-sm! md:text-lg! text-center!" mt={{ xs: 5, md: 2 }} mb={1}>2 شب</Typography>
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                            width="100%"
                            gap={2}
                            className="px-4! md:px-0!"
                        >
                            <Typography color="text.secondary" fontWeight={500} className="text-xs! md:text-base!">
                                تاریخ خروج
                            </Typography>

                            <DashedDivider />

                            <Typography color="text.secondary" fontWeight={500} className="text-xs! md:text-base!">
                                تاریخ ورود
                            </Typography>
                        </Stack>

                        <Stack className="flex! flex-row! justify-between! items-center! px-4! md:px-0!" mt={1.5}>
                            <Typography className="text-sm! md:text-xl! font-semibold!">جمعه ۲۶ مرداد</Typography>
                            <Typography className="text-sm! md:text-xl! font-semibold!">یکشنبه ۲۸ مرداد</Typography>
                        </Stack>
                        <Stack className="flex! flex-row! justify-between! items-center! px-4! md:px-0!" mt={1.5}>
                            <Typography className="text-xs! md:text-base" color="text.secondary">ساعت 14:۰۰</Typography>
                            <Typography className="text-xs! md:text-base" color="text.secondary">ساعت 14:۰۰</Typography>
                        </Stack>

                        <div className="md:hidden! w-full border-b-6! border-slate-200! my-6!" />


                        {/* Address and Transfers */}
                        {isMobile ? (
                            <Stack className="flex! flex-col! gap-3! px-4! md:px-0!">
                                <Stack>
                                    <TextIcon text="آدرس" className="text-xs!" startIcon={<LocationOnOutlinedIcon className="text-lg!" />} />
                                    <Typography fontWeight={500} className="text-sm! mt-1! ml-7!">مشهد، خیابان امام رضا، بین امام رضا ۳۴ و ۳۲</Typography>
                                </Stack>
                                <Stack className="flex! flex-col! gap-2!">
                                    <Button variant="outlined" className="rounded-lg! text-black! text-xs! justify-start!" startIcon={<DirectionsCarOutlinedIcon color="primary" className="text-lg!" />} fullWidth>ترانسفر فرودگاهی (رایگان)</Button>
                                    <Button variant="outlined" className="rounded-lg! text-black! text-xs! justify-start!" startIcon={<DirectionsBusFilledOutlinedIcon color="primary" className="text-lg!" />} fullWidth>ترانسفر راه آهن (رایگان)</Button>
                                </Stack>
                            </Stack>
                        ) : (
                            <Stack className="flex! flex-row! items-center! justify-between!" mt={4.5}>
                                <Stack>
                                    <TextIcon text="آدرس" className="text-sm!" startIcon={<LocationOnOutlinedIcon className="text-xl!" />} />
                                    <Typography fontWeight={500} className="text-lg!" mt={1} ml={3.3}>مشهد، خیابان امام رضا، بین امام رضا ۳۴ و ۳۶</Typography>
                                </Stack>
                                <Stack className="flex! flex-row! items-center! gap-4!">
                                    <Button variant="outlined" className="rounded-lg! text-black! text-sm!" startIcon={<DirectionsCarOutlinedIcon color="primary" />}>ترانسفر فرودگاهی (رایگان)</Button>
                                    <Button variant="outlined" className="rounded-lg! text-black! text-sm!" startIcon={<DirectionsBusFilledOutlinedIcon color="primary" />}>ترانسفر راه آهن (رایگان)</Button>
                                </Stack>
                            </Stack>
                        )}


                        <div className="md:hidden! w-full border-b-6! border-slate-200! my-6!" />

                        <Divider variant="fullWidth" orientation="horizontal" sx={{ my: 3 }} className="hidden! md:block!" />

                        {/* Cost Details */}
                        <Typography className="text-lg! md:text-xl! font-semibold! px-4! md:px-0!">جزئیات هزینه</Typography>
                        {isMobile ? (
                            <Stack className="flex! flex-col! gap-3! mt-3! px-4! md:px-0!">
                                {priceDetails.map((item) => (
                                    <Stack key={item.label} className="flex! flex-row! justify-between! items-center!">
                                        <Typography variant="body2" color="text.secondary" fontWeight={500} className="text-xs!">
                                            {item.label}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            fontWeight={500}
                                            className={`text-sm! ${item.highlight ? "text-orange-500 font-semibold!" : "text-black"}`}
                                        >
                                            {item.value}
                                        </Typography>
                                    </Stack>
                                ))}
                            </Stack>
                        ) : (
                            <Stack className="flex! flex-row! justify-between!" mt={2.5}>
                                {priceDetails.map((item) => (
                                    <Stack key={item.label} textAlign="left" spacing={.5}>
                                        <Typography variant="body2" color="text.secondary" fontWeight={500} className=" !">
                                            {item.label}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            fontWeight={500}
                                            className={`text-xl! ${item.highlight ? "text-orange-500 font-semibold!" : "text-black"}`}
                                        >
                                            {item.value}
                                        </Typography>
                                    </Stack>
                                ))}
                            </Stack>
                        )}

                        <Divider variant="fullWidth" orientation="horizontal" sx={{ my: 3 }} />

                        {/* Terms and Conditions */}
                        <Typography className="text-lg! md:text-xl! font-semibold! px-4! md:px-0!" mb={3.5}>قوانین و مقررات</Typography>
                        <Stack className="px-4! md:px-0!">
                            <RulesList />
                        </Stack>

                        {/* Action Buttons */}
                        <Stack className="hidden! md:flex! flex-row! gap-8! w-full!" mt={4}>
                            <Button className="w-full! text-xl! text-black!" variant="outlined" startIcon={<LocalPrintshopIcon className="text-2xl!" />}>چاپ بلیط</Button>
                            <Button className="w-full! text-xl! text-white!" variant="contained" sx={{ backgroundColor: "primary.main" }}>دانلود بلیط</Button>
                        </Stack>


                        {/* ------------------------ */}


                    </Stack>
                </Stack>

                <Stack className="md:hidden!">
                    <FixedBottomButton py={1.2}>
                        <Button className="w-full! text-base! text-white! py-6!" variant="contained" sx={{ backgroundColor: "primary.main" }}>دانلود بلیط</Button>
                        <Button className="w-full! text-base! text-black! py-6!" variant="outlined" startIcon={<LocalPrintshopIcon className="text-2xl!" />}>چاپ بلیط</Button>
                    </FixedBottomButton>
                </Stack>
                </Stack>
        </Container>
    );
}

function DashedDivider() {
    return (
        <Stack flex={1} position="relative" height="1px">
            <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-slate-300"></span>

            <div
                className="w-full h-[1px]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(to left, #D9DEE7 0 2px, transparent 10px, transparent 12px)",
                }}
            />

            <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-slate-300"></span>
        </Stack>

    );
}

function RulesList() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <ul className="pr-4 space-y-2" style={{ direction: "rtl", listStyle: "disc" }}>
            <li style={{ color: "#626E94" }}>
                <Typography sx={{ color: "#626E94" }} className={isMobile ? "text-xs!" : "text-sm!"}>
                    نیازی به پرینت و نشان دادن بلیط کاغذی نیست و با نشان دادن بارکد بلیط روی موبایل همراه خود
                    پذیرش می‌شوید.
                </Typography>
            </li>

            <li style={{ color: "#626E94" }}>
                <Typography sx={{ color: "#626E94" }} className={isMobile ? "text-xs!" : "text-sm!"}>
                    هر بلیط مختص یک نفر است و برای هر شخص باید بلیط جدا تهیه کنید.
                </Typography>
            </li>

            <li style={{ color: "#626E94" }}>
                <Typography sx={{ color: "#626E94" }} className={isMobile ? "text-xs!" : "text-sm!"}>
                    می‌توان بلافاصله بعد از خرید بلیط از آن استفاده کرد.
                </Typography>
            </li>

            <li style={{ color: "#626E94" }}>
                <Typography sx={{ color: "#626E94" }} className={isMobile ? "text-xs!" : "text-sm!"}>
                    برای خرید بلیط نهایت دقت را انجام دهید و توضیحات را کامل بخوانید. اگر می‌خواهید به هر
                    دلیلی بلیط خود را کنسل کنید، تا یک روز قبل از تاریخ شروع بلیط می‌توانید کنسلی را با
                    بازگشت مقداری از وجه انجام دهید.
                </Typography>
            </li>

            <li style={{ color: "#626E94" }}>
                <Typography sx={{ color: "#626E94" }} className={isMobile ? "text-xs!" : "text-sm!"}>
                    این سایت معتبر ضمانت می‌کند که اگر مجموعه‌ای زمانی به هر دلیلی تعطیل شود، وجه شما را کامل
                    بازگرداند.
                </Typography>
            </li>
        </ul>
    );
}
