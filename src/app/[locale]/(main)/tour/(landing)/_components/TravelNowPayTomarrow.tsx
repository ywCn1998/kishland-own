import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import Banner from "@/components/shared/ui/banner/mainBanner";
import GoldenText from "@/components/shared/ui/GoldenText";

const TravelNowPayTomarrow = () => {
  return (
    <>
      <Grid container mt={{ xs: 0, md: 10 }} sx={{ height: { xs: "auto", md: 500 } }} className="flex! flex-col-reverse! md:flex-row!">
        <Grid size={{ xs: 12, md: 8 }} className="h-full ">
          <Typography className="text-slate-400! mb-5! text-base md:text-lg! reveal-down">
            الان سفر کن بعدا قسطی پرداخت کن ...
          </Typography>
          <Typography className="text-xl! md:text-5xl! font-bold! py-1! reveal-down">
            <GoldenText text={
              <>
                کیش <span className="text-black!">رو بگرد، نگران </span>
                <span className="text-primary z-[80]!">پولش </span> نباش!

              </>
            } textColor="secondary" bgColor="skyBlue" bgWidth="95%" />
          </Typography>
          <br />
          <Typography className="text-gray-900! mt-5! leading-[35px]! reveal-down">
            با تورهای قسطی کیش، بدون نگرانی از هزینه‌ها سفر کن! <br />
            از تفریحات لاکچری تا ساحل‌گردی، همه چیز برای یه تجربه متفاوت
            آماده‌ست.
          </Typography>

          <Stack mt={5} spacing={3}>
            <div className="">
              <div className="flex! flex-row! gap-2! ml-3!">
                <ArrowLeftIcon
                  className=""
                  sx={{ fontSize: 30, color: "primary.main" }}
                />
                <Typography className="font-semibold! text-base md:text-lg! reveal-down">
                  پرداخت راحت و مرحله‌ای
                </Typography>
              </div>
              <Typography className="text-gray-700! mr-9! reveal-down text-sm! md:text-lg!">
                هزینه سفر رو به چند قسط تقسیم کن و بدون فشار مالی، سفر برو.
              </Typography>
            </div>
            <div className="">
              <div className="flex! flex-row! gap-2! ml-3! reveal-down">
                <ArrowLeftIcon
                  className=""
                  sx={{ fontSize: 30, color: "secondary.main" }}
                />
                <Typography className="font-semibold! text-base md:text-lg!">
                  سفر بدون معطلی
                </Typography>
              </div>
              <Typography className="text-gray-700! mr-9! reveal-down text-sm! md:text-lg!">
                نیازی به صبر برای جمع کردن پول نیست — همین حالا سفر کن!
              </Typography>
            </div>
            <div className="">
              <div className="flex! flex-row! gap-2! ml-3! reveal-down">
                <ArrowLeftIcon
                  className=""
                  sx={{ fontSize: 30, color: "primary.main" }}
                />
                <Typography className="font-semibold! text-base md:text-lg!">
                  بدون نیاز به ضامن یا چک سنگین
                </Typography>
              </div>
              <Typography className="text-gray-700! mr-9! reveal-down text-sm! md:text-lg!">
                فقط با مدارک ساده و سریع، اقساطی خرید کن و راحت‌تر برنامه‌ریزی
                کن.
              </Typography>
            </div>
          </Stack>
          <Stack mt={3} className="px-2! md:px-0!">
            <Button
              variant="contained"
              className="text-white! md:w-[250px]! text-base! rounded-xl! py-4! font-normal! reveal-down"
            >
              خرید قسطی تور
            </Button>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <div className="relative! h-[400px]! md:h-full! reveal mb-5! md:mb-0!">
            <Image
              //   component="img"
              fill
              src={"/images/kish-trip.png"}
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
    </>
  );
};

export default TravelNowPayTomarrow;
