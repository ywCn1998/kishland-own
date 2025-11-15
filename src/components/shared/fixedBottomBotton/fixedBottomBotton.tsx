import { Stack, Paper } from "@mui/material";
import { ReactNode } from "react";

interface FixedBottomButtonProps {
    children: ReactNode;
    className?: string
}

export default function FixedBottomButton({ children, className }: FixedBottomButtonProps) {
    return (
        <Paper
            sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1300,
                bgcolor: "#fff",
                borderTop: "1px solid #E5E7EB",
                display: { xs: "flex", lg: "none" },
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                boxShadow: "0 -4px 12px rgba(0, 0, 0, 0.18)",
                px: 2,
                py: 2.5,
            }}
            elevation={0}
        >
            <Stack
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                sx={{ width: "100%", maxWidth: 500 }}
                className={className}
            >
                {children}
            </Stack>
        </Paper>
    );
}
