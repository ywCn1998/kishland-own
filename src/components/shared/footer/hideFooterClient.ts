"use client";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { hasFooterResponsive } from "@/store/atomHeader";
import { useTheme, useMediaQuery } from "@mui/material";

export default function HideFooterMobile() {
  const [_, setFooter] = useAtom(hasFooterResponsive);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    if (isMobile) setFooter(false);
    return () => setFooter(true); // وقتی خارج شد، دوباره نشون بده
  }, [isMobile]);

  return null;
}
   