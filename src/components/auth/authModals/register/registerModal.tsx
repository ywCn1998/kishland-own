"use client";

import React from "react";
import BaseModal from "../../../shared/modal/BaseModal";
import { ModalProps } from "@/interface/@types";
import { Button, Stack, Typography } from "@mui/material";
import FormProvider from "@/providers/FormProvider";
import useRegister from "./hooks/useRegister";
import RHFTextInput from "../../../shared/form/RHFTextInput";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Link from "next/link";

export default function RegisterModal({ open, setOpen }: ModalProps) {
    const { OnSubmit, methods } = useRegister();

    return (
        <>
            <BaseModal
                open={open}
                setOpen={setOpen}
                title={" ثبت نام "}
                closeText="خروج"
                showIcon={false}
                fullWidth={false}
            >
                <Stack className="items-center gap-5!">
                    <Stack className="flex! flex-row! items-center! ">
                        <Typography className="text-4xl! font-[750]! ">به کیش لندیار خوش آمدید</Typography>
                    </Stack>
                    <Typography className="text-lg! text-slate-500!"> تکمیل اطلاعات زیر برای استفاده از امکانات وب سایت ضروری است </Typography>
                    <FormProvider
                        methods={methods}
                        onSubmit={OnSubmit}
                        className="flex! flex-col! gap-6! w-full! items-stretch!"
                    >
                        <Stack className="w-full! items-stretch!">
                            <RHFTextInput name="phone" placeholder="شماره موبایل خود را وارد کنید" startIcon={<PersonOutlineOutlinedIcon />} />
                        </Stack>
                    </FormProvider>
                    <Button variant="contained" className="w-full! py-6!" component={Link} href="/fa/panel/user-account" onClick={() => {
                        setOpen(false)
                    }}>
                        <Typography className="text-white"> ورود </Typography>
                    </Button>
                </Stack>
            </BaseModal>
        </>
    );
}
