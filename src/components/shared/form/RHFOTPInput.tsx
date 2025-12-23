"use client";
import { Controller, useFormContext } from "react-hook-form";
import { Stack, TextField, Typography } from "@mui/material";
import { useRef } from "react";

export interface RHFOTPInputProps {
    name: string;
    OTPLength?: number;
    otpType?: "number" | "alpha" | "alphanumeric";
    className?: string;
    inputStyles?: React.CSSProperties;
    label?: string;
    controllerKey?: string;
    defaultValue?: string;
    colorInputBgColor?: string;
}

const RHFOTPInput = ({
    name,
    OTPLength = 5,
    otpType = "number",
    className = "otp-box",
    inputStyles = { width: 56, height: 56, gap: 2 },
    label,
    controllerKey,
    defaultValue = "",
    colorInputBgColor = "white",
}: RHFOTPInputProps) => {
    const { control } = useFormContext();
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === "Backspace" && index > 0) {
            const target = e.target as HTMLInputElement;
            if (target && !target.value) {
                inputRefs.current[index - 1]?.focus();
            }
        }
        // Handle arrow keys
        if (e.key === "ArrowLeft" && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
        if (e.key === "ArrowRight" && index < OTPLength - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    return (
        <Controller
            key={controllerKey ?? name}
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({ field, fieldState: { error } }) => {
                // Convert field value to array format
                const formValue = field.value || "";
                const otpArray = formValue
                    .split("")
                    .slice(0, OTPLength)
                    .concat(Array(OTPLength - Math.min(formValue.length, OTPLength)).fill(""));

                return (
                    <Stack gap={1.2} sx={{ width: "100%" }}>
                        {label && <Typography>{label}</Typography>}
                        <div className={`${className} otp-box flex justify-between!`} style={{ display: "flex", gap: inputStyles.gap, direction: "ltr" }}>
                            {otpArray.map((digit: string, index: number) => (
                                <TextField
                                    key={index}
                                    inputRef={(el) => {
                                        inputRefs.current[index] = el;
                                    }}
                                    value={digit}
                                    onChange={(e) => {
                                        const newValue = e.target.value;
                                        // Only allow numbers if otpType is number
                                        if (otpType === "number" && newValue && !/^\d$/.test(newValue)) {
                                            return;
                                        }
                                        // Only allow alphanumeric if otpType is alphanumeric
                                        if (otpType === "alphanumeric" && newValue && !/^[a-zA-Z0-9]$/.test(newValue)) {
                                            return;
                                        }
                                        // Only allow letters if otpType is alpha
                                        if (otpType === "alpha" && newValue && !/^[a-zA-Z]$/.test(newValue)) {
                                            return;
                                        }
                                        if (newValue.length > 1) return;

                                        const newOtp = [...otpArray];
                                        newOtp[index] = newValue;
                                        field.onChange(newOtp.join(""));

                                        // Auto-focus next input
                                        if (newValue && index < OTPLength - 1) {
                                            inputRefs.current[index + 1]?.focus();
                                        }
                                    }}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    onPaste={(e) => {
                                        e.preventDefault();
                                        const pastedData = e.clipboardData.getData("text").trim();

                                        // Filter based on otpType
                                        let filteredData = pastedData;
                                        if (otpType === "number") {
                                            filteredData = pastedData.replace(/\D/g, "");
                                        } else if (otpType === "alpha") {
                                            filteredData = pastedData.replace(/[^a-zA-Z]/g, "");
                                        } else if (otpType === "alphanumeric") {
                                            filteredData = pastedData.replace(/[^a-zA-Z0-9]/g, "");
                                        }

                                        const newOtp = [...otpArray];
                                        for (let i = 0; i < Math.min(filteredData.length, OTPLength - index); i++) {
                                            if (index + i < OTPLength) {
                                                newOtp[index + i] = filteredData[i] || "";
                                            }
                                        }
                                        field.onChange(newOtp.join(""));

                                        const nextIndex = Math.min(index + filteredData.length, OTPLength - 1);
                                        inputRefs.current[nextIndex]?.focus();
                                    }}
                                    inputProps={{
                                        maxLength: 1,
                                        style: {
                                            textAlign: "center",
                                            fontSize: "20px",
                                            width: inputStyles.width,
                                            height: inputStyles.height,
                                        },
                                    }}
                                    error={!!error}
                                    sx={{
                                       
                                        width: inputStyles.width,
                                        "& .MuiOutlinedInput-root": {
                                            height: `${inputStyles.height}px`,
                                            borderRadius: "16px",
                                            "& fieldset": {
                                                // backgroundColor: colorInputBgColor,
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "#cbd5e1",
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: "#0EA5E9 !important",
                                            },
                                        },
                                        "& .MuiInputBase-input": {
                                            textAlign: "center",
                                            fontSize: "20px",
                                            padding: 0,
                                        },
                                    }}
                                    autoFocus={index === 0 && !field.value}
                                />
                            ))}
                        </div>
                        {error && (
                            <Typography variant="caption" color="error" sx={{ mt: 0.5 }}>
                                {error.message}
                            </Typography>
                        )}
                    </Stack>
                );
            }}
        />
    );
};

export default RHFOTPInput;

