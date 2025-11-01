"use client"
import { ChangeEvent, FC, useState, MouseEvent, JSX } from "react";
import {
  TableContainer,
  Table as MuiTable,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  SxProps,
  Box,
  Typography,
  Stack,
  Select,
  MenuItem,
  alpha,
} from "@mui/material";

import TableHead from "./TableHead";
import { EmptyBox, TableBox } from "./styles";
// import TablePagination from "./TablePagination";
import { ITableHeadCell, TTableOrder } from "@/models/table";
import TableLoader from "./TableLoader";

interface IProps {
  sx?: SxProps;
  headCells: ITableHeadCell[];
  rows: JSX.Element[];
  selectable?: boolean;
  hasPagination?: boolean;
  loading?: boolean;
  loadingRows?: number;
  maxPage?: number;
  // pagination?: IPaginationMeta;
  isUserLimit?: boolean;
  isUserPage?: boolean;
  customOrder?: string;
  openStatusPopover?: any
}

const Table: FC<IProps> = ({
  sx,
  headCells,
  rows,
  selectable = false,
  loading = false,
  loadingRows = 10,
  // pagination,
  hasPagination = true,
  isUserLimit = false,
  isUserPage = false,
  customOrder,
}) => {
  const [order, setOrder] = useState<TTableOrder>("asc");
  const [orderBy, setOrderBy] = useState<string>("");
  const [selected, _setSelected] = useState<any[]>([]);

  const handleClick = (
    _event: React.MouseEvent<unknown>,
    _id: string | null
  ) => {
    if (!selectable) return;
  };

  const handleSelectAllClick = (_event: ChangeEvent<HTMLInputElement>) => {
    if (!selectable) return;
  };

  const handleRequestSort = (_event: MouseEvent<unknown>, property: any) => {
    // const isStatusFilter = 
    const isAsc = orderBy === property && order === "asc";
    const isStatusFilter = (customOrder === "status")
    if (isStatusFilter) { } else {

      setOrder(isAsc ? "desc" : "asc");
    }
    setOrderBy(property);
  };

  const isSelected = (id: string | null) => selected.indexOf(id) !== -1;

  return (
    <Box sx={sx}>
      <TableBox >
        <TableContainer
          sx={{
            borderRadius: 1,
            overflowX: "auto", // ⬅ horizontal scroll if needed
            overflowY: "auto",
            maxWidth: "100%",
            overscrollBehavior: "contain",
          }}
        >
          <MuiTable
            size="medium"
            // sx={{
            //   "tbody tr:nth-of-type(even)": {
            //     backgroundColor: (t) => alpha(t.palette.primary.main, 0.06),
            //   },
            //   "tbody tr:hover": {
            //     backgroundColor: (t) => alpha(t.palette.primary.main, 0.12),
            //   },
            //   "tbody tr.Mui-selected": {
            //     backgroundColor: (t) => alpha(t.palette.primary.main, 0.18),
            //     "&:hover": {
            //       backgroundColor: (t) => alpha(t.palette.primary.main, 0.22),
            //     },
            //   },
            // }}
          >
            <TableHead
              headCells={headCells}
              numSelected={selected?.length}
              order={order}
              orderBy={orderBy}
              rowCount={rows?.length}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
            />

            <TableBody>
              {loading ? (
                <TableLoader
                  rowCount={loadingRows}
                  columnCount={headCells.length}
                />
              ) : rows.length > 0 ? (
                rows.map((row, index) => {
                  const isItemSelected = isSelected(row?.key);
                  const labelId = `table-item-${index}`;

                  return (
                    <TableRow
                      key={row?.key}
                      sx={{ cursor: selectable ? "pointer" : "default" }}
                      tabIndex={-1}
                      hover
                      selected={isItemSelected}
                      aria-checked={isItemSelected}
                      role={selectable ? "checkbox" : "cell"}
                      onClick={(event: any) => handleClick(event, row?.key)}
                    >
                      {selectable && (
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              "aria-labelledby": labelId,
                            }}
                          />
                        </TableCell>
                      )}

                      {row}
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell colSpan={headCells?.length}>
                    <EmptyBox>
                      <Typography variant="h5">
                        داده‌ای برای نمایش وجود ندارد
                      </Typography>
                    </EmptyBox>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </MuiTable>
        </TableContainer>
      </TableBox>

      {/* {hasPagination && <TablePagination maxPage={maxPage} />} */}



    </Box>
  );
};

export default Table;
