"use client";

import React, { JSX, useEffect, useState } from "react";
import { Tabs, Tab } from "@mui/material";
import BedroomChildOutlinedIcon from "@mui/icons-material/BedroomChildOutlined";
import SportsRugbyOutlinedIcon from "@mui/icons-material/SportsRugbyOutlined";
import BackpackOutlinedIcon from "@mui/icons-material/BackpackOutlined";
import { usePathname, useRouter } from "next/navigation";

type TabItem = { label: string; icon: JSX.Element; path: string };

export default function MobileHeaderTabs() {
  const router = useRouter();
  const pathname = usePathname();
  const [value, setValue] = useState<string>("");

  const tabItems: TabItem[] = [
    { label: "تورها", icon: <BackpackOutlinedIcon />, path: "/fa/tour" },
    { label: "تفریحات", icon: <SportsRugbyOutlinedIcon />, path: "/fa/entertainment" },
    { label: "هتل‌ها و اقامتگاه‌ها", icon: <BedroomChildOutlinedIcon />, path: "/fa/hotel" },
  ];

  useEffect(() => {
    const current = tabItems.find((tab) => pathname.startsWith(tab.path));
    if (current) setValue(current.path);
  }, [pathname]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    router.push(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant="fullWidth"
      sx={{
        borderBottom: "1px solid #E1E6F0",
        "& .MuiTab-root": {
          color: "text.secondary", 
          fontSize: "12px",
          fontWeight: 600,
          textWrap: "nowrap",
          flexDirection: "column",
          gap: "4px",
          transition: "color 0.2s ease",
          "& svg": {
            color: "text.secondary", 
            transition: "color 0.2s ease",
          },
          "&.Mui-selected": {
            color: "black", 
         
            "& svg": {
              color: "black", 
            },
          },
        },
        "& .MuiTabs-indicator": {
          backgroundColor: "black",
        },
      }}
      className="md:hidden! flex! mb-2!"
    >
      {tabItems.map((tab) => (
        <Tab key={tab.path} value={tab.path} icon={tab.icon} label={tab.label} />
      ))}
    </Tabs>
  );
}
