"use client";

import { useMemo, useState } from "react";
import {
    Box,
    Button,
    Divider,
    Grid,
    MenuItem,
    Stack,
    Typography,
} from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import ReusableDrawer from "@/components/shared/reuseableDrawer";
import FormProvider from "@/providers/FormProvider";
import RHFDatePicker from "@/components/shared/form/RHFDatePicker";
import TextIcon from "@/components/shared/textIcon";
import Link from "next/link";
import useCalculateTotal from "./useCalculateTotal";
import RHFPassengerPicker from "@/components/shared/form/RHFPassengerPicker";

interface RoomsSummary {
    id: string;
    title: string;
}

interface DrawerButtonProps {
    isSelected?: boolean;
    onSelect?: (selected: boolean) => void;
}

const summaryCards = [
    { id: "card-1", date: "پنجشنبه 1402/09/08", price: "123.000.000 تومان" },
    { id: "card-2", date: "جمعه 1402/09/09", price: "123.000.000 تومان" },
];

const summaryRooms: RoomsSummary[] = [
    {
        id: "room-1",
        title: "اتاق 1: اتاق یک تخته (اقامت با صبحانه)",
    },
];

export default function MobileRoomDrawer({ isSelected, onSelect }: DrawerButtonProps) {
    const [open, setOpen] = useState(false);
    const { methods } = useCalculateTotal();

    const priceTitle = useMemo(
        () => "قیمت کل برای 4 شب / 4 نفر / 2 اتاق",
        []
    );

    const handleOpen = () => {
        onSelect?.(true);
        setOpen(true);
    };

    return (
        <>
            <Button
                onClick={handleOpen}
                sx={{ bgcolor: isSelected ? "text.secondary" : "bg.primary" }}
                variant="contained"
                fullWidth
                className="text-white! rounded-xl! mt-2! w-1/2! py-4!"
            >
                <Typography className="font-normal! text-sm!" variant="button">
                    {isSelected ? "اتاق انتخاب شده" : "انتخاب اتاق"}
                </Typography>
            </Button>

            <ReusableDrawer
                open={open}
                bgColor="white"
                setOpen={setOpen}
                title="بررسی رزرواسیون"
                closeText="بستن"
                height="auto"
                anchor="bottom"
                sx={{ zIndex: 1400 }}
            >
                <Stack className="flex! flex-col! gap-4! justify-between!">
                    <Stack spacing={2}>
                        <FormProvider methods={methods}>
                            <Stack className="border-2! border-slate-200! rounded-2xl! p-3! bg-white! gap-3!">
                                <Grid container spacing={2}>
                                    <Grid size={6}>
                                    <Box sx={{ minWidth: 10 }}>
                                            <RHFDatePicker
                                                startName="startDate"
                                                endName="endDate"
                                                label="ورود و خروج"
                                                startIcon={<BusinessCenterIcon sx={{ color: "primary.main" }} />}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid size={6}>
                                        <RHFPassengerPicker name="passengers" label="مسافران و تعداد اتاق" startIcon={<BusinessCenterIcon sx={{ color: "primary.main" }} />} />
                                    </Grid>
                                </Grid>
                            </Stack>
                        </FormProvider>

                        <Divider variant="fullWidth" />

                        <Stack className="flex! flex-col! gap-4!">
                            {summaryRooms.map((room) => (
                                <Stack key={room.id} gap={2}>
                                    <TextIcon
                                        startIcon={<DeleteOutlineIcon color="error" />}
                                        text={
                                            <Typography className="text-black! text-sm!">{room.title}</Typography>
                                        }
                                    />
                                    <Stack className="flex! flex-row! gap-2!">
                                        {summaryCards.map((card) => (
                                            <Stack
                                                key={`${room.id}-${card.id}`}
                                                className="flex! flex-col! gap-3! bg-white! rounded-xl! p-3! border-1! border-slate-200! w-full!"
                                            >
                                                <SingleBedIcon className="text-3xl!" />
                                                <Typography color="text.secondary" className="text-xs!">
                                                    {card.date}
                                                </Typography>
                                                <Typography className="text-base! text-black!" fontWeight={500}>
                                                    {card.price}
                                                </Typography>
                                            </Stack>
                                        ))}
                                    </Stack>
                                </Stack>
                            ))}
                        </Stack>

                        <Stack
                            sx={{ backgroundColor: "text.secondary" }}
                            className="rounded-2xl! border-2! border-white! border-dashed! py-4! relative!"
                        >
                            <Typography className="text-xs! text-center! text-white! mb-2!">
                                {priceTitle}
                            </Typography>
                            <Typography className="text-2xl! font-bold! text-center! text-white!">
                                8,500,000 تومان
                            </Typography>
                        </Stack>

                        <Button
                            variant="contained"
                            fullWidth
                            sx={{ backgroundColor: "primary.main" }}
                            className="text-white! text-lg! rounded-xl! py-4!"
                            onClick={() => setOpen(false)}
                        >
                            ادامه رزرواسیون
                        </Button>
                        <Divider className="border-slate-200!" />
                    </Stack>

                    <Stack className="flex! flex-row! items-center! justify-between!">
                        <Typography
                            component={Link}
                            href="tel:05135874451"
                            color="secondary"
                            className="text-base!"
                        >
                            سوالی دارید؟
                        </Typography>
                        <Typography className="text-base!">0513-5874451</Typography>
                    </Stack>
                </Stack>
            </ReusableDrawer>
        </>
    );
}


