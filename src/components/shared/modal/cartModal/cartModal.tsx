import React from "react";
import BaseModal from "../BaseModal";
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import FormProvider from "@/providers/FormProvider";
import { ModalProps } from "@/interface/@types";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function CartModal({ open, setOpen, items }: ModalProps) {
  return (
    <>
      <BaseModal
        open={open}
        setOpen={setOpen}
        title={" آیتم های زیر به سبد خرید اضافه شد."}
        closeText="برگشت"
        fullWidth={true}
        showIcon={false}
        maxWidth={"sm"}
      >
        <Stack className="items-center gap-5!">
          <img src={"/images/modals/cartmodal.png"} className="w-85 h-62" />
          {items?.map((item, index) => (
            <Grid
              key={index}
              className="flex! flex-row! items-center! border-1 border-slate-200 rounded-xl w-full justify-between! p-4!"
              container
              spacing={1}
            >
              <Grid size={9} className="flex! flex-col! gap-2!">
                <Typography className="text-xl! font-semibold!">{item?.name}</Typography>
                <Typography className="text-base! font-medium!">{item?.sanse} </Typography>
                <Stack className="flex-row! gap-1! items-center">
                  <Typography className="text-sm! text-slate-500">تاریخ استفاده:</Typography>
                  <Typography className="text-sm!"> {item?.date}</Typography>
                </Stack>
              </Grid>

              <Divider orientation="vertical" flexItem/>

              <Grid size={2} className="items-center! text-lg! font-semibold!"> {item?.count} عدد </Grid>
            </Grid>
          ))}

          <Stack className="flex! flex-row-reverse! gap-5! w-full!">
            <Button
              variant="outlined"
              className="w-full!"
              size="medium"
              startIcon={<PhoneInTalkIcon color="action" />}
            >
              <Typography className="text-black text-nowrap">
                اضافه کردن سایر تفریحات{" "}
              </Typography>
            </Button>
            <Button variant="contained" className="w-full!" size="medium">
              <Typography className="text-white"> تایید و ادامه</Typography>
            </Button>
          </Stack>
        </Stack>
      </BaseModal>
    </>
  );
}
