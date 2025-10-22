"use client";
import {
  Controller,
  useFormContext,
  ControllerRenderProps,
  ControllerFieldState,
} from "react-hook-form";
import {
  Box,
  Chip,
  FormControl,
  FormHelperText,
  InputLabel,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React from "react";

interface IProps {
  name: string;
  children: React.ReactNode;
  label?: string;
  multiple?: boolean; // turn on multi-select
  onChange?: (value: string | string[]) => void;
  /**
   * Optional: customize the chip label for a given value
   * Defaults to showing the raw value
   */
  renderTagLabel?: (value: string) => string;
}

type Props = IProps & any;

export default function RHFSelect({
  name,
  children,
  label,
  multiple = false,
  onChange,
  renderTagLabel,
  startIcon,
  endIcon,
  isSelect = true,
  ...other
}: Partial<Props>) {
  const { control } = useFormContext<any>();

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field,
        fieldState: { error },
      }: {
        field: ControllerRenderProps;
        fieldState: ControllerFieldState;
      }) => {
        const currentValue = field.value ?? (multiple ? [] : "");
        // console.log(currentValue);

        const removeValue = (valToRemove: string) => {
          if (!multiple) return;
          const nextValues = (currentValue as string[]).filter(
            (v) => v !== valToRemove
          );
          onChange?.(nextValues);
          field.onChange(nextValues);
        };

        return (
          <>
            <FormControl fullWidth error={!!error}>
              <Stack gap={1.2}>
                <TextField
                  {...other}
                  SelectProps={{
                    multiple,
                    IconComponent: () => null,
                    MenuProps: {
                      disablePortal: false,
                      PaperProps: {
                        elevation: 8,
                        sx: {
                          boxShadow: (theme) => theme.shadows[3],
                          "& .MuiList-root": {
                            backgroundColor: "white !important",
                          },
                        },
                      },
                    },

                    onChange: (e: SelectChangeEvent<any>) => {
                      const raw = e.target.value;
                      const value = multiple ? (raw as any[]).map(String) : raw; // keep as string; map to number if you prefer
                      onChange?.(value);
                      field.onChange(value);
                    },
                  }}
                  label={
                    <Stack
                      direction="row"
                      alignItems="center"
                      gap={1}
                      className="text-[#ff8c0b]!"
                    >
                      {startIcon}
                      <span className="text-slate-500! text-base!">
                        {label}
                      </span>
                      {endIcon}
                    </Stack>
                  }
                  InputLabelProps={{
                    shrink: true,
                  }}
                  select={isSelect}
                  error={!!error}
                  value={currentValue}
                  variant="standard"
                  sx={{
                    pt: 0.7,
                    "& .MuiInputBase-root": {
                      borderBottom: "none !important", // remove bottom line
                    },
                    "& .MuiInputBase-root:before": {
                      borderBottom: "none !important", // remove default underline
                    },
                    "& .MuiInputBase-root:after": {
                      borderBottom: "none !important", // remove focused underline
                    },
                    "& .MuiInputBase-root:hover:not(.Mui-disabled):before": {
                      borderBottom: "none !important", // remove hover underline
                    },
                    "& .MuiInputBase-input": {
                      fontWeight: 500,
                      fontSize: 15,
                    },
                  }}
                >
                  {children}
                </TextField>

                {error?.message && (
                  <FormHelperText>{error.message}</FormHelperText>
                )}
              </Stack>
            </FormControl>
          </>
        );
      }}
    />
  );
}
