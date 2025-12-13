"use client";

import { Stack, Button } from "@mui/material";
import { useState } from "react";

const tabs = [
  { id: 0, label: "تفریحات" },
  { id: 1, label: "تور ها" },
  { id: 2, label: "هتل ها" },
  { id: 3, label: "شرایط اقساط" },
  { id: 4, label: "سوالات عمومی" },
];

export default function CategoryTabs({
  value,
  onChange,
}: {
  value?: number;
  onChange?: (newValue: number) => void;
}) {
  const [activeTab, setActiveTab] = useState(value ?? 0);

  const handleTabClick = (tabId: number) => {
    const newValue = tabId;
    setActiveTab(newValue);
    onChange?.(newValue);
  };

  const currentValue = value !== undefined ? value : activeTab;

  return (
    <Stack
      direction="row"
      spacing={2}
      className="overflow-x-auto! md:justify-center! md:items-center! gap-0! w-full! px-4!"
      sx={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {tabs.map((tab) => {
        const isActive = currentValue === tab.id;
        return (
          <Button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`rounded-xl! w-full! text-base! md:text-lg! whitespace-nowrap! transition-all! ${isActive
                ? "bg-[#088DEF]! text-white!"
                : "bg-[#F5F7FA]! text-black!"
              }`}
            sx={{
              minWidth: "fit-content",
              textTransform: "none",
              "&:hover": {
                bgcolor: isActive ? "#088DEF" : "white",
              },
            }}
          >
            {tab.label}
          </Button>
        );
      })}
    </Stack>
  );
}

