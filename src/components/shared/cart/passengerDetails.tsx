import CustomAccordion from "@/components/shared/collapse/collapse";
import { Stack, Typography } from "@mui/material";
import React from "react";

interface passProps {
  name: string;
  nation_code: string;
  birth: string;
}
const passDetails = [
  {
    name: "علیرضا رودی",
    nation_code: "09584754513",
    birth: "1379/04/20",
  },
  {
    name: "علیرضا رودی",
    nation_code: "09584754513",
    birth: "1379/04/20",
  },
];

const PassengerCards: React.FC = () => {
    return (
      <>
        {passDetails.map((pass, index) => (
          <Stack
            key={index}
            className="flex! flex-col! gap-6! p-4! border-1! border-slate-200! rounded-xl!"
          >
            <Stack className="flex! flex-row! items-center! justify-between!">
              <Typography className="text-sm! text-slate-500!">نام و نام خانوادگی</Typography>
              <Typography className="text-sm! text-slate-600!">{pass.name}</Typography>
            </Stack>
  
            <Stack className="flex! flex-row! items-center! justify-between!">
              <Typography className="text-sm! text-slate-500!">کد ملی</Typography>
              <Typography className="text-sm! text-slate-600!">{pass.nation_code}</Typography>
            </Stack>
  
            <Stack className="flex! flex-row! items-center! justify-between!">
              <Typography className="text-sm! text-slate-500!">تاریخ تولد</Typography>
              <Typography className="text-sm! text-slate-600!">{pass.birth}</Typography>
            </Stack>
          </Stack>
        ))}
      </>
    );
  };

export default function PassengerDetails() {
  return (
    <Stack className="border-1! border-slate-200! rounded-2xl! px-4 pt-5">
      <CustomAccordion
        title={" مشخصات مسافران "}
        titleClass="text-xl!"
        defaultExpanded={true}
      >
        <Stack className="mt-4! flex! flex-col! gap-4!">
          <PassengerCards/>
        </Stack>
      </CustomAccordion>
    </Stack>
  );
}
