import { FC } from "react";
import { TableCell, Typography } from "@mui/material";

const Row: FC<any & { index: number }> = ({
    index,
    requestBy,
    section,
    unit,
    lastUpdate
}) => {

    return (
        <>
            <TableCell align="left" sx={{ width: { xs: "initial", sm: "5%" } }}>
                <Typography className="text-base">{index + 1 || "-"}</Typography>
            </TableCell>

            <TableCell align="left" sx={{ width: { xs: "initial", sm: "25%" } }}>
                <Typography className="text-base">{requestBy || "-"}</Typography>
            </TableCell>

            <TableCell align="left" sx={{ width: { xs: "initial", sm: "25%" } }}>
                <Typography className="text-base">{section || "-"}</Typography>
            </TableCell>


            <TableCell align="left" sx={{ width: { xs: "initial", sm: "25%" } }}>
                <Typography className="text-base">{unit || "-"}</Typography>
            </TableCell>


            <TableCell align="left" sx={{ width: { xs: "initial", sm: "20%" } }}>
                <Typography className="text-base">{lastUpdate || "-"}</Typography>
            </TableCell>
        </>
    );
};

export default Row;
