import { FC } from "react";
import { IconButton, Stack, TableCell, Typography } from "@mui/material";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Link from "next/link";

const Row: FC<any & { index: number }> = ({
    index,
    id,
    fullName,
    gender,
    nationalCode,
    birthDate,
    ageGroup
}) => {

    return (
        <>
            <TableCell align="left" sx={{ width: { xs: "initial", sm: "22%" } }}>
                <Typography className="text-base">{fullName || "-"}</Typography>
            </TableCell>

            <TableCell align="left" sx={{ width: { xs: "initial", sm: "15%" } }}>
                <Typography className="text-base">{gender || "-"}</Typography>
            </TableCell>

            <TableCell align="left" sx={{ width: { xs: "initial", sm: "17%" } }}>
                <Typography className="text-base">{nationalCode || "-"}</Typography>
            </TableCell>

            <TableCell align="left" sx={{ width: { xs: "initial", sm: "20%" } }}>
                <Typography className="text-base">{birthDate || "-"}</Typography>
            </TableCell>

            <TableCell align="left" sx={{ width: { xs: "initial", sm: "18%" } }}>
                <Typography className="text-base">{ageGroup || "-"}</Typography>
            </TableCell>

            <TableCell align="center" sx={{ width: { xs: "initial" } }}>
                <Stack
                    display={"flex"}
                    flexDirection={"row"}
                    alignItems={"center"}
                    justifyContent={"center"}
                // gap={1}
                >
                    <IconButton component={Link} href={`${id}`}
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
