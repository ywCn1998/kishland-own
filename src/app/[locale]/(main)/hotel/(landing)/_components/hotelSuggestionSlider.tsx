// "use client";
import ProductCard from "../../../../../../components/shared/cards/tour/tourOfferCard";
import styles from "@/components/shared/EmblaCarousel/products/embla.module.css";
import { Typography, Box, Stack, Button, Container, useMediaQuery, useTheme } from "@mui/material";
import ReusableSwiper from "@/components/shared/reusableSwiper";
import TourOfferCard from "../../../../../../components/shared/cards/tour/tourOfferCard";
import HotelCards from "@/components/shared/cards/hotel/hotelCards";
const entertainment = [
    {
      image: "/images/hotel/hotelCard.png",
      title: "هتل بین المللی کیش ",
      description : "  تقاطع بلوار سنایی و بلوار دریا",
      height: "full",
      rating: "هتل 5 ستاره",
      nights : "1",
      price: "15,020,000تومان",
      discount: "25%",
      commentsCount : "32",
      happiness : "4.8",
    },
   {
      image: "/images/hotel/hotelCard.png",
      title: "هتل بین المللی کیش ",
      description : "  تقاطع بلوار سنایی و بلوار دریا",
      height: "full",
      rating: "هتل 5 ستاره",
      nights : "1",
      price: "15,020,000تومان",
      discount: "25%",
      commentsCount : "32",
      happiness : "4.8",
    },
   {
      image: "/images/hotel/hotelCard.png",
      title: "هتل بین المللی کیش ",
      description : "  تقاطع بلوار سنایی و بلوار دریا",
      height: "full",
      rating: "هتل 5 ستاره",
      nights : "1",
      price: "15,020,000تومان",
      discount: "25%",
      commentsCount : "32",
      happiness : "4.8",
    },
   {
      image: "/images/hotel/hotelCard.png",
      title: "هتل بین المللی کیش ",
      description : "  تقاطع بلوار سنایی و بلوار دریا",
      height: "full",
      rating: "هتل 5 ستاره",
      nights : "1",
      price: "15,020,000تومان",
      discount: "25%",
      commentsCount : "32",
      happiness : "4.8",
    },
    {
      image: "/images/hotel/hotelCard.png",
      title: "هتل بین المللی کیش ",
      description : "  تقاطع بلوار سنایی و بلوار دریا",
      height: "full",
      rating: "هتل 5 ستاره",
      nights : "1",
      price: "15,020,000تومان",
      discount: "25%",
      commentsCount : "32",
      happiness : "4.8",
    },
    {
      image: "/images/hotel/hotelCard.png",
      title: "هتل بین المللی کیش ",
      description : "  تقاطع بلوار سنایی و بلوار دریا",
      height: "full",
      rating: "هتل 5 ستاره",
      nights : "1",
      price: "15,020,000تومان",
      discount: "25%",
      commentsCount : "32",
      happiness : "4.8",
    },
    {
      image: "/images/hotel/hotelCard.png",
      title: "هتل بین المللی کیش ",
      description : "  تقاطع بلوار سنایی و بلوار دریا",
      height: "full",
      rating: "هتل 5 ستاره",
      nights : "1",
      price: "15,020,000تومان",
      discount: "25%",
      commentsCount : "32",
      happiness : "4.8",
    },
    {
      image: "/images/hotel/hotelCard.png",
      title: "هتل بین المللی کیش ",
      description : "  تقاطع بلوار سنایی و بلوار دریا",
      height: "full",
      rating: "هتل 5 ستاره",
      nights : "1",
      price: "15,020,000تومان",
      discount: "25%",
      commentsCount : "32",
      happiness : "4.8",
    },
  ];
export default async function HotelSuggestionSlider() {

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
              <HotelCards key={i + "hotelCard"} {...entertainment[i]} />
            ))}
        </ReusableSwiper>
      </Box>
    </>
  );
}
