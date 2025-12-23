import GoldenText from "@/components/shared/ui/GoldenText";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function HotelLandingIntro() {
  return (
    <Grid
      container
      mt={{
        xs: 2, md: 4
      }}
      sx={{ height: { md: 900, lg: 500 } }}
      className="flex! items-center! flex-col-reverse! lg:flex-row!  justify-center! relative! "
    >
      <Grid size={{ xs: 12, md: 7 }} className="h-full!  flex! justify-center! flex-col! ">
        <div className="mt-3! reveal">
          <Typography className="lg:text-6xl! text-2xl!  font-bold! reveal">
            یه چمدون آرامش
          </Typography>
          <Typography className="lg:text-6xl! text-2xl! font-bold! reveal relative!  lg:top-4!">
            اقامتی رویایی در
            <GoldenText text="جزیره" textColor="primary" textClass="pl-2!" />
            <GoldenText
              text="کیش"
              isTopAttention
              textColor="secondary"
              className="hidden! md:inline-flex!"
            />{" "}

            <GoldenText
              text="کیش"
              isTopAttention
              textColor="secondary"
              attentionClass="bottom-[13px]! right-8!  w-12! h-12! md:hidden!"
              className="md:hidden!"
            />{" "}
          </Typography>
        </div>
        <Typography className="text-slate-400! mt-4! md:mt-12! md:text-2xl! text-base! font-light! md:pl-28! reveal-down md:leading-12">
          از هتل‌های لوکس با ویوی دریا تا اقامتگاه‌های دنج و آروم، اینجا هر
          سلیقه‌ای یه انتخاب خاص داره!
        </Typography>
      </Grid>
      <div className="absolute left-11/20 -translate-x-1/2 top-8! reveal">
        <img
          src="/images/bird.png"
          alt="Centered"
          className="h-[70px] w-[150px] reveal hidden! md:inline!"
        />
      </div>

      <Grid size={{ xs: 12, md: 5 }} className="md:h-full! ">
        <div className="md:h-full! relative! reveal h-[250px]!">
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
