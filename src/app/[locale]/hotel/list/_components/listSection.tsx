"use client";
import { CommonQuestions } from "@/components/shared/_components";
import Question from "@/components/shared/_components/commonQuestions/_components/question";
import NormalListCard from "@/components/shared/cards/hotel/normalListCard";
import SmallListCard from "@/components/shared/cards/hotel/smallListCard";
import MainTabs from "@/components/shared/mainTabs";
import SortIcon from "@mui/icons-material/Sort";
import { Grid } from "@mui/material";
import HotelCategory from "./hotelCategory";
import { useState } from "react";
import { WideListCard } from "@/components/shared/cards/hotel/wideListCard";
import Link from "next/link";

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

  return (
    <>
      <MainTabs
        data={tabsData}
        changeCardUi={true}
        setChangeCardUi={setChangeCardUi}
      />
      <Grid
        container
        spacing={3}
        sx={{ backgroundColor: "secondary.50", p: 2 }}
        className="rounded-2xl!"
      >
        {[...Array(3)].map((_, index) => (
          <Grid key={index} size={4}>
            <SmallListCard />
          </Grid>
        ))}
      </Grid>
      <Grid container mt={3} spacing={3}>
        {[...Array(changeCardUi ? 3 : 6)].map((_, index) => (
          <Grid key={index} size={changeCardUi ? 12 : 4}>
            <NormalListCard isWide={changeCardUi} />
          </Grid>
        ))}
      </Grid>
      <Link href={"/fa/hotel/list"}>
        <img
          src={"/images/tafrih-banner.png"}
          className="mt-6! h-[280px]! w-full!"
        />
      </Link>

      <Grid container mt={3} spacing={3}>
        {[...Array(changeCardUi ? 3 : 6)].map((_, index) => (
          <Grid key={index} size={changeCardUi ? 12 : 4}>
            <NormalListCard isWide={changeCardUi} />
          </Grid>
        ))}
      </Grid>
      <Link href={"/fa/tour/list"}>
        <img
          src={"/images/new/tour-ba-ahle-del.png"}
          className="mt-6! h-[280px]! w-full!"
        />
      </Link>
      <Grid container mt={3} spacing={3}>
        {[...Array(changeCardUi ? 3 : 6)].map((_, index) => (
          <Grid key={index} size={changeCardUi ? 12 : 4}>
            <NormalListCard isWide={changeCardUi} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
