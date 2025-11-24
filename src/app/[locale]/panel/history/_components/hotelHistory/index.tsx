import TextIcon from "@/components/shared/textIcon";
import { Button, Stack, Typography } from "@mui/material";
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { HotelHistoryCard } from "../cards/hotelHistoryCard";
import FilterListIcon from '@mui/icons-material/FilterList';


export default function HotelHistory({ orderId }: { orderId: number }) {
    console.log(orderId);

    return (
        <Stack className="w-full!">
            {/* Header Section - Desktop */}
            <Stack className="hidden! md:flex! border-1! border-slate-200! rounded-3xl flex! flex-row! justify-between! items-center! p-5!">
                <TextIcon className="text-lg!" text="لیست سفارشات هتل" startIcon={<HotelOutlinedIcon className="text-2xl!" />} />
                <Button className="text-lg! px-0! " sx={{ color: "text.secondary" }} variant="text" endIcon={<KeyboardArrowDownOutlinedIcon className="text-2xl!" />} startIcon={<SortOutlinedIcon className="text-2xl!" />}>مشاهده همه سفارشات</Button>
            </Stack>

            {/* Header Section - Mobile */}
            <Stack className="flex! md:hidden! flex-col! gap-3! px-4!">
                <Stack className="flex! flex-row! justify-between! items-center!">
                    <Typography className="font-semibold! text-sm!">
                        تمامی سفارشات شما از کیش لندیار
                    </Typography>
                    <Button
                        className="text-xs! px-0! py-1! rounded-lg!"
                        sx={{ color: "text.secondary" }}
                        variant="text"
                        startIcon={<FilterListIcon className="text-lg!" />}
                    >
                        مرتب سازی
                    </Button>
                </Stack>
                <Stack className="flex! flex-row! justify-between! items-center!">
                    <Typography className="text-xs!" color="text.secondary">
                        ۱۳ سفارش در تمامی دسته بندی ها
                    </Typography>
                    <Stack className="flex! flex-row! gap-2! items-center!">

                        <Button
                            className="text-xs! px-0! py-1! rounded-lg! text-black!"
                            variant="text"
                            endIcon={<KeyboardArrowDownOutlinedIcon className="text-lg!" sx={{ color: "text.secondary" }} />}
                        >
                            آخرین سفارشات
                        </Button>
                    </Stack>
                </Stack>
            </Stack>

            <Stack mt={{ xs: 2, md: 3 }} spacing={{ xs: 2, md: 3 }} sx={{ px: { xs: 2, md: 0 } }}>
                <HotelHistoryCard status="pending" orderId={orderId} />
                <HotelHistoryCard status="reserved" orderId={orderId} />
                <HotelHistoryCard status="end" orderId={orderId} />
                <HotelHistoryCard status="canceled" orderId={orderId} />
            </Stack>
        </Stack>
    )
}