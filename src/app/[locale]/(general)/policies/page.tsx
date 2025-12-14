import { BreadCrumbFa } from "@/components/shared/breadCrumb/breadCrumbFa";
import { Container, Stack } from "@mui/material";
import { HeroSection } from "./_components";
import { CommonQuestions, ExtraFooterInformation } from "@/components/shared/ui";

export default function PoliciesPage() {
    return (
        <>
            <Container maxWidth="xl">
                <Stack className="hidden! md:block! w-full">
                    <BreadCrumbFa />
                </Stack>

                <Stack className="items-center! justify-center! w-full! h-full!">
                    <HeroSection />
                </Stack>
            </Container>
            <Container maxWidth="xl" >
                <Stack className="hidden! md:block!" mt={{ xs: 6, md: 8 }}>
                    <CommonQuestions isAboutUs={true} />
                </Stack>
                <Stack className="md:hidden!" mt={{ xs: 4, md: 8 }}>
                    <CommonQuestions responsive hasTItle={false} hasFooter={false} isAboutUs={true} />
                </Stack>
            </Container>

            <ExtraFooterInformation honerOfColobrate={false} moreToRead companies={false} />
        </>
    )
}
