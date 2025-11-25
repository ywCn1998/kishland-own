"use client";
import { ImageAndText } from "@/components/shared/_components";
import { Button, Stack, Typography } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import { useAtom } from "jotai";
import { headerTitleAtom } from "@/store/atomHeader";
import { useEffect } from "react";


export default function HeroSection() {

  const [, setHeaderTitle] = useAtom(headerTitleAtom);
  useEffect(() => {
    setHeaderTitle("ارتباط با ما");
  }, []);
  return (
    <ImageAndText
      imgUrl="/images/general/contact-us/hero.png"
      imgAlt="Contact us hero"
      imgGridSIze={{ xs: 12, md: 5 }}
      childrenGridSIze={{ xs: 12, md: 7 }}
      height={{ xs: "auto", md: 520 }}
      imgHeight={{ xs: 320, md: 520 }}
      spacing={4}
    > 
      <Stack spacing={{ xs: 3 }} className="reveal-down">
        <Stack spacing={1} className="mt-10! md:mt-0!">
          <Typography className="text-3xl! md:text-6xl! font-semibold! md:font-bold! md:leading-[80px]!">
            <Typography color="text.secondary" className="text-base! md:text-2xl! mb-5!">در کنار شما، در هر مرحله از سفر</Typography>
            در تماس باشید
            <br />
            <span className="text-primary">راهنمای</span>{" "}
            <span className="text-secondary-500">سفر</span>{" "}
            شما هستیم
          </Typography>
        </Stack>


        <Typography fontWeight={300} className="text-base! md:text-2xl! text-slate-500! md:leading-10! leading-8!">
          برای پاسخ به سوالات، ارائه مشاوره تخصصی درباره رزرو هتل و تورهای تفریحی، یا دریافت راهنمایی کامل برای سفر به کیش، در کنار شما هستیم.
        </Typography>


        <Stack className="w-full! flex! flex-col! md:flex-row! gap-4! md:gap-8!" mt={2}>
          <Button
            className="w-full! md:w-6/12 text-black! rounded-xl! text-lg! reveal"
            variant="outlined"
            startIcon={<AdbIcon />}
          >
            دانلود اپلیکیشن
          </Button>
          <Button
            className="w-full! md:w-6/12 text-white! rounded-xl! text-lg! reveal"
            variant="contained"
          >
            مشاهده لیست تور ها
          </Button>
        </Stack>

      </Stack>
    </ImageAndText>
  );
}


