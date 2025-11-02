import ReusableSwiper from "@/components/shared/reusableSwiper";
import { Button, Grid, Stack } from "@mui/material";
import Link from "next/link";


const hotelList = [
  { route: "", label: "هتل کوروش کبیر" },
  { route: "", label: "هتل داریوش" },
  { route: "", label: "هتل ارم" },
  { route: "", label: "هتل پارمیدا" },
  { route: "", label: "هتل شایان" },
  { route: "", label: "هتل شایگان" },
  { route: "", label: "هتل فلامینگو" },
  { route: "", label: "هتل ایران" },
  { route: "", label: "هتل آرامیس" },
  { route: "", label: "هتل سان رایز" },
  { route: "", label: "هتل آریان" },
  { route: "", label: "هتل ویدا" },
  { route: "", label: "هتل ویدا" },
  { route: "", label: "هتل ویدا" },
  { route: "", label: "هتل ویدا" },
]

export default function HotelsList() {
  return (
    <Stack mt={10} spacing={2} className="bg-[#FFF9EC] rounded-xl! p-3!">

      <Grid container spacing={2} columns={10} className='hidden! md:flex!'>
        {hotelList.map((row, rowIndex) => (
          <Grid size={{ xs: 6, md: 2 }} key={rowIndex}>
            <Button
              variant="outlined"
              className="bg-white! text-black! w-full rounded-xl!"
              href="/fa/hotel/hotel-details"
              component={Link}
            >
              <span className="reveal-down text-sm! text-nowrap!">{row.label}</span>
            </Button>
          </Grid>
        ))}
      </Grid>
      <Stack className="mt-10! md:mt-14! md:hidden!">
        <ReusableSwiper
          dots={true}
          slidePerviewLg={4}
          slidePerViewXs={2}
          spaceBetween={10}
          pagination={true}
          style={{ width: "100%" }}
        >
          {hotelList.map((row, index) => (
            <Grid size={{ xs: 6, md: 2 }} key={index}>
              <Button
                variant="outlined"
                className="bg-white! text-black! w-full rounded-xl!"
                href="/fa/hotel/hotel-details"
                component={Link}
              >
                <span className="reveal-down text-sm! text-nowrap!">{row.label}</span>
              </Button>
            </Grid>
          ))}
        </ReusableSwiper>
      </Stack>
    </Stack>
  );
}
