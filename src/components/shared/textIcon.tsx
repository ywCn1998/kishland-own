import { Typography, Stack, SxProps } from "@mui/material";
import { ReactNode } from "react";

interface IProp {
    text?: string | ReactNode;
    startIcon?: ReactNode
    endIcon?: ReactNode
    className?: string
    sx?: SxProps;
    gap?: number | string
}
export default function TextIcon({ text, startIcon, endIcon, className, sx, gap = 0.5 }: IProp) {
    return (
        <Typography component="div" color="text.secondary" className={`${className}`} sx={{ ...sx }}>
            <Stack direction="row" alignItems="center" spacing={1} gap={gap}>
                {startIcon}
                {text}
                {endIcon}
            </Stack>
        </Typography>
    )
}