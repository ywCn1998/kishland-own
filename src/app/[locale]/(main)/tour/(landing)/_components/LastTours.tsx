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

const hotels = [
  {
    image: "/images/building1.png",
    title: "هتل شایان کیش",
    price: "8,397,000 ",
    height: "full",
  },
  {
    image: "/images/building2.png",
    title: "هتل آرامش کیش",
    price: "1,573,333 ",
    height: "10/12",
  },
  {
    image: "/images/building1.png",
    title: "هتل شایان کیش",
    price: "8,397,000 ",
    height: "full",
  },
  {
    image: "/images/building2.png",
    title: "هتل آرامش کیش",
    price: "1,573,333 ",
    height: "10/12",
  },
]


interface lastTour {
  umbrella?: boolean;
  titles?: boolean;
  isHotel?: boolean
}
const LatestToursSection = ({ umbrella = true, titles = true, isHotel = false }: lastTour) => {
  return (
    <>
      {umbrella && (
        <Stack className=" relative! hidden! md:inline!">
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
              <Typography className="text-sm! md:text-lg! text-slate-400! mb-5! reveal-down">
                تور + پکیجی از تفریحات و هیجان
              </Typography>
              <Typography className="font-bold! text-lg! md:text-5xl! reveal-down">
                جدیدترین <span className="text-[#FF8C0B]">تورهای</span> کیش
              </Typography>
            </div>
            <div>
              <Button
                endIcon={<KeyboardBackspaceIcon className="text-gray-600!" />}
                variant="outlined"
                className="text-sm! border-0! md:text-base! md:border-1! md:border-black! bg-white! text-slate-400! md:text-black! p-0! md:px-4! md:py-4! reveal-down"
              >
                <span className="hidden! md:inline!">
                  مشاهده لیست پکیج ها
                </span>
                <span className=" md:hidden!">
                  مشاهده لیست
                </span>
              </Button>
            </div>
          </Stack>
        )}

        {isHotel && (
          <Stack className="md:hidden! flex! flex-row! justify-between! w-full! items-center! mt-0! relative!">
            <div>
              <Typography className="text-sm! md:text-lg! text-slate-400! mb-5! reveal-down">
                {isHotel ? (
                  <span>
                    یه تفریح عالی یه اقامت گاه درجه یک میخواد
                  </span>
                ) : (
                  <span>
                    تور + پکیجی از تفریحات و هیجان
                  </span>
                )}
              </Typography>
              <Typography className="font-bold! text-lg! md:text-5xl! reveal-down">
                {isHotel ? (
                  <span>
                    محبوب ترین هتل های کیش
                  </span>
                ) : (
                  <span>
                    جدیدترین <span className="text-[#FF8C0B]">تورهای</span> کیش
                  </span>
                )}
              </Typography>
            </div>
            <div>
              <Button
                endIcon={<KeyboardBackspaceIcon className="text-gray-600!" />}
                variant="outlined"
                className="text-sm! border-0! md:text-base! md:border-1! md:border-black! bg-white! text-slate-400! md:text-black! p-0! md:px-4! md:py-4! reveal-down"
              >
                <span className="hidden! md:inline!">
                  مشاهده لیست پکیج ها
                </span>
                <span className=" md:hidden!">
                  {
                    isHotel ? "مشاهده همه" : "لیست مشاهده"
                  }
                </span>
              </Button>
            </div>
          </Stack>
        )}


        <Box
          sx={{
            maxWidth: "100%",
            mx: "auto",
            pb: 4,
            display: "flex",
            flexDirection: "row",
            borderRadius: 2,
            marginTop: { xs: 3, md: 5 },
          }}
          className="reveal-down"
        >
          <ReusableSwiper slidePerViewXs={1.4} slideperviewMd={4} slidePerviewLg={4} spaceBetween={20} pagination={true}>
            {isHotel ?(hotels.map((hotel , index)=>(
              <TourCard key={index} {...hotel} index={index} sell={true} /> 
            ))) : (
              tours.map((tour, index) => (
                <Stack className="h-[350px]! md:h-[600px]!">
                  <TourCard key={index} {...tour} index={index} />
                </Stack>
              ))
            )}

          </ReusableSwiper>
        </Box>
      </Container>
    </>
  );
};

export default LatestToursSection;
