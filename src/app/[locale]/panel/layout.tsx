"use client";

import { ReactNode } from "react";
import { Container, Grid } from "@mui/material";
import SideBar from "./_components/sidebar/sidebar";
import { ExtraFooterInformation } from "@/components/shared/_components";

export default function PanelLayout({ children }: { children: ReactNode }) {
    return (
        <Container maxWidth="xl" disableGutters sx={{ px: { xs: 0, md: 2 } }}>
            <Grid container spacing={2}>
                <Grid size={{ md: 3 }} className="hidden! lg:block!">
                    <SideBar />
                </Grid>

                <Grid size={{ xs: 12, md: 9 }}>
                    {children}
                </Grid>
            </Grid>

            <ExtraFooterInformation
                companies={false}
                honerOfColobrate={false}
                hasHeader={false}
            />
        </Container >
    );
}
