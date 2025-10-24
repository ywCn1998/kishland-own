import { Controller, useFormContext } from "react-hook-form";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  Checkbox,
  Stack,
} from "@mui/material";
import type { CheckboxProps } from "@mui/material/Checkbox";
import * as React from "react";

export interface RHFCheckboxProps
  extends Omit<CheckboxProps, "name" | "onChange" | "checked"> {
  name: string;
  label?: React.ReactNode;
  labelPlacement?: "end" | "start" | "top" | "bottom";
  helperComponenet?: React.JSX.Element;
  /**
   * Optional external onChange, receives the boolean value
   */
  onChangeChecked?: (checked: boolean) => void;
}

const RHFCheckbox = ({
  name,
  label,
  labelPlacement = "end",
  helperComponenet,
  onChangeChecked,
  ...checkboxProps
}: RHFCheckboxProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl error={!!error?.message} sx={{ width: "100%" }}>
          <Stack gap={0.5}>
            <FormControlLabel
              label={label}
              labelPlacement={labelPlacement}
              sx={{ margin: 0 }}
              control={
                <Checkbox
                  {...checkboxProps}
                  inputRef={field.ref}
                  checked={!!field.value}
                  onChange={(_, checked) => {
                    field.onChange(checked);
                    onChangeChecked?.(checked);
                  }}
                  onBlur={field.onBlur}
                />
              }
            />
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

export default RHFCheckbox;
