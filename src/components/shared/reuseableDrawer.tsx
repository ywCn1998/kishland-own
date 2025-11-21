// ReusableDrawer.tsx
"use client";

import * as React from "react";
import {
    Drawer,
    type DrawerProps,
    Button,
    Stack,
    Typography,
    Divider,
    Box,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export interface ReusableDrawerProps
    extends Omit<DrawerProps, "open" | "onClose" | "title"> {
    open: boolean;
    setOpen: (open: boolean) => void;
    title: React.ReactNode;
    children: React.ReactNode;
    closeText?: string;
    showDivider?: boolean;
    height?: number | string; // max height
    onClose?: () => void;
    bgColor?: string;
}

export default function ReusableDrawer({
    open,
    setOpen,
    title,
    children,
    closeText = "برگشت",
    showDivider = true,
    height = "80vh",              // better as max height
    onClose,
    anchor = "bottom",
    bgColor,
    PaperProps,
    ...rest
}: ReusableDrawerProps) {
    const handleClose = () => {
        setOpen(false);
        onClose?.();
    };

    return (
        <Drawer
            open={open}
            onClose={handleClose}
            anchor={anchor}
            PaperProps={{
                sx: {
                    maxHeight: height,          // ⬅️ limit height
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                    p: 0,
                    backgroundColor: bgColor || "white",
                    display: "flex",
                    flexDirection: "column",
                    //   overflow: "hidden",         // keep for rounded corners
                },
                ...PaperProps,
            }}
            {...rest}
        >
            <Box className="w-full px-5 py-4 flex flex-col h-full">
                {/* Header */}
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant="h6" className="text-left!">
                        {title}
                    </Typography>
                    {closeText && (
                        <Button
                            variant="text"
                            size="small"
                            onClick={handleClose}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                color: "text.secondary",
                            }}
                        >
                            <Typography variant="body2">{closeText}</Typography>
                            <ArrowBackIcon fontSize="small" />
                        </Button>
                    )}
                </Stack>

                {showDivider && <Divider sx={{ mt: 2, mb: 3 }} />}

                {/* Scrollable content */}
                <Box sx={{ flex: 1, overflowY: "auto", pb: 2 }}>
                    {children}
                </Box>
            </Box>
        </Drawer>
    );
}
