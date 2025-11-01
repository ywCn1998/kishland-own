import TextIcon from "@/components/shared/textIcon";
import { Button, Stack } from "@mui/material";
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import { HotelHistoryCard } from "../cards/hotelHistoryCard";

export default function HotelHistory({ orderId }: { orderId: number }) {
    console.log(orderId);

    return (
        <Stack className="w-full!">
            <Stack className="border-1! border-slate-200! rounded-3xl flex! flex-row! justify-between! items-center! p-5!">
                <TextIcon className="text-lg!" text="لیست سفارشات هتل" startIcon={<HotelOutlinedIcon className="text-2xl!" />} />
                <Button className="text-lg! px-0! " sx={{ color: "text.secondary" }} variant="text" endIcon={<KeyboardArrowDownOutlinedIcon className="text-2xl!" />} startIcon={<SortOutlinedIcon className="text-2xl!" />}>مشاهده همه سفارشات</Button>
            </Stack>

            <Stack mt={3} spacing={3}>
                {/* {Array.from({ length: 3 }).map((_, index) => ( */}
                <HotelHistoryCard status="pending" />
                <HotelHistoryCard status="reserved" />
                <HotelHistoryCard status="end" orderId={orderId} />
                <HotelHistoryCard status="canceled" />
                {/* ))} */}
            </Stack>
        </Stack>
    )
}