import React from "react";
import ParentDetails from "@/components/shared/cart/parentDetails";
import YourCart from "../cart/yourCart";
import PriceCard from "../cart/PriceCard";
import { Grid, Stack } from "@mui/material";
import TotalResponsive from "../cart/totalResponsive";

type EmptyCartSectionProps = {
  onNext: () => void;
};
export default function Step1({ onNext }: EmptyCartSectionProps) {
  return (
    <>
      <Stack sx={{ mt : {lg: 3 , xs : 0} , gap : 2 }}>
        <ParentDetails />
        <Grid  spacing={2.5}  container sx={{display : "flex" , justifyContent : "space-between" , mb : "-7" , flexDirection : {lg : "row" , xs : "column"}   }}>
          <Grid size={{lg : 9 , xs : 12}} className="!hidden lg:!block">
            <YourCart />
          </Grid>
          <Grid size={{lg : 3 , xs : 12}} className="px-2! lg:px-0!">
            <PriceCard onNext={onNext}/>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}

