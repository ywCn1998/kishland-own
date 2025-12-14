import React from "react";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { CategorySlider } from "@/components/shared/ui";

type EmptyCartSectionProps = {
  onNext: () => void;
  variant?: "entertainment" | "tour";
};

export default function EmptyCartSection({ onNext, variant = "entertainment" }: EmptyCartSectionProps) {
  const isEntertainment = variant === "entertainment";
  
  return (
    <Stack mt={{xs : isEntertainment ? "120px" : 10, lg : 10}}>
      <Stack>
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
        <Grid sx={{ width : {lg : "417px" , xs : "255px"} , height : {lg : "417px" , xs : "190px"}}}>
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
          <Typography variant="sub_title">
            {isEntertainment ? "سبد تفریحات شما منتظره پر بشه!" : "سبد شما خالی است"}
          </Typography>
          <Typography color="textDisabled" variant="subtitle2" sx={{textAlign : 'center'}}>
            {isEntertainment 
              ? "با انتخاب تفریحات هیجان‌انگیز، لحظات خوش‌گذرانی خودتون رو شروع کنید!"
              : "لطفاً محصولات مورد نظر خود را به سبد خرید اضافه کنید."}
          </Typography>
        </Grid>

        <Grid size={{ md: 5 }} width="100%">
          <Button variant="contained" fullWidth sx={{ p: 3 }} onClick={onNext}>
            <Typography variant="body2" color="#fff">
              {isEntertainment ? "مشاهده لیست تفریحات" : "مشاهده محصولات"}
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Stack>
  );
}

