// RHFLiteRichEditor.tsx
"use client";

import { Controller, useFormContext } from "react-hook-form";
import { FormHelperText, Stack } from "@mui/material";
import LiteRichEditor, { LiteRichEditorProps } from "../ui/customTextarea";

type RHFLiteRichEditorProps = LiteRichEditorProps & {
    name: string;
};

export default function RHFTextarea({ name, ...props }: RHFLiteRichEditorProps) {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={props.defaultHtml || ""}
            render={({ field, fieldState: { error } }) => (
                <Stack gap={0.75}>
                    <LiteRichEditor
                        {...props}
                        value={field.value}
                        onChange={field.onChange}
                    />

                    {error?.message && (
                        <FormHelperText error>{error.message}</FormHelperText>
                    )}
                </Stack>
            )}
        />
    );
}
