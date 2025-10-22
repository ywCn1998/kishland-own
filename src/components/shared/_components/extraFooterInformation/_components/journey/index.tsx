import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import AdbIcon from "@mui/icons-material/Adb";

const Journey = () => {
  return (
    <Grid container mt={10} sx={{ height: 500 }} className="!hidden lg:!flex">
      <Grid
        size={7}
        className=" flex! flex-col h-full! justify-center! gap-5!"
      >
        <Stack className="w-[180px]! h-[60px]! relative! reveal">
          <Image src="/images/logo.png" alt="logo" fill />
        </Stack>

        <Typography className="text-5xl! font-bold! reveal-down">
          <span className="text-[#088DEF]">ماجراجویی </span>از اینجا آغاز میشود!
        </Typography>

        <Typography className="text-slate-500! mt-3!  leading-[35px]! reveal-down">
          آژانس آسان گشت کیش مرکز جامع رزرواسیون آنلاین هتل‌ها و تور های کیش
          kishlandyar.com ، اولین و تنها مرکز تخصصی رزرو تور کیش و هتل های کیش
          می باشد که موفق به دریافت گواهینامه بین المللی گردشگری و مهمان نوازی
          از انجمن گردشگری صلح آسیا شده است.
        </Typography>

        <Stack className="w-full! flex! flex-row! gap-8!" mt={2}>
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
            مشاهده لیست تور ها
          </Button>
        </Stack>
      </Grid>
      <Grid size={5}>
        <div className="h-full! relative reveal">
          <Image
            //   component="img"
            fill
            src={"/images/Journey.png"}
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

export default Journey;
