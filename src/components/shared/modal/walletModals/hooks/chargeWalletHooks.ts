"use client";
import { useForm } from "react-hook-form";

const useChargeWallet = () => {
  //   const navigate = useNavigate();

  const methods = useForm<any>({
    defaultValues: {
      price: "",
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

export default useChargeWallet;
