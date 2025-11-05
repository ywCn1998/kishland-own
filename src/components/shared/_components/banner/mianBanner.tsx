import { Box, Stack } from "@mui/material";
import Link from "next/link";

export default function mainBanner() {
  return (
    <Stack component={Link} href="/fa/entertainment/list">
      <Box
        component={"img"}
        src={"/images/tafrih-list.png"}
        sx={{ width: "100%" }}
        className="reveal px-4! sm:px-0! hidden! md:inline! h-[320px]! rounded-3xl!"
      />
    </Stack>
  );
}
