"use client";

import { ReactNode, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

type CollapseItemProps = {
  title: string;
  description: string;
  iconOpen?: ReactNode;
  iconClosed?: ReactNode;
  costumIcon?: boolean;
};

export default function CollapseItem({
  title,
  description,
  costumIcon = false,
  iconOpen = <AddIcon className="md:hidden! text-slate-400!" />,
  iconClosed = <RemoveIcon className="md:hidden! text-slate-400!" />,
}: CollapseItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="reveal">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-6 text-right"
      >
        <span
          className={`${
            open ? "text-black" : "text-gray-800"
          }  md:font-medium text-sm! md:text-base!`}
        >
          {title}
        </span>
        {open ? (
          <>
            {costumIcon ? (
              iconClosed
            ) : (
              <KeyboardArrowUpIcon className=" text-white rounded-full border border-slate-400 bg-slate-400 ml-3" />
            )}
          </>
        ) : (
          <>
            {costumIcon ? (
              iconOpen
            ) : (
              <KeyboardArrowDownIcon className=" text-gray-500 rounded-full border-2 border-slate-400 ml-3" />
            )}
          </>
        )}
      </button>

      <div
        className={`overflow-hidden transition-all duration-[1s] ease-in-out ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-4 pr-2 text-gray-400 leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
}
