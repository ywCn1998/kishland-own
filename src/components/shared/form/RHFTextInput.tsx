"use client";
import { Controller, useFormContext } from "react-hook-form";
import {
  Stack,
  TextField,
  TextFieldProps,
  IconButton,
  InputAdornment,
  Box,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

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

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Controller
      key={controllerKey ?? name}
      name={name}
      control={control}
      defaultValue={defaultValue ?? ""}
      render={({ field, fieldState: { error } }) => (
        <Stack gap={2} sx={{ width: "100%" }}>
          <TextField
            {...field}
            {...others}
            error={!!error?.message}
            helperText={error?.message || ""}
            value={field.value ?? ""}
            type={type === "password" && !showPassword ? "password" : "text"}
            disabled={disabled}
            autoFocus={autoFocus}
            label={
              label ? (
                <Stack direction="row" alignItems="center" spacing={1}>
                  {labelIcon && labelIcon}
                  <span>{label}</span>
                </Stack>
              ) : undefined
            }
            InputProps={{
              startAdornment:
                !field.value && (startIcon || placeholder) ? (
                  <InputAdornment
                    position="start"
                    sx={{ color: "text.disabled" }}
                  >
                    {startIcon && (
                      <Box
                        sx={{
                          mr: 0.75,
                          color: "#626E94",
                          display: { xs: "none", lg: "block" }, 
                        }}
                      >
                        {startIcon}
                      </Box>
                    )}
                    {placeholder && (
                      <Typography
                        component="span"
                        sx={{
                          fontSize: 16,
                          color: "#626E94",
                          mr: 1.5,
                          fontWeight: 300,
                        }}
                        className="mx-2!"
                      >
                        {placeholder}
                      </Typography>
                    )}
                  </InputAdornment>
                ) : null,
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
