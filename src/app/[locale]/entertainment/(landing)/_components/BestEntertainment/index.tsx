import { Grid } from "@mui/material";
import BestEntertainmentSlider from "./BestEntertainmentSlider";
import EntertainmentCard from "@/components/shared/cards/entertainment/entertainmentCard";

const entertainment = [
  {
    image: "/images/entertainment1.png",
    title: "سافاری کیش - پکیج کودک",
    startDate: "1403/12/27",
    endDate: "1403/12/30",
    height: "full",
    rating: "4.8",
    time: "15 دقیقه",
    price: "15,020,000تومان",
    dicountedPrice: "15,020,000تومان",
  },
  {
    image: "/images/discount-entertainment.png",
    title: "سافاری کیش - پکیج کودک",
    startDate: "1403/12/27",
    endDate: "1403/12/30",
    height: "10/12",
    rating: "4.8",
    time: "15 دقیقه",
    price: "15,020,000تومان",
    dicountedPrice: "15,020,000تومان",
  },
  {
    image: "/images/entertainment2.png",
    title: "سافاری کیش - پکیج کودک",
    startDate: "1403/12/27",
    endDate: "1403/12/30",
    height: "full",
    rating: "4.8",
    time: "15 دقیقه",
    price: "15,020,000تومان",
    dicountedPrice: "15,020,000تومان",
  },
  {
    image: "/images/entertainment3.png",
    title: "سافاری کیش - پکیج کودک",
    startDate: "1403/12/27",
    endDate: "1403/12/30",
    height: "full",
    rating: "4.8",
    time: "15 دقیقه",
    price: "15,020,000تومان",
    dicountedPrice: "15,020,000تومان",
  },
  {
    image: "/images/entertainment4.png",
    title: "سافاری کیش - پکیج کودک",
    startDate: "1403/12/27",
    endDate: "1403/12/30",
    height: "full",
    rating: "4.8",
    time: "15 دقیقه",
    price: "15,020,000تومان",
    dicountedPrice: "15,020,000تومان",
  },
  {
    image: "/images/entertainment5.png",
    title: "سافاری کیش - پکیج کودک",
    startDate: "1403/12/27",
    endDate: "1403/12/30",
    height: "full",
    rating: "4.8",
    time: "15 دقیقه",
    price: "15,020,000تومان",
    dicountedPrice: "15,020,000تومان",
  },
  {
    image: "/images/entertainment6.png",
    title: "سافاری کیش - پکیج کودک",
    startDate: "1403/12/27",
    endDate: "1403/12/30",
    height: "full",
    rating: "4.8",
    time: "15 دقیقه",
    price: "15,020,000تومان",
    dicountedPrice: "15,020,000تومان",
  },
  {
    image: "/images/discount-entertainment.png",
    title: "سافاری کیش - پکیج کودک",
    startDate: "1403/12/27",
    endDate: "1403/12/30",
    height: "full",
    rating: "4.8",
    time: "15 دقیقه",
    price: "15,020,000تومان",
    dicountedPrice: "15,020,000تومان",
  },
];

export default function BestEntertainmentSection() {
  return (
    <>
      <BestEntertainmentSlider />
      <Grid container spacing={5} mt={5}>
        {entertainment.map((entertainment, index) => (
          <Grid size={3}>
            <EntertainmentCard key={index} {...entertainment} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
