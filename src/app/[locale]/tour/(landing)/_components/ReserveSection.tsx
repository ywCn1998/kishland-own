import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import GoldenText from "@/components/shared/_components/GoldenText";

const ReserveSection = () => {
  return (
    <Grid container mt={5} sx={{ height: { xs: "auto", md: 500 } }} className="flex! flex-col-reverse! md:flex-row! gap-4! md:gap-0!">
      <Grid size={{ xs: 12, md: 7 }} className="h-full flex! flex-col h-full! justify-center!">
        <Typography className="text-slate-400! text-base md:text-lg! reveal-down mb-2! md:mb-0!">
          کیش، سرزمین ماجراجویی و لذت!
        </Typography>

        <Typography className="reveal-down text-2xl! md:text-5xl! font-bold! md:leading-[80px]">
          <GoldenText text="رزرو بهترین هتل های" bgColor="skyBlue" bgWidth="95%" />
          <GoldenText text={
            <>
              کیش
              <span className="text-black!"> با </span>
            </>
          } isTopThreeAttention textColor="secondary" attentionClass="md:hidden! lg:inline! left-[-16px]! top-[-25px]! sm:top-[-30px]! lg:left-[70px]!" />
          <span className="text-primary">کیش‌لندیار</span>
        </Typography>

        <Typography className="text-sm! md:text-base! text-gray-900! mt-7! leading-[35px]! reveal-down">
          با تورهای متنوع کیش، سفرت رو به یک ماجراجویی هیجان‌انگیز تبدیل کن! از
          تفریحات دریایی گرفته تا گشت‌های لوکس شهری، همه چیز برای خاطره‌سازی
          آماده است.
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, md: 5 }}>
        <div className="h-full! hidden! md:block! relative reveal">
          <Image
            //   component="img"
            fill
            src={"/images/reserve.png"}
            alt={"fromsea"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "fill",
              zIndex: 1,
            }}
          />
        </div>

        <div className="h-[300px]! sm:h-[400px]! md:hidden! relative reveal">
          <Image
            //   component="img"
            fill
            src={"/images/reserve-resposive.png"}
            alt={"fromsea"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "fill",
              zIndex: 1,
            }}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default ReserveSection;
