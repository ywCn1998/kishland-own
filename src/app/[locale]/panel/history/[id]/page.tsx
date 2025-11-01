"use client";

import { Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import BlogCard from "@/components/shared/cards/blogCard";
import TextIcon from "@/components/shared/textIcon";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import DirectionsBusFilledOutlinedIcon from '@mui/icons-material/DirectionsBusFilledOutlined';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';


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
    const router = useRouter()

    return (
        <Stack>
            <Stack className="border-1! border-slate-200! py-4 px-6! rounded-2xl! flex! flex-row! justify-between! items-center!">
                <Typography className="font-semibold! text-base!">
                    جزئیات سفارش {id}
                </Typography>
                <Button onClick={() => router.back()} variant="text" className="p-1! text-base!" sx={{ color: "text.secondary" }} endIcon={<KeyboardArrowLeftOutlinedIcon />}>
                    برگشت
                </Button>
            </Stack>

            <Stack className="border-1! border-slate-200! rounded-2xl! p-4!">
                <Stack className="flex! flex-row-reverse! justify-between!">
                    {details.map((item) => (
                        <Stack key={item.label} textAlign="left" spacing={1}>
                            <Typography className="text-sm!" color="text.secondary">{item.label}</Typography>
                            <Typography fontWeight={500}>{item.value}</Typography>
                        </Stack>
                    ))}
                </Stack>
                <Divider variant="fullWidth" orientation="horizontal" sx={{ my: 2 }} />

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
                    <Grid size={7}></Grid>
                </Grid>
                {/* ------------------------- */}

                <Stack mt={3}>
                    <Typography variant="h4" fontWeight={600} mb={2}>هتل بین المللی قصر مشهد</Typography>
                    <Typography color="text.secondary" className="text-lg!" fontWeight={500}>هتل بین المللی قصر مشهد/ سه ستاره / 1 شب اقامت</Typography>


                    <Stack>
                        <Typography color="text.secondary" fontWeight={500} className="text-lg! text-center!" mt={2} mb={1}>2 شب</Typography>


                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                            width="100%"
                            gap={2}
                        >
                            <Typography variant="body2" color="text.secondary" fontWeight={500}>
                                تاریخ خروج
                            </Typography>

                            <DashedDivider />

                            <Typography variant="body2" color="text.secondary" fontWeight={500}>
                                تاریخ ورود
                            </Typography>
                        </Stack>

                        {/* ----------- */}
                        <Stack className="flex! flex-row! justify-between! items-center!" mt={1.5}>
                            <Typography className="text-xl! font-semibold!">جمعه ۲۶ مرداد</Typography>
                            <Typography className="text-xl! font-semibold!">یکشنبه ۲۸ مرداد</Typography>
                        </Stack>
                        <Stack className="flex! flex-row! justify-between! items-center!" mt={1.5}>
                            <Typography className="text-base" color="text.secondary">ساعت 14:۰۰</Typography>
                            <Typography className="text-base" color="text.secondary">ساعت 14:۰۰</Typography>
                        </Stack>
                        {/* ----------- */}


                        {/* ----------- */}
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
                        {/* ----------- */}

                        <Divider variant="fullWidth" orientation="horizontal" sx={{ my: 3 }} />

                        {/* ------------------------ */}
                        <Typography className="text-xl! font-semibold!">جزئیات هزینه</Typography>
                        <Stack className="flex! flex-row! justify-between!" mt={2.5}>
                            {priceDetails.map((item) => (
                                <Stack key={item.label} textAlign="left" spacing={.5}>
                                    <Typography variant="body2" color="text.secondary" fontWeight={500} className=" !">
                                        {item.label}
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        fontWeight={500}
                                        className={`text-xl! ${item.highlight ? "text-orange-500 font-semibold!" : "text-black"
                                            }`}
                                    >
                                        {item.value}
                                    </Typography>
                                </Stack>
                            ))}
                        </Stack>
                        {/* ------------------------ */}

                        <Divider variant="fullWidth" orientation="horizontal" sx={{ my: 3 }} />

                        {/* ------------------------ */}
                        <Typography className="text-xl! font-semibold!" mb={3.5}>قوانین و مقررات</Typography>

                        <RulesList />
                        <Stack className="flex! flex-row! gap-8! w-full!" mt={4}>
                            <Button className="w-full! text-xl! text-black!" variant="outlined" startIcon={<LocalPrintshopIcon className="text-2xl!" />}>چاپ بلیط</Button>
                            <Button className="w-full! text-xl! text-white!" variant="contained" sx={{ backgroundColor: "" }}>دانلود بیلط</Button>
                        </Stack>

                        {/* ------------------------ */}


                    </Stack>
                </Stack>

            </Stack>
        </Stack>
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
    return (
        <ul className="pr-4 space-y-2" style={{ direction: "rtl", listStyle: "disc" }}>
            <li style={{ color: "#626E94" }}>
                <Typography sx={{ color: "#626E94" }}>
                    نیازی به پرینت و نشان دادن بلیط کاغذی نیست و با نشان دادن بارکد بلیط روی موبایل همراه خود
                    پذیرش می‌شوید.
                </Typography>
            </li>

            <li style={{ color: "#626E94" }}>
                <Typography sx={{ color: "#626E94" }}>
                    هر بلیط مختص یک نفر است و برای هر شخص باید بلیط جدا تهیه کنید.
                </Typography>
            </li>

            <li style={{ color: "#626E94" }}>
                <Typography sx={{ color: "#626E94" }}>
                    می‌توان بلافاصله بعد از خرید بلیط از آن استفاده کرد.
                </Typography>
            </li>

            <li style={{ color: "#626E94" }}>
                <Typography sx={{ color: "#626E94" }}>
                    برای خرید بلیط نهایت دقت را انجام دهید و توضیحات را کامل بخوانید. اگر می‌خواهید به هر
                    دلیلی بلیط خود را کنسل کنید، تا یک روز قبل از تاریخ شروع بلیط می‌توانید کنسلی را با
                    بازگشت مقداری از وجه انجام دهید.
                </Typography>
            </li>

            <li style={{ color: "#626E94" }}>
                <Typography sx={{ color: "#626E94" }}>
                    این سایت معتبر ضمانت می‌کند که اگر مجموعه‌ای زمانی به هر دلیلی تعطیل شود، وجه شما را کامل
                    بازگرداند.
                </Typography>
            </li>
        </ul>
    );
}
