"use client";

import * as React from "react";
import { Controller, useFormContext } from "react-hook-form";

import { Button, Dialog, DialogContent} from "@mui/material";
import { Stack, Switch } from "@mui/material";

import { toJalaali } from "jalaali-js";

import {
  getDefaultClassNames,
  DayPicker as GregorianDayPicker,
  type DateRange,
} from "react-day-picker";
import {
  DayPicker as PersianDayPicker,
  getDateLib,
} from "react-day-picker/persian";

import "react-day-picker/dist/style.css";



function formatJalali(date: Date) {
  const j = toJalaali(date);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${j.jy}/${pad(j.jm)}/${pad(j.jd)}`;
}

export interface RHFRangePickerProps {
  name: string;
  label?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  helperComponent?: React.ReactNode;
}

export default function RHF2MonthRangePicker({
  name,
  label,
  startIcon,
  endIcon,
  helperComponent,
}: RHFRangePickerProps) {
  const { control } = useFormContext();
  const [open, setOpen] = React.useState(false);
  const [isJalali, setIsJalali] = React.useState(true);
  const [fromDate, setFromDate] = React.useState<Date | undefined>(undefined);
  const [toDate, setToDate] = React.useState<Date | undefined>(undefined);

  const persianDateLib = React.useMemo(() => getDateLib(), []);
  const defaultClassNames = getDefaultClassNames();


  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const range: DateRange | undefined = field.value;

        // همگام‌سازی state با field.value
        React.useEffect(() => {
          if (range?.from) {
            setFromDate(range.from);
          }
          if (range?.to) {
            setToDate(range.to);
          }
        }, [range]);

        const displayText = React.useMemo(() => {
          if (!fromDate || !toDate) return "انتخاب بازه";

          if (isJalali) {
            const fromText = formatJalali(fromDate);
            const toText = formatJalali(toDate);
            return `${toText} → ${fromText} `;
          }
          const fromText = fromDate.toLocaleDateString("fa-IR");
          const toText = toDate.toLocaleDateString("fa-IR");
          return `${fromText} → ${toText}`;
        }, [fromDate, toDate, isJalali, persianDateLib]);

        const error = fieldState.error?.message;

        const handleSelect = (newRange: DateRange | undefined) => {
          if (newRange?.from) {
            setFromDate(newRange.from);
          }
          if (newRange?.to) {
            setToDate(newRange.to);
          }
          field.onChange(newRange);
        };

        // ساخت range از state برای نمایش در calendar
        const rangeFromState: DateRange | undefined = React.useMemo(() => {
          return {
            from: fromDate,
            to: toDate,
          };
        }, [fromDate, toDate]);

        const today = new Date();
console.log(fromDate, "deded" , toDate);
        return (
          <Stack gap={1}>
            <div
              className={`flex! items-center! justify-between! rounded-lg!  cursor-pointer! ${error ? "border-red-400" : "border-gray-300"
                }`}
              onClick={() => setOpen(true)}
            >
              <span className="flex! items-center! gap-2 text-[#5b667f]">
                <span className="text-xs!">  {startIcon}</span>
                {label && <span className="text-xs!">{label}</span>}
                {endIcon}
              </span>
            </div>
            <span className="text-sm! text-gray-700! cursor-pointer! hidden! md:block! " onClick={() => setOpen(true)}>{name === "startDate" && fromDate ? fromDate.toLocaleDateString("fa-IR") : name === "endDate" && toDate ? toDate.toLocaleDateString("fa-IR") : displayText}</span>
            <span className="text-sm! text-gray-700! cursor-pointer! md:hidden! block! " onClick={() => setOpen(true)}>{displayText}</span>
            {error && (
              <span className="text-xs text-red-500 pt-0.5">{error}</span>
            )}
            {helperComponent}

            {/* Popup calendar */}
            <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md">
              <DialogContent>
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-lg font-medium">
                    {isJalali ? "تقویم شمسی" : "تقویم میلادی"}
                  </span>

                  <div className="flex items-center gap-2">
                    <span className="text-sm">
                      {isJalali ? "شمسی" : "میلادی"}
                    </span>
                    <Switch
                      checked={isJalali}
                      onChange={() => setIsJalali((prev) => !prev)}
                      size="medium"
                    />
                  </div>
                </div>

                {isJalali ? (
                  <PersianDayPicker
                    mode="range"
                    numberOfMonths={2}
                    selected={rangeFromState}
                    onSelect={handleSelect}
                    disabled={{ before: today }}
                    classNames={ {
                      today: `text-[var(--primary-500)]!`,
                      chevron: `${defaultClassNames.chevron} fill-[var(--primary-500)]!`,
                      selected: `bg-orange-100!`,
                      range_start: `bg-orange-400! text-white! font-bold! rounded-full!`,
                      range_end: `bg-orange-400! text-white! font-bold! rounded-full!`,
                      disabled: `text-gray-300! `,
                    }}
                  />
                ) : (
                  <GregorianDayPicker
                    mode="range"
                    numberOfMonths={2}
                    selected={rangeFromState}
                    onSelect={handleSelect}
                    disabled={{ before: today }}
                    classNames={ {
                      today: `text-[var(--primary-500)]!`,
                      chevron: `${defaultClassNames.chevron} fill-[var(--primary-500)]!`,
                      selected: `bg-orange-100!`,
                      range_start: `bg-orange-400! text-white! font-bold! rounded-full!`,
                      range_end: `bg-orange-400! text-white! font-bold! rounded-full!`,
                      disabled: `text-gray-300! `,
                    }}
                  />
                )}

                <div className="mt-4 flex items-center justify-between">
                  <Button
                    variant="text"
                    size="small"
                    color="primary"
                    className="text-sm"
                    onClick={() => {
                      setFromDate(today);
                      setToDate(today);
                      field.onChange({ from: today, to: today } as DateRange);
                    }}
                  >
                    برو به امروز
                  </Button>

                  <div className="flex gap-2">
                    <Button
                      variant="outlined"
                      size="small"
                      color="primary"
                      className="rounded-lg! text-sm! px-4! py-2!"
                      onClick={() => {
                        setFromDate(undefined);
                        setToDate(undefined);
                        field.onChange({ from: undefined, to: undefined });
                      }}
                    >
                      ریست
                    </Button>

                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      className="rounded-lg!  text-sm! text-white! px-5! py-2!"
                      onClick={() => setOpen(false)}
                    >
                      تایید
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </Stack>
        );
      }}
    />
  );
}
