import { ImageAndText } from "@/components/shared/ui";
import GoldenText from "@/components/shared/ui/GoldenText";
import { Typography } from "@mui/material";

export default function BodyIntroSection() {
  return (
    <ImageAndText imgUrl="/images/intertainment-landing-intro.png">
      <Typography
        className="text-5xl! font-bold! leading-[65px] flex! flex-row! justify-start! reveal-down"
        sx={{ color: "text.primary" }}
      >
        <span>
          یه دنیا تفریح پر‌هیجان <br className="hidden md:inline" /> تفریحی
          رویایی در <span className="text-primary"> جزیره </span>
        </span>
        <span
          className="inline-flex flex-col items-end text-secondary-500 mr-2"
          style={{ alignSelf: "end" }}
        >
          <GoldenText text="کیش" isTopAttention textColor="secondary"/>
        </span>
      </Typography>
      <Typography className="text-slate-400! text-2xl! pl-36! mt-5! reveal-down">
        از تله کابین تا کشتی های تفریحی و پارک دلفین، اینجا برای هر سلیقه‌ای یه
        انتخاب خاص وجود داره!
      </Typography>
    </ImageAndText>
  );
}
