

import { Grid } from "@mui/material";
import EntertainmentCard from "@/components/shared/cards/entertainment/entertainmentCard";
import ReusableSwiper from "@/components/shared/reusableSwiper";

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
];

export default function YouMayLoveSection() {
  return (
    <>
      <Grid container spacing={5} className="lg:mt-5 !hidden lg:!flex ">
        {entertainment.map((entertainment, index) => (
          <Grid size={3} >
            <EntertainmentCard key={index} {...entertainment} />
          </Grid>
        ))}
      </Grid>
      <Grid className=" lg:!hidden xs-fullwidth pr-4  !bg-[#F5F7FA]">
        <ReusableSwiper pagination={true} dots={false}>
          {entertainment.map((entertainment, index) => (
            <Grid>
              <EntertainmentCard key={index} {...entertainment} />
            </Grid>
          ))}
        </ReusableSwiper>
      </Grid>
    </>
  );
}
