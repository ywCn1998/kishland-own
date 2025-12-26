import { FC } from "react";
import { Chip, IconButton, Stack, TableCell, Typography } from "@mui/material";
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';

export const statuses = {
    success: "تراکنش موفق",
    bankPending: "در انتظار تایید بانکی",
    failed: "تراکنش ناموفق",
    canceled: "لغو شده",
    backMoney: "بازگشت وجه",
    pending: "در انتظار تایید",
    security: "نیاز به بررسی امنیتی"
};


const statusColors: Record<string, string> = {
    success: "secondary.main",
    pending: "primary.main",
    bankPending: "primary.main",
    failed: "error.main",
    canceled: "error.main",
    backMoney: "success.main",
    security: "text.secondary",
};


const statusBackground: Record<string, string> = {
    success: "secondary.50",
    pending: "primary.50",
    bankPending: "primary.50",
    failed: "error.50",
    canceled: "error.50",
    backMoney: "success.50",
    security: "background.paper",
};

const Row: FC<any & { index: number }> = ({
    index,
    trackingId,
    payDate,
    price,
    status
}) => {

    return (
        <>
            <TableCell align="left" sx={{ width: { xs: "initial", sm: "8%" } }}>
                <Typography className="text-base">{index + 1 || "-"}</Typography>
            </TableCell>

            <TableCell align="left" sx={{ width: { xs: "initial", sm: "18%" } }}>
                <Typography className="text-base">{trackingId || "-"}</Typography>
            </TableCell>

            <TableCell align="left" sx={{ width: { xs: "initial", sm: "20%" } }}>
                <Typography className="text-base">{payDate || "-"}</Typography>
            </TableCell>

            <TableCell align="left" sx={{ width: { xs: "initial", sm: "20%" } }}>
                <Typography className="text-base">{price || "-"}</Typography>
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
                            fontSize: 15,
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
                    <IconButton>
                        <LocalPrintshopOutlinedIcon sx={{ fontSize: 25 }} />
                    </IconButton>
                </Stack>
            </TableCell>

        </>
    );
};

export default Row;
