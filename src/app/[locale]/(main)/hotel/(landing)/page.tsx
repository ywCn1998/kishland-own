import {
  Box,
  Container,
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
  OfferBanner,
  WhyKishLand,
} from "@/components/shared/ui";
import {
  LastToursSection,
  ReserveSection,
  TourSearchSection,
  TourSuggestionSlider,
  TravelNowPayTomarrow,
} from "../../tour/(landing)/_components";
import HotelLandingIntro from "./_components/HotelLandingIntro";
import HotelFilters from "./_components/HotelFilters";
import HotelReserveSection from "./_components/HotelReserveSection";
import BlogCard from "@/components/shared/cards/blogCard";
import HotelsCardSection from "./_components/HotelsCardSection";
import MobileHeaderTabs from "@/components/shared/header/mobileHeaderTab";
import MainBanner from "@/components/shared/ui/banner/mainBanner";
import ChanceMobile from "@/components/shared/ui/banner/chanceMobile";

// { params }: { params: { locale: string } }
export default async function Home() {
  // const { locale } = params;
  // setRequestLocale(locale);
  // const t = useTranslations();
  const hotelData = [
    {
      title: "هتل آپارتمان های کیش",
      date: "از 1404/01/20 تا 1404/01/22",
    },
    {
      title: "هتل 5 ستاره",
      date: "از 1404/01/20 تا 1404/01/22",
    },
    {
      title: "هتل 4 ستاره",
      date: "از 1404/01/20 تا 1404/01/22",
    },
  ];
  return (
    <Stack
      style={{ display: "flex", flexDirection: "column", overflowX: "hidden" }}
      className="mb-10!"
    >
      <MobileHeaderTabs />
      <Container maxWidth="xl" disableGutters sx={{ px: { xs: 0, sm: 2, md: 3 }, marginBottom: 5 }}>
        <CategorySlider />
        <Stack px={{ xs: 2, sm: 0 }}>
          <TourSearchSection activePage={"hotel"} />
        </Stack>

        <Stack className="mt-2 flex! flex-col-reverse!">
          <Stack px={{ xs: 2, sm: 0 }}>
            <HotelLandingIntro />
          </Stack>

          <Stack className="mt-1! md:mt-3! md:hidden!">
            <Stack className="bg-slate-100 md:bg-white mx-0! my-5! md:my-0!">
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

              <Container maxWidth="xl" className="mx-auto!" sx={{
                px: { xs: 0, sm: 2, md: 3 }, // xs=0, others keep normal spacing
                pl: { xs: 2 }
              }}
                disableGutters>
                <TourSuggestionSlider />
              </Container>

            </Stack>
          </Stack>

          <Stack className=" md:hidden! px-4 sm:px-0! mt-4" >
            <ChanceMobile />
          </Stack>

          <Stack className="pr-4! sm:pr-0!">
            <LastSearch hotel data={hotelData} />
          </Stack>
        </Stack>


        <img
          src={"/images/hotel/plane.png"}
          className="absolute left-35  top-293 z-0 animate-slide-in-left duration-1000! hidden! md:block!"
        />
        <img
          src={"/images/hotel/dashplane.png"}
          className="absolute left-0 top-280 z-0 animate-slide-in-left duration-1000! hidden! md:block!"
        />
        <Stack className="mt-10 relative">
          <img
            src={"/images/hotel/hotelarrow.png"}
            className="absolute right-105 top-30 reveal-down hidden! md:block!"
          />
          <WhyKishLand path={"/images/hotel/hotelWhyKish.png"} width="360px" />
        </Stack>
        <Box
          component={"img"}
          src={"/images/hotel/hotelNewentertainment.png"}
          sx={{ width: "100%" }}
          className="reveal px-4! sm:px-0! hidden! md:inline!"
        />
        <Box
          component={"img"}
          src={"/images/hotel/hotelNewentertainmentMobile.png"}
          sx={{ width: "100%" }}
          className="reveal px-4! sm:px-0! md:hidden!"
        />
        <Stack className="lg:!bg-[#F0F7FF] !bg-[#F5F7FA] lg:rounded-3xl! reveal xs-fullwidth !hidden lg:!flex mt-10 px-4! md:px-0!">
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
          <MainBanner href="/fa/hotel/list" />
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
          <LastToursSection umbrella={false} titles={false} isHotel={true} />
        </Stack>
        <Stack className="px-4! md:px-0!">
          <HotelReserveSection />
        </Stack>
        <Box
          component={"img"}
          src={"/images/hotel/hotelgoonloan.png"}
          sx={{ width: "100%" }}
          className="mt-16! reveal cursor-pointer! hidden! md:inline!"
        />

        <Stack className="md:hidden!" mt={5}>
          <CommonQuestions responsive={true} hasTItle={false} hasFooter={false} />
        </Stack>

        <Stack className="hidden! md:block">
          <CommonQuestions responsive={true} />
        </Stack>

        <CommentSlider />
        <Container maxWidth="xl" disableGutters>
          <MainBlog />
        </Container>
      </Container>
      <Stack mt={-10}>
        <ExtraFooterInformation honerOfColobrate={false} hotels={true} />
      </Stack>
    </Stack>
  );
}
