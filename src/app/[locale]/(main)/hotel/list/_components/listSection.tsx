"use client";
import NormalListCard from "@/components/shared/cards/hotel/normalListCard";
import SmallListCard from "@/components/shared/cards/hotel/smallListCard";
import MainTabs from "@/components/shared/mainTabs";
import SortIcon from "@mui/icons-material/Sort";
import { Box, Grid, Stack, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import Link from "next/link";
import ReusableSwiper from "@/components/shared/reusableSwiper";
import MainBanner from "@/components/shared/ui/banner/mainBanner";
import ChanceMobile from "@/components/shared/ui/banner/chanceMobile";

const tabsData = [
  {
    label: "مرتب سازی",
    icon: <SortIcon className="ml-1!" fontSize="small" />,
    disabled: true,
  },
  {
    label: "بلیط هواپیما",
  },
  {
    label: "بلیط قطار",
  },
  {
    label: "بلیط اتوبوس",
  },
  {
    label: "پیشنهادی کیش لندیار",
  },
  {
    label: "چارتری",
  },
];

export default function ListSection() {
  const [changeCardUi, setChangeCardUi] = useState(false);
  const theme = useTheme()
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"), { noSsr: true })
  const items = [...Array(3)];
  return (
    <>
      <Stack className="hidden! md:block!">
        <MainTabs
          data={tabsData}
          changeCardUi={true}
          setChangeCardUi={setChangeCardUi}
        />
      </Stack>
      {isMdUp ? (
        <Grid container spacing={3} sx={{ backgroundColor: "secondary.50", p: 2 }} className="rounded-2xl!" > {items.map((_, i) => (<Grid key={i} size={4}>
          <SmallListCard />
        </Grid>
        ))}
        </Grid>
      ) : (
        <Box sx={{ pb: 4, display: "flex", flexDirection: "row", borderRadius: 2, marginTop: 2, }} className="reveal-down  md:hidden! pr-4!" >
          <ReusableSwiper dots={false} slidePerViewXs={1.4} slidePerviewLg={4} spaceBetween={15} pagination >
            {items.map((_, i) => (<SmallListCard key={i} />))}
          </ReusableSwiper>
        </Box>)}

      <Stack px={2}>
        <Grid container mt={{ xs: 0, md: 3 }} spacing={3}>
          {[...Array(changeCardUi ? 3 : 6)].map((_, index) => (
            <Grid key={index} size={changeCardUi ? 12 : { xs: 12, md: 4 }}>
              <NormalListCard isWide={changeCardUi} />
            </Grid>
          ))}
        </Grid>ّ

        <MainBanner heightInDesktop="280px" href="/fa/hotel/list" />

        <Grid container mt={3} spacing={3}>
          {[...Array(changeCardUi ? 3 : 6)].map((_, index) => (
            <Grid key={index} size={changeCardUi ? 12 : { xs: 12, md: 4 }}>
              <NormalListCard isWide={changeCardUi} />
            </Grid>
          ))}
        </Grid>
        <Link href={"/fa/tour/list"}>
          <img
            src={"/images/new/tour-ba-ahle-del.png"}
            className="mt-6! h-[280px]! w-full! hidden! md:inline"
          />
          {/* <img
            src={"/images/new/tour-ba-ahle-del.png"}
            className="mt-6! h-[280px]! w-full! md:hidden!"
          /> */}


          <Stack className=" md:hidden! mt-4" >
            <ChanceMobile />
          </Stack>
        </Link>
        <Grid container mt={2} spacing={3}>
          {[...Array(changeCardUi ? 3 : 6)].map((_, index) => (
            <Grid key={index} size={changeCardUi ? 12 : { xs: 12, md: 4 }}>
              <NormalListCard isWide={changeCardUi} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </>
  );
}
