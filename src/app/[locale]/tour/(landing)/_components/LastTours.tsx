import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import Image from "next/image";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import { TourCard } from "@/components/shared/cards/tour/tourCard";
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
        <Stack className=" relative!">
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
              <Typography className="text-lg! text-slate-400! mb-5! reveal-down">
                تور + پکیجی از تفریحات و هیجان
              </Typography>
              <Typography className="font-bold! text-5xl! reveal-down">
                جدیدترین <span className="text-[#FF8C0B]">تورهای</span> کیش
              </Typography>
            </div>
            <div>
              <Button
                endIcon={<KeyboardBackspaceIcon className="text-gray-600!" />}
                variant="outlined"
                className="border-1 border-black! bg-white! text-black! py-4! reveal-down"
                href="/fa/tour/list"
              >
                مشاهده لیست پکیج ها
              </Button>
            </div>
          </Stack>
        )}
        <Grid container sx={{ height: "600px" , width : "100%" }} spacing={3} mt={6}>
          {tours.map((tour, index) => (
            <TourCard key={index} {...tour} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default LatestToursSection;
