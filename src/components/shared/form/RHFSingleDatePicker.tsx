"use client";

import * as React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Button, Dialog, DialogContent, Stack, Switch } from "@mui/material";
import { toJalaali } from "jalaali-js";
import {
  getDefaultClassNames,
  DayPicker as GregorianDayPicker,
} from "react-day-picker";
import { DayPicker as PersianDayPicker } from "react-day-picker/persian";

import "react-day-picker/dist/style.css";

// تابع کمکی برای فرمت تاریخ (مشابه کدی که فرستادید)
function formatJalali(input?: unknown) {
  if (!input) return "";
  const date = input instanceof Date ? input : new Date(input as any);
  if (isNaN(date.getTime())) return "";
  const j = toJalaali(date);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${j.jy}/${pad(j.jm)}/${pad(j.jd)}`;
}

export interface RHFSingleDatePickerProps {
  name: string;
  label?: React.ReactNode;
  icon?: React.ReactNode;
  helperComponent?: React.ReactNode;
}

export default function RHFSingleDatePicker({
  name,
  label,
  icon,
  helperComponent,
}: RHFSingleDatePickerProps) {
  const { control, setValue, watch } = useFormContext();
  const [open, setOpen] = React.useState(false);
  const [isJalali, setIsJalali] = React.useState(true);

  const defaultClassNames = getDefaultClassNames();
  const fieldValue = watch(name);

  // تبدیل تاریخ انتخابی به شیء Date برای تقویم
  const selectedDate = React.useMemo(() => {
    if (!fieldValue) return undefined;
    const d = new Date(fieldValue);
    return isNaN(d.getTime()) ? undefined : d;
  }, [fieldValue]);

  const displayText = React.useMemo(() => {
    if (!selectedDate) return "انتخاب تاریخ";
    if (isJalali) return formatJalali(selectedDate);
    return selectedDate.toLocaleDateString("fa-IR");
  }, [selectedDate, isJalali]);

  const today = new Date();

  return (
    <Controller
      name={name}
      control={control}
      render={({ fieldState: { error } }) => (
        <Stack gap={1}>
          {/* بخش Label و Icon مشابه استایل شما */}
          <div
            className={`flex! items-center! gap-2 text-[#5b667f] cursor-pointer!`}
            onClick={() => setOpen(true)}
          >
            <span className="text-xs!"> {icon}</span>
            {label && <span className="text-xs!">{label}</span>}
          </div>

          {/* فیلد نمایش مقدار */}
          <span 
            className={`text-base! cursor-pointer!  pb-1 ${error ? "border-red-500 text-red-500" : "border-gray-200"}`}
            onClick={() => setOpen(true)}
          >
            {displayText}
          </span>

          {error?.message && (
            <span className="text-xs text-red-500 pt-0.5">{error.message}</span>
          )}
          {!error && helperComponent}

          {/* پاپ‌آپ تقویم */}
          <Dialog open={open} onClose={() => setOpen(false)} maxWidth="xs" >
            <DialogContent>
              <div className="mb-3 flex items-center justify-between">
                <span className="text-lg font-medium">
                  {isJalali ? "تقویم شمسی" : "تقویم میلادی"}
                </span>

                <div className="flex items-center gap-2">
                  <span className="text-sm">{isJalali ? "شمسی" : "میلادی"}</span>
                  <Switch
                    checked={isJalali}
                    onChange={() => setIsJalali((prev) => !prev)}
                    size="medium"
                  />
                </div>
              </div>

              {isJalali ? (
                <PersianDayPicker
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => {
                    setValue(name, date, { shouldDirty: true, shouldValidate: true });
                    setOpen(false); // در حالت تکی معمولاً بعد از انتخاب بسته می‌شود
                  }}
                  disabled={{ before: today }}
                  classNames={calendarStyles(defaultClassNames)}
                />
              ) : (
                <GregorianDayPicker
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => {
                    setValue(name, date, { shouldDirty: true, shouldValidate: true });
                    setOpen(false);
                  }}
                  disabled={{ before: today }}
                  classNames={calendarStyles(defaultClassNames)}
                />
              )}

              <div className="mt-4 flex items-center justify-end gap-2">
                <Button
                  variant="text"
                  size="small"
                  onClick={() => {
                    setValue(name, today);
                    setOpen(false);
                  }}
                >
                  امروز
                </Button>
                <Button
                  variant="text"
                  size="small"
                  color="inherit"
                  className="rounded-lg!"
                  onClick={() => {
                    setValue(name, undefined);
                    setOpen(false);
                  }}
                >
                  ریست
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </Stack>
      )}
    />
  );
}

// استایل‌های تقویم که دقیقاً از کد شما کپی شده
const calendarStyles = (defaultClassNames: any) => ({
  today: `text-[var(--primary-500)]!`,
  chevron: `${defaultClassNames.chevron} fill-[var(--primary-500)]!`,
  selected: `bg-orange-400! text-white! font-bold! rounded-full!`,
  disabled: `text-gray-300! `,
});