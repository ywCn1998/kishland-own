import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Divider, Stack, Typography } from "@mui/material";

export default function RulesList() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Stack className="md:p-5! p-4! border-1! border-slate-200! rounded-2xl!">
            <Typography className="text-lg! md:text-xl! font-semibold! md:px-4! md:px-0!">قوانین و مقررات</Typography>
            <Divider variant="fullWidth" orientation="horizontal" sx={{ my: 3 }} />
            <Stack className="px-4! md:px-0!">
                <ul className="md:pr-4 pr-3! space-y-2" style={{ direction: "rtl", listStyle: "disc" }}>
                    <li  >
                        <Typography className="text-xs! md:text-lg!">
                            نیازی به پرینت و نشان دادن بلیط کاغذی نیست و با نشان دادن بارکد بلیط روی موبایل همراه خود
                            پذیرش می‌شوید.
                        </Typography>
                    </li>

                    <li  >
                        <Typography className="text-xs! md:text-lg!">
                            هر بلیط مختص یک نفر است و برای هر شخص باید بلیط جدا تهیه کنید.
                        </Typography>
                    </li>

                    <li  >
                        <Typography className="text-xs! md:text-lg!">
                            می‌توان بلافاصله بعد از خرید بلیط از آن استفاده کرد.
                        </Typography>
                    </li>

                    <li  >
                        <Typography className="text-xs! md:text-lg!">
                            برای خرید بلیط نهایت دقت را انجام دهید و توضیحات را کامل بخوانید. اگر می‌خواهید به هر
                            دلیلی بلیط خود را کنسل کنید، تا یک روز قبل از تاریخ شروع بلیط می‌توانید کنسلی را با
                            بازگشت مقداری از وجه انجام دهید.
                        </Typography>
                    </li>

                    <li  >
                        <Typography className="text-xs! md:text-lg!">
                            این سایت معتبر ضمانت می‌کند که اگر مجموعه‌ای زمانی به هر دلیلی تعطیل شود، وجه شما را کامل
                            بازگرداند.
                        </Typography>
                    </li>
                </ul>
            </Stack>
        </Stack>
    );
}
