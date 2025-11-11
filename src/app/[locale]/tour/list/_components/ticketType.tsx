"use client"
import { Button, Typography, Stack, Container, Grid, IconButton, Box, Divider, Tabs, Tab, colors, useTheme, useMediaQuery } from "@mui/material";
import TextNumber from "@/components/shared/textNumber";
import SortIcon from '@mui/icons-material/Sort';
import TicketCard from "@/components/shared/cards/tour/ticketCard";
import MainTabs from "@/components/shared/mainTabs";
import TextIcon from "@/components/shared/textIcon";


const tabsData = [
    {
        label: "مرتب سازی",
        icon: <SortIcon className="ml-1!" fontSize="small" />,
        disabled: true,
        hideLabelOnMobile: true // ✅ NEW
    },
    { label: "بلیط هواپیما" },
    { label: "بلیط قطار" },
    { label: "بلیط اتوبوس" },
    { label: "پیشنهادی کیش لندیار" },
    { label: "چارتری" },
];


export default function TicketTypeSection({ isLocationModal = false }: { isLocationModal?: boolean }) {
    const theme = useTheme()
    const mdUp = useMediaQuery(theme.breakpoints.up("md"));
    return (
        <Container maxWidth="xl"
            sx={{
                px: { xs: 0, sm: 2, md: 3 }, // xs=0, others keep normal spacing
            }}
            disableGutters
        >
            {!isLocationModal && (
                mdUp ? (
                    <Stack className="w-full! flex! flex-row! items-center! justify-between! mb-5!">

                        <Stack className="w-full! flex! flex-row! items-center! justify-between! mb-5!">
                            <TextNumber number={2} text="انتخاب نوع بلیط" />
                            <Button variant="contained" sx={{ backgroundColor: "secondary.main", color: "white", px: 6, height: 50 }}>تغییر بلیط</Button>
                        </Stack>
                    </Stack>
                ) : (
                    <Stack className="mb-10! py-3!" sx={{ backgroundColor: "background.paper" }}>
                        <TextNumber className="px-3!" numberClassName="md:text-lg!" alignItems="start" number={2} text={
                            <Stack>
                                <Typography className="font-semibold! text-base! text-black! text-right! mb-2!">انتخاب بلیط</Typography>
                                <Typography color="text.secondary" className=" text-xs! text-right! ">برای تور خود یکی از بلیط ها را انتخاب کنید</Typography>
                            </Stack>
                        } />
                        <Divider orientation="horizontal" variant="fullWidth" sx={{ my: 1 }} />
                        <MainTabs border={false} data={tabsData} bgColor="background.paper" icons={false} />
                    </Stack>
                )
            )}
            <Stack className="hidden! md:block!">
                <MainTabs data={tabsData} />
            </Stack>


            <Stack className="w-full! flex! flex-col! md:flex-row! gap-5 px-4! md:px-0!">
                <Stack className="md:hidden!">
                    <TextIcon className="text-lg! font-semibold!" text="بلیط رفت و برگشت هواپیما" startIcon={<img src="/images/airplaneicon.svg" className="w-8! h-8!" />} />
                </Stack>
                <TicketCard />
                <TicketCard />
            </Stack>
        </Container>
    );
}

