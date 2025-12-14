import { SxProps, Tooltip, Typography } from "@mui/material";

interface NameTooltipProps {
    text?: string;
    limit?: number;
    className?: string
    sx?: SxProps
}

export default function WordTooltip({ text = "", limit = 30, className, sx }: NameTooltipProps) {
    const truncated =
        text?.length > limit ? text?.substring(0, limit) + "…" : text;

    return (
        <Tooltip title={text?.length > limit ? text : ""} arrow>
            <Typography
                className={className}
                sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    cursor: text?.length > limit ? "pointer" : "default",
                    fontSize: 15,
                    ...sx
                }}
            >
                {truncated}
            </Typography>
        </Tooltip>
    );
}
