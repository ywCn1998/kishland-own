"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
import {
    Box,
    Container,
    Stack,
    Typography,
    IconButton,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

/* ---------------- Helpers ---------------- */
function normalize(pathname: string) {
    return pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}
function matchesPrefix(path: string, prefix: string) {
    return path === prefix || path.startsWith(prefix + "/");
}

/* ---------------- Mobile header UI variants ---------------- */
type HeaderConfig = {
    title: string;
    rightIcon?: React.ReactNode;
    leftIcon?: React.ReactNode;
};

function MobileHeaderBar({ title, leftIcon, rightIcon }: HeaderConfig) {
    return (
        <Box
            className="
        lg:hidden!
        fixed top-0 left-0 right-0
        z-[1300]
        bg-white
        border-b border-slate-200
      "
            sx={{ height: 60 }}
        >
            <Container maxWidth="xl" sx={{ height: "100%" }}>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ height: "100%" }}
                >
                    <IconButton
                        edge="start"
                        size="small"
                        onClick={() => typeof window !== "undefined" && window.history.back()}
                    >
                        <ArrowBackIosNewIcon fontSize="inherit" />
                    </IconButton>

                    <Typography className="font-medium!" sx={{ lineHeight: "60px", fontSize: 16 }}>
                        {title}
                    </Typography>

                    <Box sx={{ width: 32, display: "flex", justifyContent: "flex-end" }}>
                        {rightIcon ?? leftIcon ?? null}
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
}

function LandingMobileHeader() {
    return (
        <Box
            className="
        lg:hidden!
        fixed top-0 left-0 right-0
        z-[1300]
        h-[100px] w-full
        bg-[#FF8C0B]
        bg-[url('/images/header.png')]
        bg-cover bg-center bg-no-repeat bg-blend-overlay
      "
        >
            <Container maxWidth="xl">
                <Stack className="flex flex-col px-4! py-2! gap-2!">
                    <Stack className="relative z-10 flex items-center justify-between! flex-row!">
                        <img src="/images/headerlogo.png" alt="header logo" className="h-[50px]" />
                        <Stack className="flex flex-row-reverse! items-center gap-2 text-white bg-white/20 backdrop-blur-md rounded-xl px-3 py-2">
                            <PhoneInTalkIcon />
                            <Typography className="text-white! text-sm!">021-93893839</Typography>
                        </Stack>
                    </Stack>
                    <Typography className="text-white! text-xs!">
                        از دریا تا آسمان جـزیـره کـیـش تو رو صدا می‌زنن
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
}

/* ---------------- Routes config ---------------- */
/** Exact pages that should override the default landing header */
const EXACT_ROUTES: Record<string, HeaderConfig> = {
    "/fa/cart": { title: "سبد خرید", rightIcon: <ShoppingCartCheckoutIcon fontSize="small" /> },
    "/fa/checkout": { title: "تسویه حساب", rightIcon: <ReceiptLongIcon fontSize="small" /> },
    "/fa/orders": { title: "سفارش‌ها", rightIcon: <ReceiptLongIcon fontSize="small" /> },
    "/fa/profile": { title: "پروفایل", rightIcon: <PersonOutlineIcon fontSize="small" /> },
    // add more exact overrides here...
};

/** Prefix groups: any child inherits this header (e.g., /fa/profile/*) */
const path = (path: string) => `/fa/${path}`
const PREFIX_GROUPS: Array<{
    prefix: string;
    config: HeaderConfig;
    exclude?: string[]; // full paths to skip
}> = [
        {
            prefix: path("profile"),
            config: { title: "پروفایل", rightIcon: <PersonOutlineIcon fontSize="small" /> },
        },
        {
            prefix: "/fa/tour/list",
            config: { title: "سفارش‌ها", rightIcon: <ReceiptLongIcon fontSize="small" /> },
        },
    ];

/* ---------------- Router ---------------- */
export default function MobileHeaderRouter() {
    const pathname = usePathname() || "/";
    const path = useMemo(() => normalize(pathname), [pathname]);

    // 1) Exact overrides
    if (EXACT_ROUTES[path]) {
        return <MobileHeaderBar {...EXACT_ROUTES[path]} />;
    }

    // 2) Inherit by prefix (longest wins)
    const group =
        PREFIX_GROUPS
            .filter(({ prefix, exclude }) => matchesPrefix(path, prefix) && !(exclude || []).includes(path))
            .sort((a, b) => b.prefix.length - a.prefix.length)[0] || null;

    if (group) {
        return <MobileHeaderBar {...group.config} />;
    }

    // 3) Default for ALL mobile routes: Landing header
    return <LandingMobileHeader />;
}
