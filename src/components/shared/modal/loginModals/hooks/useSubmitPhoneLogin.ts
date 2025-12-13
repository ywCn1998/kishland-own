"use client";
import { UserAuthAPI } from "@/services/users/auth.services";
import { useForm } from "react-hook-form";

const useSubmitPhoneLogin = () => {

  // const login = UserAuthAPI.login({
  //   onSuccess: (data) => {
  //     console.log("LOGIN SUCCESS:", data);
  //     // redirect, save token, etc...
  //   },
  //   onError: (err) => {
  //     console.log("LOGIN ERROR:", err);
  //   }
  // });

  const methods = useForm<any>({
    defaultValues: {
      phone: "",
      code: "",
    },
  });   

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  // const OnSubmitPhone = handleSubmit((data: any) => {
  //   login.mutate({
  //     phone_number: data.phone,
  //     password: data.code,
  //   });
  // });

  const OnSubmitCode = handleSubmit((data: any) => {
    console.log(data);
  });

  return {
    handleSubmit,
    errors,
    methods,
    OnSubmitCode,
    // OnSubmitPhone,
    // login, // اگر خواستی از isLoading استفاده کنی
  };
};

export default useSubmitPhoneLogin;
