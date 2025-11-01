"use client"
import { FC, MouseEvent } from "react";
import {
  TableRow,
  TableHead as MuiTableHead,
  TableCell,
  Checkbox,
  TableSortLabel,
  Typography,
} from "@mui/material";
import { ITableHeadCell, TTableOrder } from "@/models/table";

interface IProps {
  headCells: ITableHeadCell[];
  numSelected: number;
  selectable?: boolean;
  onRequestSort: (event: React.MouseEvent<unknown>, property: any) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: TTableOrder;
  orderBy: string | number;
  rowCount: number;
}

const TableHead: FC<IProps> = ({
  headCells,
  selectable = false,
  onSelectAllClick,
  order,
  orderBy,
  numSelected,
  rowCount,
  onRequestSort,
}) => {
  const createSortHandler = (property: any) => (event: MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };
  // console.log("createSortHandler: ", order);


  return (
    <MuiTableHead sx={{ backgroundColor: "secondary.50", borderRadius: 2 }}>
      <TableRow sx={{ bgcolor: "table.header" }}>
        {selectable && (
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                "aria-label": "select all desserts",
              }}
            />
          </TableCell>
        )}

        {headCells.map((headCell, _index) => (
          <TableCell
            key={headCell.id}
            className={`${["عملیات", "چاپ رسید"].includes(headCell.label)
                ? "text-center!"
                : "text-start!"
              }`}
            align={headCell?.align ?? "center"}
            sortDirection={orderBy === headCell.id ? order : false}
            width={headCell.width}
            sx={{
              position: "relative",
              // "&:not(:last-child)::after": {
              //   content: '""',
              //   position: "absolute",
              //   top: "25%", // leaves 10% space at top
              //   bottom: "25%", // leaves 10% space at bottom
              //   right: 0,
              //   width: "0.5px",
              //   backgroundColor: "#e0e0e0", // divider color
              // },
            }}
          >
            <TableSortLabel
              active={false}
              // active={(orderBy === headCell.id)}
              // active={(headCell.label !== "وضعیت" && orderBy === headCell.id)}
              hideSortIcon
              direction={orderBy === headCell.id ? order : "asc"}
              sx={{ textAlign: "center" }}
            >
              <Typography

                color="text.secondary"
                sx={{ mt: 1, fontSize: 13, textAlign: "center" }}
              >
                {headCell.label}
              </Typography>
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </MuiTableHead>
  );
};

export default TableHead;
