'use client'
import { Button, Divider, Grid, Stack, Typography } from "@mui/material";
import TextIcon from "../../textIcon";
import PersonIcon from '@mui/icons-material/Person';
import TimerIcon from '@mui/icons-material/Timer';
import BedIcon from '@mui/icons-material/Bed';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MessageIcon from '@mui/icons-material/Message';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

export function RoomCard({
    onClick,
    isSelected,
    borderLess,
}: {
    onClick?: (val: boolean) => void,
    isSelected?: boolean
    borderLess?: boolean
}) {
    return (
        <Grid size={{ md: 12 }}  >
            <Stack
                alignItems={"center"}
                className={`flex w-full flex-col ${!borderLess && "border-1"} border-slate-200 rounded-2xl bg-white! p-4`}
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
                        sx={{ alignItems: "stretch", height: "200px" }} // ensure children stretch vertically
                    >
                        {/* -------- LEFT SIDE -------- */}
                        <Stack className="w-4/5 flex flex-col! justify-around!">
                            <Stack className="flex! flex-row! justify-between! items-center">
                                <Typography className="text-2xl! font-semibold!">اتاق استاندارد با یک تخت دو نفره با دید رو به جزیره </Typography>

                                <TextIcon startIcon={<LocalOfferIcon className="text-base!" />} text="تا 25 % تخفیف"
                                    className="w-fit! rounded-lg lg:px-5 lg:py-3! py-2! px-2! bg-[#FFE5E5] text-center font-normal! text-sm!"
                                    sx={{ color: "#FA5050" }}
                                />
                            </Stack>

                            {/* <Stack className="flex! flex-row! justify-between! items-center"> */}
                            <Grid container>
                                <Grid size={{ xs: 6, lg: 3 }}>
                                    <TextIcon text="2 نفر + 1" startIcon={<PersonIcon />} />
                                </Grid>
                                <Grid size={{ xs: 6, lg: 3 }}>
                                    <TextIcon text="صبحانه" startIcon={<TimerIcon />} />
                                </Grid>
                                <Grid size={{ xs: 6, lg: 3 }}>
                                    <TextIcon text="1 تخت دو نفره" startIcon={<BedIcon />} />
                                </Grid>
                                <Grid size={{ xs: 6, lg: 3 }}>
                                    <TextIcon text="1 شب / 2,500,000 تومان" />
                                </Grid>
                            </Grid>
                            {/* </Stack>/ */}
                            <Stack className="flex! flex-row! justify-end! items-center gap-4!">
                                <TextIcon text="لیست نظرات این اتاق" startIcon={<MessageIcon />} sx={{ color: "secondary.main" }} />
                                <TextIcon text="تقویم قیمتی" startIcon={<CalendarMonthIcon />} sx={{ color: "secondary.main" }} />
                            </Stack>
                        </Stack>

                        {/* -------- DIVIDER -------- */}
                        <Divider
                            orientation="vertical"
                            flexItem
                            sx={{
                                mx: 4,
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
                        <Stack className="w-1/5 flex flex-col! relative!">
                            <Stack className={`flex! flex-col! justify-between! h-3/5! ${borderLess && "mt-10!"}`}>
                                <Typography className="text-center text-sm!" color="text.secondary">
                                    قیمت برای <Typography component={"span"} className="text-sm!" color="primary">3 نفر</Typography>
                                </Typography>

                                <Typography className="text-center line-through text-lg! xl:text-xl!" color="text.secondary">
                                    8,800,000 تومان
                                </Typography>
                                <Typography variant="body2" className="text-center font-bold! text-xl! xl:text-2xl!">
                                    8,500,000 تومان
                                </Typography>
                            </Stack>
                            {!borderLess && (
                                <Stack className="absolute! bottom-0! flex flex-col! w-full gap-4">

                                    <Button
                                        onClick={() => onClick!(true)}
                                        sx={{ bgcolor: isSelected ? 'text.secondary' : "bg.primary" }}
                                        variant="contained" fullWidth className="text-white! rounded-xl! py-2! md:py-3! lg:px-3! ">
                                        <Typography className="font-normal! text-nowrap! text-xs! md:text-sm! xl:text-base!" variant="button">{isSelected ? "اتاق انتخاب شده" : "اتاق انتخاب شده"}</Typography>
                                    </Button>
                                </Stack>
                            )}

                        </Stack>
                    </Stack>



                </Stack>


            </Stack>
        </Grid>
    )
}
