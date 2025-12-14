"use client";
import { registerSchema } from "@/schemas/users/auth.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


const useRegister = () => {

    const methods = useForm<any>({
        defaultValues: {
            username: "",
            name: "",
            phone: "",
            password: "",
            expiry_days: 1,
        },
        resolver: zodResolver(registerSchema),
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

export default useRegister;
