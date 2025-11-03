"use client";
import { useForm } from "react-hook-form";

const useSubmitPhoneLogin = () => {
  //   const navigate = useNavigate();

  const methods = useForm<any>({
    defaultValues: {
        phone : "",
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const OnSubmit = handleSubmit((data: any) => {
    console.log(data);
  });

  return {
    handleSubmit,
    errors,
    methods,
    OnSubmit,
  };
};

export default useSubmitPhoneLogin;
