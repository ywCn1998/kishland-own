import React from "react";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import { CategorySlider, ExtraFooterInformation, OfferBanner } from "@/components/shared/_components";
import { Widgets } from "@mui/icons-material";
import YouMayLoveSection from "../youMayLoveSection";

type EmptyCartSectionProps = {
  onNext: () => void;
};
export default function EmptyCartSection({ onNext }: EmptyCartSectionProps) {
  return (
    <>
    <Stack mt={{xs : "120px" , lg : 10}}>
      <Stack >
        <CategorySlider />
      </Stack>

      <Grid
        container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="20px"
        className="reveal"
      >
        <Grid  sx={{ width : {lg : "417px" , xs : "255px"} , height : {lg : "417px" , xs : "190px"}}}>
          <img
            src="/images/entertainment/reserve/enterreserve1.png"
            alt="Empty Cart"
          />
        </Grid>

        <Grid
          size={{ md: 5 }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={1}
        >
          <Typography variant="sub_title" >
            سبد تفریحات شما منتظره پر بشه!
          </Typography>
          <Typography color="textDisabled" variant="subtitle2" sx={{textAlign : 'center'}}>
            با انتخاب تفریحات هیجان‌انگیز، لحظات خوش‌گذرانی خودتون رو شروع کنید!
          </Typography>
        </Grid>

        <Grid size={{ md: 5 }} width="100%">
          <Button variant="contained" fullWidth sx={{ p: 3 }}  onClick={onNext}  >
            <Typography variant="body2" color="#fff">
              مشاهده لیست تفریحات
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Stack>
   
    </>
  );
}
