import { Box, Stack, Typography } from "@mui/material";
import RightAttention from "@/../public/images/attention-text.png";
import TopAttention from "@/../public/images/attention-text-top.png";
import TopThreeAttention from "@/../public/images/threeAttention.png";
import { ReactNode } from "react";

type BgColor = "skyBlue" | "orange" | (string & {});

const bgColorMap: Record<"skyBlue" | "orange", string> = {
  skyBlue: "#c1e2fb",
  orange: "#ffe1bf",
};

type TextColor = "secondary" | "primary" | (string & {});
const textColorMap: Record<"primary" | "secondary", string> = {
  primary: "#ff8c0b",
  secondary: "#088def",
};

export default function GoldenText({
  text,
  textColor,
  textClass,
  attentionClass,
  isRightAttention = false,
  isTopThreeAttention = false,
  isTopAttention = false,
  isBackColor = true,
  bgWidth = "90%",
  bgColor,
  bgColorSx,
  bgHeight = 30,
  className
}: {
  text: ReactNode;
  textColor?: TextColor;
  attentionClass?: string;
  textClass?: string;
  isRightAttention?: boolean;
  isTopAttention?: boolean;
  isTopThreeAttention?: boolean;
  isBackColor?: boolean;
  bgWidth?: string;
  bgColor?: BgColor;
  bgColorSx?: object;
  bgHeight?: string | number;
  className?: string
}) {
  const resolvedbgColor =
    bgColor && bgColor in bgColorMap
      ? bgColorMap[bgColor as "skyBlue" | "orange"]
      : bgColor;

  const resolvedTextColor =
    textColor && textColor in textColorMap
      ? textColorMap[textColor as "primary" | "secondary"]
      : textColor;

  const stop = typeof bgHeight === "number" ? `${bgHeight}%` : bgHeight;
  return (
    <Stack
      className={className}
      component="span"
      direction="row"
      sx={{
        display: "inline-flex",
        width: "fit-content",
        height: "fit-content",
        alignItems: "center",
      }}
    >
      <Typography
        pr={{ lg: 1.4, xs: 0.5 }}
        component="span"
        variant="inherit"
        className={`relative! ${textClass}`}
        sx={{
          ...(isRightAttention && {
            alignItems: "center",
            whiteSpace: "nowrap",
            lineHeight: 1,
          }),
          ...(isBackColor && {
            position: "relative", // ✅ anchor ::before
            zIndex: 0, // ✅ create stacking context
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              zIndex: -1, // behind the text but within this context
              // bottom → halfway transparent
              background: { sm: "none", lg: `linear-gradient(to top, ${resolvedbgColor}, rgba(255,0,0,0) ${stop})` },
              width: bgWidth,
              top: "40%", // adjust start position
              ...bgColorSx,
            },
          }),
          color: resolvedTextColor,
        }}
      >
        {isTopThreeAttention ? (
          <Box
            component="img"
            src="/images/threeAttention.png"
            alt="Attention"
            className={`w-[50px] h-7! absolute! ${attentionClass} fade-in`}
            sx={{ bottom: 67, right: 25, transform: "rotate(-4deg)" }}
          />
        ) : isTopAttention ? (
          <Box
            component="img"
            src="/images/attention-text-top.png"
            alt="Attention"
            className={`w-20 h-14 absolute! ${attentionClass} fade-in`}
            sx={{ bottom: 55, right: 10 }}
          />
        ) : isRightAttention ? (
          <Box
            component="img"
            src="/images/attention-text.png"
            alt="Attention"
            className={`w-6 h-[75px] ${attentionClass} fade-in`}
            sx={{
              display: "inline-block",
              verticalAlign: "middle",
              ml: 1, // space between text and image
              transform: "rotate(-3deg)",
            }}
          />
        ) : null}
        {text}
      </Typography>
    </Stack>
  );
}
