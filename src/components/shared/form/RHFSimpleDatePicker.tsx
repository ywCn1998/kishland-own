"use client";

import * as React from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
    TextField,
    TextFieldProps,
    Dialog,
    DialogContent,
    Stack,
    Switch,
    Button,
    InputAdornment,
    Box,
    Typography,
} from "@mui/material";
import { toJalaali } from "jalaali-js";
import {
    getDefaultClassNames,
    DayPicker as GregorianDayPicker,
} from "react-day-picker";
import { DayPicker as PersianDayPicker } from "react-day-picker/persian";

import "react-day-picker/dist/style.css";

function formatJalali(input?: unknown) {
    if (!input) return "";

    const date = input instanceof Date ? input : new Date(input as any);

    if (isNaN(date.getTime())) return "";

    const j = toJalaali(date);
    const pad = (n: number) => String(n).padStart(2, "0");

    return `${j.jy}/${pad(j.jm)}/${pad(j.jd)}`;
}

export interface RHFSimpleDatePickerProps {
    name: string;
    label?: string;
    labelIcon?: React.JSX.Element;
    startIcon?: React.JSX.Element;
    endIcon?: React.ReactNode;
    placeholder?: string;
    placeholderSuffix?: string;
    helperComponent?: React.ReactNode;
    disabled?: boolean;
    isJalalis?: boolean
}

export default function RHFSimpleDatePicker({
    name,
    label,
    labelIcon,
    startIcon,
    endIcon,
    placeholder,
    placeholderSuffix,
    helperComponent,
    disabled,
    isJalalis = true,
    ...others
}: RHFSimpleDatePickerProps & Omit<TextFieldProps, "name" | "label" | "isJalali">) {
    const { control, setValue, watch } = useFormContext();
    const [open, setOpen] = React.useState(false);
    const [isJalali, setIsJalali] = React.useState(isJalalis);

    const defaultClassNames = getDefaultClassNames();
    const fieldValue = watch(name);

    // تبدیل تاریخ انتخابی به شیء Date برای تقویم
    const selectedDate = React.useMemo(() => {
        if (!fieldValue) return undefined;
        if (fieldValue instanceof Date && !isNaN(fieldValue.getTime())) {
            return fieldValue;
        }
        const d = new Date(fieldValue);
        return isNaN(d.getTime()) ? undefined : d;
    }, [fieldValue]);

    const displayText = React.useMemo(() => {
        if (!selectedDate) return "";
        if (isJalali) return formatJalali(selectedDate);
        return selectedDate.toLocaleDateString("fa-IR");
    }, [selectedDate, isJalali]);

    const today = new Date();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => {
                const handleSelect = (date: Date | undefined) => {
                    if (date) {
                        setValue(name, date, { shouldDirty: true, shouldValidate: true });
                        field.onChange(date);
                    }
                };

                return (
                    <Stack gap={2} sx={{ width: "100%" }}>
                        <TextField
                            fullWidth
                            id={name}
                            {...others}
                            sx={{
                                width: "100%",
                                "& .MuiInputBase-root": { width: "100%" },
                                ...others?.sx,
                            }}
                            inputRef={field.ref}
                            error={!!error?.message}
                            helperText={error?.message || ""}
                            value={displayText}
                            disabled={disabled}
                            placeholder={placeholder}
                            onClick={() => !disabled && setOpen(true)}
                            InputProps={{
                                readOnly: true,
                                startAdornment: startIcon ? (
                                    <InputAdornment position="start">
                                        <Box
                                            sx={{
                                                mr: 0.75,
                                                color: "#626E94",
                                                display: { xs: "none", lg: "block" },
                                            }}
                                        >
                                            {startIcon}
                                        </Box>
                                    </InputAdornment>
                                ) : undefined,
                                endAdornment: (placeholderSuffix || endIcon) ? (
                                    <InputAdornment position="end">
                                        <Stack direction="row" alignItems="center" spacing={1}>
                                            {placeholderSuffix && (
                                                <Typography
                                                    sx={{
                                                        fontSize: "1rem",
                                                        ml: 1,
                                                    }}
                                                >
                                                    {placeholderSuffix}
                                                </Typography>
                                            )}
                                            {endIcon && endIcon}
                                        </Stack>
                                    </InputAdornment>
                                ) : null,
                            }}
                            label={
                                label ? (
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        {labelIcon && labelIcon}
                                        <span>{label}</span>
                                    </Stack>
                                ) : undefined
                            }
                        />
                        {helperComponent}

                        {/* Popup calendar */}
                        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="xs">
                            <DialogContent>
                                {
                                    isJalali && (
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
                                    )
                                }


                                {isJalali ? (
                                    <PersianDayPicker
                                        mode="single"
                                        selected={selectedDate}
                                        onSelect={handleSelect}
                                        disabled={{ before: today }}
                                        classNames={{
                                            today: `text-[var(--primary-500)]!`,
                                            chevron: `${defaultClassNames.chevron} fill-[var(--primary-500)]!`,
                                            selected: `bg-orange-400! text-white! font-bold! rounded-full!`,
                                            disabled: `text-gray-300! `,
                                        }}
                                    />
                                ) : (
                                    <GregorianDayPicker
                                        mode="single"
                                        selected={selectedDate}
                                        onSelect={handleSelect}
                                        disabled={{ before: today }}
                                        classNames={{
                                            today: `text-[var(--primary-500)]!`,
                                            chevron: `${defaultClassNames.chevron} fill-[var(--primary-500)]!`,
                                            selected: `bg-orange-400! text-white! font-bold! rounded-full!`,
                                            disabled: `text-gray-300! `,
                                        }}
                                    />
                                )}

                                <div className="mt-4 flex items-center justify-end gap-2">
                                    <Button
                                        variant="text"
                                        size="small"
                                        onClick={() => {
                                            setValue(name, today, { shouldDirty: true, shouldValidate: true });
                                            field.onChange(today);
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
                                            setValue(name, undefined, { shouldDirty: true, shouldValidate: true });
                                            field.onChange(undefined);
                                            setOpen(false);
                                        }}
                                    >
                                        ریست
                                    </Button>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </Stack>
                );
            }}
        />
    );
}
