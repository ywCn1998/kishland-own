import GoldenText from "@/components/shared/_components/GoldenText";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function BodyIntro() {
  return (
    <Grid
      container
      mt={3}
      sx={{ height: { xs: 200, sm: 300, md: 400 } }}
      className="flex! items-center!  justify-center! relative! flex-row-reverse! md:flex-row!"
    >
      <Grid size={{ xs: 7, md: 8 }} className="h-full!  flex! justify-center! flex-col! ">
        <div className="mt-3! reveal hidden! md:block!">
          <Typography className="sm:text-2xl! md:text-5xl! lg:text-6xl! font-bold! reveal">
            از دریا تا آسمان
          </Typography>
          <Typography className="text-2xl! md:text-5xl! lg:text-6xl! font-bold! reveal relative! right-[-20px] top-4!">
            <GoldenText text="جزیره" isRightAttention textColor="secondary" />{" "}
            <GoldenText text="کیش" textColor="primary" textClass="pl-2!" />
            تو رو صدا می‌زنن
          </Typography>
        </div>
        <Typography className="md:hidden text-xl! sm:text-2xl! md:text-5xl! lg:text-6xl! font-bold! reveal">از دریا تا آسمان جزیره کیش تو رو صدا میزنن</Typography>

        <Typography className="text-slate-400! mt-7! text-sm! sm:text-base! md:text-2xl! font-light! md:pl-28! reveal-down">
          از تفریحات آبی هیجان‌انگیز تا لحظه‌های آرامش‌بخش، کیش برای هر سلیقه‌ای
          یه تجربه خاص داره!
        </Typography>
      </Grid>
      <div className="absolute left-1/2 -translate-x-1/2 top-20 reveal hidden md:inline">
        <img
          src="/images/bird.png"
          alt="Centered"
          className="h-[70px] w-[150px]"
        />
      </div>

      <Grid size={{ xs: 5, md: 4 }} className="h-full!">
        <div className="h-full! relative! reveal">
          <Image
            //   component="img"
            fill
            src={"/images/from-sea.png"}
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
