import { Controller, useFormContext } from "react-hook-form";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import type { RadioProps } from "@mui/material/Radio";
import * as React from "react";

export interface RHFSingleRadioGroupProps
  extends Omit<RadioProps, "name" | "onChange" | "checked"> {
  name: string;
  options: { label: React.ReactNode; value: string | number }[];
  label?: React.ReactNode;
  row?: boolean;
  helperComponenet?: React.JSX.Element;
  /**
   * Optional external onChange, receives the selected value
   */
  onChangeValue?: (value: string | number) => void;
}

const RHFSingleRadioGroup = ({
  name,
  options,
  label,
  row = true, // افقی به صورت پیش‌فرض
  helperComponenet,
  onChangeValue,
  ...radioProps
}: RHFSingleRadioGroupProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl error={!!error?.message} sx={{ width: "100%" }}>
          <Stack gap={0.5} direction={"row"} justifyContent={'space-between'} alignItems={"center"}>
            {label && (
              <Typography fontWeight={500} fontSize="0.95rem">
                {label}
              </Typography>
            )}

            <RadioGroup
              row={row}
              value={field.value ?? ""}
              onChange={(e) => {
                field.onChange(e.target.value);
                onChangeValue?.(e.target.value);
              }}
              onBlur={field.onBlur}
              sx={{
                "& .mui-rtl-1ww64j6-MuiButtonBase-root-MuiRadio-root.Mui-checked": {
                  color: "red"
                }
              }}
              className="gap-5!"
            >
              {options.map((option) => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={<Radio {...radioProps} />}
                  label={option.label}
                />
              ))}
            </RadioGroup>

            {error?.message ? (
              <FormHelperText>{error.message}</FormHelperText>
            ) : null}
            {helperComponenet}
          </Stack>
        </FormControl >
      )}
    />
  );
};

export default RHFSingleRadioGroup;
