"use client"
import React, { createElement, isValidElement, useMemo, useState } from "react";
import { Button, IconButton, Stack, SxProps, Tab, Tabs, Theme } from "@mui/material";
import SortIcon from '@mui/icons-material/Sort';

type TabIcon = React.ReactNode | React.ComponentType<any>;

type TabItem = {
    label: string;
    icon?: TabIcon;           // can be <Icon /> or Icon
    iconSx?: SxProps<Theme>;  // optional per-tab icon styling
    disabled?: boolean;
};

export default function MainTabs({
    data,
    border = true,
    tabStyle,
    changeCardUi,
    setChangeCardUi,
    sortByPrice,
    setSortByExpensive,
    setSortByCheap
}: {
    data: TabItem[];
    border?: boolean;
    tabStyle?: SxProps<Theme>;
    changeCardUi?: boolean
    setChangeCardUi?: (val: boolean) => void
    sortByPrice?: boolean
    setSortByExpensive?: (val: boolean) => void
    setSortByCheap?: (val: boolean) => void
    setSortByPrice?: (val: boolean) => void
}) {
    const firstEnabledIndex = useMemo(
        () => Math.max(0, data.findIndex((t) => !t.disabled)),
        [data]
    );

    const [value, setValue] = useState(firstEnabledIndex);

    const renderIcon = (icon?: TabIcon) => {
        if (!icon) return undefined;
        return isValidElement(icon) ? icon : createElement(icon as React.ComponentType<any>);
    };

    return (
        <Tabs
            value={value}
            onChange={(_, v) => {
                if (data[v]?.disabled) return;
                setValue(v);
            }}
            variant="scrollable"
            allowScrollButtonsMobile
            sx={{
                "& .MuiTabs-flexContainer": {
                    justifyContent: "flex-start",
                    gap: 2,
                    p: 1,
                    backgroundColor: "white",
                    alignItems: "center",
                    minHeight: 60,
                },
                // default icon tweaks (can be overridden per Tab via iconSx)
                "& .MuiTab-root .MuiTab-iconWrapper": {
                    ml: 1,            // space between label and icon when iconPosition="end"
                    "& svg": { fontSize: 18 },
                },
                mb: 2,
                border: border ? "1px solid" : "none" ,
                borderBottom : !border ? "1px solid" : "1px solid",
                borderColor: "divider",
                borderRadius: border ? "14px" : 0,
                position: "relative"
            }}
        >
            {data.map((tab, index) => (
                <Tab
                    key={index}
                    label={tab.label}
                    icon={renderIcon(tab.icon)}
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
                            position: "absolute",
                            // allow per-tab icon overrides
                            "& .MuiTab-iconWrapper": tab.iconSx as any,
                        },
                        StyleTab as any,
                        tabStyle as any,
                    ]}
                />
            ))}
            {
                changeCardUi && (
                    <IconButton className="absolute! left-4!"
                        onClick={() => {
                            // @ts-ignore
                            setChangeCardUi?.((prev) => !prev)
                        }}
                    >
                        <SortIcon />
                    </IconButton>
                )
            }
            {
                sortByPrice && (
                    <Stack className="flex flex-row! h-full absolute! left-4!">
                        <Button onClick={() => {
                            // @ts-ignore
                            setSortByCheap?.((prev) => !prev)
                        }}
                            variant="text" className="p-3!" sx={{ color: "text.secondary" }}>ارزان ترین</Button>
                        <Button onClick={() => {
                            // @ts-ignore
                            setSortByExpensive?.((prev) => !prev)
                        }}
                            variant="text" className="p-3!" sx={{ color: "text.secondary" }}>گران ترین</Button>
                    </Stack>
                )
            }

        </Tabs >
    );
}

const ORANGE = "var(--primary-500, #FF8C0B)";
const StyleTab = {
    minHeight: 40,
    px: 2,
    py: 0.5,
    color: "rgb(100 116 139);",
    fontWeight: 400,
    fontSize: 16,
    borderRadius: 2,
    alignSelf: "flex-end",
    position: "relative",
    "& .MuiTab-iconWrapper": { ml: 0.5 },
    "&.Mui-selected": {
        color: ORANGE,
        "&::after": {
            content: '""',
            position: "absolute",
            insetInlineEnd: 0, // right in RTL
            bottom: -10,
            height: 3,
            width: "80%",
            backgroundColor: ORANGE,
            borderRadius: 999,
            transform: "translateX(10%)", // small offset like the screenshot
        },
    },
    "&:hover": { backgroundColor: "transparent" },
    "&:focus": { backgroundColor: "transparent" },
    "&:active": { backgroundColor: "transparent", color: "rgb(100 116 139);" },
};