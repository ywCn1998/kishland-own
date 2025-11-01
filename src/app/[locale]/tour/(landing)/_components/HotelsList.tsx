import { Button, Grid, Stack } from "@mui/material";

export default function HotelsList() {
  return (
    <Stack mt={10} spacing={2} className="bg-[#FFF9EC] rounded-xl! p-3!">
      {[
        ["هتل کوروش کبیر", "هتل داریوش", "هتل ارم", "هتل پارمیدا", "هتل شایان"],
        [
          "هتل کوروش کبیر",
          "هتل شایگان",
          "هتل فلامینگو",
          "هتل ایران",
          "هتل آرامیس",
        ],
        [
          "هتل کوروش کبیر",
          "هتل سان رایز",
          "هتل آریان",
          "هتل ویدا",
          "هتل پارسیان",
        ],
      ].map((row, rowIndex) => (
        <Grid container spacing={2} key={rowIndex}>
          {row.map((label, i) => (
            <Grid size="grow" key={i}>
              <Button
                variant="outlined"
                className="bg-white! text-black! w-full rounded-xl!"
                href="/fa/hotel/hotel-details"
              >
                <span className="reveal-down">{label}</span>
              </Button>
            </Grid>
          ))}
        </Grid>
      ))}
    </Stack>
  );
}
