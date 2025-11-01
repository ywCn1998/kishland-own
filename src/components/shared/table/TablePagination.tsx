// import { useEffect } from "react";
// import Pagination from "@mui/material/Pagination";

// const PaginationComponent: React.FC<IPaginationMeta> = ({
//   currentPage,
//   total,
//   perPage,
//   totalPages,
//   page,
//   setPage,
//   field = "page"
// }: IPaginationMeta) => {
//   const [_, setSearchParams] = useSearchParams();

//   useEffect(() => {
//     if (totalPages > 0 && currentPage > totalPages) {
//       setPage(1);
//     }
//   }, [currentPage, perPage, total, setPage]);

//   const handleChangePage = (_: React.ChangeEvent<unknown>, newPage: number) => {
//     setPage(Number(newPage));
//     const currentParams = new URLSearchParams(location.search);
//     currentParams.set(field, String(newPage));
//     setSearchParams(currentParams);
//   };

//   return (
//     <div className="mt-4 flex justify-center">
//       {totalPages !== 0 && (
//         <Pagination
//           count={totalPages}
//           page={page}
//           onChange={handleChangePage}
//           variant="text"
//           showFirstButton={false}
//           showLastButton={false}
//           size="medium"
//           shape="rounded"
//           color="primary"
//           dir="ltr"
//         />
//       )}
//     </div>
//   );
// };

// export default PaginationComponent;
