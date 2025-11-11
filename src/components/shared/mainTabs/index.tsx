"use client"
import React, { createElement, isValidElement, useMemo, useState } from "react";
import {
    Button,
    IconButton,
    Stack,
    SxProps,
    Tab,
    Tabs,
    Theme,
} from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";

type TabIcon = React.ReactNode | React.ComponentType<any>;

type TabItem = {
    label: string;
    icon?: TabIcon;
    iconSx?: SxProps<Theme>;
    disabled?: boolean;
    hideLabelOnMobile?: boolean; // ✅ NEW
};


export default function MainTabs({
    data,
    border = true,
    tabStyle,
    changeCardUi,
    setChangeCardUi,
    sortByPrice,
    setSortByExpensive,
    setSortByCheap,
    setSortByPrice,
    bgColor = "white",
    icons = true, // ✅ NEW PROP: controls scroll navigation icons only
}: {
    data: TabItem[];
    border?: boolean;
    tabStyle?: SxProps<Theme>;
    changeCardUi?: boolean;
    setChangeCardUi?: (val: boolean) => void;
    sortByPrice?: boolean;
    setSortByExpensive?: (val: boolean) => void;
    setSortByCheap?: (val: boolean) => void;
    setSortByPrice?: (val: boolean) => void;
    bgColor?: string;
    icons?: boolean;
}) {
    const firstEnabledIndex = useMemo(
        () => Math.max(0, data.findIndex((t) => !t.disabled)),
        [data]
    );

    const [value, setValue] = useState(firstEnabledIndex);

    const renderIcon = (icon?: TabIcon) => {
        if (!icon) return undefined;
        return isValidElement(icon)
            ? icon
            : createElement(icon as React.ComponentType<any>);
    };

    return (
        <Tabs
            value={value}
            onChange={(_, v) => {
                if (data[v]?.disabled) return;
                setValue(v);
            }}
            variant="scrollable"
            allowScrollButtonsMobile={icons} // ✅ Arrows only show when icons=true
            scrollButtons={icons ? "auto" : false} // ✅ Completely hide nav arrows
            sx={{
                "& .MuiTabs-flexContainer": {
                    justifyContent: "flex-start",
                    gap: { xs: 0, md: 2 },
                    p: { xs: 0, md: 1 },
                    pt: { xs: .5, md: 0 },
                    backgroundColor: bgColor,
                    alignItems: "center",
                    minHeight: { xs: 0, md: 60 },
                },
                mb: { xs: 0, md: 2 },
                border: border ? "1px solid" : "none",
                borderBottom: border ? "1px solid" : "0",
                borderColor: "divider",
                borderRadius: border ? "14px" : 0,
                position: "relative",
            }}
        >
            {data.map((tab, index) => (
                <Tab
                    key={index}
                    label={icons === false && tab.hideLabelOnMobile ? "" : tab.label}
                    icon={renderIcon(tab.icon)} // ✅ always keep tab icons
                    iconPosition="end"
                    disabled={tab.disabled}
                    disableRipple={tab.disabled}
                    sx={[
                        {
                            textWrap: "nowrap",
                            minHeight: 40,
                            "&.Mui-disabled": {
                                opacity: 1,
                                color: "text.secondary",
                                fontWeight: 600,
                                cursor: "default",
                                pointerEvents: "none",
                            },
                            // allow per-tab icon override styling
                            "& .MuiTab-iconWrapper": tab.iconSx as any,
                        },
                        StyleTab as any,
                        tabStyle as any,
                    ]}
                />
            ))}

            {changeCardUi && (
                <IconButton
                    className="absolute! left-4!"
                    // @ts-ignore
                    onClick={() => setChangeCardUi?.((prev) => !prev)}
                >
                    <SortIcon />
                </IconButton>
            )}

            

            {sortByPrice && (
                <Stack className="flex flex-row! h-full absolute! left-4!">
                    <Button
                        // @ts-ignore
                        onClick={() => setSortByCheap?.((prev) => !prev)}
                        variant="text"
                        className="p-3!"
                        sx={{ color: "text.secondary" }}
                    >
                        ارزان ترین
                    </Button>
                    <Button
                        // @ts-ignore
                        onClick={() => setSortByExpensive?.((prev) => !prev)}
                        variant="text"
                        className="p-3!"
                        sx={{ color: "text.secondary" }}
                    >
                        گران ترین
                    </Button>
                </Stack>
            )}
        </Tabs>
    );
}

const ORANGE = "var(--primary-500, #FF8C0B)";
const StyleTab = {
    minHeight: 40,
    px: { xs: 0, md: 2 },
    py: 0.5,
    color: "rgb(100 116 139);",
    fontWeight: 400,
    fontSize: { xs: 14, md: 16 },
    borderRadius: 2,
    alignSelf: "flex-end",
    position: "relative",
    "& .MuiTab-iconWrapper": { ml: 0.5 },
    "&.Mui-selected": {
        color: ORANGE,
        "&::after": {
            content: '""',
            position: "absolute",
            insetInlineEnd: 0,
            bottom: -10,
            height: 3,
            width: "80%",
            backgroundColor: ORANGE,
            borderRadius: 999,
            transform: "translateX(10%)",
        },
    },
    "&:hover": { backgroundColor: "transparent" },
    "&:focus": { backgroundColor: "transparent" },
    "&:active": { backgroundColor: "transparent", color: "rgb(100 116 139);" },
} as const;
