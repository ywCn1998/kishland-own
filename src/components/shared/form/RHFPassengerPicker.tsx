"use client";

import React, { useState, MouseEvent, useEffect } from "react";
import { useFormContext, useFieldArray, Controller } from "react-hook-form";
import {
    FormControl,
    Typography,
    Button,
    Popover,
    Stack,
    IconButton,
    Divider,
    FormHelperText,
    Box,
    InputLabel,
    OutlinedInput,
} from "@mui/material";
// Icons
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

interface IProps {
    name: string;
    label?: string;
    startIcon?: React.ReactNode;
}

export default function RHFPassengerSelect({ name, label, startIcon }: IProps) {
    const { control, watch } = useFormContext<any>();
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

    // استفاده از useFieldArray برای مدیریت داینامیک اتاق‌ها
    const { fields, append, remove, update } = useFieldArray({
        control,
        name,
    });

    // تماشای مقادیر برای نمایش در Label اصلی
    const roomsValue = watch(name) || [];
    const totalAdults = roomsValue.reduce((acc: number, curr: any) => acc + (curr?.adults || 0), 0);
    const totalChildren = roomsValue.reduce((acc: number, curr: any) => acc + (curr?.children || 0), 0);

    const handleClick = (event: MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget as HTMLDivElement);
    };

    const handleClose = () => setAnchorEl(null);
    const open = Boolean(anchorEl);
    return (
        <FormControl fullWidth variant="outlined" className="mt-2!">
            {label && (
                <InputLabel shrink={true} className="flex! flex-row! items-center! gap-2! px-0!">
                    {startIcon} {label}
                </InputLabel>
            )}

            <OutlinedInput
                label={label}
                onClick={handleClick}
                readOnly
                value=""
                sx={{
                    cursor: "pointer",
                    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                    "&:hover .MuiOutlinedInput-notchedOutline": { border: "none" },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": { border: "none" },
                    "& .MuiOutlinedInput-input": { display: 'none' },
                    py: 1,
                }}
                startAdornment={
                    <Stack direction="row" alignItems="center" spacing={1} sx={{ width: '100%' }}>
                        <Typography className="text-base! mt-3!" sx={{ fontWeight: 400 }}>
                            {`${fields.length} اتاق، ${totalAdults + totalChildren} مسافر`}
                        </Typography>
                    </Stack>
                }
            />

            <Popover
                sx={{ zIndex: 1450 }}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                PaperProps={{
                    sx: { p: 2, width: 300, borderRadius: 2, direction: "ltr", mt: 0.5 },
                }}
            >
                <Box sx={{
                    maxHeight: { xs: 300, lg: 400 }, overflowY: 'auto', px: 0.5, '&::-webkit-scrollbar': {
                        width: '2px', // نازک کردن عرض اسکرول‌بار
                    },
                    '&::-webkit-scrollbar-track': {
                        backgroundColor: '#f1f1f1',
                        borderRadius: '10px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#ccc', // رنگ بخش متحرک
                        borderRadius: '10px',
                        '&:hover': {    
                            backgroundColor: '#bbb', // رنگ هنگام هاور
                        },
                    },
                    // استایل برای Firefox
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#ccc #f1f1f1',
                }}>
                    {fields.map((field, index) => (
                        <Box key={field.id} sx={{ mb: index !== fields.length - 1 ? 3 : 0 }}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                                <Typography className="text-base! " sx={{ fontWeight: "bold" }}>
                                    اتاق {index + 1}
                                </Typography>
                                {fields.length > 1 && (
                                    <IconButton size="small" color="error" onClick={() => remove(index)}>
                                        <DeleteOutlineIcon fontSize="small" />
                                    </IconButton>
                                )}
                            </Stack>

                            <Controller
                                control={control}
                                name={`${name}.${index}.adults`}
                                render={({ field: { value: adultsValue, onChange } }) => (
                                    <PassengerRow
                                        label="بزرگسال"
                                        desc="(۱۲ سال به بالا)"
                                        count={adultsValue}
                                        onAdd={() => onChange(adultsValue + 1)}
                                        onRemove={() => onChange(adultsValue - 1)}
                                        min={1}
                                    />
                                )}
                            />

                            {/* فیلد کودک */}
                            <Controller
                                control={control}
                                name={`${name}.${index}.children`}
                                render={({ field: { value: childrenValue, onChange } }) => (
                                    <PassengerRow
                                        label="کودک"
                                        desc="(تا ۱۲ سال)"
                                        count={childrenValue}
                                        onAdd={() => onChange(childrenValue + 1)}
                                        onRemove={() => onChange(childrenValue - 1)}
                                        min={0}
                                    />
                                )}
                            />
                            {index !== fields.length - 1 && <Divider sx={{ my: 2, borderStyle: 'dashed' }} />}
                        </Box>
                    ))}
                </Box>

                <Button
                    size="small"
                    onClick={() => append({ adults: 1, children: 0 })}
                    sx={{ mt: 1 , justifyContent: 'start' }}
                    className="text-sm! font-medium!"
                    fullWidth
                >
                    + افزودن اتاق
                </Button>

                <Divider sx={{ my: 2 }} />

                <Button
                    fullWidth
                    variant="contained"
                    onClick={handleClose}
                    className="text-white! font-semibold!"
                >
                    تایید - {totalAdults + totalChildren}  مسافر و {fields.length}  اتاق
                </Button>
            </Popover>
        </FormControl>
    );
}

function PassengerRow({ label, desc, count, onAdd, onRemove, min }: any) {
    return (
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
            <Box className="flex! flex-col! items-start!">
                <Typography variant="body2" sx={{ fontWeight: 600 }}>{label}</Typography>
                <Typography variant="caption" color="text.secondary">{desc}</Typography>
            </Box>
            <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton
                    onClick={(e) => { e.stopPropagation(); onRemove(); }}
                    disabled={count <= min}
                    color="primary"
                    size="medium"
                >
                    <RemoveCircleIcon />
                </IconButton>
                <Typography sx={{ minWidth: 20, textAlign: "center", fontWeight: "bold" }}>
                    {count}
                </Typography>
                <IconButton
                    onClick={(e) => { e.stopPropagation(); onAdd(); }}
                    color="primary"
                    size="medium"
                >
                    <AddCircleIcon />
                </IconButton>
            </Stack>
        </Stack>
    );
}