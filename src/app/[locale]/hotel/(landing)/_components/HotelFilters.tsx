"use client"

import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

const hotelFilters = [
  { title: "هتل های 5 ستاره" },
  { title: "هتل های 4 ستاره" },
  { title: "هتل های 3 ستاره" },
  { title: "هتل های 2 ستاره" },
  { title: "هتل آپارتمان ها" },
];

export default function HotelFilters() {
  const [selected, setSelected] = useState<number >(4);

  return (
    <Stack className="flex !flex-row w-full px-10 gap-4 !items-center">
      {hotelFilters.map((f, index) => {
        const isSelected = selected === index;

        return (
          <Box
            key={index}
            onClick={() => setSelected(index)}
            className={`flex !flex-row py-5 px-7 rounded-2xl w-full items-center justify-around cursor-pointer transition-all duration-200 ${
              isSelected
                ? "bg-[#088DEF] text-white shadow-lg"
                : "bg-white text-gray-800 hover:bg-blue-100"
            }`}
          >
            <Typography className="!text-lg font-medium">
              {f.title}
            </Typography>
          </Box>
        );
      })}
    </Stack>
  );
}
