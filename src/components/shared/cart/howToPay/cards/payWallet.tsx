import { Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

// type PayOnlineProps = {
//   selected: string;
//   onClick: () => void;
// };

export default function PayWallet() {
  return (
    <>
      <Stack>
        <Stack
          component="header"
          sx={{
            // border: selected=== "wallet" ? "1px solid #FB7201" : "1px solid #e2e8f0",
            border: "1px solid #e2e8f0",
            p: { xs: 1, lg: 2 },
            // backgroundColor: selected=== "wallet" ? "#FFF9EC" : "white",
            bgcolor: "white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 1,
          }}
        >
          <Grid display={"flex"}>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                alignItems: "start",
              }}
            >
              <Typography variant="subtitle2" fontWeight={500}>
                <AccountBalanceWalletOutlinedIcon sx={{fontSize : {xs : "medium" , lg : "large"}}}/> پرداخت از کیف پول
              </Typography>
              <Typography
                variant="body1"
                color="textDisabled"
                sx={{ fontSize: { xs: "8px", lg: "16px" } }}
              >
                موجودی : 1,541,000 تومان
              </Typography>
            </Grid>
          </Grid>
          <Button variant="text" color="secondary" size="small" sx={{display : "flex" , alignItems : 'center'}}>
            <Typography sx={{fontSize : {xs :"10px" , lg : "14px"}}}>
              <AddCircleOutlineOutlinedIcon sx={{fontSize : {xs : "medium" , lg : "large"}}}/> افزایش موجودی
            </Typography>
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
