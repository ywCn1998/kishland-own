"use client";

import * as React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { Tabs, Tab, Box } from "@mui/material";
import { AirCard } from "./aircard";
import FormatLineSpacingIcon from "@mui/icons-material/FormatLineSpacing";

export function BlitType() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Stack>
      <Stack
        // reveal
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        className=" border-1 border-slate-200 rounded-2xl h-16 mb-10!  px-8! gap-4 overflow-visible "
      >
        <Stack>
          <Typography color="textDisabled">
            <FormatLineSpacingIcon fontSize="small" /> مرتب سازی{" "}
          </Typography>
        </Stack>

        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            overflow: "visible",
            position: "relative",
            "& .MuiTabs-scroller": {
              overflow: "visible !important",
            },

            "& .MuiTabs-flexContainer": {
              justifyContent: "center",
              gap: 2,
            },
            "& .MuiTab-root": {
              color: "text.disabled",
              fontSize: "16px",
              fontWeight: 400,
            },
            "& .Mui-selected": {
              color: "primary",
              fontWeight: 500,
            },
            "& .MuiTabs-indicator": {
              height: "1px",
              borderRadius: "2px",
              bottom: -8,
            },
          }}
        >
          <Tab label="پیشنهادات کیش لندیار" />
          <Tab label="کمترین قیمت" />
          <Tab label="بیشترین قیمت " />
          <Tab label="پر فروش ترین" />
          <Tab label="محبوب ترین" />
        </Tabs>
      </Stack>

      {/* Tab Panels */}
      {/* {value === 0 && (
                <Grid size={{ md: 12 }} container spacing={2}>

                    <AirCard />
                    <AirCard />
                    <AirCard />
                    <AirCard />


                </Grid>
            )}


            {value === 1 && (
                <Box sx={{ p: 2 }}>
                    <Typography>محتوای مربوط به بلیط قطار</Typography>
                </Box>
            )} */}
    </Stack>
  );
}
