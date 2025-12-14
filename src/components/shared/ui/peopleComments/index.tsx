"use client"
import {
    Box, Button, Grid, LinearProgress, Stack, Theme, styled, Typography, Divider, Rating, Card, Chip, IconButton,
    Avatar,
} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TextIcon from "../../textIcon";
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import * as React from "react";
import {

} from "@mui/material";
import { ThumbUpAltOutlined, ThumbDownAltOutlined } from "@mui/icons-material";
import RecommendIcon from "@mui/icons-material/Recommend";
import { RatingModal } from "@/components/shared/modal/ratingModal";


const hotelRatings = [
    {
        title: "قیمت",
        value: 1,
        color: "error.main",
    },
    {
        title: "امکانات هتل",
        value: 3,
        color: "warning.main",
    },
    {
        title: "بهداشت",
        value: 4,
        color: "success.main",
    },
    {
        title: "کیفیت اتاق‌ها",
        value: 5,
        color: "success.main",
    },
    {
        title: "موقعیت مکانی",
        value: 4,
        color: "success.main",
    },

];

const hotelSummary = {
    average: 4,
    max: 5,
    totalReviews: 2333,
    recommendedBy: "89%", // percent
    stars: 3
};





type Review = {
    rating: number;
    title: string;
    name: string;
    date: string;
    nights: string;
    verified: string;
    review: string;
    likes: number;
    disLikes: number;
    adminAvatar?: string | null;
    adminName?: string | null;
    adminMessage?: string | null
};

const reviews: Review[] = [
    {
        rating: 5,
        title: "خدمات هتل به شدت عالی بود.",
        name: "علیرضا رودی",
        date: "دوشنبه ۱۵ تیر ۱۴۰۳",
        nights: "۷ شب اقامت",
        verified: "خریدار",
        review:
            "سلام. اول از همه تمیزی و نو بودن و دسترسی عالیش. دوم صبحانه های بی نظیر. اما رسیدگی کارکنان خانه داری ضعیف‌. من اواخر بهمن اونجا بودم. یادمه رستوران شام نداشت با اسنپ از بیرون گرفتیم ولی چون فقط مسافرا با کارت اتاق میتونن بیان تو طبقات غذا مونده بود لابی هیچ کسم نمیاورد بالا میگفتن کار داریم . لابیش به حیاط راه پله داره و اسانسور یا مناسب سازی نداره برای ادمای مسن سخته. قسمت گردشگری ش یه کم از نظر هزینه رفت وامد کوتاهی کرد و ما یه سر مسیرو خودمون پرداخت کردیم.",
        likes: 12,
        disLikes: 2,
        adminAvatar: null,
        adminName: null,
        adminMessage: null
    },
    {
        rating: 3,
        title: "خدمات هتل به شدت عالی بود.",
        name: "علیرضا رودی",
        date: "دوشنبه ۱۵ تیر ۱۴۰۳",
        nights: "۷ شب اقامت",
        verified: "خریدار",
        review:
            "سلام. اول از همه تمیزی و نو بودن و دسترسی عالیش. دوم صبحانه های بی نظیر. اما رسیدگی کارکنان خانه داری ضعیف‌. من اواخر بهمن اونجا بودم. یادمه رستوران شام نداشت با اسنپ از بیرون گرفتیم ولی چون فقط مسافرا با کارت اتاق میتونن بیان تو طبقات غذا مونده بود لابی هیچ کسم نمیاورد بالا میگفتن کار داریم . لابیش به حیاط راه پله داره و اسانسور یا مناسب سازی نداره برای ادمای مسن سخته. قسمت گردشگری ش یه کم از نظر هزینه رفت وامد کوتاهی کرد و ما یه سر مسیرو خودمون پرداخت کردیم.",
        likes: 3,
        disLikes: 1,
        adminAvatar: "",
        adminName: "مهلا میرزایی (پشتیبان سایت)",
        adminMessage: "بسیار سپاسگذاریم که با نظرات با مهرتان باعث میشوید که بقیه کاربران در انتخاب هتل خود با دقت عمل کنند و این برای ما و بقیه اعضای سایت بسیار با ارزش است"
    },
    {
        rating: 1,
        title: "خدمات هتل به شدت عالی بود.",
        name: "علیرضا رودی",
        date: "دوشنبه ۱۵ تیر ۱۴۰۳",
        nights: "۷ شب اقامت",
        verified: "خریدار",
        review:
            "اولین موردی که در این هتل به شدت من رو به فکر یددصثذهعصثذعهذزصثزذصثزهغص",
        likes: 3,
        disLikes: 1,
    },
];



