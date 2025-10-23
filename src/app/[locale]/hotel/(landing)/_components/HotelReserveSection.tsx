import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import GoldenText from "@/components/shared/_components/GoldenText";
import TourFromCity from "./tourFromCity";

const HotelReserveSection = () => {
  return (
    <Grid container  sx={{ height: 500 }} >
      <Grid size={7} className="h-full flex! flex-col h-full! justify-center! mt-10">
        <Typography className="text-slate-500! text-lg! reveal-down">
          کیش، سرزمین ماجراجویی و لذت!
        </Typography>

        <Typography className="reveal-down text-5xl! font-bold! leading-[80px]">
          <GoldenText text=" تجربه ای فراتر از " bgColor="skyBlue" bgWidth="120%" />
          <GoldenText text={
            <>
            سفر
            </>
          } isTopThreeAttention textColor="secondary" attentionClass="right-[45px]!" />
          <span>!</span>
        </Typography>

        <Typography className="text-gray-900! mt-10! leading-[35px]! reveal-down text text-xl!">
          با تورهای متنوع کیش، سفرت رو به یک ماجراجویی هیجان‌انگیز تبدیل کن! از
          تفریحات دریایی گرفته تا گشت‌های لوکس شهری، همه چیز برای خاطره‌سازی
          آماده است.
        </Typography>
        <Stack className="mt-10">
          <TourFromCity/>
        </Stack>
        
      </Grid>
      <Grid size={5}>
        <div className="h-[95%]! relative reveal">
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
      </Grid>
    </Grid>
  );
};

export default HotelReserveSection;
