// components/sections/BestEntertainmentSlide.tsx
"use client";

import React from "react";
import { Stack } from "@mui/material";
import ReusableSwiper from "@/components/shared/reusableSwiper";
import BestEntertainmentCard from "../../../../../../components/shared/cards/entertainment/bestEntertainmentCard";

const items = Array.from({ length: 10 }, () => ({
  title: "آیس رینک",
  iconSrc: "/images/shose.png",
}));

export default function   BestEntertainmentSlider() {
  const [activeIdx, setActiveIdx] = React.useState(0);

  return (
    <ReusableSwiper
      dots={false}
      slidePerviewLg={9}
      spaceBetween={20}
      pagination={true}
    >
      {items.map((it, i) => (
        <Stack key={`ent-${i}`} className="pt-3! pb-5">
          <BestEntertainmentCard
            title={it.title}
            iconSrc={it.iconSrc}
            active={activeIdx === i}
            onClick={() => setActiveIdx(i)}
          />
        </Stack>
      ))}
    </ReusableSwiper>
    
  );
}