export default function PeopleComments() {
    const [open, setOpen] = React.useState<boolean>(false);
    return (
        <Stack className="rounded-2xl! md:border-1! border-slate-200! p-4!">
            <Stack className="flex! flex-row! justify-between! items-center!">
                <Typography className="font-bold! md:font-semibold! text-base! md:text-3xl!">نظرات کاربران</Typography>
                <Button variant="contained" startIcon={<AddCircleOutlineIcon />} className="text-sm! p-3! md:text-base! rounded-lg! md:rounded-xl! text-white!" onClick={() => setOpen(!open)}>افزودن دیدگاه جدید</Button>
            </Stack>
            <RatingModal open={open} setOpen={setOpen} />
            <Stack sx={{ backgroundColor: "background.paper" }} className="rounded-xl! px-4! py-6!" mt={3}>
                <Grid container>
                    <Grid className="hidden! md:flex!" size={{ xs: 12, md: 4 }} pr={2} >
                        <Stack className="w-full! h-full! relative!">
                            <VerticalDashedDivider
                                className="absolute! left-0! hidden! md:inline!"
                                thickness={2}       // line width
                                length={140}        // total height (px or "%")
                                dash={6}            // dash height
                                gap={6}             // space between dashes
                                lineColor={"#e1e6f0"}
                            />

                            <Stack className="items-center! justify-center flex! flex-col! h-full! gap-5!">
                                <Stack className="flex! flex-row! gap-5! items-center">
                                    <Typography className="font-semibold! text-2xl!">{hotelSummary.average + "/" + hotelSummary.max} از {hotelSummary.max}</Typography>
                                    <TextIcon text={`پیشنهاد شده توسط ${hotelSummary.recommendedBy} کاربران`} sx={{ color: "success.main" }} startIcon={<FavoriteIcon />} />
                                </Stack>
                                <Stack className="flex! flex-row! gap-3! ">
                                    <Rating
                                        // name="hover-feedback"
                                        value={hotelSummary.stars}
                                        precision={0.5}
                                        readOnly
                                        className="text-3xl!"
                                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} className="text-3xl!" />}
                                    />
                                    <Typography className="text-lg!" color="text.secondary">{`از مجموع ${hotelSummary.totalReviews} دیدگاه`}</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Grid>

                    <Grid size={{ xs: 12, md: 8 }}>
                        <Grid container columns={12} spacing={4}>
                            {/* Right column (first 3 items) */}
                            <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                                {hotelRatings.slice(0, 3).map((item) => {
                                    return (
                                        <Stack
                                            key={item.title}
                                            direction="row"
                                            alignItems="center"
                                            spacing={1.5}
                                        // mb={1.2}
                                        >
                                            {/* Title takes more space */}
                                            <Typography color="text.secondary" sx={{ flex: 2 }}>{item.title}</Typography>

                                            {/* Progress bar has fixed, equal width for all */}
                                            <Box sx={{ flex: 3, display: "flex", alignItems: "center" }}>
                                                <LinearProgress
                                                    variant="determinate"
                                                    value={(item.value / 5) * 100}
                                                    sx={{
                                                        width: "100%",
                                                        height: 8,
                                                        borderRadius: 5,
                                                        bgcolor: "grey.200",
                                                        "& .MuiLinearProgress-bar": {
                                                            bgcolor:
                                                                item.value >= 4
                                                                    ? "#009F70" // green
                                                                    : item.value <= 1
                                                                        ? "error.main" // red
                                                                        : "primary.main", // blue
                                                        },
                                                    }}
                                                />

                                            </Box>
                                            {/* Value */}
                                            <Typography sx={{ flexShrink: 0, pl: 1 }}>{item.value}</Typography>
                                        </Stack>
                                    )
                                })}
                            </Grid>

                            {/* Left column (remaining items) */}
                            <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                                {hotelRatings.slice(3).map((item) => (
                                    <Stack
                                        key={item.title}
                                        direction="row"
                                        alignItems="center"
                                        spacing={1.5}
                                    // mb={1.2}
                                    >
                                        {/* Title takes more space */}
                                        <Typography sx={{ flex: 2 }} color="text.secondary">{item.title}</Typography>

                                        {/* Progress bar has fixed, equal width for all */}
                                        <Box sx={{ flex: 3, display: "flex", alignItems: "center" }}>
                                            <LinearProgress
                                                variant="determinate"
                                                value={(item.value / 5) * 100}
                                                sx={{
                                                    width: "100%",
                                                    height: 8,
                                                    borderRadius: 5,
                                                    bgcolor: "grey.200",
                                                    "& .MuiLinearProgress-bar": {
                                                        bgcolor:
                                                            item.value >= 4
                                                                ? "#009F70" // green
                                                                : item.value <= 1
                                                                    ? "error.main" // red
                                                                    : "primary.main", // blue
                                                    },
                                                }}
                                            />

                                        </Box>

                                        {/* Value */}
                                        <Typography sx={{ flexShrink: 0, pl: 1 }}>{item.value}</Typography>
                                    </Stack>
                                ))}
                            </Grid>
                        </Grid>

                    </Grid>

                    <Grid className="md:hidden!" size={{ xs: 12, md: 4 }} pr={2} >
                        <Stack className="w-full! h-full! relative!">
                            <VerticalDashedDivider
                                className="absolute! left-0! hidden! md:inline!"
                                thickness={2}       // line width
                                length={140}        // total height (px or "%")
                                dash={6}            // dash height
                                gap={6}             // space between dashes
                                lineColor={"#e1e6f0"}
                            />

                            <Stack className="items-center! justify-center flex! flex-col! h-full! gap-5! mt-4!">
                                <Stack className="flex! flex-row! gap-5! items-center">
                                    <Typography className="font-semibold! text-sm! text-nowrap!">{hotelSummary.average + "/" + hotelSummary.max} از {hotelSummary.max}</Typography>
                                    <TextIcon className="text-sm!" text={`پیشنهاد شده توسط ${hotelSummary.recommendedBy} کاربران`} sx={{ color: "success.main" }} startIcon={<FavoriteIcon className="text-lg!" />} />
                                </Stack>
                                <Stack className="flex! flex-row-reverse! gap-3! items-center!">
                                    <Rating
                                        // name="hover-feedback"
                                        value={hotelSummary.stars}
                                        precision={0.5}
                                        readOnly
                                        className="md:text-3xl!"
                                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} className="md:text-3xl!" />}
                                    />
                                    <Typography className="text-xs! md:text-lg! text-nowrap!" color="text.secondary">{`از مجموع ${hotelSummary.totalReviews} دیدگاه`}</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>

            {/* reviews */}
            <Stack mt={3}>
                <ReviewsList />
            </Stack>
        </Stack >
    )
}


