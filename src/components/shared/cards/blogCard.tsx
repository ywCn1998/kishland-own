// components/BlogCard.tsx
// "use client";

import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

type BlogCardVariant = "descriptionOnly" | "titleWithMeta";

interface BlogCardProps {
  /** Common */
  imageUrl: string;
  height?: number | string;
  overlay?: string; // rgba/hex w alpha (e.g. "rgba(0,0,0,0.25)")
  className?: string;

  /** Variants */
  variant?: BlogCardVariant;

  /** For descriptionOnly (former BlogCard2) */
  description?: string;

  /** For titleWithMeta (former BlogCard) */
  title?: string;
  hasFloatImage?: boolean;
  // showMeta?: boolean;
  dateText?: string; // e.g. "۲۷ اسفند ۱۴۰۳، ۱۴:۱۴"
  views?: number | string;

  /** Typography tweaks */
  titleSize?: "lg" | "xl"; // maps to classes
}

export default function BlogCard({
  imageUrl,
  height = 280,
  overlay = "rgba(0, 0, 0, 0.15)",
  className,

  description,

  title,
  hasFloatImage = false,
  // showMeta = true,
  dateText = "",
  views,

  titleSize = "lg",
}: BlogCardProps) {
  const titleClass = titleSize === "xl" ? "text-3xl! mb-4!" : "text-2xl!";

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height,
        borderRadius: 2,
        overflow: "hidden",
        color: "white",
        boxShadow: 3,
        "& img": { transition: "transform 0.4s ease-in-out" },
        "&:hover img": { transform: "scale(1.15)" },
      }}
      className={className}
    >
      {/* Background image */}
      <Image
        fill
        src={imageUrl}
        alt={title || description || "blog-card"}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
        }}
        priority
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          backgroundColor: overlay,
          zIndex: 2,
        }}
      />

      {/* Content */}
      <Stack
        spacing={2}
        sx={{
          position: "relative",
          zIndex: 3,
          px: 3,
          pt: 3,
          pb: 2.5,
          height: "100%",
          justifyContent: "flex-end",
        }}
      >
        {/* Variant: title + meta (old BlogCard) */}
        <>
          {!!title && (
            <Typography
              className={`${titleClass} hover:font-semibold! cursor-pointer!`}
              fontWeight={300}
            >
              {title}
            </Typography>
          )}

          {hasFloatImage && (
            <Stack className="w-[90%]! mx-auto! h-16! relative!">
              <Image alt="blogs-decoration" src="/images/blog-float.png" fill />
            </Stack>
          )}
        </>

        {/* Variant: description only (old BlogCard2) */}
        {!!description && (
          <Typography
            className="text-gray-200 text-lg! hover:font-semibold! cursor-pointer!"
            sx={{
              pt: 0.5,
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              textOverflow: "ellipsis",
              WebkitLineClamp: 2,
            }}
          >
            {description}
          </Typography>
        )}
        {(dateText || typeof views !== "undefined") && (
          <div className="flex! flex-row! justify-between!">
            {dateText && (
              <Typography className="text-gray-200 text-sm!">
                <CalendarMonthIcon className="ml-2! text-base! mb-1!" />
                {dateText}
              </Typography>
            )}
            {typeof views !== "undefined" && (
              <Typography className="text-gray-200 text-sm!">
                {views}
                <RemoveRedEyeIcon className="mr-2! text-base! mb-1!" />
              </Typography>
            )}
          </div>
        )}
      </Stack>
    </Box>
  );
}
