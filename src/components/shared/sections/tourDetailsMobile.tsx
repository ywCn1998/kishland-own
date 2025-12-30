import { Stack, Typography } from "@mui/material";

export default function TourDetailsMobile({ fullName, nationalId, birthDate }: { fullName: string, nationalId: string, birthDate: string }) {
    return (
        <Stack className="rounded-2xl! border-1 border-slate-200! p-4!" spacing={3}>
            <Stack className="flex! flex-row! items-center! justify-between!">
                <Typography className="text-sm!" color="text.secondary">نام و نام خانوادگی</Typography>
                <Typography className="text-sm!" color="text.secondary">{fullName}</Typography>
            </Stack>
            <Stack className="flex! flex-row! items-center! justify-between!">
                <Typography className="text-sm!" color="text.secondary">کد ملی</Typography>
                <Typography className="text-sm!" color="text.secondary">{nationalId}</Typography>
            </Stack>
            <Stack className="flex! flex-row! items-center! justify-between!">
                <Typography className="text-sm!" color="text.secondary">تاریخ تولد</Typography>
                <Typography className="text-sm!" color="text.secondary">{birthDate}</Typography>
            </Stack>
        </Stack>
    )
}
