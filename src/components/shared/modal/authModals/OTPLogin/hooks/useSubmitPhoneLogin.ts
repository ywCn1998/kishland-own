"use client";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { UserAuthAPI } from "@/services/users/auth.services";

interface IPhone {
  phone: string;
}

interface UseSubmitPhoneLoginProps {
  onSuccess?: (phone: string) => void;
}

const useSubmitPhoneLogin = ({ onSuccess }: UseSubmitPhoneLoginProps = {}) => {
  const methods = useForm<IPhone>({
    defaultValues: {
      phone: "",
    },
  });

  const { mutate: login, isPending } = UserAuthAPI.login({
    onSuccess: (data) => {
      console.log("OTP sent successfully:", data);
      const phone = methods.getValues("phone");
      onSuccess?.(phone);
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const OnSubmit = handleSubmit((data: IPhone) => {
    // Transform phone to phone_number format expected by API
    login({ phone: data.phone } as any);
  });

  return {
    handleSubmit,
    errors,
    methods,
    OnSubmit,
    isPending,
  };
};

export default useSubmitPhoneLogin;
