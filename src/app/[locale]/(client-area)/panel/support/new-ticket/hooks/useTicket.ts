"use client";
import { useForm } from "react-hook-form";

const useTicket = () => {
  //   const navigate = useNavigate();

  const methods = useForm<any>({
    defaultValues: {
      firstName: "",
      lastName: "",
      city: "",
      province: "",
      birthDay: "",
      nationalCode: "",
      F: "knjkh"
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

export default useTicket;
