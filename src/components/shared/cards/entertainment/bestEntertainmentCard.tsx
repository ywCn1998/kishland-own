// components/shared/card/BestEntertainmentCard.tsx
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

type Props = {
  title: string;
  iconSrc: string;
  active?: boolean;
  onClick?: () => void;
};

export default function BestEntertainmentCard({
  title,
  iconSrc,
  active = false,
  onClick,
}: Props) {
  return (
    <Stack
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick?.()}
      className="h-[190px]! flex! flex-col! justify-center! items-center! gap-6! rounded-2xl! cursor-pointer!"
      sx={{
        bgcolor: active ? "var(--primary-500, #FF8C0B)" : "#fff",
        color: active ? "#fff" : "inherit",
        transition:
          "background-color .2s ease, color .2s ease, box-shadow .2s ease",
        boxShadow: active
          ? "0 6px 18px rgba(0,0,0,.08)"
          : "0 1px 4px rgba(0,0,0,.04)",
        "&:hover": {
          boxShadow: "0 6px 18px rgba(0,0,0,.10)",
        },
      }}
    >
      <Image src={iconSrc} alt={title} width={50} height={50} className="!"/>
      <Typography
        className="font-semibold!"
        sx={{ color: active ? "#fff" : "#000" }}
      >
        {title}
      </Typography>
    </Stack>
  );
}
