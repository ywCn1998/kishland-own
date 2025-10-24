"use client"
import { Container, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";

const data = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    name: `بازار کیش مال ${i + 1}`,
    area: "584 متر",
    distance: "پیاده روی 7 دقیقه",
}));

export default function CityCenterLoactions() {

    const [activeId, setActiveId] = useState<number | null>(null);

    return (
        <Container maxWidth="xl" sx={{mt: 3}}>
            <Grid container maxHeight={450} spacing={0} >
                <Grid size={7} maxHeight={450} sx={{ overflowY: "hidden" }}>
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
                                            ? "primary.100"
                                            : "background.paper",
                                        transition: "0.2s",
                                    }}
                                >
                                    <Typography
                                        className="text-lg!"
                                        sx={{ fontWeight: isActive ? 500 : 400 }}
                                    >
                                        {item.name}
                                    </Typography>

                                    <Typography className="text-lg!">{item.area}</Typography>
                                    <Typography className="text-lg!">{item.distance}</Typography>
                                </Stack>
                            );
                        })}
                    </Stack>

                </Grid>
                <Grid size={5}>
                    <img src={"/images/"} />
                </Grid>
            </Grid>
        </Container>
    )
}