
import { Grid } from "@mui/material";
import ReusableSwiper from "@/components/shared/reusableSwiper";
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

export default function HotelsCardSection() {
  return (
    <>
      <Grid container spacing={4} className="lg:mt-5 !hidden lg:!flex overflow-visible!" >
        {entertainment.map((entertainment, index) => (
          <Grid size={3} overflow={"visible"} >
            <HotelCards key={index} {...entertainment} />
          </Grid>
        ))}
      </Grid>
      <Grid className=" lg:!hidden xs-fullwidth pr-4  !bg-[#F5F7FA]">
        <ReusableSwiper pagination={true} dots={false}>
          {entertainment.map((entertainment, index) => (
            <Grid>
              <HotelCards key={index} {...entertainment} />
            </Grid>
          ))}
        </ReusableSwiper>
      </Grid>
    </>
  );
}
