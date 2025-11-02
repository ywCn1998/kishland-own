import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import Image from "next/image";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import { TourCard } from "@/components/shared/cards/tour/tourCard";
import ReusableSwiper from "@/components/shared/reusableSwiper";
// import unberella from "../../../../public/images/unberella.png"

const tours = [
  {
    image: "/images/building1.png",
    title: "تور تفریحی کیش از تهران - هتل کوروش",
    startDate: "1403/12/27",
    endDate: "1403/12/30",
    height: "full",
  },
  {
    image: "/images/building2.png",
    title: "تور تفریحی کیش از تهران - هتل کوروش",
    startDate: "1403/12/27",
    endDate: "1403/12/30",
    height: "10/12",
  },
  {
    image: "/images/building3.png",
    title: "تور تفریحی کیش از تهران - هتل کوروش",
    startDate: "1403/12/27",
    endDate: "1403/12/30",
    height: "full",
  },
  {
    image: "/images/building4.png",
    title: "تور تفریحی کیش از تهران - هتل کوروش",
    startDate: "1403/12/27",
    endDate: "1403/12/30",
    height: "10/12",
  },
];

interface lastTour {
  umbrella?: boolean;
  titles?: boolean;
}
const LatestToursSection = ({ umbrella = true, titles = true }: lastTour) => {
  return (
    <>
      {umbrella && (
        <Stack className="relative! hidden! md:block!">
          <img
            src={"/images/unberella.png"}
            className="w-24! h-[128px]! absolute! right-[-20px] top-[60px] z-40"
            alt="fd"
          />
        </Stack>
      )}

      <Container maxWidth="xl" className="!w-full">
        {titles && (
          <Stack className="flex! flex-row! justify-between! w-full! items-center! mt-30! relative!">
            <div>
              <Typography className="md:text-lg! text-slate-400! mb-5! reveal-down text-xs!">
                تور + پکیجی از تفریحات و هیجان
              </Typography>
              <Typography className="font-bold! md:text-5xl! reveal-down text-lg!">
                جدیدترین <span className="md:text-[#FF8C0B]">تورهای</span> کیش
              </Typography>
            </div>
            <div>
              <Button
                endIcon={<KeyboardBackspaceIcon className="text-gray-600!" />}
                variant="outlined"
                className="border-0! px-0! md:px-4! md:border-1! bg-white! border-black! text-slate-400! md:text-black! md:py-4! reveal-down text-xs! md:text-base! py-0! text-nowrap!"
                href="/fa/tour/list"
              >
                <span className="hidden! md:inline!">
                  مشاهده لیست پکیج ها
                </span>
                <span className="md:hidden!">
                  مشاهده لیست
                </span>
              </Button>
            </div>
          </Stack>
        )}


        <Stack className="mt-10! md:mt-14!">
          <ReusableSwiper
            dots={true}
            slidePerviewLg={4}
            spaceBetween={30}
            pagination={true}
            style={{ width: "100%" }}
          >
            {tours.map((tour, index) => (
              <Stack className="h-[300px]! md:h-[600px]!">
                <TourCard key={index} {...tour} />
              </Stack>
            ))}
          </ReusableSwiper>
        </Stack>

        {/* <Grid container sx={{ height: "600px", width: "100%" }} spacing={3} mt={6}>
          {tours.map((tour, index) => (
            <TourCard key={index} {...tour} />
          ))}
        </Grid> */}
      </Container>
    </>
  );
};

export default LatestToursSection;
