import React from "react";
import BaseModal from "../BaseModal";
import { Box, Button, Stack, Typography } from "@mui/material";
import FormProvider from "@/providers/FormProvider";
import { ModalProps } from "@/interface/@types";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function ShareModal({ open, setOpen }: ModalProps) {
  return (
    <>
      <BaseModal
        open={open}
        setOpen={setOpen}
        title={" اشتراک گذاری"}
        closeText="برگشت"
        fullWidth={true}
        showIcon={false}
        maxWidth={"sm"}
        p={2.5}
      >
        <Stack className="items-center gap-5! ">
          <img src={"/images/modals/sharemodal.png"} className="w-full! md:w-90 h-44! md:h-62" />

          <Stack className="flex! flex-row! items-center! ">
            <Typography className="text-2xl! md:text-3xl! lg:text-4xl! font-[750]! ">
              بفرست واسه اونی که نیاز داره{" "}
            </Typography>
          </Stack>
          <Typography className="text-base! md:text-lg! text-slate-500!">
            شاید همین الان یکی از دوستات بهش نیاز داشته باشه{" "}
          </Typography>
          <Stack className="flex! flex-row! gap-3! md:gap-5! w-full!">
            <Button
              variant="outlined"
              className="w-full!"
              size="medium"
              startIcon={<PhoneInTalkIcon color="action" />}
            >
              <Typography className="text-black text-xs! sm:text-sm! md:text-base!">کپی کردن لینک</Typography>
            </Button>
            <Button variant="contained" className="w-full!" size="medium">
              <Typography className="text-white text-xs! sm:text-sm! md:text-base!">ارسال برای ...</Typography>
            </Button>
          </Stack>
          
        </Stack>
        <Box
            display={"flex"}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            width={"100%"}
            p={3}
            bgcolor="#11111111"
            mt={3}
          >
            <Stack>
              <Typography className="text-slate-500">اشتراک در :</Typography>
            </Stack>
            <Stack direction="row" spacing={{xs:1, sm:2}}>
              <TelegramIcon color="action"/>
              <TelegramIcon color="action"/>
              <TelegramIcon color="action"/>
              <TelegramIcon color="action"/>
            </Stack>
          </Box>
      </BaseModal>
    </>
  );
}
