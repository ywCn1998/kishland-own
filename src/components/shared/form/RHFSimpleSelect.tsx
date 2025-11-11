"use client";

import { Controller, useFormContext } from "react-hook-form";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import React from "react";

interface IProps {
  name: string;
  label?: string;
  options: { label: string; value: string | number }[];
}

export default function RHFSimpleSelect({ name, label, options }: IProps) {
  const { control } = useFormContext<any>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl fullWidth error={!!error}>
          {label && <InputLabel>{label}</InputLabel>}

          <Select {...field} label={label} sx={{py:2}}>
            {options.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>

          {error?.message && <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
      )}
    />
  );
}
