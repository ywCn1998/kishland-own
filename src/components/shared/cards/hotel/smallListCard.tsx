import { Avatar, Rating, Stack, Typography } from "@mui/material";
import {
    Star as StarIcon,
    Stars as StarsIcon,
} from '@mui/icons-material';
import TextIcon from "../../textIcon";
export default function SmallListCard() {
    return (
        <Stack className="border-1! border-slate-200! rounded-2xl! p-5! flex! flex-col! gap-5! bg-white!">
            <Typography className="text-xl! md:text-2xl!" fontWeight={600}>هتل بین المللی کیش </Typography>
            <Stack className="flex! flex-row! justify-between!">
                <Rating
                    name="hover-feedback"
                    value={5}
                    precision={0.5}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                <TextIcon endIcon={<StarsIcon color="success" className="text=lg! md:text-xl!" />} className="text-xs! md:text-sm!" sx={{ color: "text.secondary" }} text="4.8/5" />
            </Stack>
            <Stack className="flex! flex-row! justify-between! items-center!">
                <Avatar src="/images/building1.png" variant="rounded" className="h-16! md:h-[50px]! w-14! md:w-[70px]!" />
                <Typography color="secondary.main" className="font-bold! text-lg! md:text-2xl!">8,500,000 تومان</Typography>
            </Stack>
        </Stack>
    )
}
