"use client";

import React, { useState, useEffect } from "react";
import BaseModal from "../../../../../../components/shared/modal/BaseModal";
import { ModalProps } from "@/interface/@types";
import { Button, Stack, Typography } from "@mui/material";
import FormProvider from "@/providers/FormProvider";
import useSubmitPhoneLogin from "../../hooks/login/useSubmitPhoneLogin";
import useSubmitOtpLogin from "../../hooks/login/useSubmitOtpLogin";
import RHFTextInput from "../../../../../../components/shared/form/RHFTextInput";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import { CategorySlider } from "../../../../../../components/shared/ui";

type LoginStep = "phone" | "otp";

export default function LoginPhoneModal({
  open,
  setOpen,
  categorySlide = false,
  title,
  image,
  description,
}: ModalProps) {
  const [step, setStep] = useState<LoginStep>("phone");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const { OnSubmit: OnSubmitPhone, methods: phoneMethods } =
    useSubmitPhoneLogin({
      onSuccess: (phone: string) => {
        setPhoneNumber(phone);
        setStep("otp");
      },
    });

  const { OnSubmit: OnSubmitOtp, methods: otpMethods } = useSubmitOtpLogin({
    phone: phoneNumber,
    onSuccess: () => {
      setOpen(false);
      // Reset state when modal closes
      setStep("phone");
      setPhoneNumber("");
    },
  });

  // Reset to phone step when modal closes
  useEffect(() => {
    if (!open) {
      setStep("phone");
      setPhoneNumber("");
    }
  }, [open]);

  const handleBack = () => {
    if (step === "otp") {
      setStep("phone");
    } else {
      setOpen(false);
    }
  };

  return (
    <BaseModal
      open={open}
      setOpen={setOpen}
      title={title ? title : " ورود/ ثبت نام "}
      closeText={step === "otp" ? "برگشت" : "بستن"}
      fullWidth={false}
      showIcon={false}
      onClose={handleBack}
    >
      <Stack className="items-center gap-5!">
        {image ? (
          <img src={image} className="w-40 h-40" />
        ) : (
          <img src={"/images/modals/kishlogo.png"} className="w-50 h-18" />
        )}

        {step === "phone" ? (
          <>
            <Stack className="flex! flex-row! items-center! ">
              <Typography className="text-4xl! font-[750]! ">
                وارد حساب خود شوید
              </Typography>
            </Stack>
            <Typography className="text-lg! text-slate-500!">
              {description
                ? description
                : "برای انتخاب بهترین تصمیم در کنار شما هستیم"}
            </Typography>
            <FormProvider
              methods={phoneMethods}
              onSubmit={OnSubmitPhone}
              className="flex! flex-col! gap-6! w-full!"
            >
              <RHFTextInput
                name="phone"
                placeholder="شماره همراه خود را وارد کنید "
                startIcon={<PhoneAndroidOutlinedIcon />}
              />
              <Button
                variant="contained"
                className="w-full! py-6!"
                size="medium"
                type="submit"
              >
                <Typography className="text-white">دریافت کد </Typography>
              </Button>
            </FormProvider>
            {categorySlide && <CategorySlider />}
          </>
        ) : (
          <>
            <Stack className="flex! flex-row! items-center! ">
              <Typography className="text-4xl! font-[750]! ">
                وارد کردن کد تایید
              </Typography>
            </Stack>
            <Typography className="text-lg! text-slate-500!">
              کد تایید به شماره {phoneNumber} ارسال شد
            </Typography>
            <FormProvider
              methods={otpMethods}
              onSubmit={OnSubmitOtp}
              className="flex! flex-col! gap-6! w-full!"
            >
              <RHFTextInput
                name="otp"
                placeholder="کد تایید را وارد کنید"
                type="number"
              />
              <Button
                variant="contained"
                className="w-full! py-6!"
                size="medium"
                type="submit"
              >
                <Typography className="text-white">تایید و ورود</Typography>
              </Button>
            </FormProvider>
          </>
        )}
      </Stack>
    </BaseModal>
  );
}
