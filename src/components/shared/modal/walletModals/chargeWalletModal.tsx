import React from "react";
import BaseModal from "../BaseModal";
import { Box, Button, Stack, Typography } from "@mui/material";
import FormProvider from "@/providers/FormProvider";
import { ModalProps } from "@/interface/@types";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import TelegramIcon from "@mui/icons-material/Telegram";
import useChargeWallet from "./hooks/chargeWalletHooks";
import RHFTextInput from "../../form/RHFTextInput";
import TollIcon from '@mui/icons-material/Toll';

export default function ChargeWalletModal({ open, setOpen }: ModalProps) {
    const { methods, OnSubmit } = useChargeWallet();
    return (
        <>
            <BaseModal
                open={open}
                setOpen={setOpen}
                title={"افزایش موجودی کیف پول"}
                closeText="برگشت"
                fullWidth={true}
                showIcon={false}
                maxWidth={"sm"}
            >
                <Stack className="items-center gap-5!">
                    <img src={"/images/package/chargewallet.png"} className="w-60 h-75" />

                    <Stack className="flex! flex-row! items-center! ">
                        <Typography className="text-4xl! font-[750]! ">
                            مبلغ مورد نظر را وارد کنید
                        </Typography>
                    </Stack>
                    <FormProvider methods={methods} onSubmit={OnSubmit} className="w-full! flex! flex-col! gap-4!">
                        <RHFTextInput
                            name="price"
                            placeholderSuffix="تومان"
                            startIcon={<TollIcon/>}
                            placeholder="مبلغ مورد نظر خود را وارد کنید"
                            type="number"
                            fullWidth
                            quickAmountButtons={[50000, 100000, 200000, 500000, 1000000]}
                        />
                        
                        <Button variant="contained" className="w-full!" size="medium" type="submit">
                            <Typography className="text-white">افزایش موجودی</Typography>
                        </Button>
                    </FormProvider>
                </Stack>
            </BaseModal>
        </>
    );
}