function ratingColor(r: number) {
    if (r >= 4) return "#009F70"; // green
    if (r >= 3) return "#F59E0B"; // amber
    return "#EF4444"; // red
}


function ReviewCard({ r }: { r: Review }) {
    return (
        <Stack
            className="w-full border-1! border-slate-200! rounded-xl!"
            sx={{
                p: { xs: 2, md: 3 },
            }}

        >
            {/* Header: rating badge + title + like button */}
            <Box className="flex flex-col! md:flex-row! items-start justify-between gap-3">
                <Stack direction="row" spacing={1.5} className="items-center">
                    <Box
                        sx={{
                            bgcolor: ratingColor(r.rating),
                            color: "#fff",
                            fontWeight: 700,
                            fontSize: 22,
                            textAlign: "center",
                        }}
                        className="w-10! h-12! md:h-10! flex! items-center! justify-center! rounded-lg!"
                    >
                        {r.rating}
                    </Box>

                    <Typography className="text-base! md:text-xl!" fontWeight={500}>
                        <Typography className="text-sm! md:hidden! mb-2!" color="text.secondary" fontWeight={500}>
                            {r.name}
                        </Typography>
                        {r.title}
                    </Typography>
                </Stack>

                <Stack
                    className="flex! flex-row-reverse! md:flex-row! justify-between! gap-5! items-center!"
                >
                    <Typography className="text-sm! hidden! md:inline!" color="text.secondary" fontWeight={500}>
                        {r.name}
                    </Typography>
                    <Stack className="flex! flex-row! gap-5!" sx={{ backgroundColor: "#f7f9fc" }}>
                        <Typography className="text-xs! md:text-sm! rounded-lg! p-2! text-nowrap!" color="text.secondary">
                            {r.verified} <span className="px-1! md:px-2!">.</span> <span className="text-black!"> {r.nights}</span>
                        </Typography>
                    </Stack>


                    <Typography className="text-xs! md:text-base!" color="text.secondary">
                        {r.date}
                    </Typography>
                </Stack>
            </Box>

            {/* Meta row */}


            {/* Body */}
            <Typography color="text.secondary" className="text-sm! md:text-base! leading-6! md:leading-8!" sx={{ mt: 2.5, lineHeight: 2 }}>
                {r.review}
            </Typography>


            {/* admin reaction */}
            {r.adminMessage && (
                <Stack className="h-[200px]! w-full! hidden! md:flex! flex-row! mr-10!">
                    <Stack className="w-[10%]!">
                        <img src="/images/new/dash-review.svg" alt="" className="w-full! h-[50%] mt-4! mr-3!" />
                    </Stack>
                    <Stack className="flex! flex-col! w-[80%]! relative! top-24! gap-2!">
                        <Stack className="flex! flex-row! items-center! gap-2!">
                            <Avatar src={""} variant="rounded" />
                            <Typography fontWeight={500} className="text-lg!">
                                {r.adminName}
                            </Typography>
                        </Stack>
                        <Typography color="text.secondary">
                            {r.adminMessage}
                        </Typography>
                    </Stack>
                </Stack>
            )}

            {/* Suggestion */}
            <Stack className="flex! flex-row! justify-between! items-center!" mt={3}>
                <Button variant="text" className="p-0! w-fit! text-sm!" sx={{ color: "#009F70" }} startIcon={<RecommendIcon />}>پیشنهاد میکنم</Button>
                <Stack className="flex! flex-row! ">
                    <Button variant="text" className="w-fit! p-0!" sx={{ color: '#626e94' }} endIcon={<ThumbDownAltOutlined fontSize="small" />}>{r.disLikes}</Button>
                    <Button variant="text" className="w-fit! p-0!" sx={{ color: '#626e94' }} endIcon={<ThumbUpAltOutlined fontSize="small" />}>{r.likes}</Button>
                </Stack>
            </Stack>


            {/* admin reaction */}
            {r.adminMessage && (
                <Stack className=" w-full!  flex! md:hidden! flex-row! gap-4!">
                    <Stack className="">
                        <img src="/images/new/dash-review-mobile.svg" alt="" className="w-full! h-[50%] mt-4! mr-1" />
                    </Stack>
                    <Stack className="flex! flex-col! w-[80%]! relative! mt-8 gap-2!">
                        <Stack className="flex! flex-row! items-center! gap-2!">
                            <Avatar src={""} variant="rounded" />
                            <Typography fontWeight={500}>
                                {r.adminName}
                            </Typography>
                        </Stack>
                        <Typography className="text-sm! text-slate-400!">
                            {r.adminMessage}
                        </Typography>
                    </Stack>
                </Stack>
            )}
        </Stack>
    );
}

