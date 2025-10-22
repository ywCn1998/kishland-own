import React from "react";
import YourCart from "../cart/yourCart";
import PriceCard from "../cart/PriceCard";
import HowToPay from "../cart/howToPay/howToPay";
import Discount from "../cart/discount";
import { Grid } from "@mui/material";

type EmptyCartSectionProps = {
  onNext: () => void;
};
export default function Step2({ onNext }: EmptyCartSectionProps) {
  return (
    <>
      <Grid
        spacing={2.5}
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: "-7",
          flexDirection: { lg: "row", xs: "column" },
        }}
      >
        <Grid
          size={{ lg: 9, xs: 12 }}
          display={"flex"}
          flexDirection={"column"}
          gap={2.5}
        >
          <HowToPay />
          <Discount />
          <YourCart />
        </Grid>
        <Grid size={{ lg: 3, xs: 12 }} className="!hidden lg:!block">
          <PriceCard onNext={onNext} />
        </Grid>
      </Grid>
    </>
  );
}
