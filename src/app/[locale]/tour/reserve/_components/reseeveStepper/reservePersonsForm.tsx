import RHFTextInput from "@/components/shared/form/RHFTextInput";
import TextNumber from "@/components/shared/textNumber";
import { Stack, Typography } from "@mui/material";

export default function ReservePersonForm() {
    return (
        <Stack>
            <TextNumber number={1} text="مشخصات مسافران" />
            <Stack className="border-1! border-slate-200!">
                <Typography className="text-xl! font-semibold!">رزرو کننده اصلی</Typography>
                <RHFTextInput name="" />
            </Stack>
        </Stack>
    )
}