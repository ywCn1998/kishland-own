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
import MainTabs from "@/components/shared/mainTabs";
import SortIcon from "@mui/icons-material/Sort";


export function BlitType() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const tabsData = [
    {
      label: "مرتب سازی",
      icon: <SortIcon className="ml-1!" fontSize="small" />,
      disabled: true,
    },
    {
      label:  "پیشنهادات کیش لندیار",
    },
    {
      label:"کمترین قیمت",
    },
    {
      label:"بیشترین قیمت",
    },
    {
      label: "پرفروش‌ترین",
    },
    {
      label: "محبوب‌ترین",
    }
  ];

  // Sync sortOptions with tabsData (skip first item which is disabled)
  const sortOptions = tabsData.slice(1).map(tab => tab.label);

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
        sx={{
          borderColor: "#E1E6F0",
          gap: 2,
        }}
        className="w-full!"
      >
        {!isMobile && (
          <>
            <MainTabs
              data={tabsData}
            />
          </>
        )}

        {isMobile && (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              width: "100%",
              px:2,
              py: 0.7,
              borderRadius: 1.5,
              gap: 2,
              border : "solid 1px ",
            }}
            className="border-slate-200! bg-white!"
          >
            <Stack direction="row" alignItems="center" gap={0.8}>
              <FormatLineSpacingIcon fontSize="small" color="action" />
              <Typography color="text.secondary" fontWeight={500} className="text-xs!">
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
                <MenuItem key={index} value={index} >
                  <Typography sx={{ fontSize: 13, fontWeight: 500, mt: .4 }}>{option}</Typography>
                </MenuItem>
              ))}
            </Select>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
}
