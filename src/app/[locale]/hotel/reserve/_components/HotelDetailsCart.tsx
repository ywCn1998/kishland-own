"use client";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Grid,
  InputAdornment,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined";

const hotelDetails = [
  {
    title: "اتاق",
    des: " دو تخته اکونومی رو به دریا",
    icon: <MapsHomeWorkOutlinedIcon />,
  },
  {
    des: "شام و صبحانه",
  },
  {
    des: "ترانسفر فرودگاهی",
  },
];
export default function HotelDetailsCart({
  discount = false,
}: {
  discount?: boolean;
}) {
  const [selected, setSelected] = useState<string>("online");

  return (
    <Stack
      sx={{
        border: "1px solid #e2e8f0",
        borderRadius: { xs: "12px", lg: "16px" },
        backgroundColor: "white",
        overflow: "hidden",
        p: { xs: 0, lg: 2 },
      }}
className="reveal"    >
      <Accordion sx={{ border: "none" }} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            className="!text-lg lg:!text-xl"
            fontWeight={{ xs: 550, lg: 500 }}
          >
            مشخصات هتل{" "}
          </Typography>
        </AccordionSummary>

        <Divider sx={{ mt: { xs: 0, lg: 1 } }} />

        <AccordionDetails >
          <Grid
            sx={{
              border: "1px solid #e2e8f0",
              borderRadius: { xs: "12px", lg: 3},
              backgroundColor: "white",
              overflow: "hidden",
              p: { xs: 0, lg: 2 },
              display: "flex",
              flexDirection: "row",
              mt : 2
            }}
            container
            spacing={3}
            className="reveal"
          >
            <Grid size={3}>
              <Box
                component={"img"}
                src={"/images/hotel/hotelCard.png"}
                className="h-[150px] w-[250px]"
              />
            </Grid>
            <Grid className="flex flex-col justify-around" size={9}>
              <Grid className="flex justify-between items-center ">
                <Grid className="flex flex-col gap-2">
                  <Typography className="text-2xl! font-semibold!">
                    تور 4 روز هتل کوروش
                  </Typography>
                  <div className="flex! flex-row!  items-center! gap-1!">
                    <Rating
                      className="!text-lg lg:text-xl! "
                      defaultValue={5} // ⭐⭐⭐☆☆
                    />
                    <span className="text-[#FFA733] text-xs lg:text-xs! font-bold text-nowrap">
                      هتل 5 ستاره
                    </span>
                  </div>
                </Grid>
                <Grid className="flex flex-col items-end gap-2">
                  <Typography className="text-xs! text-slate-500 ">
                    قیمت کل تور ۲ مسافر : 18,900,000 تومان
                  </Typography>
                  <Typography
                    className="text-2xl! font-semibold! "
                    color="secondary"
                  >
                    18,500,000 تومان
                  </Typography>
                </Grid>
              </Grid>
              <Grid className="flex! gap-2 ">
                {hotelDetails?.map((e, index) => (
                  <Stack
                    key={index}
                    sx={{
                      border: "1px solid #e2e8f0",
                      borderRadius: { xs: "12px", lg: 1.5 },
                      backgroundColor: "white",
                      overflow: "hidden",
                      px: 1,
                      py: 1.5,
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row",
                      gap: "2px",
                    }}
                  >
                    {e?.icon && (
                      <Typography className="text-xs! text-slate-400">
                        {e?.icon}{" "}
                      </Typography>
                    )}
                    {e?.title && (
                      <Typography className="text-sm! text-slate-400">
                        {e?.title} :{" "}
                      </Typography>
                    )}
                    <Typography className="text-sm! text-slate-400">
                      {e?.des}
                    </Typography>
                  </Stack>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
}
