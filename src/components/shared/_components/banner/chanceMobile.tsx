import { Stack, Typography } from "@mui/material";

export default function ChanceMobile() {
    return (
        <Stack
            className="flex! flex-row! gap-3! items-center! rounded-xl! py-3!"
            sx={{ backgroundColor: "secondary.50" }}
        >
            <img src="/images/chance.png" className="h-12! w-12!" alt="" />
            <Stack className="flex! flex-col! gap-2!">
                <Typography
                    sx={{ fontWeight: 500, color: "secondary.main" }}
                    className="text-base!"
                >
                    شانس <span className="text-black!">امروزتو امتحان کن</span>
                </Typography>
                <Typography color="text.secondary" className="text-xs!">
                    هر روز یک گردونه شانس با کلی جایزه
                </Typography>
            </Stack>
        </Stack>
    )
}