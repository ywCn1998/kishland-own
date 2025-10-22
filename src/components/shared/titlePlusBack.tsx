import { Button, Stack, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function TitlePlusBack({ title }: { title: string }) {
    return (
        <Stack className="flex! flex-row! justify-between! items-center!" sx={{
            borderBottom: "1px solid #e0e0e0", // static border under header
        }}>
            <Typography component="span" variant="subtitle1" fontWeight={500}>
                {title}
            </Typography>
            <Button variant="text" className="text-sm!" sx={{ color: "text.secondary" }} endIcon={<ArrowBackIcon />}>بازگشت</Button>
        </Stack>
    )
}