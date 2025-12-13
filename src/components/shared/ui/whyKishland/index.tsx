import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function WhyKishland({
  path,
  width,
}: {
  path?: string;
  width?: string;
}) {
  return (
    <Container maxWidth="xl" sx={{ marginBottom: 1 }}>  
      <Grid container sx={{ width: "100%" }}>
        <Grid size={12}>
          <div className="w-full flex flex-col justify-center! items-center!">
            <Typography className=" md:hidden text-[#006FCC]! mb-7! reveal-down text-center">
              چون حال خوب جزیره کیش اینجاست!
            </Typography>
            <Typography className="text-center text-2xl! sm:text-3xl! md:text-5xl! font-semibold! reveal-down">
              چـــــــرا{" "}
              <span className="text-2xl! sm:text-3xl! md:text-5xl!" style={{ color: "#FF8C0B" }}>
                کـــــیـــــش
              </span>{" "}
              لـــنـــدیـــار؟
            </Typography>
            <Typography className="hidden md:inline text-[#006FCC]! mt-7! text-xl! reveal-down">
              چون بهترین تفریحات جزیره رویایی کیش اینجا است!
            </Typography>
          </div>
        </Grid>

        <Grid container spacing={2} mt={5} className="items-end justify-between w-full flex-row-reverse md:flex-row">
          <Grid
            size={{ xs: 6, md: 3, xl: "grow" }}
            className="flex flex-col gap-3 items-center! justify-center! reveal-down"
          >
            <div className="relative! w-20! h-20! hidden md:inline">
              <Image alt="" fill src="/images/calender.png" />
            </div>
            <div className="relative! w-12! h-12! md:hidden">
              <Image alt="" fill src="/images/takhte-moj.png" />
            </div>
            <Typography className="text-sm! md:text-lg! font-semibold! text-center!">
              رزرو سریع و آنی
            </Typography>
            <Typography className=" text-base! text-gray-800 text-center! hidden xl:inline">
              بدون معطلی و در کمترین زمان، تفریحات و خدمات مورد نظرت رزرو کن
            </Typography>
          </Grid>

          <Grid
            size={{ xs: 6, md: 3, xl: "grow" }}
            className="flex flex-col gap-3 items-center! justify-center! reveal-down"
          >
            <div className="relative! w-20! h-20! hidden md:inline">
              <Image alt="" fill src="/images/bag.png" />
            </div>
            <div className="relative! w-12! h-12! md:hidden">
              <Image alt="" fill src="/images/rocket.png" />
            </div>
            <Typography className="text-sm! md:text-lg! font-semibold! font-semibold! text-center!">
              تفریحات بی نظیر
            </Typography>
            <Typography className="text-base! text-gray-800 text-center! hidden xl:inline">
              تجربه‌ی متفاوتی از هیجان و آرامش، همه در یک جزیره‌ی شگفت‌انگیز
            </Typography>
          </Grid>

          <Grid
            size={{ xs: 6, md: 3, xl: "grow" }}
            className="hidden xl:flex flex-col gap-3 px-10! items-center! justify-center! reveal-down"
          >
            <div
              className={`relative! ${width ? width : 'w-[256px]!'} h-[365px]!`}
              style={{ width }}
            >
              <Image
                alt=""
                fill
                src={path ? path : "/images/trip-family.png"}
                className={`${path ? "mt-15" : "mt-0"}`}
              />
            </div>
          </Grid>

          <Grid
            size={{ xs: 6, md: 3, xl: "grow" }}
            className="flex flex-col gap-3 items-center! justify-center! reveal-down"
          >
            <div className="relative! hidden md:inline w-20! h-20!">
              <Image alt="" fill src="/images/money.png" />
            </div>
            <div className="relative! w-12! h-12! md:hidden">
              <Image alt="" fill src="/images/cash.png" />
            </div>
            <Typography className="text-sm! md:text-lg! font-semibold! text-center!">
              قیمت مناسب
            </Typography>
            <Typography className="text-base! text-gray-800 font-normal! text-center! hidden xl:inline">
              بهترین خدمات با مقرون‌به‌صرفه‌ترین هزینه، بدون افت کیفیت
            </Typography>
          </Grid>

          <Grid
            size={{ xs: 6, md: 3, xl: "grow" }}
            className="flex flex-col gap-3 items-center! justify-center! reveal-down"
          >
            <div className="relative! w-20! h-20! hidden md:inline">
              <Image alt="" fill src="/images/headphone.png" />
            </div>
            <div className="relative! w-12! h-12! md:hidden">
              <Image alt="" fill src="/images/message.png" />
            </div>
            <Typography className="text-sm! md:text-lg! font-semibold! center!">
              پشتیبانی قوی
            </Typography>
            <Typography className="text-base! text-gray-800 text-center! hidden xl:inline">
              هر زمان که نیاز داشتی، کنارت هستیم تا سفرت بی‌دغدغه باشه ، کنارت
              هستیم تا سفرت
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
