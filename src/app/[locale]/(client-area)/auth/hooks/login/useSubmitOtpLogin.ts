"use client";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { UserAuthAPI } from "@/services/users/auth.services";

interface IOtp {
  otp: string;
}

interface UseSubmitOtpLoginProps {
  phone: string;
  onSuccess?: () => void;
}

const useSubmitOtpLogin = ({ phone, onSuccess }: UseSubmitOtpLoginProps) => {
  const methods = useForm<IOtp>({
    defaultValues: {
      otp: "",
    },
  });

  const { mutate: verifyOtp, isPending } = UserAuthAPI.login({
    onSuccess: (data) => {
      console.log("Login successful:", data);
      onSuccess?.();
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const OnSubmit = handleSubmit((data: IOtp) => {
    // Send phone_number and token (OTP) to verify and login
    verifyOtp({ phone: phone, code: data.otp } as any);
  });

  return {
    handleSubmit,
    errors,
    methods,
    OnSubmit,
    isPending,
  };
};

export default useSubmitOtpLogin;
