import {
    Box,
    Button,
    Divider,
    Drawer,
    Grid,
    Radio,
    Stack,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import FormProvider from "@/providers/FormProvider";
import InfoIcon from "@mui/icons-material/Info";
import { Banks } from "@/components/shared/cart/howToPay/cards/payLoans";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { RoomCard } from "@/components/shared/cards/tour/roomCard";

interface drawerProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export default function ChangeRoomDrawer({ open, setOpen }: drawerProps) {
    const [isSelected, setIsSelected] = useState(false);

    const handleClose = () => {
        setOpen(!open);
    };

    const handleSelect = () => {
        setIsSelected(!isSelected);
    };

    return (
        <Drawer anchor="right" open={open} >
            <Stack className="w-[70dvw]! p-8! py-6! bg-[#F5F7FA]!">
                <Stack className="flex! justify-between! items-center! flex-row-reverse! ">
                    <Button onClick={handleClose} endIcon={<ArrowBackIcon />} className="text-[#1B54FF]!">
                        برگشت
                    </Button>
                    <Stack className="flex! flex-row! gap-1! items-center!">
                        <Typography className="text-xl! font-semibold!"> لیست اتاق ها </Typography>
                        <Typography className="text-base! text-slate-500!">
                            (مبنای قیمت 1نفر/1شب می باشد)
                        </Typography>
                    </Stack>

                </Stack>
                <Divider />
                <Stack className="flex! flex-col! gap-4! mt-6!">
                    <RoomCard isSelected={true} />
                    <RoomCard />
                    <RoomCard />
                    <RoomCard />
                    <RoomCard />
                    <RoomCard />
                    <RoomCard />        
                </Stack>

            </Stack>
        </Drawer>
    );
}
