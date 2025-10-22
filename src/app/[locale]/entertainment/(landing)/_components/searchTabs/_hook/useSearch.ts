"use client";
import { useForm } from "react-hook-form";

const useSearch = () => {
  //   const navigate = useNavigate();

  const methods = useForm<any>({
    defaultValues: {
      category: "کشتی های تفریحی",
      date: "2025/11/30",
      startDate: "04 فروردین 1404",
      endDate: "04 فروردین 1404",
      type: "کشتی تفریحی امیرکبیر",
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

export default useSearch;
