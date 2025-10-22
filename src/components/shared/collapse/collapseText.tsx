"use client";

import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

type CollapseItemProps = {
  title: string;
  description: string;
};

export default function CollapseItem({
  title,
  description,
}: CollapseItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="reveal">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-6 text-right"
      >
        <span className={`${open ? "text-black" : "text-gray-800"} font-medium`}>{title}</span>
        {open ? (
          <KeyboardArrowUpIcon className="text-white! rounded-full! border-1! border-slate-400! bg-slate-400! ml-3!" />
        ) : (
          <KeyboardArrowDownIcon className="text-gray-500 rounded-full! border-2! border-slate-400! ml-3!" />
        )}
      </button>

      <div
        className={`overflow-hidden transition-all duration-[1s] ease-in-out ${open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="pb-4 pr-2 text-gray-400 leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
}
