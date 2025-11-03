"use client";

import React, { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Button, Divider, List, ListItem, ListItemButton, Stack, Typography,
} from "@mui/material";
import {
    ReceiptLongOutlined,
    AccountBalanceWalletOutlined,
    EmojiObjectsOutlined,
    GroupsOutlined,
    FavoriteBorderOutlined,
    HeadsetMicOutlined,
    LogoutOutlined,
    PersonOutline,
} from "@mui/icons-material";

interface ISideBarItem {
    title: string;
    route: string;
    icon: any;
}

const base = "/fa/panel";
const path = (u: string) => `${base}/${u}`;

const SideBarItems: ISideBarItem[] = [
    { title: "حساب کاربری", route: path("user-account"), icon: PersonOutline },
    { title: "سفارشات من", route: path("history"), icon: ReceiptLongOutlined },
    { title: "کیف پول", route: path("wallet"), icon: AccountBalanceWalletOutlined },
    { title: "پیشنهادات برای شما", route: path("suggestions"), icon: EmojiObjectsOutlined },
    { title: "لیست مسافران", route: path("passengers/list"), icon: GroupsOutlined },
    { title: "علاقه‌مندی‌ها", route: path("favorites"), icon: FavoriteBorderOutlined },
    { title: "درخواست پشتیبانی", route: path("support"), icon: HeadsetMicOutlined },
    { title: "خروج از حساب", route: "/logout", icon: LogoutOutlined },
];

export default function SideBar() {
    const pathname = usePathname();

    // exact or nested match
    const isActive = (route: string) =>
        pathname === route || pathname.startsWith(route + "/");

    return (
        <List className="rounded-2xl!" disablePadding sx={{ py: 1 }}>
            {SideBarItems.map((item) => (
                <Fragment key={item.title}>
                    {item.title === "خروج از حساب" && <Divider sx={{ my: 0.3 }} />}

                    <ListItem disablePadding>
                        <ListItemButton
                            disableGutters
                            sx={{ py: 1, "&:hover": { backgroundColor: "transparent" } }}
                            component={Link}
                            href={item.route}
                        >
                            <Stack
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 0.5,
                                    p: 1,
                                    borderRadius: 1.5,
                                    width: "100%",
                                    backgroundColor: isActive(item.route) ? "#f5f7fa" : "white",
                                    "&:hover": { backgroundColor: "#f5f7fa" },
                                }}
                            >
                                <Stack sx={{ borderRadius: "4px", p: 1 }}>
                                    <item.icon
                                        sx={{
                                            fontSize: 30,
                                            color:
                                                item.title === "خروج از حساب"
                                                    ? "error.main"
                                                    : isActive(item.route)
                                                        ? "black"
                                                        : "text.secondary",
                                        }}
                                    />
                                </Stack>

                                <Typography sx={{ color: isActive(item.route) ? "black" : "text.secondary" }}>
                                    {item.title}
                                </Typography>
                            </Stack>
                        </ListItemButton>
                    </ListItem>
                </Fragment>
            ))}
        </List>
    );
}
