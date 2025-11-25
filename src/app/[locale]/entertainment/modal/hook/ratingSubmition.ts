"use client";
import { useForm } from "react-hook-form";

const useSubmitRating = () => {
  //   const navigate = useNavigate();

  const methods = useForm<any>({
    defaultValues: {
      title: "",
      comment: "",
      recommend: false,
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

export default useSubmitRating;
