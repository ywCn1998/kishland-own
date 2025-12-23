"use client"
import { Box } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import GetPhone from "./_components/GetPhone";
import GetOtp from "./_components/GetOtp";

type LoginStep = "splashScreen" | "phone" | "otp";


export default function Login() {

    const [step, setStep] = useState<LoginStep>("splashScreen");
    const [phoneNumber, setPhoneNumber] = useState<string>("");


    const handleBack = () => {
        if (step === "otp") {
            setStep("phone");
        };
    }

    useEffect(() => {
        if (step === "splashScreen") {
            setTimeout(() => {
                setStep("phone");
            }, 2000);
        }
    }, [step]);

    if (step === "splashScreen") {
        return (
            <Box className="relative! w-full! h-full!">
                <Image src={"/images/auth/splash-screen.png"} alt="splash-screen" fill />
            </Box>
        )
    }

    if (step === "phone") {
        return <GetPhone setStep={setStep} setPhone={setPhoneNumber} />
    }


    if (step === "otp") {
        return <GetOtp setStep={setStep} setPhone={setPhoneNumber} phone={phoneNumber} />
    }

    return <></>
}