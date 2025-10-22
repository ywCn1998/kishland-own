import React from "react";
import { Pagination } from "@mui/material";

interface PaginationProps {
  totalItems: number;
  pageSize: number;
  currentPage: number;
  isLoading?: boolean;
  onPageChange: (newPage: number) => void;
}

const PaginationComponent: React.FC<PaginationProps> = ({
  totalItems,
  pageSize,
  isLoading,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / pageSize);
  console.log(totalPages);

  const handleChangePage = (_: React.ChangeEvent<unknown>, newPage: number) => {
    onPageChange(newPage);
  };

  if (totalPages <= 1) return null;
  return (
    <div className="mt-4 flex justify-center">
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handleChangePage}
        disabled={isLoading}
        variant="text"
        showFirstButton={false}
        showLastButton={false}
        size="medium"
        shape="rounded"
        color="primary"
        sx={{
          ".MuiPaginationItem-root": {
            fontSize: "20px",
            border: "1px solid #E1E6F0",
            color: "#626E94",
            width: "48px",
            height: "48px",
          },
          ".MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "#626E94",
            borderColor: "#626E94",
            color: "#fff",
          },
          ".MuiPaginationItem-previousNext": {
            svg: {
              fontSize: "30px",
            },
          },
        }}
      />
    </div>
  );
};

export default PaginationComponent;
