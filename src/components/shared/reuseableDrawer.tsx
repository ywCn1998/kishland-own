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
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export interface ReusableDrawerProps
    extends Omit<DrawerProps, "open" | "onClose" | "title"> {
    open: boolean;
    setOpen: (open: boolean) => void;
    title: React.ReactNode;         // your custom title type
    children: React.ReactNode;
    closeText?: string;
    showDivider?: boolean;          // default true
    height?: number | string;       // default "50vh"
    onClose?: () => void;
}

export default function ReusableDrawer({
    open,
    setOpen,
    title,
    children,
    closeText = "برگشت",
    showDivider = true,
    height = "50vh",
    onClose,
    anchor = "bottom",
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
                    height,
                    borderTopLeftRadius: 3,
                    borderTopRightRadius: 3,
                    overflow: "hidden",
                    p: 0,
                },
                ...PaperProps,
            }}
            {...rest}
        >
            <div className="w-full h-full px-5 py-4">
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant="h6" className="text-left!">{title}</Typography>
                    {closeText && (
                        <Button
                            variant="text"
                            size="small"
                            onClick={handleClose}
                            sx={{ display: "flex", alignItems: "center", gap: 1, color: "text.secondary" }}
                        >
                            <Typography variant="body2">{closeText}</Typography>
                            <ArrowBackIcon fontSize="small" />
                        </Button>
                    )}
                </Stack>

                {showDivider && <Divider sx={{ mt: 2, mb: 3 }} />}

                {children}
            </div>
        </Drawer>
    );
}
