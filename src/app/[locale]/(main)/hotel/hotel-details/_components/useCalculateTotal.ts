"use client";
import { useForm } from "react-hook-form";

const useCalculateTotal = () => {
  //   const navigate = useNavigate();

  const methods = useForm<any>({
    defaultValues: {
      sort: "همراه با صبحانه",
      destination: "تهران",
      startDate: "2025/1/22",
      endDate: "2025/11/30",
      number: "4",
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

export default useCalculateTotal;
