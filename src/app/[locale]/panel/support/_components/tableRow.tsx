import { FC } from "react";
import { Chip, IconButton, Stack, TableCell, Typography } from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import {
    red,
    orange,
    blue,
    lightBlue,
    green,
    grey,
} from "@mui/material/colors";
import Link from "next/link";


export const statuses = {
    pending: "درحال بررسی",
    answered: "پاسخ داده شده",
    closed: "بسته شده",
};


const statusColors: Record<string, string> = {
    pending: "primary.main", // strong red → error
    answered: "secondary.main", // same for consistency
    closed: "text.secondary", // orange → waiting
};


const statusBackground: Record<string, string> = {
    pending: "primary.100", // strong red → error
    answered: "secondary.50", // same for consistency
    closed: "#BFC4D5", // orange → waiting
};

const Row: FC<any & { index: number }> = ({
    index,
    ticketId,
    subject,
    lastUpdate,
    status
}) => {

    return (
        <>
            <TableCell align="left" sx={{ width: { xs: "initial", sm: "8%" } }}>
                <Typography className="text-base">{index + 1 || "-"}</Typography>
            </TableCell>

            <TableCell align="left" sx={{ width: { xs: "initial", sm: "18%" } }}>
                <Typography className="text-base">{ticketId || "-"}</Typography>
            </TableCell>

            <TableCell align="left" sx={{ width: { xs: "initial", sm: "20%" } }}>
                <Typography className="text-base">{subject || "-"}</Typography>
            </TableCell>

            <TableCell align="left" sx={{ width: { xs: "initial", sm: "20%" } }}>
                <Typography className="text-base">{lastUpdate || "-"}</Typography>
            </TableCell>

            <TableCell align="left" sx={{ width: { xs: "initial" } }}>
                <Chip
                    label={statuses[status as keyof typeof statuses] || status || "-"}
                    variant="outlined"
                    sx={{
                        "&.MuiChip-root": {
                            border: "none",
                            backgroundColor: statusBackground[status!], // ✅ solid border
                            color: statusColors[status!] || "#333",
                            fontSize: 12,
                            borderRadius: 1,
                            // px: 0,
                        },
                    }}
                />
            </TableCell>

            <TableCell align="center" sx={{ width: { xs: "initial" } }}>
                <Stack
                    display={"flex"}
                    flexDirection={"row"}
                    alignItems={"center"}
                    justifyContent={"center"}
                // gap={1}
                >
                    <IconButton component={Link} href={`support/ticket/${ticketId}`}
                        onClick={() => { }}
                        disabled={false}
                    >
                        <VisibilityOutlinedIcon sx={{ fontSize: 25 }} />
                    </IconButton>

                    <IconButton>
                        <DeleteOutlineOutlinedIcon sx={{ fontSize: 25 }} />
                    </IconButton>
                </Stack>
            </TableCell>

        </>
    );
};

export default Row;
