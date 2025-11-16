import { Stack, Typography, Button, Divider } from "@mui/material";
import TextIcon from "../../textIcon";
import PersonIcon from '@mui/icons-material/Person';
import TimerIcon from '@mui/icons-material/Timer';
import BedIcon from '@mui/icons-material/Bed';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MessageIcon from '@mui/icons-material/Message';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

export default function RoomCardDetailsResponsive({
    onClick,
    isSelected,
    borderLess,
    title = "اتاق استاندارد با یک تخت دو نفره با دید رو به جزیره",
    discount = "تا 25 % تخفیف",
    people = "2 نفر + 1",
    breakfast = "صبحانه",
    bed = "1 تخت دو نفره",
    price = "1 شب / 2,500,000 تومان",
    oldPrice = "8,800,000",
    newPrice = "8,500,000",
    priceFor = "3 نفر",
    rate = "4.9"
}: {
    onClick?: (val: boolean) => void,
    isSelected?: boolean,
    borderLess?: boolean,
    title?: string,
    discount?: string,
    people?: string,
    breakfast?: string,
    bed?: string,
    price?: string,
    oldPrice?: string,
    newPrice?: string,
    priceFor?: string,
    rate?: string
}) {
    return (
        <Stack className={`${!borderLess && "border-1! border-slate-200!"} rounded-2xl! p-4! flex! flex-col! gap-4! bg-white!`}>
            <Stack className="flex! flex-row! justify-between! items-start! gap-2!">
                <Typography className="text-lg! font-semibold! flex-1!">{title}</Typography>

            </Stack>

            <Stack className="flex! flex-col! gap-2!">
                <Stack className="flex! flex-row! gap-3! justify-between!">
                    <TextIcon text={people} startIcon={<PersonIcon className="text-base!" />} className="text-xs!" />
                    <TextIcon text={breakfast} startIcon={<TimerIcon className="text-base!" />} className="text-xs!" />
                </Stack>
                <Stack className="flex! flex-row! gap-3! justify-between!">
                    <TextIcon text={bed} startIcon={<BedIcon className="text-base!" />} className="text-xs!" />
                    <TextIcon text={price} className="text-xs!" />
                </Stack>
            </Stack>

            <Divider className="border-slate-200!" />

            <Stack className="flex! flex-row-reverse! justify-between! items-center!">
                <Stack className="flex! flex-col! gap-1!">
                    <Typography className="text-center! text-xs!" color="text.secondary">
                        قیمت برای <Typography component={"span"} className="text-xs!" color="primary">{priceFor}</Typography>
                    </Typography>
                </Stack>
                <Stack className="flex! flex-col! gap-2! items-end!">
                    {discount && (
                        <TextIcon
                            startIcon={<LocalOfferIcon className="text-sm!" />}
                            text={discount}
                            className="w-fit! rounded-lg px-3! py-2! bg-[#FFE5E5]! text-center! font-normal! text-xs! whitespace-nowrap!"
                            sx={{ color: "#FA5050" }}
                        />
                    )}
                </Stack>
            </Stack>

            <Stack className="flex! flex-row-reverse! items-center! gap-2!  justify-between!">
                <Button
                    onClick={() => onClick?.(true)}
                    sx={{ bgcolor: isSelected ? 'text.secondary' : "bg.primary" }}
                    variant="contained"
                    fullWidth
                    className="text-white! rounded-xl! mt-2! w-1/2! py-5!">
                    <Typography className="font-normal! text-sm!" variant="button">
                        {isSelected ? "اتاق انتخاب شده" : "انتخاب اتاق"}
                    </Typography>
                </Button>
                <Stack className="flex! flex-col! items-center! gap-2!">
                    <Typography className="text-center! line-through! text-sm!" color="text.secondary">
                        {oldPrice} تومان
                    </Typography>
                    <Typography className="text-center! font-bold! text-lg!">
                        {newPrice} تومان
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

