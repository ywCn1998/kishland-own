import { Button, Grid, Stack, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const hotelCategories = [
    { id: 1, label: "هتل های ۱ ستاره کیش", icon: <ArrowBackIosNewIcon fontSize="small" /> },
    { id: 2, label: "هتل های ۲ ستاره کیش", icon: <ArrowBackIosNewIcon fontSize="small" /> },
    { id: 3, label: "هتل های ۳ ستاره کیش", icon: <ArrowBackIosNewIcon fontSize="small" /> },
    { id: 4, label: "هتل های ۴ ستاره کیش", icon: <ArrowBackIosNewIcon fontSize="small" /> },
    { id: 5, label: "هتل های ۵ ستاره کیش", icon: <ArrowBackIosNewIcon fontSize="small" /> },
    { id: 6, label: "هتل آپارتمان های کیش", icon: <ArrowBackIosNewIcon fontSize="small" /> },
    { id: 7, label: "هتل های لوکس کیش", icon: <ArrowBackIosNewIcon fontSize="small" /> },
    { id: 8, label: "هتل های ارزان کیش", icon: <ArrowBackIosNewIcon fontSize="small" /> },
    { id: 9, label: "هتل های قیمت مناسب کیش", icon: <ArrowBackIosNewIcon fontSize="small" /> },
];

const otherHotelCategories = [
    { id: 1, label: "هتل آپارتمان های کیش", icon: <ArrowBackIosNewIcon fontSize="small" /> },
    { id: 2, label: "هتل تهران", icon: <ArrowBackIosNewIcon fontSize="small" /> },
    { id: 3, label: "هتل شیراز", icon: <ArrowBackIosNewIcon fontSize="small" /> },
    { id: 4, label: "هتل شیراز", icon: <ArrowBackIosNewIcon fontSize="small" /> },
    { id: 5, label: "هتل کیش", icon: <ArrowBackIosNewIcon fontSize="small" /> },
    { id: 6, label: "هتل رشت", icon: <ArrowBackIosNewIcon fontSize="small" /> },
];

export default function HotelCategory() {
    return (
        <>
            <Stack className="border-1! border-slate-200! p-4! rounded-xl! " mt={5}>
                <Typography className="font-bold! text-3xl!">دسته بندی هتل های کیش</Typography>
                <Stack className="flex! flex-row! gap-6" mt={4}>
                    {hotelCategories.slice(0, 5).map((item) => (
                        <Stack className="flex! flex-row!">
                            <Button
                                variant="outlined"
                                endIcon={item.icon}
                                sx={{
                                    color: "#000",
                                    borderColor: "#E0E0E0",
                                    whiteSpace: "nowrap",
                                    "&:hover": { backgroundColor: "#f9f9f9" },
                                }}
                                className="rounded-xl! h-16!"
                            >
                                {item.label}
                            </Button>
                        </Stack>
                    ))}
                </Stack>
                <Stack className="flex! flex-row! gap-6" mt={2}>
                    {hotelCategories.slice(5).map((item) => (
                        <Stack className="flex! flex-row!">
                            <Button
                                variant="outlined"
                                endIcon={item.icon}
                                sx={{
                                    color: "#000",
                                    whiteSpace: "nowrap",
                                    "&:hover": { backgroundColor: "#f9f9f9" },
                                }}
                                className="rounded-xl! h-16! border-1! border-slate-200!"
                            >
                                {item.label}
                            </Button>
                        </Stack>
                    ))}
                </Stack>
            </Stack>

            {/*-----------------------پیشنهادات دیگر   */}


            <Stack className="border-1! border-slate-200! p-4! rounded-xl! " mt={10}>
                <Typography className="font-bold! text-3xl!">پیشنهادات دیگر</Typography>
                <Stack className="flex! flex-row! gap-6" mt={4}>
                    {otherHotelCategories.map((item) => (
                        <Stack className="flex! flex-row!">
                            <Button
                                variant="outlined"
                                endIcon={item.icon}
                                sx={{
                                    color: "#000",
                                    borderColor: "#E0E0E0",
                                    whiteSpace: "nowrap",
                                    "&:hover": { backgroundColor: "#f9f9f9" },
                                }}
                                className="rounded-xl! h-16!"
                            >
                                {item.label}
                            </Button>
                        </Stack>
                    ))}
                </Stack>
            </Stack>
        </>
    )
}
