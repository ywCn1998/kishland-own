"use client"
import { Button, Typography, Stack, Container, Grid, IconButton, Box, Divider, Tabs, Tab, colors } from "@mui/material";
import TextNumber from "@/components/shared/textNumber";
import SortIcon from '@mui/icons-material/Sort';
import TicketCard from "@/components/shared/cards/tour/ticketCard";
import MainTabs from "@/components/shared/mainTabs";


const tabsData = [
    {
        label: "مرتب سازی",
        icon: <SortIcon className="ml-1!" fontSize="small" />,
        disabled: true
    },
    {
        label: "بلیط هواپیما",
    },
    {
        label: "بلیط قطار",
    },
    {
        label: "بلیط اتوبوس",
    },
    {
        label: "پیشنهادی کیش لندیار",
    },
    {
        label: "چارتری",
    },
];

export default function TicketTypeSection({ isLocationModal = false }: { isLocationModal?: boolean }) {
    return (
        <Container maxWidth="xl">
            {!isLocationModal && (
                <Stack className="w-full! flex! flex-row! items-center! justify-between! mb-5!">
                    <TextNumber number={2} text="انتخاب نوع بلیط" />
                    <Button variant="contained" sx={{ backgroundColor: "secondary.main", color: "white", px: 6, height: 50 }}>تغییر بلیط</Button>
                </Stack>
            )}
            <MainTabs data={tabsData} />

            <Stack className="w-full! flex! flex-row! gap-5 ">
                <TicketCard />
                <TicketCard />
            </Stack>
        </Container>
    );
}

