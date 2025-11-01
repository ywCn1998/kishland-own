'use client'
import { AccessTimeOutlined, CloudCircle, LocationOn, LocationOnOutlined, MapOutlined, PersonOutlined, PinOutlined, Search, WhatshotOutlined } from "@mui/icons-material";
import { Button, Divider, Grid, Stack, Typography } from "@mui/material";

// @ts-ignore
import { UilFire, UilMapMarker } from '@iconscout/react-unicons';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import Link from "next/link";

export function HotelHistoryCard({
    onClick,
    status = "pending",
    orderId
}: {
    onClick?: (val: boolean) => void
    status: "reserved" | "pending" | "end" | "canceled"
    orderId?: number
}) {
    const statusLabels: Record<string, string> = {
        pending: "پرداخت سفارش",
        reserved: "استرداد بلیط",
        canceled: "سفارش مجدد",
        end: "مشاهده جزئیات",
    };

    // routes
    type Status = "pending" | "reserved" | "canceled" | "end";
    const statusRoutes: Record<Status, (id: number) => string> = {
        pending: (id) => `/fa/orders/${id}/pay`,
        reserved: (id) => `/fa/orders/${id}/refund`,
        canceled: (id) => `/fa/orders/${id}/reorder`,
        end: (id) => `/fa/panel/history/${id}`,
    };
    ////////////////////////


    //btn styles
    const isFilled = ["pending", "canceled"].includes(status);
    const btnVariant = isFilled ? "contained" : "outlined";
    const btnSx = isFilled
        ? { backgroundColor: "success.main", color: "white", mt: 1 }
        : { backgroundColor: "transparent", color: "text.secondary", mt: 1 };
    const btnClass = isFilled
        ? "text-white py-3!"
        : "py-3! border-2! border-slate-300!";
    //////////////////////////////////


    //status text styles
    const statusStyle = {
        pending: {
            bg: "#FFF9EC",
            color: "primary.main",
            label: "در انتظار پرداخت",
        },
        canceled: {
            bg: "#FFEBEB",
            color: "error.main",
            label: "لغو شده",
        },
        end: {
            bg: "#F5F7FA",
            color: "text.secondary",
            label: "سفارش تمام شده",
        },
        reserved: {
            bg: "#F0F7FF",
            color: "secondary.main",
            label: "رزرو شده",
        },
    } as const;
    ///////////////////////////////

    return (
        <Grid size={{ md: 12 }}  >
            <Stack
                alignItems={"center"}
                // reveal
                className="flex w-full flex-col border-1 border-slate-200 rounded-2xl   p-4"
            >

                <Stack
                    display={'flex'} flexDirection={'row'}
                    alignItems={'center'} sx={{
                        position: 'relative',
                        width: '100%',
                        gap: 2
                    }}>

                    <Stack
                        direction="row"
                        className="w-full"
                        sx={{ alignItems: "stretch" }} // ensure children stretch vertically
                    >
                        {/* -------- LEFT SIDE -------- */}
                        <Stack className="w-4/5 flex flex-col! gap-2!">
                            <Stack className="flex! flex-row! justify-between! items-center" mb={1}>
                                <Stack className="flex! flex-col! gap-3!">
                                    <Typography className="font-bold! text-xl!">
                                        هتل بین المللی کیش
                                    </Typography>

                                    <Typography className="" color="text.secondary">
                                        شماره سفارش : 554874512
                                    </Typography>
                                </Stack>

                                <Stack className="flex! flex-row! gap-2!">
                                    <Button sx={{ color: "text.secondary" }} className="text-sm! px-2.5! py-3! rounded-xl!" variant="outlined" endIcon={<PersonOutlined className="text-xl!" />}>2 نفر مسافر</Button>
                                    {
                                        (status == "reserved" || status == 'end') && (
                                            <Button sx={{ color: "white", backgroundColor: "text.secondary" }} className="text-sm! px-2.5! py-3! rounded-xl!" variant="outlined" endIcon={<LocalPrintshopOutlinedIcon className="text-xl!" />}>چاپ بلیط</Button>
                                        )
                                    }
                                </Stack>
                            </Stack>
                            <Stack sx={{ backgroundColor: "background.paper" }} className="rounded-2xl! p-4! flex! flex-row-reverse! ">
                                <Stack className="w-2/12! flex! items-end! justify-end! text-left">
                                    <Typography color="text.secondary" className="text-sm!" mb={1} fontWeight={300}>
                                        مبلغ نهایی
                                    </Typography>
                                    <Typography color="text.secondary" className="text-base!" fontWeight={400}>
                                        15,500,000 تومان
                                    </Typography>
                                </Stack>
                                <Stack className="w-10/12! flex! flex-row! items-center! gap-4! relative!">
                                    <Stack>
                                        <Typography color="text.secondary" className="text-sm!" mb={1} fontWeight={300}>
                                            تاریخ ورود
                                        </Typography>
                                        <Typography color="text.secondary" className="text-base!" fontWeight={400}>
                                            پنج شنبه 11 اردیبهشت 1404 | ساعت 14:00
                                        </Typography>
                                    </Stack>
                                    {/* <Stack> */}
                                    <KeyboardBackspaceOutlinedIcon sx={{ color: "text.secondary" }} />
                                    {/* </Stack> */}
                                    <Stack>
                                        <Typography color="text.secondary" className="text-sm!" mb={1} fontWeight={300}>
                                            تاریخ خروج
                                        </Typography>
                                        <Typography color="text.secondary" className="text-base!" fontWeight={400}>
                                            پنج شنبه 11 اردیبهشت 1404 | ساعت 14:00
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>

                        </Stack>

                        {/* -------- DIVIDER -------- */}
                        <Divider
                            orientation="vertical"
                            flexItem
                            sx={{
                                mx: 2,
                                border: 0,
                                borderRight: (theme) =>
                                    `2px dashed ${theme.palette.divider}`,
                                borderImage: (theme) =>
                                    `repeating-linear-gradient(
                                to bottom,
                                ${theme.palette.divider} 0,
                                ${theme.palette.divider} 15px,
                                transparent 15px,
                                transparent 30px
                              ) 1`, // custom dash pattern
                            }}
                        />

                        {/* -------- RIGHT SIDE -------- */}
                        <Stack className="w-1/5 flex flex-col! relative! justify-between!">
                            <Typography
                                variant="button"
                                sx={{
                                    backgroundColor: statusStyle[status]?.bg,
                                    color: statusStyle[status]?.color,
                                    textAlign: "center",
                                    borderRadius: "12px",
                                    py: 1.5,
                                    fontWeight: 400,
                                    fontSize: "12px",
                                }}
                            >
                                {statusStyle[status]?.label}
                            </Typography>

                            <Stack className="flex! flex-col! text-center! justify-end!">
                                {
                                    status === "pending" &&
                                    <Typography color="error.main" className="text-sm!">تا 05:23 فرصت پرداخت دارید</Typography>
                                }
                                <Button
                                    component={Link}
                                    href={statusRoutes[status as Status]?.(orderId!) ?? "#"}
                                    variant={btnVariant}
                                    sx={btnSx}
                                    className={btnClass}
                                >
                                    {statusLabels[status]}
                                </Button>
                            </Stack>
                        </Stack>
                    </Stack>



                </Stack>




            </Stack>
        </Grid>
    )
}