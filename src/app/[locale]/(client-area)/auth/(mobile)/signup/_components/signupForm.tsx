"use client"
import FormProvider from "@/providers/FormProvider";
import { Stack, Box, Typography, Button } from "@mui/material";
import useSubmitOtpLogin from "../../../hooks/login/useSubmitOtpLogin";
import { useRouter } from "next/navigation";
import EastIcon from '@mui/icons-material/East';
import RHFOTPInput from "@/components/shared/form/RHFOTPInput";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
// import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { UserAuthAPI } from "@/services/users/auth.services";
import useSubmitPhoneLogin from "../../../hooks/login/useSubmitPhoneLogin";
import RHFTextInput from "@/components/shared/form/RHFTextInput";
import RHF2MonthRangePicker from "@/components/shared/form/RHFDatePicker";

export default function SignupForm() {
    const router = useRouter();

    const { OnSubmit, methods: Methods } = useSubmitPhoneLogin();

    return (
        <Stack className="w-full! min-h-[100dvh]! px-4! pb-4! pt-5!" maxWidth={'sm'}>
            <Stack>
                <Box
                    className="flex! items-center! w-fit! gap-2! p-0!"
                    component={Button}
                    onClick={() => router.back()}
                    variant="text"
                >
                    <EastIcon sx={{ color: "text.secondary" }} />
                    <Typography className="font-medium! text-black!">بازگشت</Typography>
                </Box>
            </Stack>

            <Stack spacing={1.3} className="justify-end! h-full! mt-5!">
                <Typography className="font-semibold! text-xl!">به کیش لندیار خوش آمدید.</Typography>
                <Typography color="text.secondary" className="text-base!">
                    برای ادامه فرایند های رزرو تکمیل اطلاعات زیر الزامی میباشد .
                </Typography>

                <FormProvider methods={Methods} onSubmit={OnSubmit}>
                    <Stack spacing={1.5}>
                        <Stack className="w-full!">
                            <RHFTextInput
                                name="phone"
                                placeholder="نام خود را وارد کنید"
                            // startIcon={<PhoneAndroidOutlinedIcon />}
                            />
                            <RHFTextInput
                                name="phne"
                                placeholder="نام خانوادگی خود را وارد کنید"
                            // startIcon={<PhoneAndroidOutlinedIcon />}
                            />
                            <RHFTextInput
                                name="pone"
                                placeholder="کد ملی"
                            // startIcon={<PhoneAndroidOutlinedIcon />}
                            />
                            <RHF2MonthRangePicker
                                startName="one"
                                endName="ds"
                            // startIcon={<PhoneAndroidOutlinedIcon />}
                            />
                        </Stack>

                        <Stack spacing={1}>
                            <Button variant="contained" className="w-full! py-5!" type="submit">
                                <Typography className="text-white text-lg!">ثبت نام</Typography>
                            </Button>
                            <Button variant="outlined" className="w-full! py-5! border-1! border-black! text-black!" type="submit">
                                <Typography className="text-white text-lg!">بعدا ثبت نام میکنم</Typography>
                            </Button>
                        </Stack>
                    </Stack>
                </FormProvider>
            </Stack>
        </Stack>
    );
}
