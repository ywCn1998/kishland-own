"use client"

import React, { useState } from "react";
import BaseModal from "../BaseModal";
import { Button, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function HotDiscountModal() {
  const [open, setOpen] = useState<boolean>(true)
  return (
    <>
      <BaseModal
        p={3}
        open={open}
        setOpen={setOpen}
        title={"تخفیفات داغ🔥"}
        bgImage={'/images/modals/bgmodal.png'}
        closeText="بستن"
        showIcon={false}
        fullWidth={false}
      >
        <Stack className="items-center gap-5!">
          <img src={"/images/modals/hotdis.png"} className="w-full! h-[200px]! md:h-100!" />
          <Stack className="flex! flex-row! items-center! ">
            <Typography className="text-nowrap! text-xl! md:text-4xl! font-[750]! ">تخفیفات</Typography>
            <Typography className="text-nowrap! text-xl! md:text-4xl! font-[750]! text-red-400">داغ </Typography>
            <Typography className="text-nowrap! text-xl! md:text-4xl! font-[750]! ">- اخبار در گوشی </Typography>
          </Stack>
          <Typography className="text-sm! md:text-lg! text-slate-500! text-center!">میخواهی زودتر از بقیه از تخفیفات باخبر بشی</Typography>
          <Stack className="flex! flex-row! w-full! gap-5">
            <Button variant="outlined" className="w-full! text-nowrap!" onClick={() => setOpen(!open)}>
              <Typography className="text-black text-sm! md:text-base!" >فعلا نه</Typography>
            </Button>
            <Button variant="contained" className="w-full! text-nowrap!" >
              <Typography className="text-white text-sm! md:text-base!">اره میخوامم</Typography>
            </Button>
          </Stack>
        </Stack>
      </BaseModal>
    </>
  );
}
