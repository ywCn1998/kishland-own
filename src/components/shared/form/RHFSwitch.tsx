import { Controller, useFormContext } from "react-hook-form";
import {
    FormControl,
    FormControlLabel,
    FormHelperText,
    Switch,
} from "@mui/material";
import type { SwitchProps } from "@mui/material/Switch";
import { Stack } from "@mui/material";
import * as React from "react";

export interface RHFSwitchProps
    extends Omit<SwitchProps, "name" | "onChange" | "checked"> {
    name: string;
    label?: React.ReactNode;
    labelPlacement?: "end" | "start" | "top" | "bottom";
    helperComponenet?: React.JSX.Element;
    /**
     * Optional external onChange, receives the boolean value
     */
    onChangeChecked?: (checked: boolean) => void;
}

const RHFSwitch = ({
    name,
    label,
    labelPlacement = "start", // RTL-friendly (label on the left)
    helperComponenet,
    onChangeChecked,
    ...switchProps
}: RHFSwitchProps) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <FormControl error={!!error?.message}
                    sx={{
                        width: "100%"

                    }}>
                    <Stack gap={0.5} >
                        <FormControlLabel
                            label={label}
                            labelPlacement={labelPlacement}
                            sx={{ margin: 0 }}
                            dir="ltr"
                            control={
                                <Switch
                                    {...switchProps}
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

export default RHFSwitch;
