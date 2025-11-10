import { Tab, Tabs } from "@mui/material";
import React from "react";
import MainTabs from "../mainTabs";

const tabItems = [
    {
        label : "تورها"
    },
     {
        label :"تفریحات"
    },
     {
        label : "هتل‌ها و اقامتگاه‌ها"
    },
]

export default function MobileHeaderTabs() {
  return (
    <>
    <MainTabs data={tabItems} border={false} />
    </>
  );
}
