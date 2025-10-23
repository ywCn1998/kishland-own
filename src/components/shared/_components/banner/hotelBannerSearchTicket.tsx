import { Button, Typography, Stack, Container, Grid, IconButton, Box, Divider } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SearchIcon from "@mui/icons-material/Search";
import RoomServiceIcon from '@mui/icons-material/RoomService';
import DateRangeIcon from '@mui/icons-material/DateRange';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import PersonIcon from '@mui/icons-material/Person';
import TextIcon from "../../textIcon";

export default function HotelBannerSearchTicketSection({ location, fromWhere, startDate, endDate, nights, peoplesNumber }: { location: string, fromWhere: string, startDate: string, endDate: string, nights: string, peoplesNumber: string }) {
    return (
        <Stack maxWidth="xl">
            <Stack sx={{ backgroundColor: "background.paper" }} className="px-2! h-[200px]! w-full! flex! flex-col! justify-center! items-center! rounded-2xl! border-1! border-slate-200!">
                <Stack className="flex! items-center! justify-center!  h-6/12! border-b-1! border-slate-200! w-full! ">
                    <Typography className="flex! text-4xl! ">
                        رزرو هتل {location}
                    </Typography>
                </Stack>
                <Stack className="flex! items-center! flex-row! w-full! justify-center! h-6/12! relative!">
                    <Stack className="flex! flex-row! justify-between! w-8/12!">
                        <TextIcon text={`از ${fromWhere}`} startIcon={<LocationPinIcon fontSize="medium" />} />
                        <TextIcon text={peoplesNumber} startIcon={<PersonIcon fontSize="medium" />} />
                        <TextIcon text={`از ${startDate} تا ${endDate} (${nights})`} startIcon={<DateRangeIcon fontSize="medium" />} />
                    </Stack>
                    <Stack className="flex! justify-center! absolute! left-3!   ">
                        <IconButton
                            className="w-full md:w-14 md:h-14 h-16 "
                            sx={{ bgcolor: "primary.main", borderRadius: 1 }}
                        >
                            <Typography className="text-white pl-1 text-lg text-extralight md:hidden ">بزن بریم</Typography>
                            <SearchIcon className="text-white" />
                        </IconButton>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
}