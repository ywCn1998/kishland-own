import React from "react";
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import FormProvider from "@/providers/FormProvider";
import { ModalProps } from "@/interface/@types";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import TelegramIcon from "@mui/icons-material/Telegram";
import BaseModal from "./BaseModal";

export default function LogOutModal({ open, setOpen, items }: ModalProps) {
  return (
    <>
      <BaseModal
        open={open}
        setOpen={setOpen}
        title={" خروج از حساب کاربری"}
        closeText="برگشت"
        fullWidth={true}
        showIcon={false}
        maxWidth={"sm"}
      >
        <Stack className="items-center gap-5!">
          <Stack className="flex! flex-row! items-center! ">
            <Typography className="text-3xl! font-[650]! ">
              خروج از حساب کاربری{" "}
            </Typography>
          </Stack>
          <Typography className="text-base! text-slate-500!">
          آیا مایل به خروج از حساب کاربری خود هستید؟
          </Typography>

           <Stack className="flex! flex-row-reverse! gap-5! w-full!">
              <Button
                variant="outlined"
                className="w-full! rounded-lg!"
                size="large"
              >
                <Typography className="text-slate-500" >انصراف</Typography>
              </Button>
              <Button variant="contained" className="w-full! py-4!" size="large">
                <Typography className="text-white">    خروج از حساب کاربری</Typography>
              </Button>
            </Stack>
        </Stack>
      </BaseModal>
    </>
  );
}
