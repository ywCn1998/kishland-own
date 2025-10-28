"use client";

import { ReactNode } from "react";
import { Container, Grid } from "@mui/material";
import SideBar from "./_components/sidebar/sidebar";
import { ExtraFooterInformation } from "@/components/shared/_components";

export default function PanelLayout({ children }: { children: ReactNode }) {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={2}>
                <Grid size={{ md: 3 }}>
                    <SideBar />
                </Grid>

                <Grid size={{ md: 9 }}>
                    {children}
                </Grid>
            </Grid>

            <ExtraFooterInformation
                companies={false}
                honerOfColobrate={false}
            />
        </Container >
    );
}
