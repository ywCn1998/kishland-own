import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import AdbIcon from "@mui/icons-material/Adb";
import GoldenText from "@/components/shared/_components/GoldenText";

const BuyOneGetTwoSection = () => {
  return (
    <Grid container mt={10} sx={{ height: 550 }} className="" spacing={4}>
      <Grid size={5}>
        <div className="h-full! relative reveal reveal">
          <Image
            //   component="img"
            fill
            src={"/images/by-one-get-two.png"}
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
      <Grid size={7} className="h-full flex! flex-col h-full! justify-center!">
        <Typography className="text-xl! text-slate-400! reveal-down">
          🔥 یک تفریح رایگان به همراه دو تجربه هیجان‌انگیز در کیش خواهید داشت!
        </Typography>

        <Typography className="text-5xl! font-bold! gap-2!  mb-5 reveal-down mt-10!">
          دو تا <span className="text-primary-500">تفریح </span> بخر یکی{" "}
          {/* <div> */}
            <GoldenText text="جایزه" isTopThreeAttention textColor="secondary" attentionClass="top-[-30px]! left-0!"/>
          {/* </div> */}
          ببر!!
        </Typography>

        <Typography className="mt-3!  leading-[35px]! reveal-down text-lg! reveal-down">
          با خرید دو تفریح از کیش لندیار، یک تفریح دیگر به‌صورت هدیه دریافت
          کنید! این فرصت ویژه به شما امکان می‌دهد تا بیشتر از جزیره کیش لذت
          ببرید و یک تجربه اضافه و هیجان‌انگیز را بدون هزینه اضافی داشته باشید.
          از این پیشنهاد عالی بهره‌مند شوید!
        </Typography>

        <Stack className="w-full! flex! flex-row! gap-8! reveal" mt={2}>
          <Button
            className="w-6/12 text-black! rounded-xl! text-lg! reveal"
            variant="outlined"
            startIcon={<AdbIcon />}
          >
            دانلود اپلیکیشن
          </Button>
          <Button
            className="w-6/12 text-white! rounded-xl! text-lg! reveal"
            variant="contained"
          >
            مشاهده لیست تفریحات
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default BuyOneGetTwoSection;
