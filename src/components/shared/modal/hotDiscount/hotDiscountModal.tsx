import React from "react";
import BaseModal from "../BaseModal";
import { ModalProps } from "@/interface/@types";
import { Button, Stack, Typography } from "@mui/material";

export default function HotDiscountModal({ open, setOpen }: ModalProps) {
  return (
    <>
      <BaseModal
        open={open}
        setOpen={setOpen}
        title={"تخفیفات داغ🔥"}
        bgImage={'/images/modals/bgmodal.png'}
        closeText="بستن"
        showIcon={false}
        fullWidth={false}
      >
        <Stack className="items-center gap-5!">
          <img src={"/images/modals/hotdis.png"} className="w-100 h-100"/>
          <Stack className="flex! flex-row! items-center! ">
            <Typography className="text-4xl! font-[750]! ">تخفیفات</Typography>
            <Typography className="text-4xl! font-[750]! text-red-400">داغ </Typography>
            <Typography className="text-4xl! font-[750]! ">- اخبار در گوشی </Typography>
          </Stack>
          <Typography className="text-lg! text-slate-500!">میخواهی زودتر از بقیه از تخفیفات باخبر بشی</Typography>
          <Stack className="flex! flex-row! w-full! gap-5">
            <Button variant="outlined" className="w-full!" onClick={()=>setOpen(!open)}>
              <Typography className="text-black" >فعلا نه</Typography>
            </Button>
            <Button variant="contained" className="w-full!">
              <Typography className="text-white">اره میخوامم</Typography>
            </Button>
          </Stack>
        </Stack>
      </BaseModal>
    </>
  );
}
