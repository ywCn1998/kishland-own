import React, { useState } from "react";
import BaseModal from "../BaseModal";
import { Box, Button, Stack, Typography } from "@mui/material";
import FormProvider from "@/providers/FormProvider";
import { ModalProps } from "@/interface/@types";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import TelegramIcon from "@mui/icons-material/Telegram";
import useChargeWallet from "./hooks/chargeWalletHooks";
import RHFTextInput from "../../form/RHFTextInput";
import TollIcon from '@mui/icons-material/Toll';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';



const bank = {
    image: "/images/package/melat.png",
    name: "ملت",
    value: "melat",
    cardNumber: "1234 5678 9012 3456",
}
export default function WithdrawModal({ open, setOpen }: ModalProps) {
    const { methods, OnSubmit } = useChargeWallet();
    const [totalBalance, setTotalBalance] = useState(2500);
    const handleWithdrawAll = () => {
        methods.setValue("price", totalBalance);
    };
    return (
        <>     
            <BaseModal
                open={open}
                setOpen={setOpen}
                title={"برداشت موجودی کیف پول"}
                closeText="برگشت"
                fullWidth={true}
                showIcon={false}
                maxWidth={"sm"}
            >
                <Stack className="items-center gap-3!">
                    <img src={bank.image} className="w-20 h-20" />
                    <Stack className="flex! flex-col! items-center! ">
                        <Typography className="text-lg! font-semibold! ">
                            واریز به حساب بانک {bank.name}
                        </Typography>
                        <Typography className="text-base! mt-2!">
                            {bank.cardNumber}
                        </Typography>
                    </Stack>
                    <FormProvider methods={methods} onSubmit={OnSubmit} className="w-full! flex! flex-col! gap-4!">
                        <Stack className="flex! flex-row! items-center! justify-between! p-4! bg-[#F0F7FF]! rounded-xl!">
                            <Typography className="text-sm! font-medium!">
                                <LocalAtmIcon className=" text-slate-600!" />     موجودی کیف پول من
                            </Typography>
                            <Typography className="text-base! font-bold!">
                                {totalBalance} تومان
                            </Typography>
                        </Stack>
                        <RHFTextInput
                            name="price"
                            placeholderSuffix="تومان"
                            startIcon={<TollIcon />}
                            placeholder="مبلغ مورد نظر خود را وارد کنید"
                            type="number"
                            fullWidth
                        />
                        <Stack>
                            <Button variant="text" color="secondary" onClick={handleWithdrawAll}>
                                <Typography>
                                    برداشت کل موجودی
                                </Typography>
                            </Button>
                            <Button variant="contained" className="w-full!" size="medium" type="submit">
                                <Typography className="text-white"> تایید و برداشت</Typography>
                            </Button>
                        </Stack>

                    </FormProvider>
                </Stack>
            </BaseModal>
        </>
    );
}
