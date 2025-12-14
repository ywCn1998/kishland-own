import { Container, Stack } from "@mui/material";
import {
    CommentSlider,
    CommonQuestions,
    ExtraFooterInformation,
    MainBlog,
} from "@/components/shared/ui";
import {
    InfoSection,
    HeroSection,
    FromBeginningSection,
    StatsShowcase,
    HonorsSection,
    KishFamilySection,
} from "./_components";
import { BreadCrumbFa } from "@/components/shared/breadCrumb/breadCrumbFa";

export default function AboutUsPage() {
    return (
        <Stack
            style={{ display: "flex", flexDirection: "column", overflowX: "hidden" }}
            className="mb-10!"
        >
            <Container
                maxWidth="xl"
                sx={{ px: { xs: 2, md: 3 }, marginBottom: { xs: 5, md: 10 } }}
            >
                <Stack className="hidden! md:block!">
                    <BreadCrumbFa />
                </Stack>

                <Stack spacing={{ xs: 5, md: 8 }} mt={{ xs: 4, md: 8 }}>
                    <HeroSection />
                    <StatsShowcase />
                    <Stack className="md:my-40! my-10!">
                        <FromBeginningSection />
                    </Stack>
                    <InfoSection />
                </Stack>

                <HonorsSection />
            </Container>

            <Stack className="mt-5!">
                <KishFamilySection />
            </Stack>

            <Container maxWidth="xl" disableGutters>
                <Stack className="hidden! md:block!" mt={{ xs: 6, md: 12 }}>
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

