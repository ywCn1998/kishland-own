// "use client";
import ProductCard from "../../../../../../components/shared/cards/tour/tourOfferCard";
import styles from "@/components/shared/EmblaCarousel/products/embla.module.css";
import { Typography, Box, Stack, Button, Container, useMediaQuery, useTheme } from "@mui/material";
import ReusableSwiper from "@/components/shared/reusableSwiper";
import TourOfferCard from "../../../../../../components/shared/cards/tour/tourOfferCard";

// 3. -------- کامپوننت کاروسل محصولات --------
export default async function TourSuggestionSlider() {

  return (
    <>
      <Box
        sx={{
          maxWidth: "100%",
          mx: "auto",
          pb: 4,
          display: "flex",
          flexDirection: "row",
          borderRadius: 2,
          marginTop: { xs: 0, md: 5 },
        }}
        className="reveal-down ps-4!"
      >
        <ReusableSwiper slidePerViewXs={1.4} slidePerviewLg={6} spaceBetween={20} pagination={true}>
          {Array(10)
            .fill(null)
            .map((_, i) => (
              <TourOfferCard key={i + "tourOfferCard"} />
            ))}
        </ReusableSwiper>
      </Box>
    </>
  );
}
