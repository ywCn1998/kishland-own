import { Stack } from "@mui/material";

export default function DashedDivider() {
    return (
        <Stack flex={1} position="relative" height="1px">
            <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-slate-300"></span>

            <div
                className="w-full h-[1px]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(to left, #D9DEE7 0 2px, transparent 10px, transparent 12px)",
                }}
            />

            <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-slate-300"></span>
        </Stack>

    );
}