import { Typography, Stack } from "@mui/material";
import { ReactNode } from "react";

interface IProp {
    text: string;
    className?: string
    number: number
}
export default function TextNumber({ text, className, number }: IProp) {
    return (
        <Typography component="div" className={`text-slate-500! ${className}`}>
            <Stack direction="row" alignItems="center" gap={0.8} className="flex! flex-row! text-center!" >
                <Stack sx={{ backgroundColor: "primary.main", borderRadius: "50%", height: 25, width: 25, justifyContent: "center", color: "white" }}>{number}</Stack>
                <Stack className="text-sm!">{text}</Stack>
            </Stack>
        </Typography>
    )
}