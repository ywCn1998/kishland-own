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
      childrenGridSIze={7}
      imgGridSIze={5}
    >
      <Typography className="text-lg! text-slate-400! mb-3!">
        🏝️ در قلب جزیرهٔ رویایی کیش، هتل‌هایی منتخب و منحصر به فرد فقط برای شما!
      </Typography>
      <Typography variant="h3" className="text-5xl! mb-5! leading-[80px]">
        کیش لندیار، تجربه‌ای بی‌نظیر از بهترین {/* <div> */}
       <GoldenText text="تفریحات کیش " bgColor="skyBlue" isTopThreeAttention textColor="secondary" attentionClass="left-[-10px]! top-[-5px]!" bgColorSx={{bottom: 20}} bgWidth="100%"/>
        {/* <Image src="/images" alt="attention" width={10} height={10}/> */}
        {/* </div> */}
      </Typography>
      <Typography className="text-lg! mb-10! leading-[40px]!">
        کیش لندیار، انتخابی ممتاز برای تجربه مهیج‌ترین و متنوع‌ترین تفریحات کیش!
        از تفریحات آبی و گشت‌وگذارهای جذاب تا سافاری، کنسرت و رستوران‌های
        موزیک‌دار — با بهترین امکانات، حرفه‌ای‌ترین خدمات و موقعیت‌های استثنایی،
        لحظاتی فراموش‌نشدنی در زیباترین جزیره ایران برایتان می‌سازیم.
        خاطره‌سازترین لحظات عمرتان را با کیش لندیار رقم بزنید!
      </Typography>
      <Stack className="flex! flex-row! gap-5!">
        <Button
          variant="outlined"
          startIcon={<MessageIcon />}
          className="w-4/12! text-black!"
        >
          پشتیبانی 24 ساعته
        </Button>
        <Button
          variant="outlined"
          startIcon={<AirplaneTicketIcon />}
          className="w-4/12! text-black!"
        >
          پکیج‌های اقامتی
        </Button>
        <Button
          variant="outlined"
          startIcon={<StadiumIcon />}
          className="w-4/12! text-black!"
        >
          موقعیت استثانیی
        </Button>
      </Stack>
    </ImgTextGrid>
  );
}
