import { Controller, useFormContext } from "react-hook-form";
import {
  FormControl,
  FormHelperText,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import * as React from "react";

export interface RHFToggleButtonGroupProps {
  name: string;
  label?: React.ReactNode;
  options: { label: React.ReactNode; value: string | number }[];
  helperComponenet?: React.JSX.Element;
  /**
   * Optional external onChange, receives the selected value
   */
  onChangeValue?: (value: string | number | null) => void;
  exclusive?: boolean; // پیش‌فرض true یعنی فقط یکی انتخاب می‌شود
  gap?: number; // فاصله بین دکمه‌ها
}

const RHFToggleButtonGroup = ({
  name,
  label,
  options,
  helperComponenet,
  onChangeValue,
  exclusive = true,
  gap = 1.5, // پیش‌فرض فاصله 1.5 واحد MUI
}: RHFToggleButtonGroupProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl error={!!error?.message} sx={{ width: "100%" }}>
          <Stack gap={0.5}>
            {label && (
              <Typography fontWeight={600} fontSize="0.95rem">
                {label}
              </Typography>
            )}

            <Stack direction="row" spacing={gap}>
              <ToggleButtonGroup
                exclusive={exclusive}
                value={field.value ?? ""}
                onChange={(_, newValue) => {
                  if (newValue !== null) {
                    field.onChange(newValue);
                    onChangeValue?.(newValue);
                  }
                }}
                onBlur={field.onBlur}
                sx={{ width: "100%", gap: gap }}
              >
                {options.map((option) => (
                  <ToggleButton
                    key={option.value}
                    value={option.value}
                    sx={{
                      textTransform: "none",
                      borderRadius: "12px",
                      border: "1px solid #E8ECED",
                      px: 3,
                      py: 1,
                      fontWeight: 500,
                      flex: 1,
                      "&.Mui-selected": {
                        backgroundColor: "#FB7201",
                        color: "#fff",
                        borderColor: "#FB7201",
                        "&:hover": {
                          backgroundColor: "#e86600",
                        },
                      },
                    }}
                  >
                    {option.label}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Stack>

            {error?.message ? (
              <FormHelperText>{error.message}</FormHelperText>
            ) : null}
            {helperComponenet}
          </Stack>
        </FormControl>
      )}
    />
  );
};

export default RHFToggleButtonGroup;
