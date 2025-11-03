import ImgTextGrid from "@/components/shared/_components/banner/ImageAndText";
import { Button, Stack, Typography } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import StadiumIcon from "@mui/icons-material/Stadium";
import GoldenText from "@/components/shared/_components/GoldenText";

export default function BestExprienceBannerSection() {
  return (
    <ImgTextGrid
      imgUrl="/images/best-experience-banner.png"
      childrenGridSIze={{ xs: 12, lg: 7 }}
      imgGridSIze={{ xs: 12, lg: 5 }}
      height={{ xs: 2000, lg: 500 }}
    >
      <Typography className="text-xs! md:text-lg! text-slate-400! mb-3!">
        🏝️ در قلب جزیرهٔ رویایی کیش، هتل‌هایی منتخب و منحصر به فرد فقط برای شما!
      </Typography>
      <Typography
        variant="h3"
        className="text-2xl! md:text-5xl! mb-5! leading-[50px]! md:leading-[80px]"
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
      <Stack className="flex! flex-row! gap-5! items-center!">
        <Stack
          alignItems="center"
          justifyContent="center"
          spacing={1.5}
          className="w-4/12 border-none! md:border-solid! border-slate-200 rounded-2xl!  p-1! md:p-4  md:flex-row! flex-col! text-nowrap!"
        >
          <img
            src={"/images/entertainment/landing/supenter.png"}
            className="block! md:hidden! w-12!"
          />

          <MessageIcon className="hidden! md:block!" />
          <Typography className="text-xs! md:text-lg!" fontWeight={500}>
            پشتیبانی 24 ساعته
          </Typography>
        </Stack>
        <Stack
          alignItems="center"
          justifyContent="center"
          spacing={1.5}
          className="w-4/12 border-none! md:border border-slate-200 rounded-2xl! p-1! md:p-4 md:flex-row! flex-col! text-nowrap!"
        >
          <img
            src={"/images/entertainment/landing/packenter.png"}
            className="block! md:hidden! w-12!"
          />

          <MessageIcon className="hidden! md:block!" />
          <Typography className="text-xs! md:text-lg!" fontWeight={500}>
            پکیج‌های اقامتی
          </Typography>
        </Stack>
        <Stack
          alignItems="center"
          justifyContent="center"
          spacing={1.5}
          className="w-4/12  md:border-1!` border-none! border-slate-200 rounded-2xl!  p-1! md:p-4 md:flex-row! flex-col! text-nowrap!  "
        >
          <img
            src={"/images/entertainment/landing/jobenter.png"}
            className="block! md:hidden! w-12!"
          />
          <MessageIcon className="hidden! md:block!  " />
          <Typography className="text-xs! md:text-lg!" fontWeight={500}>
            موقعیت استثانیی
          </Typography>
        </Stack>
      </Stack>
    </ImgTextGrid>
  );
}
