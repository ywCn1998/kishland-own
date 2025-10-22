"use client";
import { Button, Container, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "./Navbar";
// import { useTranslations } from 'next-intl';
import { getTranslations } from "next-intl/server";
import Typography from "@mui/material/Typography";
import {
  PhoneInTalkOutlined,
  LoginOutlined,
  Widgets,
} from "@mui/icons-material";

export default function Header({}) {
  // const { locale } = await params;
  // const t = useTranslations('Header');
  // const t = await getTranslations({ locale });
  return (
    <Container maxWidth="xl">
      <Stack className="lg:!py-8  " sx={{ boxShadow: "none" }}>
        <Stack
          component="header"
          alignItems={"center"}
          className="border-1 border-slate-200 rounded-lg bg-white! !hidden  lg:flex!"
        >
          {/* <Container maxWidth="xl" sx={{ height: "100%" }}> */}
          <Stack
            sx={{ height: "100%", width: "100%", py: 2 }}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            pr={4}
            pl={4}
          >
            <Stack flexDirection="row" alignItems="center" gap={6}>
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  height={100}
                  width={100}
                  style={{
                    // maxWidth: '100%',
                    maxHeight: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Link>
              <Stack className="border-1 border-slate-200 px-8 py-3 rounded-lg">
                <Navbar />
              </Stack>
            </Stack>
            <Stack flexDirection="row" alignItems="center" gap={3}>
              <Button
                variant="contained"
                sx={{ boxShadow: "none", bgColor: "primary.main" }}
                className="text-white! px-3! h-[55px]!"
                endIcon={<PhoneInTalkOutlined className="text-2xl!" />}
              >
                <Typography className="text-lg!">۰۲۱ - ۴۳ ۰۰۰۰ ۲۰</Typography>
              </Button>
              <Button
                variant="outlined"
                startIcon={<LoginOutlined />}
                sx={{
                  color: "text.primary",
                }}
                className="px-10! h-[55px]!"
              >
                <Typography className="text-base!">ورود یا ثبت نام</Typography>
              </Button>
              {/* <Button variant="text">پنل کاربری</Button> */}
            </Stack>
          </Stack>
          {/* </Container> */}
        </Stack>
        <Stack
          className="
    flex 
    items-center 
    justify-center
    lg:hidden!
    h-[60px]
    w-full
    bg-white
    z-[1300]
    px-4
    fixed
    top-0
    left-0
    right-0
    border-b
    border-slate-200
  "
        >
          <Typography
            className="text-base! font-medium!"
            sx={{ lineHeight: "60px" }}
          >
            سبد خرید
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
}
