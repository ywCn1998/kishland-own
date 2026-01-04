import { Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";

interface TotalResponsiveProps {
  total: number | string;
  onButtonClick?: () => void;
  buttonText?: string;
}

export default function TotalResponsive({
  total,
  onButtonClick,
  buttonText = "ادامه",
}: TotalResponsiveProps) {
  return (
    <Stack
      spacing={2}
      sx={{
        width: "100%",
        height: "90px",
        px: 3,
        boxShadow: 3,
        backgroundColor: "white",
        position: "fixed",
        bottom: 0,
        left: 0,
        zIndex: 1200,
        display: { lg: "none", xs: "flex" },
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Grid
        alignItems="start"
        className="!flex !flex-col gap-2!"
      >
        <Typography
          className="text-sm! text-slate-500!"
          sx={{ fontWeight: 400 }}
        >
          جمع کل
        </Typography>
        <Typography className="text-lg! " sx={{ fontWeight: 500 }}>
          {total} ت
        </Typography>
      </Grid>

        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={onButtonClick}
          className="px-10! w-[45%]! rounded-2xl! mb-4!"
        >
          <Typography className="text-base! text-white">{buttonText}</Typography>
        </Button>
    </Stack>
  );
}

