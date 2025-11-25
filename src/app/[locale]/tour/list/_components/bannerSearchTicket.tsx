import { Button, Typography, Stack, Container, Grid, IconButton, Box, Divider } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SearchIcon from "@mui/icons-material/Search";
import RoomServiceIcon from '@mui/icons-material/RoomService';
import DateRangeIcon from '@mui/icons-material/DateRange';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import TextIcon from "@/components/shared/textIcon";
import TextNumber from "@/components/shared/textNumber";

export default function BannerSearchTicketSection({ hasTitle }: { hasTitle?: boolean }) {
    return (
        <Container maxWidth="xl" disableGutters>
            {
                hasTitle && <TextNumber text="جستجو تور مورد نظر" number={1} className="mb-4!"/>
            }
            <Stack sx={{ backgroundColor: "background.paper" }} className="px-2! h-[200px]! w-full! flex! flex-col! justify-center! items-center! rounded-2xl! border-1! border-slate-200!">
                <Stack className="flex! items-center! justify-center!  h-6/12! border-b-1! border-slate-200! w-full! ">
                    <Typography className="flex! text-4xl! ">تور مشهد به کیش</Typography>
                </Stack>
                <Stack className="flex! items-center! flex-row! w-full! justify-center! h-6/12! relative!">
                    <Stack className="flex! flex-row! justify-between! w-8/12!">
                        <TextIcon text="با صبحانه و خدمات" startIcon={<RoomServiceIcon fontSize="small" />} />
                        <TextIcon text="از چهارشنبه 14 خرداد تا سه شنبه 20 خرداد 1404 ( 6 شب و 7 روز )" startIcon={<DateRangeIcon fontSize="small" />} />
                        <TextIcon text="بلیط پرواز رفت و برگشت" startIcon={<SwapHorizIcon fontSize="small" />} />
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
        </Container>
    );
}
