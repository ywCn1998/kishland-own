import ReusableSwiper from "@/components/shared/reusableSwiper";
import { Button, Grid, Stack } from "@mui/material";

const hotelsList = [
  { route: "", label: "هتل کوروش کبیر" },
  { route: "", label: "هتل داریوش" },
  { route: "", label: "هتل ارم" },
  { route: "", label: "هتل پارمیدا" },
  { route: "", label: "هتل شایان" },

  { route: "", label: "هتل کوروش کبیر" },
  { route: "", label: "هتل شایگان" },
  { route: "", label: "هتل فلامینگو" },
  { route: "", label: "هتل ایران" },
  { route: "", label: "هتل آرامیس" },

  { route: "", label: "هتل کوروش کبیر" },
  { route: "", label: "هتل سان رایز" },
  { route: "", label: "هتل آریان" },
  { route: "", label: "هتل ویدا" },
  { route: "", label: "هتل پارسیان" },
];


export default function HotelsList({ className }: { className?: string }) {
  return (
    <Stack mt={10} spacing={2} className={`bg-[#FFF9EC] rounded-xl! p-3 ${className}`}>
      <Grid container columns={10} spacing={2} className="hidden! md:flex!">
        {hotelsList.map((row, rowIndex) => (
          <Grid size={2} key={rowIndex} className="
          flex flex-row items-center justify-around border-1 border-slate-200 rounded-2xl text-center cursor-pointer
          transition-all duration-300 ease-in-out active:scale-95 hover:shadow-md hover:border-blue-300
        ">
            <Button
              variant="outlined"
              className="border-0! bg-white! text-black! w-full rounded-2xl!"
            >
              <span className="reveal-down">{row.label}</span>
            </Button>
          </Grid>
        ))}
      </Grid>

      <Stack className="md:hidden!">
        <ReusableSwiper slidePerViewXs={2} slideperviewMd={4} slidePerviewLg={4} spaceBetween={10} pagination={true}>
          {hotelsList.map((row, index) => (
            <Button
              variant="outlined"
              className="bg-white! text-black! w-full rounded-xl!"
            >
              <span className="reveal-down text-sm! text-nowrap!">{row.label}</span>
            </Button>
          ))}
        </ReusableSwiper>
      </Stack>
    </Stack>
  );
}
