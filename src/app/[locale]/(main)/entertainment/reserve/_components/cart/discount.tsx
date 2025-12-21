"use client";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Stack,
  Typography,
  Divider,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import React from "react";

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

export default function Discount() {
  return (
    <Stack
      sx={{
        border: "1px solid #e2e8f0",
        borderRadius: {xs : "12px" , lg : "16px"},
        backgroundColor: "white",
        overflow: "hidden",
        px: {xs : 0 , lg : 2},
        py : {xs : 0 , lg : 2},
      }}
      className="reveal"
    >
      <Accordion sx={{ border: "none" }} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Stack
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
              justifyContent: "start",
            }}
          >
            <Typography className="!text-lg lg:!text-xl" fontWeight={{xs : 550 , lg : 500}}>
              کد تخفیف
            </Typography>
            <Typography fontSize={"12px"} fontWeight={400} color="textDisabled" sx={{display : {xs : "none" , lg : "block"}}}>
              در صورت داشتن کد تخفیف آن را اینجا وارد کنید
            </Typography>
          </Stack>
        </AccordionSummary>
        <Divider />

        <AccordionDetails>
          <Grid container spacing={2}>
            <TextField
              fullWidth
              placeholder="کد تخفیف را وارد کنید"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button variant="text" color="secondary" size="small">
                      <Typography variant="caption2">اعمال</Typography>
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
}
