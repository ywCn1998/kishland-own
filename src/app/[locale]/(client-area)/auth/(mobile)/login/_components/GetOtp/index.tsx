"use client"
import FormProvider from "@/providers/FormProvider";
import { Stack, Box, Typography, Button } from "@mui/material";
import useSubmitOtpLogin from "../../../../hooks/login/useSubmitOtpLogin";
import { useRouter } from "next/navigation";
import EastIcon from '@mui/icons-material/East';
import RHFOTPInput from "@/components/shared/form/RHFOTPInput";
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
// import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import useSubmitPhoneLogin from "../../../../hooks/login/useSubmitPhoneLogin";
import { UserAuthAPI } from "@/services/users/auth.services";

export default function GetOtp({
    setPhone,
    phone,
}: {
    setPhone: (val: string) => void;
    setStep: (val: any) => void;
    phone: string;
}) {
    const router = useRouter();

    const { OnSubmit: OnSubmitOtp, methods: otpMethods } = useSubmitOtpLogin({
        phone: phone,
        onSuccess: () => {
            // setPhone("");
            router.push("/");
        },
    });


    const { OnSubmit: OnSubmitPhone } =
        useSubmitPhoneLogin({

            onSuccess: (phone: string) => {
                setPhone(phone);
                // setStep("otp");
            },
        });

    const { mutate: login, isPending } = UserAuthAPI.login({

    });

    // --- TIMER ---
    const INITIAL_SECONDS = 0; // 2:30
    const [secondsLeft, setSecondsLeft] = useState<number>(INITIAL_SECONDS);

    // format mm:ss
    const formatted = useMemo(() => {
        const m = Math.floor(secondsLeft / 60);
        const s = secondsLeft % 60;
        const mm = String(m).padStart(1, "0"); // you can pad to 2 if you want: padStart(2,"0")
        const ss = String(s).padStart(2, "0");
        return `${mm}:${ss}`;
    }, [secondsLeft]);

    useEffect(() => {
        if (secondsLeft <= 0) return;

        const t = setInterval(() => {
            setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(t);
    }, [secondsLeft]);

    const handleResend = async () => {
        // TODO: call your resend OTP endpoint here
        // await resendOtp({ phone });

        // restart timer
        login({ phone_number: phone } as any)
        setSecondsLeft(INITIAL_SECONDS);
    };

    return (
        <Stack className="w-full! min-h-[100dvh]! px-4! pb-4! pt-5!">
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

                <img
                    src={"/images/auth/auth-hero.png"}
                    alt="headerlogo"
                    className="w-full! h-64! mt-10! px-4!"
                />
            </Stack>

            <Stack spacing={1.3} className="justify-end! h-full! mt-5!">
                <Typography className="font-semibold! text-xl!">کد تایید</Typography>
                <Typography color="text.secondary" className="text-base!">
                    کد ارسال شده به شماره {phone} را وارد کنید
                </Typography>

                <FormProvider methods={otpMethods} onSubmit={OnSubmitOtp}>
                    <Stack spacing={1.5}>
                        <Stack className="w-full!">
                            <RHFOTPInput
                                name="otp"
                                OTPLength={5}
                                otpType="number"
                                className="flex! sm:justify-center! sm:gap-4!"
                                inputStyles={{ width: 56, height: 66, gap: 2 }}
                            />
                        </Stack>

                        <Stack
                            sx={{
                                backgroundColor: "background.paper",
                                p: 2,
                                borderRadius: 1.5,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <Button className="flex! items-center! gap-2! text-sm! p-0! text-black!">
                                <BorderColorOutlinedIcon className="text-lg!" />
                                ویرایش شماره همراه
                            </Button>

                            {secondsLeft > 0 ? (
                                <Typography color="text.secondary">{formatted} ثانیه</Typography>
                            ) : (
                                <Button
                                    onClick={handleResend}
                                    variant="text"
                                    className="p-0! text-sm!"
                                >
                                    ارسال مجدد
                                </Button>
                            )}
                        </Stack>

                        <Button variant="contained" className="w-full! py-5!" type="submit">
                            <Typography className="text-white text-lg!">ثبت و ادامه</Typography>
                        </Button>
                    </Stack>
                </FormProvider>
            </Stack>
        </Stack>
    );
}
