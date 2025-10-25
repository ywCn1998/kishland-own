import { Typography, Stack } from "@mui/material";
import { ReactNode } from "react";

interface IProp {
    text?: string | ReactNode;
    startIcon?: ReactNode
    endIcon?: ReactNode
    className?: string
    sx?: any;
}
export default function TextIcon({ text, startIcon, endIcon, className, sx }: IProp) {
    return (
        <Typography component="div" color="text.secondary" className={`${className}`} sx={{ ...sx }}>
            <Stack direction="row" alignItems="center" spacing={1} gap={0.5}>
                {startIcon}
                {text}
                {endIcon}
            </Stack>
        </Typography>
    )
}