"use client"
import { Button, Divider, List, ListItem, ListItemButton, Stack, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

import {
    ReceiptLongOutlined,
    AccountBalanceWalletOutlined,
    EmojiObjectsOutlined,
    GroupsOutlined,
    FavoriteBorderOutlined,
    HeadsetMicOutlined,
    LogoutOutlined,
    PersonOutline
} from "@mui/icons-material";
import { Jersey_20 } from "next/font/google";
import React from "react";


interface ISideBarItem {
    title: string;
    route: string;
    icon: any
}

const SideBarItems: ISideBarItem[] = [
    { title: "حساب کاربری", route: "/fa/panel/user-account", icon: PersonOutline },
    { title: "سفارشات من", route: "/orders", icon: ReceiptLongOutlined },
    { title: "کیف پول", route: "/wallet", icon: AccountBalanceWalletOutlined },
    { title: "پیشنهادات برای شما", route: "/suggestions", icon: EmojiObjectsOutlined },
    { title: "لیست مسافران", route: "/travelers", icon: GroupsOutlined },
    { title: "علاقه‌مندی‌ها", route: "/favorites", icon: FavoriteBorderOutlined },
    { title: "درخواست پشتیبانی", route: "/support", icon: HeadsetMicOutlined },
    { title: "خروج از حساب", route: "/logout", icon: LogoutOutlined },
];


export default function SideBar() {
    const isActive = (path: string) => location.pathname === path;

    return (
        <>
            <List className="rounded-xl!" disablePadding >
                {SideBarItems.map((item) => (
                    <React.Fragment key={item.title}>
                        {item.title === "خروج از حساب" && <Divider sx={{ my: 0.3 }} />}

                        <ListItem disablePadding
                            sx={{
                                "& .MuiListItem-root": { margin: 0, padding: 0 },
                            }}
                        >
                            <ListItemButton sx={{
                                "&:hover": { backgroundColor: "transparent" },
                            }}
                            >
                                <Stack
                                    component={Link}
                                    href={item.route}
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        gap: 0.5,
                                        p: 1,
                                        borderRadius: "5px",
                                        width: "100%",
                                        backgroundColor: isActive(item.route) ? "#f5f7fa" : "white",
                                        "&:hover": { backgroundColor: "#f5f7fa" },
                                    }}
                                >
                                    <Stack
                                        sx={{
                                            borderRadius: "4px",
                                            p: 1,
                                        }}
                                    >
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
                                    <Typography
                                        sx={{
                                            color:
                                                isActive(item.route)
                                                    ? "black"
                                                    : "text.secondary",
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                </Stack>
                            </ListItemButton>
                        </ListItem>
                    </React.Fragment>
                ))}
            </List >

        </>
    )
}