import { Grid, Stack, Typography } from "@mui/material";

export default function ExploreSection() {
    return (
        <Stack className="w-full!">
            <Grid container className="md:p-5! p-4! rounded-3xl! items-center! justify-between! w-full! gap-5! md:gap-0! flex-col-reverse! md:flex-row!" sx={{ backgroundColor: "secondary.50" }}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography className="text-xl! md:text-4xl! font-semibold! md:font-bold! leading-9! md:leading-[60px]!">
                        <Typography color="text.secondary" className="text-sm! md:text-2xl! md:mb-5! mb-3!">کیش را بیشتر و بهتر بشناسید</Typography>

                        موقعیت مناطق مختلف{' '}
                        <span className="text-primary">جزیره</span>{" "}
                        <span className="text-secondary-500">کیش</span>{" "}
                        بر روی نقشه
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <img src="/images/general/map/sample-map.png" alt="map" className="h-[130px]! md:h-full! w-full! object-cover! rounded-2xl!" />
                </Grid>
            </Grid>

            <Stack className="mt-10!" spacing={4}>
                <Typography className="leading-7! text-sm! md:text-base!">
                    جزیره کیش با 90 کیلومتر مربع مساحت یکی از زیبا ترین جزایر خلیج فارس است که در 18 کیلومتری کرانه جنوبی ایران بین مختصات جغرافیایی 53 درجه و   53 دقیقه تا 54 درجه و 4 دقیقه طول شرقی از نصف النهار گرینویچ و 26 درجه و 29دقیقه تا 26 درجه و 35 دقیقه عرض شمالی واقع شده است.
                </Typography>

                <Typography className="leading-7! text-sm! md:text-base!">
                    طول جزیره کیش 15 کیلومتر در محور شرقی-غربی و پهنای آن 7 کیلومتر در محور شمالی جنوبی و تقریبابیضی شکل است.
                </Typography>

                <Typography className="leading-7! text-sm! md:text-base!">
                    فاصله کیش از راه دریا تا جزیره هندورابی 28 کیلومتر ،تا جزیره فارور 55 کیلومتر ،تا جزیره سیری 87 کیلومتر ، تا جزیره ابوموسی 177 کیلومتر ،تا قشم 225 کیلومتر ، تا بندر عباس 300 کیلومتر، تا چابهار 675 تا بوشهر740   کیلومتر و تا دبی 200 کیلومتر فاصله کیش تا تهران از راه هوائی  1052 کیلومتر و از راه زمینی 1600 کیلومتر  فاصله کیش تا اصفهان نیز از راه زمینی 1200 کیلومتر است
                </Typography>

                <Typography className="leading-7! text-sm! md:text-base!">
                    کیش از طبیعتی زیبا و منحصر به فرد بر خوردار است . سواحل آرام با ماسه های   مرجانی آب زلال دریا که شفافیت کم نظیر آن امکان مشاهده انواع آبزیان را در عمق چند متری مقدور می سازد پوشش گیاهی مناسب و سر سبزی و طراوت آن به ویژه در هفت ماه از سال چشم اندازی زیبا و تماشائی به آن بخشیده است که سالانه حدود یک میلیون نفر از دوستداران طبیعت و دریا را به سوی خود جلب   می کند.
                </Typography>

                <Typography className="leading-7! mt-16! text-sm! md:text-base!">
                    <Typography className="text-lg! font-semibold! mb-4!">موقعیت زمین شناسی جزیره کیش</Typography>
                    از نظر پستی و بلندی جزیرهء کیش تقریبا مسطح است. ارتفاع نسبی جزیره از سطح دریا حدود 32 متر است و مرتفع ترین نقطهء آن که در شرق جزیره واقع است حدود 45 متر از سطح درِیا ارتفاع دارد.از این رو جهت کرانه ها با شیب نسبتا ملایمی به دریا منتهی میشود.
                </Typography>

                <Typography className="leading-7! text-sm! md:text-base!">
                    جزیره کیش دارای ساختار مرجانی است . جزایر مرجانی معمولا بر اثر گسترش انواع مرجانها و مواد آلی دیگر بر روی طاقدیس ها گنبدهای نمکی و مواد آتشفشانی تشکیل می شوند
                </Typography>
            </Stack>
        </Stack>
    )
}