import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";

const info = [
  {
    image: "/images/general/about-us/money.png",
    title: "آژانس آسمان گشت کیش",
    description:
      "آژانس آسان گشت کیش، آژانس رسمی و مورد تایید سازمان گردشگری و میراث فرهنگی شهر کیش به شماره ثبت 12102 می باشد. (استعلام صحت ثبت در سامانه ثبت اسناد و املاک کشور) - (اسکن اسناد در انتهای صفحه پیوست شده است) آژانس آسان گشت کیش دارنده مجوزهای بند الف و ب سازمان میراث فرهنگی کیش به شماره های 14004852997 و پروانه فعالیت می باشد که اسناد آن در زیر پیوست گردیده است."
  },
  {
    image: "/images/general/about-us/grow.svg",
    title: "برتری ما نسبت به دیگران",
    description:
      "برخلاف سامانه‌های رزرواسیون سراسری که صرفاً معرفی و ثبت رزرو انجام می‌دهند، کیش لندیار تنها مرکز تخصصی رزرواسیون هتل‌های کیش در کشور است. با داشتن دفتر مرکزی در جزیره و بازدیدهای دوره‌ای از هتل‌های طرف قرارداد، اطلاعات دقیق و واقعی از کیفیت خدمات، موقعیت مکانی، امکانات رفاهی، نظافت، غذا و دیگر جزئیات هر هتل را در اختیار مسافران قرار می‌دهیم.  برای دریافت مشاوره تخصصی و انتخاب بهترین گزینه با ما تماس بگیرید: ۰۵۱-۳۸۵۸۱۵۱۶"
  },
  {
    image: "/images/general/about-us/grow.svg",
    title: "دارای رنکینگ بالا",
    description:
      "این سایت دارای رنکینگ بالا در سایت معتبر الکسا و همچنین جستجوگر گوگل می باشد، که این رنکینگ بالا تنها به واسطه تلاش صادقانه خادمین شما در آژانس آسان گشت کیش و همچنین اعتماد شما مسافران به دست آمده است."
  },
  {
    image: "/images/general/about-us/money.png",
    title: "رزرو تمامی هتل های کیش با تخفیف",
    description:
      "ین سایت با تمامی هتل هایی که معرفی شده اند دارای تفاهم نامه همکاری بوده و همچنین در بسیاری از این هتل ها تعدادی از اتاق ها بصورت گارانتی (اجاره یک یا چند اتاق بصورت سالیانه در آن هتل) در اختیار این مرکز می‌باشد، لذا قیمت های ارائه شده در زمان غیرپیک دارای تخفیف قابل ملاحظه ای می باشند."
  },
  {
    image: "/images/general/about-us/money.png",
    title: "واحد ارتباط با مشتریان",
    description:
      "واحد CRM (واحد ارتباط با مشتریان) سایت رزرواسیون کیشلندیار هتل از لحظه رزرو هتل توسط مسافران در مبدا، تا لحظه خروج میهمانان از کیش همواره پشتیبان و در کنار مسافران گرامی قرار دارند و هرگونه مشکل، ابهام و درخواست احتمالی مسافران را در صورت توان رفع کرده و موجبات اقامتی ایمن و همراه با آرامش را برای شما عزیزان فراهم می آورد."
  },
  {
    image: "/images/general/about-us/grow.svg",
    title: "باشگاه مشتریان",
    description:
      "شما با رزرو هر هتل از سایت کیشلندیار بطور خودکار وارد باشگاه مشتریان ما خواهید شد و شماره کدملی شما به عنوان نام کاربری شما قرار داده خواهد شد، که در اینصورت شما با هر بار رزرو صاحب امتیاز می شوید که می توانید امتیازات بدست آمده را برای تخفیف در رزروهای بعدی خود مورد استفاده قرار دهید."
  },
];

export default function InfoSection() {
  return (
    <Box>
      <Grid container spacing={2}>

        {info.map((item, i) => (
          <Grid
            size={{ sm: 12, lg: 6 }}
            className="flex! lg:flex-col! justify-between! items-center! lg:p-5! !px-4 border-1! border-slate-200! md:rounded-2xl! rounded-lg! lg:gap-5! py-5! "
          >
            <InformationCard
              key={i}
              image={item.image}
              title={item.title}
              description={item.description}
              textNowrap={false}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}


export function InformationCard({
  image,
  title,
  description,
}: any) {
  return (
    <Stack className="flex-col! lg:!gap-4  gap-2! h-fit!">
      <Grid className="!flex items-center flex-col! lg:!gap-4  gap-4! h-fit!">
        <Stack className="relative! h-12! w-12! reveal">
          <Image src={image} alt={title} fill />
        </Stack>

        {/* Title */}
        <Typography className={`text-center! font-semibold! text-lg! mb-1! reveal-down`}>
          {title}
        </Typography>

      </Grid>
      {/* Icon */}


      <Typography className={`leading-[27px]! md:leading-[40px]! text-center! text-slate-500! reveal-down !text-xs lg:!text-lg`}>
        {description}
      </Typography>
    </Stack>
  );
}

