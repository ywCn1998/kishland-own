"use client";
import React, { useState } from "react";
import { Box, Stack, Typography, Paper } from "@mui/material";
import {
  HomeOutlined,
  LuggageOutlined,
  ShoppingBagOutlined,
  AccountCircleOutlined,
  CallOutlined,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";

const items = [
  { label: "خانه", icon: <HomeOutlined />, id: 0, path: "/fa/tour" },
  { label: "سفرهای من", icon: <LuggageOutlined />, id: 1, path: "/fa/panel/history" },
  { label: "سبد خرید", icon: <ShoppingBagOutlined />, id: 2, path: "/fa/entertainment/reserve" },
  { label: "حساب کاربری", icon: <AccountCircleOutlined />, id: 3, path: "/fa/panel" },
  { label: "تماس", icon: <CallOutlined />, id: 4, path: "/fa/contact-us" },
];

export default function MobileBottomNav() {
  const [active, setActive] = useState<number>(0);
  const router = useRouter();

  const handleClick = (id: number, path: string) => {
    setActive(id);
    router.push(path);
  };

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1300,
        bgcolor: "#fff",
        borderTop: "1px solid #E5E7EB",
        display: { xs: "flex", lg: "none" },
        justifyContent: "center",
        alignItems: "center",
        py: 1,
        height: 75,
        width: "100%",
        boxShadow: "0 -4px 12px rgba(0, 0, 0, 0.08)",
      }}
      elevation={0}
    >
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        sx={{ width: "100%", maxWidth: 500 }}
      >
        {items.map((item) => {
          const isActive = active === item.id;

          return (
            <Stack
              key={item.id}
              alignItems="center"
              justifyContent="center"
              spacing={0.25}
              sx={{
                cursor: "pointer",
                height: "90%",
                width: 70,
                position: "relative",
              }}
              onClick={() => handleClick(item.id, item.path)}
            >
              {/* آیکون */}
              <Box
                sx={{
                  transition:
                    "all 0.35s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.35s, color 0.35s",
                  transform: isActive ? "translateY(8px)" : "translateY(0)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: isActive ? "#FF8A00" : "transparent",
                  color: isActive ? "#fff" : "#6B7393",
                  minWidth: isActive ? 60 : 30,
                  height: 40,
                  borderRadius: isActive ? "24px" : "50%",
                }}
              >
                {item.icon}
              </Box>

              <Typography
                sx={{
                  color: "#6B7393",
                  fontWeight: 400,
                  opacity: isActive ? 0 : 1,
                  height: "14px",
                  transition: "opacity 0.3s ease",
                  textWrap: "nowrap",
                }}
                className="text-xs!"
              >
                {item.label}
              </Typography>
            </Stack>
          );
        })}
      </Stack>
    </Paper>
  );
}
