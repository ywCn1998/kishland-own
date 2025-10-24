import GoldenText from "@/components/shared/_components/GoldenText";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function HotelLandingIntro() {
  return (
    <Grid
      container
      mt={4}
      sx={{ height: 500 }}
      className="flex! items-center!  justify-center! relative! "
    >
      <Grid size={7} className="h-full!  flex! justify-center! flex-col! ">
        <div className="mt-3! reveal">
          <Typography className="text-6xl! font-bold! reveal">
            یه چمدون آرامش
          </Typography>
          <Typography className="text-6xl! font-bold! reveal relative!  top-4!">
            اقامتی رویایی در
            <GoldenText text="جزیره" textColor="primary" textClass="pl-2!" />
            <GoldenText
              text="کیش"
              isTopAttention
              textColor="secondary"
            />{" "}
          </Typography>
        </div>
        <Typography className="text-slate-400! mt-12! text-2xl! font-light! pl-28! reveal-down leading-12">
          از هتل‌های لوکس با ویوی دریا تا اقامتگاه‌های دنج و آروم، اینجا هر
          سلیقه‌ای یه انتخاب خاص داره!
        </Typography>
      </Grid>
      <div className="absolute left-11/20 -translate-x-1/2 top-8! reveal">
        <img
          src="/images/bird.png"
          alt="Centered"
          className="h-[70px] w-[150px] reveal "
        />
      </div>

      <Grid size={5} className="h-full!">
        <div className="h-full! relative! reveal">
          <Image
            //   component="img"
            fill
            src={"/images/hotel/HotelMain.png"}
            alt={"fromsea"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              zIndex: 1,
            }}
          />
        </div>
      </Grid>
    </Grid>
  );
}