function ReviewsList() {
    return (
        <Box dir="rtl" className="w-full mx-auto ">
            <Stack spacing={2.5}>
                {reviews.map((r, i) => (
                    <ReviewCard key={i} r={r} />
                ))}
            </Stack>
        </Box>
    );
}

type Props = {
    /** thickness in px (line width) */
    thickness?: number;
    /** total length (px or %); default 100% */
    length?: number | string;
    /** dash length along the vertical axis (px) */
    dash?: number;
    /** gap between dashes (px) */
    gap?: number;
    /** color or function(theme) => color */
    lineColor?: string | ((theme: Theme) => string);
};

export const VerticalDashedDivider = styled("span", {
    shouldForwardProp: (prop) =>
        !["thickness", "length", "dash", "gap", "lineColor"].includes(
            String(prop)
        ),
})<Props>(({ theme, thickness = 2, length = "100%", dash = 6, gap = 4, lineColor }) => {
    const color =
        typeof lineColor === "function"
            ? lineColor(theme)
            : lineColor || theme.palette.divider;

    // Use repeating-linear-gradient to simulate a dashed stroke with precise dash/gap
    return {
        display: "inline-block",
        width: thickness,
        height: typeof length === "number" ? `${length}px` : length,
        backgroundImage: `repeating-linear-gradient(
      to bottom,
      ${color},
      ${color} ${dash}px,
      transparent ${dash}px,
      transparent ${dash + gap}px
    )`,
        borderRadius: thickness / 2, // rounded caps feel nicer
    };
});
