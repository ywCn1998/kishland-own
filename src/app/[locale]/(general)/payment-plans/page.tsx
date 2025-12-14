import { BreadCrumbFa } from "@/components/shared/breadCrumb/breadCrumbFa";
import { Container, Stack } from "@mui/material";
import { HeroSection, StepByStepSection } from "./_components";
import { CommonQuestions, ExtraFooterInformation, OfferBanner } from "@/components/shared/ui";
import { LastToursSection } from "../../tour/(landing)/_components";
import Providers from "./_components/providers";
import YouMayLoveSection from "@/components/shared/sections/recommendations/youMayLoveSection";

export default function PaymentPlansPage() {
    return (
        <>
            <Container maxWidth="xl">
                <Stack className="hidden! md:block! w-full">
                    <BreadCrumbFa />
                </Stack>

                <Stack className="items-center! justify-center! w-full! h-full!">
                    <HeroSection />
                </Stack>

                <Stack mt={{ xs: 4, md: 8 }} className="justify-center! items-center!">
                    <StepByStepSection />
                </Stack>
                <Stack className="mt-12!">
                    <Providers />
                </Stack>
                <Stack>
                    <LastToursSection umbrella={false} />
                </Stack>
                <Stack className="lg:!bg-[#F0F7FF] !bg-[#F5F7FA] lg:rounded-3xl! reveal xs-fullwidth !hidden lg:!flex" >
                    <Container maxWidth="xl" >
                        <OfferBanner
                            caption="سفرتو قسطی کن، لذتتو نقدی ببر!"
                            title={"محبوب‌ترین تورهای اقساطی "}
                            buttonText={"مشاهده تمام لیست"}
                            className="lg:!bg-[#F0F7FF] !bg-[#F5F7FA]"
                        />
                    </Container>
                    <Stack sx={{ p: 4, pt: 0 }}  >
                        <YouMayLoveSection />
                    </Stack>
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
