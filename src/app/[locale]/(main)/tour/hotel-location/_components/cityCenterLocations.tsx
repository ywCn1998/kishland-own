"use client"
import { Container, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";

const data = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    name: `بازار کیش مال ${i + 1}`,
    area: "584 متر",
    distance: "پیاده روی 7 دقیقه",
}));

export default function CityCenterLoactions({ isKishMap = false }: { isKishMap?: boolean }) {

    const [activeId, setActiveId] = useState<number | null>(null);

    return (
        <Container maxWidth="xl" sx={{ mt: 3 }} disableGutters>
            <Grid container height={{ xs: 500, md: 450 }} spacing={{ xs: 0, md: 2 }} >
                <Grid size={{ xs: 12, md: isKishMap ? 6 : 5 }} className="md:hidden!" height={{ xs: 200, md: 450 }}>
                    <img src={"/images/sample-map.png"} className="h-full! w-full! rounded-3xl!" />
                </Grid>

                <Grid size={{ xs: 12, md: isKishMap ? 6 : 7 }} height={{ xs: 250, md: 450 }} sx={{ overflowY: "hidden" }}>
                    <Stack sx={{ overflowY: "auto", height: "100%" }} gap={2}>

                        {data.map((item) => {
                            const isActive = activeId === item.id;

                            return (
                                <Stack
                                    key={item.id}
                                    onClick={() => setActiveId(item.id)}
                                    direction="row"
                                    justifyContent="space-between"
                                    className="rounded-2xl! p-7! flex! w-full! cursor-pointer!"
                                    sx={{
                                        backgroundColor: isActive
                                            ? "primary.50"
                                            : "background.paper",
                                        transition: "0.2s",
                                    }}
                                >
                                    <Typography
                                        className="text-xs! md:text-lg!"
                                        sx={{ fontWeight: isActive ? 500 : 400 }}
                                    >
                                        {item.name}
                                    </Typography>

                                    <Typography className="text-xs! md:text-lg!">{item.area}</Typography>
                                    <Typography className="text-xs! md:text-lg!">{item.distance}</Typography>
                                </Stack>
                            );
                        })}
                    </Stack>
                </Grid>

                <Grid size={{ xs: 12, md: isKishMap ? 6 : 5 }} className="hidden! md:flex!" height={{ xs: 250, md: 450 }}>
                    <img src={"/images/sample-map.png"} className="h-full! w-full! rounded-3xl!" />
                </Grid>
            </Grid>

            {
                isKishMap && (
                    <Typography className="text-sm! md:text-base! md:mt-16! mt-5!">
                        <Typography className="text-base! md:text-lg! font-semibold!">تاریخچه مسجد خاتم النبیاء (ص)</Typography>
                        مسجد خاتم الانبیاء ( ص ) كه مناره های آن سر به آسمان كشیده و رو به سوی دریا دارد در منطقه سفین ، سمت شمال غربی جزیره واقع شده و از مهمترین بناهای مذهبی كیش به شمار می آید و نمازهای جماعات و جمعه در این محل برگزار می شود.
                    </Typography>
                )
            }
        </Container>
    )
}






