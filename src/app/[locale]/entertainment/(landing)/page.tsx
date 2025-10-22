import { Stack, Container } from "@mui/material";
import { setRequestLocale } from "next-intl/server";
import {
  ExtraFooterInformation,
  CategorySlider,
  CommentSlider,
  CommonQuestions,
  LastSearch,
  MainBlog,
  OfferBanner,
  WhyKishLand,
} from "@/components/shared/_components";
import {
  BodyIntroSection,
  BestExperienceBannerSection,
  BuyOneGetTwoSection,
  EconomyPackageSection,
  SearchTabSection,
  DicountedEntertainmentSection,
  BestEntertainmentSection,
} from "./_components";
import Image from "next/image";

export default function Home({ params }: { params: { locale: string } }) {
  const { locale } = params;

  setRequestLocale(locale);

  return (
    <Stack
      style={{ display: "flex", flexDirection: "column", overflowX: "hidden" }}
      className="mb-10!"
    >
      <Container maxWidth="xl">
        <CategorySlider />

        <BodyIntroSection />

        <Stack spacing={10} mt={8}>
          <SearchTabSection />

          <LastSearch />

          <WhyKishLand path="/images/tirex-dolphin.png" width="w-[380px]!" />
        </Stack>

        {/* banner */}
        <Stack className="w-full h-[450px] relative rounded-3xl! mt-10! mb-20! reveal">
          <Image
            src={"/images/sea-chair.png"}
            alt="s"
            fill
            className="animate-slide-in-left !"
          />
        </Stack>

        {/* discounded tours */}
        <DicountedEntertainmentSection />

        <Stack>
          <BuyOneGetTwoSection />

          {/* banner */}
          <Stack className="w-full h-[300px] relative rounded-3xl! mt-38! mb-20! reveal">
            <Image
              src={"/images/tafrih-banner.png"}
              alt="s"
              fill
              className="animate-slide-in-left !"
            />
          </Stack>
        </Stack>

        <OfferBanner
          bgColor="white"
          caption="این بار این سفر واست خاطره میشه ..."
          title={"پکیج دلخواهت رو انتخاب کن "}
          buttonText={"مشاهده لیست پیشنهادات ها"}
        />

        {/* acconamy */}
        <EconomyPackageSection />

        <Stack className="bg-[#F0F7FF] rounded-3xl! mt-20! pb-8! mb-28! reveal">
          <OfferBanner
            caption="جایی که آرامش و تفریح یکجا معنا پیدا میکنند "
            title="بهترین تفریحات کیش"
            buttonText="مشاهده لیست تفریحات"
            className="p-0!"
          />

          <Stack className="px-8!">
            <BestEntertainmentSection />
          </Stack>
        </Stack>

        <BestExperienceBannerSection />
      </Container>

      <Stack>
        <Container maxWidth="xl" sx={{ mb: 2 }}>
          <Stack className="w-full h-[200px] relative rounded-3xl! mt-38! mb-10! reveal">
            <Image
              src={"/images/colops.png"}
              alt="s"
              fill
              className="animate-slide-in-left !"
            />
          </Stack>
          <CommonQuestions />
          <CommentSlider />
        </Container>
        <Stack mb={7}>
          <MainBlog />
        </Stack>
        <ExtraFooterInformation honerOfColobrate={false} moreToRead={true} />
      </Stack>
    </Stack>
  );
}
