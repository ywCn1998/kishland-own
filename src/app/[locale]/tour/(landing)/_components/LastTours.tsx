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

const LatestToursSection = () => {
  return (
    <>
      <Stack className=" relative! hidden! md:inline!">
        <img
          src={"/images/unberella.png"}
          className="w-24! h-[128px]! absolute! right-[-20px] top-[60px] z-40"
          alt="fd"
        />
      </Stack>

      <Container maxWidth="xl" disableGutters className="pr-4! md:px-4!">
        <Stack className="flex! flex-row! justify-between! w-full! items-center! mt-30! relative! pl-4! md:pl-0!">
          <div>
            <Typography className="text-sm! sm:text-base md:text-lg! text-slate-400! mb-5! reveal-down">
              تور + پکیجی از تفریحات و هیجان
            </Typography>
            <Typography className="font-bold! text-lg! sm:text-xl! md:text-5xl! reveal-down">
              جدیدترین <span className="md:text-[#FF8C0B]">تورهای</span> کیش
            </Typography>
          </div>
          <div>
            <Button
              endIcon={<KeyboardBackspaceIcon className="text-gray-600!" />}
              variant="outlined"
              className="border-1 border-black! bg-white! text-black! py-4! reveal-down hidden! md:inline! "
            >
              مشاهده لیست پکیج ها
            </Button>

            <Button
              endIcon={<KeyboardBackspaceIcon className="text-slate-400!" />}
              variant="outlined"
              className="bg-white! text-black! py-4! reveal-down md:hidden! px-0! text-xs! sm:text-base border-none! text-slate-400! mt-1! md:mt-0!"
            >
              مشاهده پکیج ها
            </Button>
          </div>
        </Stack>
        <Stack sx={{ height: { xs: "400px", lg: "600px" } }} spacing={3} mt={6}>
          <ReusableSwiper slidePerViewXs={1.4} slideperviewMd={4} slidePerviewLg={4} spaceBetween={20} pagination={true}>
            {tours.map((tour, index) => (
              <TourCard key={index} {...tour} />
            ))}
          </ReusableSwiper>
        </Stack>
      </Container>
    </>
  );
};

export default LatestToursSection;
