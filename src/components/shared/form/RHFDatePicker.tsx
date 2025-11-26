"use client";

import * as React from "react";
import { Controller, useFormContext } from "react-hook-form";

import { Dialog, DialogContent } from "@mui/material";
import { Stack, Switch } from "@mui/material";

import { toJalaali } from "jalaali-js";

import {
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
  const [isJalali, setIsJalali] = React.useState(false); 

  const persianDateLib = React.useMemo(() => getDateLib(), []);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        const range: DateRange | undefined = field.value;

        const displayText = React.useMemo(() => {
          if (!range?.from || !range?.to) return "انتخاب بازه";

          if (isJalali) {
            const fromText = formatJalali(range.from);
            const toText = formatJalali(range.to);
            return `${fromText} → ${toText}`;
          }
          const fromText = range.from.toLocaleDateString("fa-IR");
          const toText = range.to.toLocaleDateString("fa-IR");
          return `${fromText} → ${toText}`;
        }, [range, isJalali, persianDateLib]);

        const error = fieldState.error?.message;

        const handleSelect = (newRange: DateRange | undefined) => {
          field.onChange(newRange);
        };

        const today = new Date();

        return (
          <Stack gap={1}>
            <div
              className={`flex items-center justify-between rounded-lg border p-3 cursor-pointer ${error ? "border-red-400" : "border-gray-300"
                }`}
              onClick={() => setOpen(true)}
            >
              <span className="flex items-center gap-2 text-[#5b667f]">
                {startIcon}
                {label && <span>{label}</span>}
                {endIcon}
              </span>

              <span className="text-sm text-gray-700">{displayText}</span>
            </div>

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
                      size="small"
                    />
                  </div>
                </div>

                {isJalali ? (
                  <PersianDayPicker
                    mode="range"
                    numberOfMonths={2}
                    selected={range}
                    onSelect={handleSelect}
                  />
                ) : (
                  <GregorianDayPicker
                    mode="range"
                    numberOfMonths={2}
                    selected={range}
                    onSelect={handleSelect}
                  />
                )}

                <div className="mt-4 flex items-center justify-between">
                  <button
                    type="button"
                    className="text-sm text-blue-600"
                    onClick={() =>
                      field.onChange({ from: today, to: today } as DateRange)
                    }
                  >
                    برو به امروز
                  </button>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="rounded-lg bg-gray-200 px-4 py-2 text-sm"
                      onClick={() =>
                        field.onChange({ from: undefined, to: undefined })
                      }
                    >
                      ریست
                    </button>

                    <button
                      type="button"
                      className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white"
                      onClick={() => setOpen(false)}
                    >
                      تایید
                    </button>
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
