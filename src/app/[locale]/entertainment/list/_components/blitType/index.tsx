"use client";

import * as React from "react";
import {
  Stack,
  Typography,
  Tabs,
  Tab,
  Select,
  MenuItem,
  useMediaQuery,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FormatLineSpacingIcon from "@mui/icons-material/FormatLineSpacing";

export function BlitType() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const sortOptions = [
    "پیشنهادات کیش لندیار",
    "کمترین قیمت",
    "بیشترین قیمت",
    "پرفروش‌ترین",
    "محبوب‌ترین",
  ];

  const handleChangeTabs = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeSelect = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        className="border-1 border-slate-200 rounded-2xl h-16 md:mb-10! px-4! overflow-visible"
        sx={{
          borderColor: "#E1E6F0",
          gap: 2,
        }}
      >
        {!isMobile && (
          <>
            <Stack direction="row" alignItems="center" gap={1}>
              <FormatLineSpacingIcon fontSize="small" color="disabled" />
              <Typography color="textDisabled">مرتب‌سازی</Typography>
            </Stack>

            <Tabs
              value={value}
              onChange={handleChangeTabs}
              sx={{
                overflow: "visible",
                position: "relative",
                "& .MuiTabs-scroller": { overflow: "visible !important" },
                "& .MuiTabs-flexContainer": {
                  justifyContent: "center",
                  gap: 2,
                },
                "& .MuiTab-root": {
                  color: "text.disabled",
                  fontSize: "16px",
                  fontWeight: 400,
                },
                "& .Mui-selected": { color: "primary", fontWeight: 500 },
                "& .MuiTabs-indicator": {
                  height: "1px",
                  borderRadius: "2px",
                  bottom: -8,
                },
              }}
            >
              {sortOptions.map((label, i) => (
                <Tab key={i} label={label} />
              ))}
            </Tabs>
          </>
        )}

        {isMobile && (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              width: "100%",
              px: 0,
              py: 0.5,
              borderRadius: 2,
              gap: 1,
            }}
          >
            <Stack direction="row" alignItems="center" gap={0.8}>
              <FormatLineSpacingIcon fontSize="small" color="action" />
              <Typography color="text.secondary" fontWeight={500} className="text-sm!">
                مرتب‌سازی
              </Typography>
            </Stack>

            <Select
              value={value}
              onChange={handleChangeSelect}
              variant="standard"
              disableUnderline
              size="small"
              sx={{
                "& .MuiSelect-select": {
                  px: 0,
                  py: 0,
                  fontWeight: 500,
                },
                "& fieldset": { border: "none" },
                "& svg": {
                  color: "text.disabled",
                  right: -4,
                },
                minWidth: 130,
              }}
            >
              {sortOptions.map((option, index) => (
                <MenuItem key={index} value={index}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
}
