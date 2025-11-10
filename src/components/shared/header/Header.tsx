"use client";
import { Box, Button, Container, IconButton, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "./Navbar";
// import { useTranslations } from 'next-intl';
import { getTranslations } from "next-intl/server";
import Typography from "@mui/material/Typography";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import {
  PhoneInTalkOutlined,
  LoginOutlined,
  Widgets,
} from "@mui/icons-material";
import { useState } from "react";
import RegisterModal from "../modal/loginModals/registerModal";
import { useAtom } from "jotai";
import {
  headerBackIconAtom,
  headerDateAtom,
  headerLeftItemAtom,
  headerTitleAtom,
} from "@/store/atomHeader";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useRouter } from "next/navigation";

export default function Header({}) {
  const [headerTitle] = useAtom(headerTitleAtom);
  const [backIcon] = useAtom(headerBackIconAtom);
  const [date] = useAtom(headerDateAtom);
  const [leftItem] = useAtom(headerLeftItemAtom);

  const path = location.pathname;
  const parts = path.split("/");
  const lastPart = parts.pop();
  const router = useRouter();

  const [open, setOpen] = useState<boolean>(false);
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
                onClick={() => setOpen(!open)}
              >
                <Typography className="text-base!">ورود یا ثبت نام</Typography>
              </Button>
              {/* <Button variant="text">پنل کاربری</Button> */}
            </Stack>
          </Stack>
          {/* </Container> */}
        </Stack>
        {lastPart === "tour" ||
        lastPart === "entertainment" ||
        lastPart === "hotel" ? (
          <Box
            className="
    relative
    lg:hidden!
    h-[100px]
    w-full
    bg-[#FF8C0B]
    bg-[url('/images/header.png')]
    bg-cover
    bg-center
    bg-no-repeat
    bg-blend-overlay
    z-[1300]
    fixed!
    top-0
    left-0
    right-0
 
    xs-fullwidth
  "
          >
            <Stack className="flex flex-col px-4! py-2! gap-2!">
              <Stack className="relative z-10 flex items-center justify-between! flex-row!">
                <img
                  src="/images/headerlogo.png"
                  alt="header logo"
                  className="h-[50px]"
                />
                <Stack
                  className="
    flex 
    flex-row-reverse!
    items-center
    gap-2
    text-white
    bg-white/20
    backdrop-blur-md
    rounded-xl
    px-3
    py-2
  "
                >
                  <PhoneInTalkIcon />
                  <Typography>021-93893839</Typography>
                </Stack>
              </Stack>
              <Stack>
                <Typography className="text-white! text-xs!">
                  از دریا تا آسمان جـزیـره کـیـش تو رو صدا می‌زنن
                </Typography>
              </Stack>
            </Stack>
          </Box>
        ) : (
          <Stack
            className="
    flex 
    flex-row!
    items-center 
    justify-between
    lg:hidden!
    h-[80px]
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
            <Stack className="flex! flex-row! items-center! gap-4!">
              <Stack>
                <IconButton onClick={()=>router.back()}>
                  {backIcon ? <EastOutlinedIcon /> : <CloseOutlinedIcon />}
                </IconButton>
              </Stack>
              <Stack className="flex! flex-col! gap-2!">
                <Typography className="text-base! font-medium!">{headerTitle}</Typography>
                <Typography className="text-sm! font-light!">{date}</Typography>
              </Stack>
            </Stack>
            <Stack>{leftItem}</Stack>
          </Stack>
        )}
      </Stack>
      <RegisterModal open={open} setOpen={setOpen} />
    </Container>
  );
}
