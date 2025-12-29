import { Grid, Stack, Typography } from "@mui/material";
import { InformationCard } from "../../about-us/_components/InfoSection";

const step = [
    {
        image: "/images/general/about-us/grow.svg",
        title: "انتخاب تامین کننده",
        description:
            "در گام اول، تأمین‌کننده تسهیلات مناسب رو با توجه به مبلغ و زمان بازپرداخت از بین گزینه‌های کیش لندیار انتخاب کن."
    },
    {
        image: "/images/general/about-us/money.png",
        title: "تکمیل مدارک و دریافت اعتبار",
        description:
            "در سایت یا اپ تأمین‌کننده ثبت‌نام کرده، مدارک را طبق راهنما تکمیل و پس از بررسی، اعتبار خود را دریافت کنید."
    },
    {
        image: "/images/general/about-us/grow.svg",
        title: "انتخاب تور یا سایر خدمات",
        description:
            "تورهای داخلی و خارجی لندیار را در بیش از ۳۰ مسیر به‌صورت آنلاین انتخاب کرده و تا مرحله پرداخت پیش ببرید."
    },
    {
        image: "/images/general/about-us/money.png",
        title: "پرداخت اعتباری و صدور بلیط",
        description:
            "با انتخاب تأمین‌کننده مالی و استفاده از اعتبار تسهیلات دریافتی، پرداخت را ثبت کنید و رسیدهای سفر را به‌صورت آنلاین و قطعی دریافت نمایید."
    },
]

export default function StepByStepSection() {
    return (
        <Stack>
            <Stack spacing={3} className="items-center! justify-center! w-full!">
                <Typography variant="h1" className="text-2xl! md:text-5xl! font-bold!">قدم‌به‌قدم تا گرفتن تسهیلات سفر</Typography>
                <Typography color="secondary.main" variant="body1" className="text-base! md:text-xl!">
                    با شرایط خرید اقساطی، دیگه نگران هزینه نباش.
                </Typography>
            </Stack>

                <Grid container spacing={2} className="mt-8!">
                    {step.map((item, index) => (
                        <Grid size={{ xs: 12, md: 3 }} key={index + "StepByStep"} >
                            <InformationCard image={item.image} title={item.title} description={item.description} />
                        </Grid>
                    ))}
                </Grid>
        </Stack>
        )
    } 
