import { Container, Stack } from "@mui/material";
import {
    ExtraFooterInformation,
} from "@/components/shared/_components";
import {
    ExploreSection,
    HeroSection,
    LocationSections,
} from "./_components";
import { BreadCrumbFa } from "@/components/shared/breadCrumb/breadCrumbFa";

export default function MapPage() {
    return (
        <Stack
            style={{ display: "flex", flexDirection: "column", overflowX: "hidden" }}
            className="mb-10!"
        >
            <Container
                maxWidth="xl"
                disableGutters
                sx={{ px: { xs: 2, md: 3 }, marginBottom: { xs: 5, md: 10 } }}
            >
                <Stack className="hidden! md:block!">
                    <BreadCrumbFa />
                </Stack>
                <Stack spacing={{ xs: 5, md: 12 }} mt={{ xs: 4, md: 8 }}>
                    <HeroSection />
                    <ExploreSection />
                    <LocationSections />
                </Stack>
            </Container>

            <ExtraFooterInformation honerOfColobrate={false} moreToRead companies={false} />
        </Stack>
    );
}

