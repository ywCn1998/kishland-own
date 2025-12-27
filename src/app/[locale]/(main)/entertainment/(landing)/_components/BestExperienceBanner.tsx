import ImgTextGrid from "@/components/shared/ui/banner/ImageAndText";
import { Button, Stack, Typography } from "@mui/material";
import GoldenText from "@/components/shared/ui/GoldenText";

const buttons = [
  {
    id: 1,
    image: "/images/entertainment/landing/supenter.png",
    text: "پشتیبانی 24 ساعته",
  },
  {
    id: 2,
    image: "/images/entertainment/landing/packenter.png",
    text: "پکیج‌های اقامتی",
  },
  {
    id: 3,
    image: "/images/entertainment/landing/jobenter.png",
    text: "موقعیت استثانیی",
  },
];

export default function BestExprienceBannerSection() {
  return (
    <ImgTextGrid
      imgUrl="/images/best-experience-banner.png"
      childrenGridSIze={{ xs: 12, lg: 7 }}
      imgGridSIze={{ xs: 12, lg: 5 }}
      height={{ xs: 1100, lg: 500 }}
    >
      <Typography className="text-xs! md:text-lg! text-slate-400! mb-3!">
        🏝️ در قلب جزیرهٔ رویایی کیش، هتل‌هایی منتخب و منحصر به فرد فقط برای شما!
      </Typography>
      <Typography
        variant="h3"
        className="text-2xl! md:text-5xl! mb-5! leading-[50px]! md:leading-[80px]!"
      >
        کیش لندیار، تجربه‌ای بی‌نظیر از بهترین {/* <div> */}
        <GoldenText
          text="تفریحات کیش "
          bgColor="skyBlue"
          isTopThreeAttention
          textColor="secondary"
          attentionClass="left-[-10px]! top-[-5px]! hidden! md:block!"
          bgColorSx={{ bottom: 20 }}
          bgWidth="100%"
        />
        {/* <Image src="/images" alt="attention" width={10} height={10}/> */}
        {/* </div> */}
      </Typography>
      <Typography className="text-base! md:text-lg! mb-10! leading-[40px]!">
        کیش لندیار، انتخابی ممتاز برای تجربه مهیج‌ترین و متنوع‌ترین تفریحات کیش!
        از تفریحات آبی و گشت‌وگذارهای جذاب تا سافاری، کنسرت و رستوران‌های
        موزیک‌دار — با بهترین امکانات، حرفه‌ای‌ترین خدمات و موقعیت‌های استثنایی،
        لحظاتی فراموش‌نشدنی در زیباترین جزیره ایران برایتان می‌سازیم.
        خاطره‌سازترین لحظات عمرتان را با کیش لندیار رقم بزنید!
      </Typography>
      <Stack className="flex! flex-row! gap-8! items-center!">
        {buttons.map((button) => (
          <Stack
            key={button.id}
            className={`w-4/12!  md:border-1!   md:border-slate-200! rounded-2xl! p-1! md:p-3! md:flex-row! flex-col! text-nowrap! items-center! text-center! md:gap-2! gap-4! justify-center!`}
          >
            <img
              src={button.image}
              alt={button.text}
              className="md:w-10! w-12!"
            />
            <Typography className="text-xs! md:text-base! font-medium!" >
              {button.text}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </ImgTextGrid>
  );
}
