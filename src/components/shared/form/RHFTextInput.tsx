"use client";
import { Controller, useFormContext } from "react-hook-form";
import {
  Stack,
  TextField,
  TextFieldProps,
  IconButton,
  InputAdornment,
  Box,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useRef, useState } from "react";

export interface IProps {
  name: string;
  label?: string;
  labelIcon?: React.JSX.Element;
  startIcon?: React.JSX.Element;
  helperComponenet?: React.JSX.Element;
  controllerKey?: string;
  defaultValue?: any;
}

const RHFTextInput = ({
  name,
  placeholder,
  label,
  labelIcon,
  startIcon,
  helperComponenet,
  type,
  disabled,
  controllerKey,
  autoFocus,
  defaultValue,
  ...others
}: IProps & TextFieldProps) => {
  const { control } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
    <Controller
      key={controllerKey ?? name}
      name={name}
      control={control}
      defaultValue={defaultValue ?? ""}
      render={({ field, fieldState: { error } }) => (
        <Stack gap={2} sx={{ width: "100%" }}>
          <TextField
            fullWidth
            id="fullWidth"
            {...field}
            {...others}
            sx={{
              width: "100%",               // ✅ keep width fixed
              "& .MuiInputBase-root": { width: "100%" },
              ...others?.sx,
            }}
            inputRef={(el) => {
              field.ref(el);
              inputRef.current = el;
            }}
            error={!!error?.message}
            helperText={error?.message || ""}
            value={field.value ?? ""}
            type={type === "password" && !showPassword ? "password" : "text"}
            disabled={disabled}
            autoFocus={autoFocus}
            // ✅ native placeholder (disappears on type, doesn't take layout space)
            placeholder={placeholder}
            label={
              label ? (
                <Stack direction="row" alignItems="center" spacing={1}>
                  {labelIcon && labelIcon}
                  <span>{label}</span>
                </Stack>
              ) : undefined
            }
            InputProps={{
              // ✅ keep icon always; no placeholder here
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
              endAdornment:
                type === "password" ? (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ) : null,
            }}
          />
          {helperComponenet}
        </Stack>
      )}
    />
  );
};

export default RHFTextInput;
