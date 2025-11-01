import { Stack, Container, Typography } from "@mui/material";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import {
  BodyIntroSection,
  HotelsListSection,
  LastToursSection,
  ReserveSection,
  TourSearchSection,
  TourSuggestionSlider,
  TravelNowPayTomarrow,
  ViewsOfHotelSection,
} from "./_components";
import {
  MainBlog,
  CategorySlider,
  CommentSlider,
  CommonQuestions,
  ExtraFooterInformation,
  MianBanner,
  OfferBanner,
  WhyKishLand,
  LastSearch,
} from "@/components/shared/_components";
import GoldenText from "@/components/shared/_components/GoldenText";
import HotDiscountModal from "@/components/shared/modal/hotDiscount/hotDiscountModal";

export default function Home() {
  // const { locale } = params;

  // setRequestLocale(locale);

  // const t = useTranslations();
  return (
    <Stack
      style={{ display: "flex", flexDirection: "column", overflowX: "hidden" }}
      className="mb-10!"
    >
      <Container maxWidth="xl" sx={{ marginBottom: 0, px: { xs: 0, md: 2 } }}>
        <CategorySlider />
        <Stack className="px-4 md:px-0 bg-white"><TourSearchSection /></Stack>
        <LastSearch />
      </Container>

      <Stack className="flex! flex-col-reverse! md:flex-col!">
        <Stack spacing={0} mt={5} mb={5}>
          <Container maxWidth="xl" sx={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <BodyIntroSection />
            <WhyKishLand />
          </Container>
        </Stack>

        {/* پیشنهادات لحظه ایی */}
        <Stack className="w-full! flex! flex-col-reverse! md:flex-col">
          <ViewsOfHotelSection />

          <Stack className="bg-slate-100 md:bg-white mx-0!">
            <Container maxWidth="xl" className="mx-auto!">
              {/* <Stack className="hidden! md:block!"> */}
              <OfferBanner
                caption=" این تور های رو از دست نده ..."
                responsiveCaption=" این تور های رو از دست نده ..."
                title={" پیشنهادات لحظه ای"}
                buttonText={"مشاهده لیست پیشنهادات ها"}
                href="/fa/tour/list"
              // captionClass="block! text-xs! sm:text-base md:text-xl"
              />

              {/* </Stack> */}

            </Container>

            <Container maxWidth="xl" className="mx-auto! " disableGutters>
              <TourSuggestionSlider />
            </Container>

          </Stack>
        </Stack>


      </Stack>





      <Container maxWidth="xl" sx={{ mt: 7 }}>
        <Stack className=" hidden! md:block!">
          <MianBanner />
        </Stack>
        <TravelNowPayTomarrow />
      </Container>

      {/* جدید ترین تور ها */}
      <LastToursSection />

      <Container maxWidth="xl">
        <ReserveSection />

        <HotelsListSection />
      </Container>

      <Container maxWidth="xl" className="hidden! md:block!">
        <CommonQuestions />
      </Container>

      <Container maxWidth="xl">
        <CommentSlider />
      </Container>


      <Container maxWidth="xl">
        <MainBlog />
      </Container>

      <ExtraFooterInformation />
      <HotDiscountModal/>
    </Stack >
  );
}
