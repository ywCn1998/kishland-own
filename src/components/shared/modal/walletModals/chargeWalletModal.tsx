import React from "react";
import { Button, Dialog, Divider, Stack, Typography, useMediaQuery } from "@mui/material";
import FormProvider from "@/providers/FormProvider";
import { ModalProps } from "@/interface/@types";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import TelegramIcon from "@mui/icons-material/Telegram";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useChargeWallet from "./hooks/chargeWalletHooks";
import RHFTextInput from "../../form/RHFTextInput";
import TollIcon from '@mui/icons-material/Toll';

export default function ChargeWalletModal({ open, setOpen }: ModalProps) {
    const { methods, OnSubmit } = useChargeWallet();
    const isMdUp = useMediaQuery("(min-width: 900px)");
    const CloseHandle = () => setOpen(!open);
    
    return (
        <Dialog
            open={open}
            fullWidth={true}
            maxWidth={"sm"}
            onClose={CloseHandle}
            PaperProps={{
                sx: {
                    borderRadius: { xs: 0, md: 4 },
                    overflow: { xs: "auto", md: "hidden" },
                    width: "100%",
                    height: { xs: "100vh", md: "auto" },
                    minHeight: { xs: "100vh", md: "70dvh" },
                    maxHeight: { xs: "100vh", md: "90vh" },
                    m: { xs: 0, md: 2 },
                    display: "flex",
                    flexDirection: "column",
                },
            }}
        >
            <Stack sx={{ p:{xs: 2, md: 5} }}>
                <Stack
                    direction="row-reverse"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Button
                        variant="text"
                        size="small"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            color: "text.secondary",
                        }}
                        onClick={CloseHandle}
                    >
                        <Typography className="text-sm! md:text-base!">برگشت</Typography>
                        <ArrowBackIcon fontSize="small" />
                    </Button>

                    <Typography className="text-lg! md:text-xl!">
                        افزایش موجودی کیف پول
                    </Typography>
                </Stack>

                <Divider sx={{ mt: 2, mb: 3 }} />

                <Stack className="items-center gap-5!">
                    <img src={"/images/package/chargewallet.png"} className="w-60 h-75" />

                    <Stack className="flex! flex-row! items-center! ">
                        <Typography className="md:text-4xl! text-2xl! font-[750]! ">
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
            </Stack>
        </Dialog>
    );
}
