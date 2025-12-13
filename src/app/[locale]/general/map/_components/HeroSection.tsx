"use client";
import { ImageAndText } from "@/components/shared/ui";
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
      flexDirection="row-reverse"
      imgUrl="/images/general/map/hero.png"
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
            <Typography color="text.secondary" className="text-base! md:text-2xl! mb-5!">در تمام مراحل سفر کنار شما هستیم</Typography>

            بیا با هم{' '}
            <span className="text-primary">جزیره</span>{" "}
            <span className="text-secondary-500">کیش</span>{" "}
            رو کشف کنیم!
          </Typography>
        </Stack>


        <Typography fontWeight={300} className="text-base! md:text-2xl! text-slate-500! md:leading-10! leading-8!">
          نقشه تعاملی، اطلاعات به‌روز و معرفی مکان‌های خاص کیش رو اینجا پیدا می‌کنی. سفرتو آگاهانه‌تر شروع کن.
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
            دریافت مشاوره
          </Button>
        </Stack>

      </Stack>
    </ImageAndText>
  );
}


