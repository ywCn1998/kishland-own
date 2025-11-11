import { Box, Stack } from "@mui/material";
import Link from "next/link";

export default function MainBanner({ hasBannerInMobile = true, hasBannerInDesktop = true, href, heightInDesktop = "320px", heightInMobile = "200px" }: { hasBannerInMobile?: boolean, hasBannerInDesktop?: boolean, href: string, heightInDesktop?: string, heightInMobile?: string }) {
  return (
    <Stack component={Link} href={href}>
      {
        hasBannerInDesktop && (
          <Box
            component={"img"}
            src={"/images/tafrih-list.png"}
            sx={{ width: "100%" }}
            className={`reveal px-4! sm:px-0! hidden! md:inline! h-[${heightInDesktop}]! rounded-3xl!`}
          />
        )
      }
      {
        hasBannerInMobile && (
          <Box
            component={"img"}
            src={"/images/tafrih-list-mobile.png"}
            sx={{ width: "100%" }}
            className={`reveal md:hidden! h-[${heightInMobile}]! rounded-2xl!`}
          />
        )
      }
    </Stack>
  );
}