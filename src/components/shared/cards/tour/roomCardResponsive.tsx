import { Stack, Typography } from "@mui/material";
import TextIcon from "../../textIcon";
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

export default function SmallRoomCard({ title, options, rate, price }: { title: string, options: { label: string, icon: any }[], rate: number | string, price: string | number }) {
    return (
        <Stack className="border-1! border-slate-200! rounded-2xl! p-5! flex! flex-col! gap-5! bg-white!">
            <Typography className="text-xl!" fontWeight={600}>{title}</Typography>
            <Stack className="flex! flex-row! gap-3">
                {
                    options?.map((item, index) => (
                        <TextIcon key={"rate" + index} className="text-sm!" startIcon={item.icon} text={item.label} />
                    ))
                }
            </Stack>
            <Stack className="flex! flex-row! justify-between! items-center!">
                <TextIcon sx={{ color: "primary.100" }} startIcon={<StarOutlinedIcon />} text={rate} className="ml-6!" />
                <Typography color="secondary.main" className="font-bold! text-xl!"><span className="text-sm! text-slate-400! font-normal!">1 نفر /</span> {price} تومان </Typography>
            </Stack>
        </Stack>
    )
}
