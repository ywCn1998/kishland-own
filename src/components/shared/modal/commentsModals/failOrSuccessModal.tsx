"use client";

import React from "react";
import BaseModal from "../BaseModal";
import { ModalProps } from "@/interface/@types";
import { Button, Stack, Typography } from "@mui/material";
import FormProvider from "@/providers/FormProvider";
import RHFTextInput from "../../form/RHFTextInput";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
export default function SuccessModal({
  open,
  setOpen,
  success = false,
}: ModalProps) {
  return (
    <>
      {success ? (
        <BaseModal
          open={open}
          setOpen={setOpen}
          title={" ثبت موفق "}
          closeText="برگشت"
          showIcon={false}
           fullWidth={true}
          maxWidth="sm"
        >
          <Stack className="items-center gap-5!">
            <img
              src={"/images/modals/successmodal.png"}
              className="w-65 h-66"
            />
            <Stack className="flex! flex-row! items-center! ">
              <Typography className="text-4xl! font-[750]! ">
                نظر شما با{" "}
              </Typography>
              <Typography className="text-4xl! font-[750]! ">موفقیت</Typography>
              <Typography className="text-4xl! font-[750]! ">ثبت شد</Typography>
            </Stack>
            <Typography className="text-lg! text-slate-500!">
              بعد از بررسی و تایید مدیریت به صورت عمومی نمایش داده خواهد شد{" "}
            </Typography>

            <Button
              variant="contained"
              className="w-full! py-6!"
              onClick={() => setOpen(!open)}
            >
              <Typography className="text-white"> برگشت </Typography>
            </Button>
          </Stack>
        </BaseModal>
      ) : (
        <BaseModal
          open={open}
          setOpen={setOpen}
          title={" ثبت ناموفق "}
          closeText="برگشت"
          showIcon={false}
          fullWidth={true}
          maxWidth="sm"
        >
          <Stack className="items-center gap-5!">
            <img src={"/images/modals/failmodal.png"} className="w-65 h-66" />
            <Stack className="flex! flex-row! items-center! ">
              <Typography className="text-4xl! font-[750]! text-red ">
                مشکلی
              </Typography>
              <Typography className="text-4xl! font-[750]! ">
                در ثبت نظر وجود داره
              </Typography>
            </Stack>
            <Typography className="text-lg! text-slate-500!">
              لطفا مجدد تلاش کنید یا با پشتیبانی تماس بگیرید{" "}
            </Typography>
            <Stack className="flex! flex-row! gap-5! w-full!">
              <Button
                variant="outlined"
                className="w-full!"
                size="medium"
                startIcon={<PhoneInTalkIcon color="action" />}
              >
                <Typography className="text-black">تماس با پشتیبانی</Typography>
              </Button>
              <Button variant="contained" className="w-full!" size="medium">
                <Typography className="text-white">   تلاش دوباره</Typography>
              </Button>
            </Stack>
          </Stack>
        </BaseModal>
      )}
    </>
  );
}
