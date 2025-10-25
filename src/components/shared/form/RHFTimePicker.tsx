import * as React from "react";
import { Controller, useFormContext } from "react-hook-form";
import type { ComponentProps } from "react";
import type { TextFieldProps, StackProps } from "@mui/material";
import { Stack } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { faIR } from "date-fns-jalali/locale/fa-IR";
import type { PickersLocaleText } from "@mui/x-date-pickers/locales";

type MUITimePickerProps = Omit<ComponentProps<typeof TimePicker>, "value" | "onChange">;

export interface RHFTimePickerProps extends MUITimePickerProps {
  name: string;
  label?: string;
  helperComponenet?: React.JSX.Element;
  textFieldProps?: TextFieldProps;
  stackProps?: StackProps;
  storeAs?: "string" | "date";
  /** Customize action button texts (OK / Cancel / Clear / Today …) */
  localeText?: Partial<PickersLocaleText>;
}

function toDate(value: unknown): Date | null {
  if (!value) return null;
  if (value instanceof Date && !isNaN(value.getTime())) return value;
  const d = new Date(value as any);
  return isNaN(d.getTime()) ? null : d;
}
const timeRe = /^([01]\d|2[0-3]):([0-5]\d)$/;
function toDateFromTimeString(value: unknown): Date | null {
  if (typeof value !== "string" || !timeRe.test(value)) return null;
  const [h, m] = value.split(":").map(Number);
  const d = new Date();
  d.setSeconds(0, 0);
  d.setHours(h, m);
  return d;
}
function toTimeStringFromDate(d?: Date | null): string {
  if (!d || isNaN(d.getTime())) return "";
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  return `${hh}:${mm}`;
}

export default function RHFTimePicker({
  name,
  label,
  helperComponenet,
  textFieldProps,
  stackProps,
  storeAs = "string",
  localeText,
  ...pickerProps
}: RHFTimePickerProps) {
  const { control } = useFormContext();

  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFnsJalali}
      adapterLocale={faIR}
      localeText={localeText}
    >
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => {
          const valueAsDate =
            storeAs === "string" ? toDateFromTimeString(field.value) : toDate(field.value);

          const handleChange = (newValue: Date | null) => {
            if (storeAs === "string") field.onChange(newValue ? toTimeStringFromDate(newValue) : "");
            else field.onChange(newValue ?? null);
          };

          return (
            <Stack gap={2} {...stackProps} sx={{ width: "100%" }}>
              <TimePicker
                {...pickerProps}
                value={valueAsDate}
                // @ts-ignore check later
                onChange={handleChange}
                ampm={false}
                views={["hours", "minutes"]}
                openTo="hours"
                slotProps={{
                  actionBar: { actions: ["clear", "cancel", "accept"] }, // control which buttons show
                  textField: {
                    label,
                    error: !!fieldState.error,
                    helperText: fieldState.error?.message || "",
                    fullWidth: true,
                    ...textFieldProps,
                  },
                }}
              />
              {helperComponenet}
            </Stack>
          );
        }}
      />
    </LocalizationProvider>
  );
}
