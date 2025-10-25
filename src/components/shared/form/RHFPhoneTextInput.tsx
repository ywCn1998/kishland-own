import { Controller, useFormContext } from "react-hook-form";
import { Stack, TextFieldProps } from "@mui/material";
import { useState } from "react";
// @ts-ignore
import MuiPhoneNumber from "mui-phone-number";

export interface IProps {
  name: string;
  label?: string;
  helperComponenet?: React.JSX.Element;
}

const RHFPhoneTextInput = ({
  name,
  placeholder,
  label,
  helperComponenet,
  disabled,
  autoFocus,
}: IProps & TextFieldProps) => {
  const { control } = useFormContext();
  const [focused, setFocused] = useState(false);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <Stack gap={2} sx={{ width: "100%" }}>
            <MuiPhoneNumber
              {...field}
              value={field.value || ""}
              variant="outlined"
              dir="ltr"
              placeholder={placeholder}
              error={!!error?.message}
              helperText={error?.message || ""}
              label={label}
              disabled={disabled}
              autoFocus={autoFocus}
              defaultCountry="ir"
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              InputLabelProps={{
                shrink: focused || !!field.value ? true : false,
              }}
              onChange={(val: any) => {
                if (!val) {
                  field.onChange("");
                  return;
                }

                // Remove everything except digits
                let cleaned = String(val).replace(/\D/g, "");

                // Strip Iran country code (98) if present
                if (cleaned.startsWith("98")) {
                  cleaned = cleaned.slice(2);
                }

                // Always ensure number starts with 0
                if (!cleaned.startsWith("0")) {
                  cleaned = "0" + cleaned;
                }

                field.onChange(cleaned);
              }}
            />
            {helperComponenet}
          </Stack>
        );
      }}
    />
  );
};

export default RHFPhoneTextInput;
