"use client"
import FormProvider from "@/providers/FormProvider";
import { Stack, Box, Typography, Button } from "@mui/material";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import Image from "next/image";
import { useEffect, useState } from "react";
import useSubmitPhoneLogin from "../../../../hooks/login/useSubmitPhoneLogin";
import useSubmitOtpLogin from "../../../../hooks/login/useSubmitOtpLogin";
import RHFTextInput from "@/components/shared/form/RHFTextInput";


export default function GetPhone({ setPhone, setStep }: { setPhone: (val: string) => void, setStep: (val: any) => void }) {
    const { OnSubmit: OnSubmitPhone, methods: phoneMethods } =
        useSubmitPhoneLogin({
            onSuccess: (phone: string) => {
                setPhone(phone);
                setStep("otp");
            },
        });


    return (
        <Stack className="w-full! min-h-[100dvh]! px-4! pb-4! pt-8! mx-auto!" maxWidth={'sm'}>
            <Stack>
                <Box className="flex! justify-center! items-center! w-full!">
                    <Image src={"/images/headerlogo.png"} alt="headerlogo" width={150} height={40} />
                </Box>

                <img src={"/images/auth/auth-hero.png"} alt="headerlogo" className="w-full! h-60! mt-12! px-4!" />
            </Stack>

            <Stack spacing={1.3} className="justify-end! h-full! mt-10!">
                <Typography className="font-semibold! text-xl!">وارد حساب خود شوید</Typography>
                <Typography color="text.secondary" className="text-base!">برای انتخاب بهترین تصمیم در کنار شما هستیم</Typography>
                <FormProvider methods={phoneMethods} onSubmit={OnSubmitPhone}>
                    <Stack spacing={1.3}>
                        <RHFTextInput
                            name="phone"
                            placeholder="شماره همراه خود را وارد کنید "
                            startIcon={<PhoneAndroidOutlinedIcon />}
                        />
                        <Button
                            variant="contained"
                            className="w-full! py-5!"
                            type="submit"
                        >
                            <Typography className="text-white text-lg!">دریافت کد </Typography>
                        </Button>
                    </Stack>
                </FormProvider>
            </Stack>

        </Stack>
    )
}