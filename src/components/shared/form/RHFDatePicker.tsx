"use client";

import * as React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers";
import type { ComponentProps } from "react";
import type { TextFieldProps, StackProps } from "@mui/material";
import { Stack } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { faIR } from "date-fns-jalali/locale/fa-IR";

type MUIDatePickerProps = Omit<
  ComponentProps<typeof DatePicker>,
  "value" | "onChange" | "label"
>;

export interface RHFDatePickerProps extends MUIDatePickerProps {
  name: string;
  label?: string | React.ReactNode;
  helperComponenet?: React.JSX.Element;
  textFieldProps?: TextFieldProps;
  stackProps?: StackProps;
  /** match RHFSelect header label icons */
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

function toDate(value: unknown): Date | null {
  if (!value) return null;
  if (value instanceof Date && !isNaN(value.getTime())) return value;
  const d = new Date(value as any);
  return isNaN(d.getTime()) ? null : d;
}

export default function RHFDatePicker({
  name,
  label,
  helperComponenet,
  textFieldProps,
  stackProps,
  startIcon,
  endIcon,
  format = "yyyy/MM/dd", // Jalali-friendly display
  ...pickerProps
}: RHFDatePickerProps) {
  const { control } = useFormContext();

  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFnsJalali}
      adapterLocale={faIR}
    >
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <Stack
            gap={1.2}
            {...stackProps}
            sx={{ width: "100%", ...stackProps?.sx }}
          >
            <DatePicker
              {...pickerProps}
              value={toDate(field.value)}
              onChange={(newValue) => field.onChange(newValue ?? null)}
              format={format}
              slotProps={{
                textField: {
                  
                  label: (
                    <span className="inline-flex items-center gap-2 text-[#5b667f]">
                      {startIcon}
                      <span>{label}</span>
                      {endIcon}
                    </span>
                  ),
                  InputLabelProps: { shrink: true },
                  variant: "standard",
                  fullWidth: true,
                  error: !!fieldState.error,
                  helperText: fieldState.error?.message || "",
                  // ✅ key line: turn off underline on the Input component
                  InputProps: { disableUnderline: true },

                  sx: {
                    pt: 0.7,
                    // Target the actual Input (not InputBase)
                    "& .MuiInput-root": {
                  direction: "rtl",          // 👈 makes the text run right-to-left

                      textAlign: "right",
                      "&:before, &:after": { borderBottom: "0 !important" },
                      "&:hover:not(.Mui-disabled):before": {
                        borderBottom: "0 !important",
                      },
                    },
                    // your typography
                    "& .MuiInputBase-input": {
                      fontWeight: 500,
                      // fontSize: 15,
                    },
                    ...(textFieldProps?.sx || {}),
                  },
                  ...textFieldProps,
                },
                openPickerButton: {
                  sx: {
                    "&:hover, &:active, &:focus": {
                      backgroundColor: "transparent",
                    },
                  },
                },
                desktopPaper: {
                  sx: {
                    backgroundColor: "#f5f7ff", // 💡 background of the calendar popper
                    borderRadius: 2,
                  },
                },
              }}
            />

            {helperComponenet}
          </Stack>
        )}
      />
    </LocalizationProvider>
  );
}
