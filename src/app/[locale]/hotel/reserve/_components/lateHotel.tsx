"use client";

import RHFSelect from "@/components/shared/form/RHFSelect";
import FormProvider from "@/providers/FormProvider";
import { MenuItem, Select, Stack, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import React, { useState } from "react";

export default function LateHotel() {
  const [value, setValue] = useState<string>("");
  const hours = Array.from({ length: 24 }, (_, i) => i + 1);
  const getPersianTime = (time: string) => {
    if (!time) return "";

    const hour = parseInt(time.split(":")[0]);

    let period = "";
    let displayHour = hour;

    if (hour >= 0 && hour < 6) {
      period = "بامداد";
    } else if (hour >= 6 && hour < 12) {
      period = "صبح";
    } else if (hour >= 12 && hour < 17) {
      period = "ظهر";
    } else if (hour >= 17 && hour < 20) {
      period = "عصر";
    } else {
      period = "شب";
    }

    displayHour = hour % 12 === 0 ? 12 : hour % 12;

    return `ساعت ${displayHour} ${period}`;
  };

  return (
    <>
      <Stack
        sx={{
          border: "1px solid #e2e8f0",
          borderRadius: { xs: "12px", lg: 2 },
          backgroundColor: "white",
          overflow: "hidden",
          p: 2,
          py: 3,
          display: "flex",
          flexDirection: "column",
          mt: 2,
        }}
                className="reveal-down"

      >
        <Typography className="text-lg! font-medium!">
          ورود دﯾﺮﻫﻨﮕﺎم ﺑﻪ ﻫﺘﻞ
        </Typography>
        <Typography className="text-sm! text-slate-400 mt-3!">
          {value
            ? `زمان ورود من به هتل ${getPersianTime(value)} می‌باشد`
            : "زمان ورود من به هتل پس از ساعت 8 شب می‌باشد"}{" "}
        </Typography>
        <Select
          sx={{ mt: 2, borderRadius: 1 }}
          labelId="demo-select-label"
          value={value}
          displayEmpty
          onChange={(e) => setValue(e.target.value)}
          renderValue={(selected) => {
            if (!selected) {
              return <span className="text-slate-400">انتخاب ساعت ورود </span>;
            }
            return selected;
          }}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 300,
              },
            },
          }}
        >
          {hours.map((hour) => {
            const label = `${hour.toString().padStart(2, "0")}:00`;
            return (
              <MenuItem key={hour} value={label}>
                {label}
              </MenuItem>
            );
          })}
        </Select>
      </Stack>
    </>
  );
}
