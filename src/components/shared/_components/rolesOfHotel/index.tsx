import { Stack, Typography } from "@mui/material";
import TextIcon from "../../textIcon";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function RulesOfHotel() {
    return (
        <Stack className="flex! flex-col! gap-4! md:gap-8! mt-5!">
            {/* role 1 */}
            <Stack className="flex! flex-col! gap-2!">
                <TextIcon className="text-black! font-semibold!" startIcon={<PlayArrowIcon sx={{ transform: "rotate(180deg)", color: "secondary.main" }} />} text="شرایط استرداد" />
                <Stack className="flex flex-col! gap-2! pr-7!">
                    <Typography className="text-sm! md:text-base! text-slate-400! md:text-black!">امکان استرداد تور طبق قوانین ایرلاین و هتل‌ها وجود دارد؛ به‌جز تورهایی که چارتر و غیر قابل استرداد باشند.</Typography>
                    <Typography className="text-sm! md:text-base! text-slate-400! md:text-black!">اگر تور چارتر باشد(پرواز چارتر و هتل گارانتی) استرداد نمی‌شود. کل مبلغ از مسافر دریافت و مبلغی برگشت داده نخواهد شد</Typography>
                </Stack>
            </Stack>
            {/* role 2 */}
            <Stack className="flex! flex-col! gap-2!">
                <TextIcon className="text-black! font-semibold!" startIcon={<PlayArrowIcon sx={{ transform: "rotate(180deg)", color: "secondary.main" }} />} text="شرایط پذیرش" />
                <Stack className="flex flex-col! gap-2! pr-7!">
                    <Typography className="text-sm! md:text-base! text-slate-400! md:text-black!">داشتن سند محرمیت قانونی و شرعی از شروط پذیرش هتل است. در این خصوص از پشتیبان تور راهنمایی بگیرید</Typography>
                </Stack>
            </Stack>
            {/* role 3 */}
            <Stack className="flex! flex-col! gap-2!">
                <TextIcon className="text-black! font-semibold!" startIcon={<PlayArrowIcon sx={{ transform: "rotate(180deg)", color: "secondary.main" }} />} text="دیگر شرایط و قوانین" />
                <Stack className="flex flex-col! gap-2! pr-7!">
                    <Typography className="text-sm! md:text-base! text-slate-400! md:text-black!">در صورت تغییر برنامه گشت یا افزایش قیمت به هر دلیلی، مسافر در همراهی با تور مختار است.</Typography>
                    <Typography className="text-sm! md:text-base! text-slate-400! md:text-black!">مسافر می‌تواند در صورت نیاز به بیمه در هنگام سفر تقاضای خود را اعلام کند.</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}