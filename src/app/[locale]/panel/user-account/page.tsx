import { Container, Grid } from "@mui/material";
import SideBar from "../_components/sidebar/sidebar";

export default function UserAccount() {
    return (
        <Container maxWidth={"xl"}>
            <Grid container>
                <Grid size={2.5}>
                    <SideBar />
                </Grid>
                <Grid size={9.5}></Grid>
            </Grid>
        </Container>
    )
}