import { TourCard } from "@/components/shared/cards/tour/tourCard";
import ProductCard from "@/components/shared/cards/tour/tourOfferCard";
import { Box, Grid, Stack, Typography } from "@mui/material";
import HourglassFullIcon from "@mui/icons-material/HourglassFull";
import Image from "next/image";
import EntertainmentCard from "../../../../../components/shared/cards/entertainment/entertainmentCard";
import ReusableSwiper from "@/components/shared/reusableSwiper";

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
    <>
      <Grid
        container
        height={{ lg: 540, xs: 400 }}
        spacing={{ xs: 2, lg: 5 }}
        sx={{
          bgcolor: "#FFF2D3",
          padding: { xs: 0, lg: 3 },
          px: { xs: 2, lg: 3 },
          pr: { xs: 0, lg: 3 },
          borderRadius: { xs: "none", lg: 2 },
          border: { xs: "none", lg: "1px solid #FF8C0B" },
        }}
        className="md:flex! flex-row! hidden!"
      >
        <Grid
          size={{ xs: 7, lg: 3 }}
          className="flex md:justify-between! justify-center! gap-4! md:gap-0! md:flex-col! flex-col-reverse!"
          spacing={5}
        >
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
            <Typography className="md:font-bold! font-semibold! md:text-3xl! text-xl! text-center! reveal-down">
              شگفت انگیزهای امروز
            </Typography>
          </Stack>

          <Stack className="md:h-1/2! h-2/5! w-full! relative! reveal">
            <Image
              alt="discount"
              className="px-2! pt-4!"
              src={"/images/discount-kish.png"}
              fill
            />
          </Stack>
        </Grid>
        <Grid
          size={9}
          className="md:flex! flex-row! gap-10! items-center! hidden!  "
        >
          {entertainment.map((entertainment, index) => (
            <Grid size={4} className="hidden! md:block! h-full!">
              <EntertainmentCard key={index} {...entertainment} />
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* responsive */}
      <Grid
        container
        height={430}
        sx={{
          bgcolor: "#FFF2D3",
          paddingY: 2,
          px: { xs: 0, lg: 3 },
          pr: { xs: 0, lg: 3 },
          borderRadius: { xs: "none", lg: 2 },
          border: { xs: "none", lg: "1px solid #FF8C0B" },
        }}
        className="md:hidden! flex! items-center! "
      >
        <ReusableSwiper
          slidePerViewXs={1.8}
          pagination={true}
          spaceBetween={8}
          dots={false}
        >
          <div className="flex flex-col-reverse items-center! gap-2  mr-4!">
            <div className="rounded-3xl bg-white py-3 px-3 flex flex-col justify-between items-center w-full">
              <div className="w-full">
                <div className="bg-red text-white rounded-2xl flex flex-row items-center justify-center gap-2 py-4 w-full">
                  <Typography className="text-2xl! font-semibold!">
                    20 : 05 : 34
                  </Typography>
                  <HourglassFullIcon />
                </div>
                <Typography className="text-sm! text-center! mt-1!">
                  فرصت خرید رو از دست نده که دیره
                </Typography>
              </div>

              <Typography className="font-semibold! text-xl! text-center! mt-4!">
                شگفت‌انگیزهای امروز
              </Typography>
            </div>
            <div className="relative w-full h-[170px]">
              <Image
                alt="discount"
                src="/images/discount-kish.png"
                fill
                className="object-contain "
              />
            </div>
          </div>
          {entertainment.map((item, index) => (
            <div key={index} className="px-2 mt-6!">
              <EntertainmentCard {...item} />
            </div>
          ))}
        </ReusableSwiper>
      </Grid>
    </>
  );
}
