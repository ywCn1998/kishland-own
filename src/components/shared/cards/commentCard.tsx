"use client";
import * as React from "react";
import {
  Avatar,
  Badge,
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { styled } from "@mui/material/styles";

// ---------- Styles ----------
const HoverWrap = styled("div")(({ theme }) => ({
  position: "relative",
  display: "inline-block",
  direction: "rtl", // Farsi layout
  // center the "shadow image" under the card
  "&:hover .hover-shadow": {
    opacity: 1,
    transform: "translateY(6px) scale(1.02)",
  },
}));

const SoftCard = styled(Card)(({ theme }) => ({
  width: "auto",
  minHeight: "auto",
  borderRadius: 16,
  border: "1px solid rgba(225, 230, 240, 1)",
  background: "#fff",
  transition: "transform .25s ease, box-shadow .25s ease",
  backdropFilter: "saturate(180%) blur(2px)",
  transform: "translateY(-2px)",
  boxShadow: "0", // k
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 1px 2px rgba(18,38,63,.03), 0 8px 24px rgba(18,38,63,.06)", // subtle default
  },
}));

// ---------- Component ----------
export default function CommentCard() {
  return (
    <HoverWrap>
      {/* Shadow image (hidden until hover) */}
      <Box
        className="hover-shadow"
        aria-hidden
        sx={{
          position: "absolute",
          inset: "auto 0 -18px 0",
          mx: "auto",
          width: "auto",
          height: 34,
          backgroundImage: "url(/assets/shadow.png)", // ← your shadow image
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          opacity: 0,
          transform: "translateY(0)",
          transition: "opacity .25s ease, transform .25s ease",
          pointerEvents: "none",
          filter: "drop-shadow(0 6px 18px rgba(41,71,180,.18))",
        }}
      />

      <SoftCard elevation={0}>
        <CardContent
          sx={{ p: 2 }}
          className="flex! flex-col! justify-between! items-center! reveal py-10!"
        >
          {/* Avatar + name */}

          <div className="flex! flex-col! justify-between! items-center! gap-1!">
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              badgeContent={
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    bgcolor: "#FF4D4F", // red dot
                    borderRadius: "50%",
                    border: "2px solid #fff",
                  }}
                />
              }
            >
              <Avatar
                src="/images/ghasem.png" // ← your avatar
                alt="قاسم سبحانی"
                sx={{ width: 64, height: 64 }}
              />
            </Badge>

            <Typography variant="h6" sx={{ fontWeight: 700, color: "#0B1225" }}>
              قاسم سبحانی
            </Typography>

            <Stack
              direction="row"
              spacing={0.5}
              alignItems="center"
              sx={{ color: "#8FA0B7", fontSize: 13 }}
            >
              <Typography component="span" sx={{ fontSize: 13 }}>
                2 ماه و 10 روز پیش
              </Typography>
            </Stack>

            {/* Stars */}
            <Stack direction="row" spacing={0.3} sx={{ mt: 0.5 }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <StarRateRoundedIcon
                  key={i}
                  sx={{ fontSize: 20, color: "#FFB400" }}
                />
              ))}
            </Stack>
          </div>

          {/* Text */}
          <Typography className="text-slate-500! text-center! mt-4! text-sm! leading-[28px]">
            فکر می کنم بهترین تفریح عمرمو انجام دادم با کلی هیجان و قیمت های
            انجام دادم با کلی هیجان و قیمت های عالی حتما پیشنهاد می کنم شما هم
            امتحان کنید ... 😍
          </Typography>
        </CardContent>
      </SoftCard>
    </HoverWrap>
  );
}
