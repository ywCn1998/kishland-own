import { Container, Stack } from "@mui/material";
import {
    CommonQuestions,
    ExtraFooterInformation,
} from "@/components/shared/_components";
import {
    HeroSection,
    ContactUsFormSection,
} from "./_components";
import { BreadCrumbFa } from "@/components/shared/breadCrumb/breadCrumbFa";

export default function ContactUsPage() {
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
                    <ContactUsFormSection />
                </Stack>
            </Container>


            <Container maxWidth="xl" disableGutters>
                <Stack className="hidden! md:block!" mt={{ xs: 6, md: 8 }}>
                    <CommonQuestions isAboutUs={true} />
                </Stack>
                <Stack className="md:hidden!" mt={{ xs: 4, md: 8 }}>
                    <CommonQuestions responsive hasTItle={false} hasFooter={false} isAboutUs={true} />
                </Stack>
            </Container>

            <ExtraFooterInformation honerOfColobrate={false} moreToRead companies={false} />
        </Stack>
    );
}

