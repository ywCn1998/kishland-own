import { TourCard } from "@/components/shared/cards/tour/tourCard";
import ProductCard from "@/components/shared/cards/tour/tourOfferCard";
import { Grid, Stack, Typography } from "@mui/material";
import HourglassFullIcon from "@mui/icons-material/HourglassFull";
import Image from "next/image";
import EntertainmentCard from "../../../../../components/shared/cards/entertainment/entertainmentCard";

const entertainment = [
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

export default function DiscountedEntertainmentSection() {
  return (
    <Grid
      container
      height={540}
      spacing={5}
      sx={{
        bgcolor: "primary.300",
        padding: 3,
        borderRadius: 2,
        border: "1px solid",
        borderColor: "primary.main",
      }}
    >
      <Grid size={3} className="flex justify-between! flex-col!" spacing={5}>
        <Stack className="h-1/2 rounded-3xl! bg-white! p-6! flex! flex-col! justify-between! items-center!">
          <Stack className="w-full! ">
            <div className="bg-red rounded-2xl! flex! flex-row! items-center! justify-center! gap-2! text-white! py-4! w-full!">
              <Typography className="text-2xl! font-semibold! reveal-down">
                20 : 05 : 34
              </Typography>
              <HourglassFullIcon />
            </div>
            <Typography className="text-sm! text-center mt-1! reveal-down">
              فرصت خرید رو از دست نده که دیره
            </Typography>
          </Stack>
          <Typography className="font-bold! text-3xl! text-center! reveal-down">
            شگفت انگیزهای امروز
          </Typography>
        </Stack>

        <Stack className="h-1/2! w-full! relative! reveal">
          <Image
            alt="discount"
            className="px-2! pt-4!"
            src={"/images/discount-kish.png"}
            fill
          />
        </Stack>
      </Grid>

      {entertainment.map((entertainment, index) => (
        <Grid size={3}>
          <EntertainmentCard key={index} {...entertainment} />
        </Grid>
      ))}
    </Grid>
  );
}
