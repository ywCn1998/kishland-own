"use client";

import React, { useState } from "react";
import BaseModal from "../BaseModal";
import { ModalProps } from "@/interface/@types";
import { Box, Button, Stack, Typography } from "@mui/material";
import FormProvider from "@/providers/FormProvider";
import useSubmitPhoneLogin from "./hooks/useSubmitPhoneLogin";
import RHFTextInput from "../../form/RHFTextInput";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import { CategorySlider } from "../../_components";
import ModalCategorySlider from "../../_components/Sliders/modalCategorySlider";

export default function LoginPhoneModal({
  open,
  setOpen,
  categorySlide = false,
  title,
  image,
  description,
}: ModalProps) {
  const { OnSubmitCode , OnSubmitPhone , methods } = useSubmitPhoneLogin();
  const [code, setCode] = useState<boolean>(false);
  const error = true;
  const handleSubmitPhone = () => {
    setCode(!code);
  };
  const handleSubmitCode = () => {
    if (!error) {
      setOpen(!open);
    }
  };

  return (
    <>
      {code === false ? (
        <BaseModal
          open={open}
          maxWidth="sm"
          setOpen={setOpen}
          title={title ? title : " ورود/ ثبت نام "}
          closeText="برگشت"
          fullWidth={true}
          showIcon={false}
        >
          <Stack className="items-center gap-5!">
            {image ? (
              <img src={image} className="w-40 h-40" />
            ) : (
              <img src={"/images/modals/kishlogo.png"} className="w-50 h-18" />
            )}

            <Stack className="flex! flex-row! items-center! ">
              <Typography className="text-4xl! font-[750]! ">
                وارد حساب خود شوید
              </Typography>
            </Stack>
            <Typography className="text-lg! text-slate-500!">
              {" "}
              {description
                ? description
                : "برای انتخاب بهترین تصمیم در کنار شما هستیم"}
            </Typography>
            <FormProvider
              methods={methods}
              onSubmit={OnSubmitPhone}
              className="flex! flex-col! gap-6! w-full!"
            >
              <RHFTextInput
                name="phone"
                placeholder="شماره همراه خود را وارد کنید "
                startIcon={<PhoneAndroidOutlinedIcon />}
                fullWidth={true}
                sx={{
                  width: "100%",
                }}
              />
            </FormProvider>
            <Button
              variant="contained"
              className="w-full! py-6!"
              size="medium"
              onClick={() => OnSubmitPhone()}
            >
              <Typography className="text-white">دریافت کد </Typography>
            </Button>
            {categorySlide && <CategorySlider />}
          </Stack>
        </BaseModal>
      ) : (
        <BaseModal
          open={open}
          setOpen={setOpen}
          title={
            error ? (
              <Typography className="text-red text-lg! font-medium!">
                {" "}
                کد وارد شده صحیح نمی باشد
              </Typography>
            ) : (
              " دریافت کد"
            )
          }
          closeText="تغییر شماره"
          onClose={() => setCode(!code)}
          fullWidth={false}
          showIcon={false}
        >
          <Stack className="gap-5!">
            <Box className="flex! justify-between! items-center!">
              <Stack>
                <Typography className="text-xl!">
                  {" "}
                  کد ارسال شده به 091855555555{" "}
                </Typography>
              </Stack>
              <Stack>
                <Typography className="text-slate-500">
                  {error ? "ارسال مجدد" : "00:30"}
                </Typography>
              </Stack>
            </Box>
            <FormProvider
              methods={methods}
              onSubmit={OnSubmitCode}
              className="flex! flex-col! gap-6!"
            >
              <RHFTextInput
                name="phone"
                placeholder="شماره همراه خود را وارد کنید "
                startIcon={<PhoneAndroidOutlinedIcon />}
              />
            </FormProvider>
            <Button
              variant="contained"
              className="w-full! py-6!"
              size="medium"
              onClick={() => handleSubmitCode()}
            >
              <Typography className="text-white"> ثبت و بررسی </Typography>
            </Button>
            <Stack className="max-w-20!">{categorySlide && <ModalCategorySlider />}</Stack>
          </Stack>
        </BaseModal>
      )}
    </>
  );
}
