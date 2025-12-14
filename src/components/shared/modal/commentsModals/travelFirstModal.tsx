import React from "react";
import BaseModal from "../BaseModal";
import { Box, Button, Stack, Typography } from "@mui/material";
import { ModalProps } from "@/interface/@types";
import GoldenText from "../../ui/GoldenText";

export default function TravelFirstModal({ open, setOpen }: ModalProps) {
    return (
        <>
            <BaseModal
                open={open}
                setOpen={setOpen}
                title={"ثبت نظر"}
                closeText="برگشت"
                fullWidth={true}
                showIcon={false}
                maxWidth={"sm"}
            >
                <Stack className="items-center gap-5!">
                    <img src={"/images/modals/travelfirst.png"} className="w-90 h-62" />

                    <Stack className="flex! flex-row! items-center! ">
                        <Typography className="text-4xl! font-[750]! ">
                            باید اول
                            <GoldenText text="لذت تفریح" />
                            رو ببری !
                        </Typography>
                    </Stack>
                    <Typography className="text-lg! text-slate-500!">
                        تا وقتی تفریح رو امتحان نکردی نمی تونی نظری ثبت کنی
                    </Typography>

                    <Button variant="contained" className="w-full!" size="medium" href="/fa/entertainment">
                        <Typography className="text-white"> رزرو کن</Typography>
                    </Button>

                </Stack>

            </BaseModal>
        </>
    );
}
