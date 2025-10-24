"use client"
import { useState } from "react";
import Button from "@mui/material/Button";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

type Props = {
    onChange?: (expanded: boolean) => void; // to get the current state
    initial?: boolean;
    labelOpen?: string; // when collapsed
    labelClose?: string; // when expanded
    sx?: object; // for MUI custom styles
    className?: string; // for Tailwind or custom class
};

export default function ShowMoreButton({
    onChange,
    initial = false,
    labelOpen = "مشاهده بیشتر",
    labelClose = "مشاهده کمتر",
    sx,
    className,
}: Props) {
    const [expanded, setExpanded] = useState(initial);

    const Icon = expanded
        ? KeyboardArrowUpRoundedIcon
        : KeyboardArrowDownRoundedIcon;

    const text = expanded ? labelClose : labelOpen;

    const handleClick = () => {
        setExpanded((prev) => {
            const next = !prev;
            onChange?.(next);
            return next;
        });
    };

    return (
        <Button
            onClick={handleClick}
            variant="text"
            color="primary"
            endIcon={<Icon />}
            aria-expanded={expanded}
            sx={{ px: 0, fontWeight: 500, ...sx }}
            className={className}
        >
            {text}
        </Button>
    );
}
