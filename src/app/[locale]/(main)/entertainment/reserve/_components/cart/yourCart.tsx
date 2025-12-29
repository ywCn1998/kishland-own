import { Stack, Typography } from "@mui/material";
import React from "react";
import CartCards from "./yourCart/CartCards";
import TotalResponsive from "./totalResponsive";

export default function YourCart() {
  return (
    <>
      <Stack
        component="header"
        className="border-1 border-slate-200  p-4  bg-white! reveal w-full"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          borderRadius: 2,
        }}
      >
        <Typography className="!text-lg lg:!text-xl" fontWeight={500}>
          {" "}
          سبد تفریح شما
        </Typography>
        <CartCards />
      </Stack>
      <TotalResponsive total={"22,000,000"} />
    </>
  );
}
