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
            <Typography className="text-5xl! font-semibold! reveal-down">
              چـــــــرا{" "}
              <span className="text-5xl! " style={{ color: "#FF8C0B" }}>
                کـــــیـــــش
              </span>{" "}
              لـــنـــدیـــار؟
            </Typography>
            <Typography className="text-[#006FCC]! mt-7! text-xl! reveal-down">
              چون بهترین تفریحات جزیره رویایی کیش اینجا است!
            </Typography>
          </div>
        </Grid>

        <Grid container spacing={7} mt={7} className="items-end">
          <Grid
            size="grow"
            className="flex flex-col gap-3 items-center! justify-center! reveal-down"
          >
            <div className="relative! w-20! h-20!">
              <Image alt="" fill src="/images/calender.png" />
            </div>
            <Typography className="text-lg! font-semibold! text-center!">
              رزرو سریع و آنی
            </Typography>
            <Typography className="text-base! text-gray-800 text-center!">
              بدون معطلی و در کمترین زمان، تفریحات و خدمات مورد نظرت رزرو کن
            </Typography>
          </Grid>

          <Grid
            size="grow"
            className="flex flex-col gap-3 items-center! justify-center! reveal-down"
          >
            <div className="relative! w-20! h-20!">
              <Image alt="" fill src="/images/bag.png" />
            </div>
            <Typography className="text-lg! font-semibold! font-semibold! text-center!">
              تفریحات بی نظیر
            </Typography>
            <Typography className="text-base! text-gray-800 text-center!">
              تجربه‌ی متفاوتی از هیجان و آرامش، همه در یک جزیره‌ی شگفت‌انگیز
            </Typography>
          </Grid>

          <Grid
            size="grow"
            className="flex flex-col gap-3 px-10! items-center! justify-center! reveal-down"
          >
            <div
              className={`relative! ${width ? width : 'w-[256px]!'} h-[365px]!`}
              style={{width}}
            >
              <Image
                alt=""
                fill
                src={path ? path : "/images/trip-family.png"}
              />
            </div>
          </Grid>

          <Grid
            size="grow"
            className="flex flex-col gap-3 items-center! justify-center! reveal-down"
          >
            <div className="relative! w-20! h-20!">
              <Image alt="" fill src="/images/money.png" />
            </div>
            <Typography className="text-lg! font-semibold! text-center!">
              قیمت مناسب
            </Typography>
            <Typography className="text-base! text-gray-800 font-normal! text-center!">
              بهترین خدمات با مقرون‌به‌صرفه‌ترین هزینه، بدون افت کیفیت
            </Typography>
          </Grid>

          <Grid
            size="grow"
            className="flex flex-col gap-3 items-center! justify-center! reveal-down"
          >
            <div className="relative! w-20! h-20!">
              <Image alt="" fill src="/images/headphone.png" />
            </div>
            <Typography className="text-lg! font-semibold! center!">
              پشتیبانی قوی
            </Typography>
            <Typography className="text-base! text-gray-800 text-center!">
              هر زمان که نیاز داشتی، کنارت هستیم تا سفرت بی‌دغدغه باشه ، کنارت
              هستیم تا سفرت
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
