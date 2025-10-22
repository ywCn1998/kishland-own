import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

const Banks = [
  {
    image: "/images/entertainment/reserve/tavana.png",
    name: "tavana",
    link: "#",
  },
  {
    image: "/images/entertainment/reserve/loant.png",
    name: "loant",
    link: "#",
  },
];
// type PayOnlineProps = {
//   selected: string;
//   onClick: () => void;
// };

export default function PayLoan() {
  return (
    <>
      <Stack display={"flex"}>
        <Stack
          component="header"
          className="reveal"
          sx={{
            // border: selected=== "loan" ? "1px solid #FB7201" : "1px solid #e2e8f0",
            border: "1px solid #e2e8f0",
            p: { xs: 1, lg: 2 },
            // backgroundColor: selected=== "loan" ? "#FFF9EC" : "white",
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
                <LanguageOutlinedIcon sx={{fontSize : {xs : "medium" , lg : "large"}}}/> پرداخت اقساطی
              </Typography>
              <Typography
                variant="body1"
                color="textDisabled"
                sx={{ fontSize: { xs: "8px", lg: "16px" } }}
              >
                برای شرکت ها و سازمان های طرف قرار داد{" "}
              </Typography>
            </Grid>
          </Grid>
          <Grid display={"flex"} gap={{ xs: 1, lg: 3 }}>
            {Banks.map((bank, index) => (
              <Stack
                key={index}
                sx={{
                  border: "solid 1px ",
                  borderColor: "#FB7201",
                  height: { xs: "32px", lg: "49px" },
                  px: { xs: 1, lg: 2 },
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: 1,
                }}
              >
                <Box
                  component="img"
                  src={bank.image}
                  alt={bank.name}
                  sx={{
                    height: { xs: 16, lg: 29 },
                    width: { xs: 16, lg: "auto" },
                    objectFit: "contain",
                    display: "block",
                  }}
                />{" "}
              </Stack>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </>
  );
}
