import NorthWestIcon from "@mui/icons-material/NorthWest";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { Stack, Typography } from "@mui/material";
import TextIcon from "@/components/shared/textIcon";

export default function TicketInfoCart({ flyTime, arriveTime, from = "مشهد (MHD)", to = "تهران (THR)", isGo, dayTime }: { flyTime: string, arriveTime: string, from: string, to: string, isGo?: boolean, dayTime: string }) {
    return (
        <Stack className="flex! flex-row! justify-between! items-center! w-full! mt-7! h-fit! relative!">
            <Stack className="flex! flex-col! gap-3! w-full! justify-between!">
                <Stack className="flex! flex-row! justify-between!">
                    <Typography className="text-lg!" fontWeight={500} color="text.secondary">{isGo ? "بلیط رفت" : "بلیط برگشت"}</Typography>
                    <Typography className="text-lg!" color="text.secondary">{dayTime}</Typography>
                </Stack>
                <Stack className="flex! flex-row! justify-between!">
                    <Typography className="text-2xl! font-bold!" color="text.secondary">{flyTime}</Typography>
                    <Typography className="text-2xl! font-bold!" color="text.secondary">{arriveTime}</Typography>
                </Stack>

                <img
                    src="/images/ticketInfoPlane.png"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5/12 h-7!"
                    alt="plane path"
                />

                <Stack className="flex! flex-row! justify-between!">
                    <TextIcon text={from} className="text-lg!" startIcon={<NorthWestIcon />} />
                    <TextIcon text={to} className="text-lg!" startIcon={<NorthEastIcon />} />
                </Stack>
            </Stack>
        </Stack>
    )
}