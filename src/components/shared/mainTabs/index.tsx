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
    IconsInMobile = false,
    activeTabBorderColor, // ✅ NEW PROP: color for active tab border bottom
    value: controlledValue, // ✅ NEW PROP: controlled value
    onChange, // ✅ NEW PROP: onChange handler
    iconPosition = "start" // ✅ NEW PROP: icon position (start or end)
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
    IconsInMobile?: boolean;
    activeTabBorderColor?: string; // ✅ NEW PROP
    value?: number; // ✅ NEW PROP: controlled value
    onChange?: (event: React.SyntheticEvent, newValue: number) => void; // ✅ NEW PROP
    iconPosition?: "start" | "end"; // ✅ NEW PROP
}) {
    const firstEnabledIndex = useMemo(
        () => Math.max(0, data.findIndex((t) => !t.disabled)),
        [data]
    );

    const [internalValue, setInternalValue] = useState(firstEnabledIndex);
    const value = controlledValue !== undefined ? controlledValue : internalValue;

    const renderIcon = (icon?: TabIcon) => {
        if (!icon) return undefined;
        return isValidElement(icon)
            ? icon
            : createElement(icon as React.ComponentType<any>);
    };

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        if (data[newValue]?.disabled) return;
        if (onChange) {
            onChange(event, newValue);
        } else {
            setInternalValue(newValue);
        }
    };

    return (
        <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            allowScrollButtonsMobile={IconsInMobile} // ✅ Arrows only show when icons=true
            scrollButtons={icons ? "auto" : false} // ✅ Completely hide nav arrows
            className="w-full!"
            sx={{
                "& .MuiTabs-flexContainer": {
                    justifyContent: "flex-start",
                    gap: 2,
                    pb: { xs: 0, md: 1 },
                    pt: { xs: 0.5, md: 0 },
                    px: { xs: 2, md: 1 },
                    backgroundColor: bgColor,
                    alignItems: "center",
                    minHeight: { xs: 0, md: 60 },
                },
                mb: { xs: 0, md: 2 },
                border: border ? "1px solid " : "none",
                borderColor: "divider",
                borderRadius: border ? "14px" : 0,
                position: "relative",
                pb: { xs: 0, md: 0.2 },
                "& .MuiTabs-scrollButtons": {
                    display: IconsInMobile ? "flex" : "none",
                },
            }}
        >
            {data.map((tab, index) => (
                <Tab
                    key={index}
                    label={icons === false && tab.hideLabelOnMobile ? "" : tab.label}
                    icon={renderIcon(tab.icon)} // ✅ always keep tab icons
                    iconPosition={iconPosition}
                    disabled={tab.disabled}
                    disableRipple={tab.disabled}
                    className="text-base! md:text-base!"
                    sx={[
                        {
                            textWrap: "nowrap",
                            minHeight: 40,
                            "&.Mui-disabled": {
                                opacity: 1,
                                color: "text.secondary",
                                cursor: "default",
                                pointerEvents: "none",
                            },
                            // allow per-tab icon override styling
                            "& .MuiTab-iconWrapper": tab.iconSx as any,
                        },
                        createStyleTab(activeTabBorderColor) as any,
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
                <Stack className="flex flex-row! h-full absolute! left-4! pt-2!">
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

const createStyleTab = (activeTabBorderColor?: string) => ({
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
        color: activeTabBorderColor || ORANGE,
        "&::after": {
            content: '""',
            position: "absolute",
            insetInlineEnd: 0,
            bottom: -10,
            height: 3,
            width: "80%",
            backgroundColor: activeTabBorderColor || ORANGE,
            borderRadius: 999,
            transform: "translateX(10%)",
        },
    },
    "&:hover": { backgroundColor: "transparent" },
    "&:focus": { backgroundColor: "transparent" },
    "&:active": { backgroundColor: "transparent", color: "rgb(100 116 139);" },
} as const);
