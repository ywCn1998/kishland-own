import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import {
  CategorySlider,
  CommentSlider,
  CommonQuestions,
  ExtraFooterInformation,
  LastSearch,
  MainBlog,
  MianBanner,
  OfferBanner,
  WhyKishLand,
} from "@/components/shared/_components";
import {
  LastToursSection,
  ReserveSection,
  TourSearchSection,
  TravelNowPayTomarrow,
} from "../../tour/(landing)/_components";
import HotelLandingIntro from "./_components/HotelLandingIntro";
import HotelFilters from "./_components/HotelFilters";
import HotelReserveSection from "./_components/HotelReserveSection";
import BlogCard from "@/components/shared/cards/blogCard";
import HotelsCardSection from "./_components/HotelsCardSection";

// { params }: { params: { locale: string } }
export default async function Home() {
  // const { locale } = params;
  // setRequestLocale(locale);
  // const t = useTranslations();

  return (
    <Stack
      style={{ display: "flex", flexDirection: "column", overflowX: "hidden" }}
      className="mb-10!"
    >
      <Container maxWidth="xl" sx={{ marginBottom: 5 }}>
        <CategorySlider />
        <TourSearchSection activePage={"hotel"} />
        <HotelLandingIntro />
        <Stack className="mt-2">
          <LastSearch hotel={true} />
        </Stack>
        <img
          src={"/images/hotel/plane.png"}
          className="absolute left-35  top-293 z-0 animate-slide-in-left duration-1000!"
        />
        <img
          src={"/images/hotel/dashplane.png"}
          className="absolute left-0 top-280 z-0 animate-slide-in-left duration-1000!"
        />
        <Stack className="mt-10 relative">
          <img
            src={"/images/hotel/hotelarrow.png"}
            className="absolute right-105 top-30 reveal-down "
          />
          <WhyKishLand path={"/images/hotel/hotelWhyKish.png"} width="360px" />
        </Stack>
        <Box
          component={"img"}
          src={"/images/hotel/hotelNewentertainment.png"}
          sx={{ width: "100%" }}
          className="reveal"
        />
        <Stack className="lg:!bg-[#F0F7FF] !bg-[#F5F7FA] lg:rounded-3xl! reveal xs-fullwidth !hidden lg:!flex mt-10">
          <Container maxWidth="xl">
            <OfferBanner
              responsiveCaption="بهترین ها را در کیش میسازیم برای شما"
              caption=" جایی که آرامش و تفریح یکجا معنا پیدا میکنند "
              title={" بهترین قیمت هتل های کیش "}
              buttonText={"مشاهده لیست هتل ها"}
              className="lg:!bg-[#F0F7FF] !bg-[#F5F7FA]"
              href="/fa/hotel/list"
            />
          </Container>
          <Stack>
            <HotelFilters />
          </Stack>
          <Stack className="p-10 py-8">
            <HotelsCardSection />
          </Stack>
        </Stack>

        <Stack maxWidth="xl" sx={{ mt: 5, width: "100%" }} className="reveal">
          <MianBanner />
        </Stack>
        <Stack className="lg:!bg-[#F0F7FF] !bg-[#F5F7FA] lg:rounded-3xl! reveal xs-fullwidth !hidden lg:!flex mt-10">
          <Container maxWidth="xl" className="mx-auto!">
            <OfferBanner
              responsiveCaption="بهترین ها را در کیش میسازیم برای شما"
              caption=" یه تفریح عالی یه اقامتگاه درجه یک میخواد"
              title={" محبوب‌ترین هتل‌های کیش"}
              buttonText={"مشاهده لیست هتل ها"}
              className="lg:!bg-[#F0F7FF] !bg-[#F5F7FA]"
              href="/fa/hotel/list"
            />
          </Container>
        </Stack>

        <Stack className="sm-fullwidth">
          <LastToursSection umbrella={false} titles={false} />
        </Stack>
        <HotelReserveSection />
        <Box
          component={"img"}
          src={"/images/hotel/hotelgoonloan.png"}
          sx={{ width: "100%" }}
          className="mt-12 reveal cursor-pointer!"
        />

        <CommonQuestions />

        <CommentSlider />
        <Stack className="sm-fullwidth">
          <MainBlog />
        </Stack>
      </Container>
      <Stack mt={-10}>
        <ExtraFooterInformation honerOfColobrate={false} hotels={true} />
      </Stack>
    </Stack>
  );
}
