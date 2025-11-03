import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import AdbIcon from "@mui/icons-material/Adb";
import GoldenText from "@/components/shared/_components/GoldenText";

const BuyOneGetTwoSection = () => {
  return (
    <Grid
      container
      mt={10}
      sx={{ height: { xs: 140, lg: 550 } }}
      className=""
      spacing={{ xs: 2, lg: 4 }}
    >
      <Grid size={{ xs: 4, lg: 5 }}>
        <div className="h-full! relative reveal reveal">
          <Image
            //   component="img"
            fill
            src={"/images/by-one-get-two.png"}
            alt={"fromsea"}
            className="w-[100%]"
            style={{
              height: "100%",
              objectFit: "fill",
              zIndex: 1,
            }}
          />
        </div>
      </Grid>
      <Grid
        size={{ xs: 8, lg: 7 }}
        className=" flex! flex-col h-full! justify-center!"
      >
        <Typography className="text-xs! text-slate-400! reveal-down md:hidden!">
          الان سفر کن بعدا قسطی پرداخت کن ...
        </Typography>
        <Typography className="text-xl! text-slate-400! reveal-down hidden! md:block!">
          🔥 یک تفریح رایگان به همراه دو تجربه هیجان‌انگیز در کیش خواهید داشت!
        </Typography>

        <Typography className="md:text-5xl! text-lg! font-bold! md:gap-2! gap-0!  mb-5 reveal-down md:mt-10! mt-4! text-nowrap! md:text-wrap!">
          دو تا <span className="text-primary-500">تفریح </span> بخر یکی
          {/* <div> */}
          <GoldenText
            text="جایزه"
            isTopThreeAttention
            textColor="secondary"
            attentionClass="top-[-30px]! left-0! hidden! md:block!"
          />
          {/* </div> */}
          ببر!!
        </Typography>

        <Typography className="mt-3!  leading-[35px]! reveal-down text-lg! reveal-down hidden! md:block!">
          با خرید دو تفریح از کیش لندیار، یک تفریح دیگر به‌صورت هدیه دریافت
          کنید! این فرصت ویژه به شما امکان می‌دهد تا بیشتر از جزیره کیش لذت
          ببرید و یک تجربه اضافه و هیجان‌انگیز را بدون هزینه اضافی داشته باشید.
          از این پیشنهاد عالی بهره‌مند شوید!
        </Typography>

        <Stack className="w-full! flex! flex-row! gap-8! reveal" mt={2}>
          <Button
            className="w-6/12 text-black! rounded-xl! text-lg! reveal hidden! md:block!"
            variant="outlined"
            startIcon={<AdbIcon />}
          >
            دانلود اپلیکیشن
          </Button>
          <Button
            className="w-6/12 text-white! rounded-xl! text-lg! reveal hidden! md:flex! "
            variant="contained"
            href="/fa/entertainment/list"
          >
            مشاهده لیست تفریحات
          </Button>
          <Button
            className=" text-white! rounded-2xl! text-sm! reveal md:hidden!"
            variant="contained"
            href="/fa/entertainment/list"
          >
            خرید قسطی تور
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default BuyOneGetTwoSection;
