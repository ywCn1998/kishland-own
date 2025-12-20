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
import TicketCard from "@/components/shared/cards/tour/ticketCard";
import FilterContainer from "@/app/[locale]/entertainment/list/_components/filterBox/_components/filterContainer";
import MainTabs from "@/components/shared/mainTabs";
import SortIcon from '@mui/icons-material/Sort';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

interface drawerProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}
const tabsData = [
    {
        label: "مرتب سازی",
        icon: <SortIcon className="ml-1!" fontSize="small" />,
        disabled: true,
        hideLabelOnMobile: true // ✅ NEW
    },
    { label: "کمترین قیمت" },
    { label: "بیشترین قیمت" },
    { label: "پیشنهادی کیش لندیار" },
    { label: "محبوب ترین" },
];

export default function ChangeBliteDrawer({ open, setOpen }: drawerProps) {
    const handleClose = () => {
        setOpen(!open);
    };


    return (
        <Drawer anchor="bottom" open={open} PaperProps={{
            sx: {
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
            }
        }}>
            <Stack className="w-full! max-h-[90dvh]! overflow-y-auto! p-12! py-8! ">
                <Stack className="flex! justify-between! items-center! flex-row-reverse! ">
                    <Button onClick={handleClose} endIcon={<ArrowBackIcon />} color="inherit">
                        برگشت
                    </Button>
                    <Typography className="text-xl! font-semibold!"> تغییر بلیط رفت و برگشت </Typography>
                </Stack>
                <Divider />
                <Stack className="mt-6! flex! flex-col! gap-8!">
                    <Stack className="flex! flex-row! gap-5! ">
                        <TicketCard isDisabled={true} overlayButton={<Button variant="outlined" color="secondary" className="text-base! px-12! font-semibold! text-blue-500!" startIcon={<AddCircleOutlineIcon />}>انتخاب بلیط رفت جدید  </Button>}/>
                        <TicketCard isDisabled={true} overlayButton={<Button variant="outlined" color="secondary" className="text-base! px-12! font-semibold! text-blue-500!" startIcon={<AddCircleOutlineIcon />} > انتخاب بلیط برگشت جدید </Button>}/>
                    </Stack>
                    <Grid container spacing={4}>
                        <Grid size={3} >
                            <Stack className="md:border-1 border-slate-200 bg-white!  rounded-xl md:p-4 w-3/12! md:w-auto!">
                                <FilterContainer isTour={true} />
                            </Stack>
                        </Grid>
                        <Grid size={9} className="flex! flex-col! gap-4!">
                            <MainTabs data={tabsData} />
                            <TicketCard />
                            <TicketCard /><TicketCard />
                            <TicketCard /><TicketCard />
                            <TicketCard />

                        </Grid>

                    </Grid>
                </Stack>
            </Stack>
        </Drawer>
    );
}
