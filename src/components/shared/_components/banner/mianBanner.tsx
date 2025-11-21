import { Box, Stack } from "@mui/material";
import Link from "next/link";

export default function mainBanner({ hasBannerInMobile = true, hasBannerInDesktop = true }: { hasBannerInMobile?: boolean, hasBannerInDesktop?: boolean }) {
  return (
    <Stack component={Link} href="/fa/entertainment/list">
      {
        hasBannerInDesktop && (
          <Box
            component={"img"}
            src={"/images/tafrih-list.png"}
            sx={{ width: "100%" }}
            className="reveal px-4! sm:px-0! hidden! md:inline! h-[320px]! rounded-3xl!"
          />
        )
      }
      {
        hasBannerInMobile && (
          <Box
            component={"img"}
            src={"/images/tafrih-list-mobile.png"}
            sx={{ width: "100%" }}
            className="reveal md:hidden! h-[200px]! rounded-2xl!"
          />
        )
      }
    </Stack>
  );
}