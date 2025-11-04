import { Box } from "@mui/material";

export default function mainBanner() {
  return (
    <Box
      component={"img"}
      src={"/images/tafrih-list.png"}
      sx={{ width: "100%" }}
      className="reveal px-4! sm:px-0! hidden! md:inline! h-[320px]! rounded-3xl!"
    />
  );
}
