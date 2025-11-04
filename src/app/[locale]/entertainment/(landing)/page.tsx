import { Stack, Container, Typography, Box } from "@mui/material";
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
import Link from "next/link";

const activityData = [
  { title: "کشتی تفریحی کارینا کیش" },
  { title: "کشتی امیرکبیر کیش" },
];
export default function Home() {
  return (
    <Stack
      style={{ display: "flex", flexDirection: "column", overflowX: "hidden" }}
      className="mb-10!"
    >
      <Container maxWidth="xl">
        <Stack className="hidden! md:block!">
          <CategorySlider />
        </Stack>
        <Stack className="hidden! md:block!">
          <BodyIntroSection />
        </Stack>

        <Stack spacing={10} className="md:mt-8! mt-2!">
          <SearchTabSection />

          <LastSearch data={activityData} />
          <Stack className="mt-4! w-full! md:hidden!">
            <Stack
              className="flex! flex-row! gap-3! items-center! rounded-xl! py-3!"
              sx={{ backgroundColor: "secondary.50" }}
            >
              <img src="/images/chance.png" className="h-12! w-12!" alt="" />
              <Stack className="flex! flex-col! gap-2!">
                <Typography
                  sx={{ fontWeight: 500, color: "secondary.main" }}
                  className="text-base!"
                >
                  شانس <span className="text-black!">امروزتو امتحان کن</span>
                </Typography>
                <Typography color="text.secondary" className="text-xs!">
                  هر روز یک گردونه شانس با کلی جایزه
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          <Stack className="mt-[20px]! md:mt-0!">
            <WhyKishLand path="/images/tirex-dolphin.png" width="w-[380px]!" />

          </Stack>
        </Stack>

        {/* banner */}
        <Stack className="w-full h-[450px] relative rounded-3xl! mt-10! mb-20! reveal hidden! md:block">
          <Link href="/fa/entertainment/list">
            <Image
              src={"/images/sea-chair.png"}
              alt="s"
              fill
              className="animate-slide-in-left !"
            />
          </Link>
        </Stack>
        <Box className="w-full h-[140px]  rounded-3xl! mt-5! mb-20! reveal md:hidden!">
          <Link href="/fa/entertainment/list">
            <Image
              src={
                "/images/entertainment/landing/responsiveentertainmentbanner.png"
              }
              alt="s"
              fill
              className="animate-slide-in-left w-full!"
            />
          </Link>
        </Box>

        {/* discounded tours */}
        <Stack className="hidden! md:block!">
          <DicountedEntertainmentSection />

        </Stack>

        <Stack className="mt-[-120]! md:mt-0!">
          <BuyOneGetTwoSection />

          {/* banner */}
          <Stack className="w-full h-[300px] relative rounded-3xl! mt-38! mb-20! reveal hidden! md:block!">
            <Link href="/fa/hotel/list">
              {" "}
              <Image
                src={"/images/tafrih-banner.png"}
                alt="s"
                fill
                className="animate-slide-in-left! cursor-pointer!"
              />
            </Link>
          </Stack>
        </Stack>

        <Box className="mt-10! md:mt-0!">
          <OfferBanner
            bgColor="white"
            caption="این بار این سفر واست خاطره میشه ..."
            responsiveCaption="این بار این سفر واست خاطره میشه ..."
            title={"پکیج دلخواهت رو انتخاب کن "}
            buttonText={"مشاهده لیست پیشنهادات ها"}
            href="/fa/entertainment/list"
          />
        </Box>

        {/* acconamy */}
        <EconomyPackageSection />

        <Stack className="bg-[#F0F7FF] rounded-3xl! md:mt-20! mt-20! pb-8! mb-0! md:mb-28! reveal hidden! md:block!">
          <OfferBanner
            caption="جایی که آرامش و تفریح یکجا معنا پیدا میکنند "
            title="بهترین تفریحات کیش"
            buttonText="مشاهده لیست تفریحات"
            className="p-0!"
            href="/fa/entertainment/list"
          />

          <Stack className="px-8!">
            <BestEntertainmentSection />
          </Stack>
        </Stack>

        <BestExperienceBannerSection />
      </Container>

      <Stack>
        <Container maxWidth="xl" sx={{ mb: 2 }}>
          <Stack className="w-full h-[200px] relative rounded-3xl! mt-38! mb-10! reveal hidden! md:block!">
            <Image
              src={"/images/colops.png"}
              alt="s"
              fill
              className="animate-slide-in-left !"
            />
          </Stack>
          <Box className="hidden! md:block!">
            <CommonQuestions />
          </Box>
          <Box className=" md:hidden!">
            <CommonQuestions responsive={true} hasTItle={false} hasFooter={false} />
          </Box>
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
