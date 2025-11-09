"use client";

import { useState } from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "./Navbar";
import { PhoneInTalkOutlined, LoginOutlined } from "@mui/icons-material";
import RegisterModal from "../modal/loginModals/registerModal";
import MobileHeaderRouter from "./mobileHeaderRouter";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Container maxWidth="xl">
      <Stack className="lg:!py-8" sx={{ boxShadow: "none" }}>
        {/* ✅ Desktop Header (static) */}
        <Stack
          component="header"
          alignItems={"center"}
          className="border-1 border-slate-200 rounded-lg bg-white! hidden! lg:flex!"
        >
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
                sx={{ color: "text.primary" }}
                className="px-10! h-[55px]!"
                onClick={() => setOpen(true)}
              >
                <Typography className="text-base!">ورود یا ثبت نام</Typography>
              </Button>
            </Stack>
          </Stack>
        </Stack>

        {/* ✅ Mobile Header (all routes, including landings) */}
        <MobileHeaderRouter />
      </Stack>

      <RegisterModal open={open} setOpen={setOpen} />
    </Container>
  );
}
