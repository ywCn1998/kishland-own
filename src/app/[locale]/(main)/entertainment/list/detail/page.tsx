"use client";
import { useState } from "react";
import Image from "next/image";
import {
  AccessTimeOutlined,
  FavoriteBorderOutlined,
  InfoOutlineRounded,
  LocationOnOutlined,
  MessageOutlined,
  MonitorHeart,
  PercentOutlined,
  PhoneCallback,
  RemoveRedEye,
  Share,
  ShareOutlined,
  Star,
  InfoOutlined
} from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { RatingModal } from "@/components/shared/modal/ratingModal";
import ShareModal from "@/components/shared/modal/shareModal/shareModal";
import RulesOfHotel from "@/components/shared/ui/rules";
import { entertainmentRules } from "@/components/shared/ui/rules/entertainmentRules";
import { CommonQuestions, OfferBanner } from "@/components/shared/ui";
import SansList from "./_components/sansList";
import LearnMore from "./_components/learnMore";
import PeopleComments from "@/components/shared/ui/peopleComments";
import ViewsGalleryStrip from "@/app/[locale]/(main)/tour/(landing)/_components/ViewsGalleryStrip";
import BlogCard from "@/components/shared/cards/blogCard";
import CustomAccordion from "@/components/shared/collapse/collapse";
import ViewsOfHotel from "@/app/[locale]/(main)/tour/(landing)/_components/ViewsOfHotelSection";
import FixedBottomButton from "@/components/shared/fixedBottomBotton/fixedBottomBotton";

export type DayItem = {
  id: string;
  dateFa: string;
  nameFa: string;
  isWeekend?: boolean;
};

const days: DayItem[] = [
  { id: "d1", dateFa: "۲۰ فروردین", nameFa: "چهارشنبه" },
  { id: "d2", dateFa: "۲۱ فروردین", nameFa: "پنج‌شنبه", isWeekend: true },
  { id: "d3", dateFa: "۲۲ فروردین", nameFa: "جمعه", isWeekend: true },
  { id: "d4", dateFa: "۲۳ فروردین", nameFa: "شنبه" },
  { id: "d5", dateFa: "۲۴ فروردین", nameFa: "یک‌شنبه" },
  { id: "d6", dateFa: "۲۵ فروردین", nameFa: "دو شنبه", isWeekend: true },
  { id: "d7", dateFa: "۲۶ فروردین", nameFa: "سه‌شنبه" },
  { id: "d8", dateFa: "۲۷ فروردین", nameFa: "چهارشنبه" },
  { id: "d9", dateFa: "۲۸ فروردین", nameFa: "پنج‌شنبه", isWeekend: true },
  { id: "d10", dateFa: "۲۹ فروردین", nameFa: "جمعه", isWeekend: true },
  { id: "d11", dateFa: "۳۰ فروردین", nameFa: "شنبه" },
  { id: "d12", dateFa: "۳۱ فروردین", nameFa: "یک‌شنبه" },
  { id: "d13", dateFa: "۱ اردیبهشت", nameFa: "دو شنبه", isWeekend: true },
  { id: "d14", dateFa: "۲ اردیبهشت", nameFa: "سه‌شنبه" },
];


export default function EntertainmentDetail() {
  const [openM, setOpenM] = useState<boolean>(false);
  const [share, setShare] = useState<boolean>(false);
  const galleryImages: string[] | undefined = [
    "/images/entertainment/doostan.png",
    "/images/entertainment/doostan.png",
    "/images/entertainment/doostan.png",
    "/images/entertainment/doostan.png",
  ];


  return (


    <Container maxWidth="xl" sx={{ mt: { xs: 3, lg: 0 } }}>
      <Grid container spacing={2}>
        <Grid size={{ md: 1 }}>
          <Stack className=" flex flex-row! md:flex-col! items-center gap-4 overflow-x-auto!">
            <Stack className="border-1 border-slate-200  rounded-3xl p-2! md:p-4">
              <RemoveRedEye sx={{ fontSize: { xs: 25, md: 30 } }} color="primary" />
            </Stack>

            <Stack className="border-1 border-slate-200  rounded-full p-2! md:p-4">
              <InfoOutlineRounded sx={{ fontSize: { xs: 25, md: 30 } }} color="inherit" />
            </Stack>

            <Stack className="border-1 border-slate-200  rounded-full p-2! md:p-4">
              <LocationOnOutlined sx={{ fontSize: { xs: 25, md: 30 } }} color="inherit" />
            </Stack>

            <Stack className="border-1 border-slate-200  rounded-full p-2! md:p-4">
              <MessageOutlined sx={{ fontSize: { xs: 25, md: 30 } }} color="inherit" />
            </Stack>

            <Stack className="border-1 border-slate-200  rounded-full p-2! md:p-4">
              <ShareOutlined sx={{ fontSize: { xs: 25, md: 30 } }} color="inherit" />
            </Stack>

            <Stack className="border-1 border-slate-200  rounded-full p-2! md:p-4">
              <PhoneCallback sx={{ fontSize: { xs: 25, md: 30 } }} color="inherit" />
            </Stack>
          </Stack>
        </Grid>

        <Grid size={{ md: 11 }}>
          <Stack className="md:border-1 border-slate-200 flex flex-col! md:flex-row! gap-6  rounded-2xl md:px-4 py-6 w-full ">
            <Stack className="hidden! lg:flex! flex-row! gap-2">
              <Stack className="flex flex-col! gap-2">
                <Image
                  className="rounded-lg"
                  src="/images/entertainment/list/jong.jpg"
                  alt="jong"
                  height={230}
                  width={80}
                  style={{
                    width: "80px",
                    height: "50%",
                    flex: 1,
                  }}
                  objectFit="fill"
                />

                <Stack className=" flex! flex-col! items-center rounded-lg justify-center gap-2 bg-[#FA50501A] flex-1">
                  <PercentOutlined />

                  <Typography sx={{ color: "#FA5050" }}>تا ۲۵٪</Typography>
                  <Typography sx={{ color: "#FA5050" }}>تخفیف</Typography>
                </Stack>
              </Stack>

              <Image
                src="/images/entertainment/list/jong.jpg"
                alt="jong"
                className="rounded-lg"
                height={230}
                width={178}
                style={{
                  width: "178px",
                  height: "230px",
                }}
                objectFit="fill"
              />
            </Stack>

            <Stack className="lg:hidden! h-[350px]! w-full! md:w-1/3!  relative!">
              <Image src={galleryImages[1]} alt="image-gallery" fill />
              {/* <BlogCard
                description={""}
                imageUrl={galleryImages[1]} // مسیر عکس خود را قرار دهید
                height={300}
              /> */}
              <Stack className="absolute! bottom-6! px-6! w-full! z-10!">
                <ViewsGalleryStrip images={galleryImages} additionalImages={galleryImages! as any} />
              </Stack>
            </Stack>

            <Stack className="flex flex-col! full-height justify-evenly gap-2 flex-1 relative!">
              <Stack className="sm:flex! md:block! sm:flex-row-reverse! sm:items-center!  sm:justify-between!">
                <Stack
                  className="flex flex-row! gap-3 py-2!"
                  divider={<Divider orientation="vertical" />}
                >
                  <Stack className="flex flex-row! gap-1">
                    <MonitorHeart sx={{ color: "#13D397" }} className="text-lg! sm:text-xl! md:text-2xl!" />
                    <Typography sx={{ color: "#13D397" }} className="text-xs! sm:text-sm!">
                      34 گردشگر پیشنهادمی کنند
                    </Typography>
                  </Stack>

                  <Stack className="flex flex-row! gap-1">
                    <Star sx={{ color: "#FFA733" }} className="text-lg! md:text-2xl!" />
                    <Typography sx={{ color: "#FFA733" }}>4.9</Typography>
                  </Stack>
                </Stack>

                <Typography className="text-xl! sm:text-2xl! my-2! md:my-0! md:text-3xl! font-bold!">
                  تله کابین میکامال کیش
                </Typography>
              </Stack>

              <Grid container spacing={1}>
                <Grid size={{ xs: "auto" }}>
                  <Stack className="h-10! text-nowrap! border-1 border-slate-200 rounded-xl! items-center! flex flex-row! px-3 py-3 w-fit!">
                    <AccessTimeOutlined sx={{ color: "#626E94" }} className="text-lg! md:text-2xl!" />
                    <Typography color="textSecondary" className="text-xs! md:text-base!">180 دقیقه</Typography>
                  </Stack>
                </Grid>

                <Grid size={{ xs: "auto" }}>
                  <Stack className="h-10! border-1 border-slate-200 rounded-xl! items-center! flex flex-row! px-3 py-3 ">
                    <Typography className="text-nowrap! text-xs! md:text-base!">دارای کافی شاپ</Typography>
                  </Stack>
                </Grid>

                <Grid size={{ xs: "auto" }}>
                  <Stack className="h-10! border-1 border-slate-200 rounded-xl! items-center! flex flex-row! px-3 py-3 ">
                    <Typography className="text-nowrap! text-xs! md:text-base!">خانوادگی</Typography>
                  </Stack>
                </Grid>
              </Grid>

              <Stack className="flex! flex-row! md:flex-col! items-center! md:items-start! justify-between! md:justify-start! mt-3! md:mt-0! gap-1!">
                <Typography className="text-sm! md:text-base! md:mt-4!" color="text.secondary">قیمت / نفر</Typography>

                <Typography
                  className="text-xl! md:text-2xl!"
                  variant="h4"
                  color="secondary"
                >
                  350,000 تومان
                </Typography>
              </Stack>
            </Stack>

            <Stack className="flex flex-col! justify-between ">
              <Stack className="md:flex! flex-row! items-center justify-end gap-2! mb-2! md:mb-0!">
                <IconButton
                  className="border-1! border-[#7E8AAB]!  "
                  onClick={() => setOpenM(!openM)}
                >
                  <FavoriteBorderOutlined />
                </IconButton>

                <IconButton
                  className="border-1! border-[#7E8AAB]!"
                  onClick={() => setShare(!share)}
                >
                  <Share />
                </IconButton>
              </Stack>
              <RatingModal open={openM} setOpen={setOpenM} />
              <ShareModal open={share} setOpen={setShare} />

              <Button
                variant="contained"
                href="/fa/entertainment/reserve"
                className="text-sm! sm:text-base! rounded-xl! py-3! px-8!"
                sx={{backgroundColor: "secondary.50", color: "text.secondary"}}
              >
                انتخاب سانس
              </Button>
            </Stack>
          </Stack>
          <SansList days={days} />
          {/* <LearnMore /> */}
          <Accordion
            disableGutters
            elevation={0}
            square
            className="xs-fullwidth"
            sx={{
              py: 1,
              mt: 4,
              px: { xs: 2, md: 0 },
              "&.Mui-expanded": {
                backgroundColor: "transparent",
              },
              boxShadow: "none",
              border: "none",
              "&:before": {
                display: "none",
              },
              borderRadius: { xs: 0, md: 2 }
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`section1-content`}
              id={`section1-header`}
              sx={{
                borderBottom: 1,
                borderBottomColor: "#E1E6F0",
              }}
            >
              <Stack className="flex! flex-row! items-center gap-2!">
                <Typography
                  className="text-lg! sm:text-xl! md:text-2xl! font-semibold!"
                  component="span"
                >
                  هتل کوروش را بهتر ببینید و بشناسید
                </Typography>
              </Stack>
            </AccordionSummary>

            <AccordionDetails className="p-0!">
              <Stack mt={2} className="hidden! md:block!">
                <ViewsOfHotel hasDetails={true} />
              </Stack>
              <Stack mt={2} className="md:hidden!">
                <ViewsOfHotel isHotelLocation isIntegrated hasDetails={true} />
              </Stack>
            </AccordionDetails>
          </Accordion>


          <Accordion
            disableGutters
            elevation={0}
            square
            sx={{
              py: 1,
              mt: 4,
              backgroundColor: "transparent",
              boxShadow: "none",
              border: "none",
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`rules-content`}
              id={`rules-header`}
              sx={{
                borderBottom: 1,
                borderBottomColor: "#E1E6F0",
              }}
            >
              <Stack className="flex! flex-row! items-center gap-2!">
                <Typography
                  className="text-lg! sm:text-xl! md:text-2xl! font-semibold!"
                  component="span"
                >
                  شرایط و ضوابط
                </Typography>
              </Stack>
            </AccordionSummary>
            <AccordionDetails className="p-0! pt-4!">
              <RulesOfHotel rules={entertainmentRules} />
            </AccordionDetails>
          </Accordion>
          <Accordion
            disableGutters
            elevation={0}
            square
            sx={{
              py: 1,
              mt: 4,
              backgroundColor: "transparent",
              boxShadow: "none",
              border: "none",
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`faq-content`}
              id={`faq-header`}
              sx={{
                borderBottom: 1,
                borderBottomColor: "#E1E6F0",
              }}
            >
              <Stack className="flex! flex-row! items-center gap-2!">
                <Typography
                  className="text-lg! sm:text-xl! md:text-2xl! font-semibold!"
                  component="span"
                >
                  سوالات متداول
                </Typography>
              </Stack>
            </AccordionSummary>
            <AccordionDetails className="p-0! pt-4!">
              <CommonQuestions hasTItle={false} />
            </AccordionDetails>
          </Accordion>
          <Stack className="mt-16! mb-10!">
            <PeopleComments />
          </Stack>
          {/* <Stack className="lg:!bg-[#F0F7FF] !bg-[#F5F7FA] lg:rounded-3xl! reveal xs-fullwidth !hidden lg:!flex mt-4!">
              <Container maxWidth="xl">
                <OfferBanner
                  responsiveCaption="بهترین ها را در کیش میسازیم برای شما"
                  caption=" یه سر به اینا هم بزن بقیه دوست داشتن ..."
                  title={" شاید اینا رو دوست داشتی "}
                  buttonText={"مشاهده تمام تفریحات"}
                  className="lg:!bg-[#F0F7FF] !bg-[#F5F7FA]"
                />
              </Container>
              <Stack sx={{ p: 4, pt: 0 }}>
                <YouMayLoveSection />
              </Stack>
            </Stack> */}
        </Grid>
        <Stack className="md:hidden! w-full! ">
          <FixedBottomButton py={1.2} >
            <Stack className="flex-row-reverse! items-center! gap-5! sm:gap-6! w-full! justify-between! px-4!">
              <Button variant="contained" className="text-white! py-3! w-auto sm:w-1/2!">ثبت و ادامه</Button>
              <Stack className="gap-2! w-auto!">
                <Typography color="text.secondary" className="text-sm! flex! items-center! gap-2!">
                  قیمت <span className="text-black! text-lg! font-medium!">22000 ت</span>
                </Typography>
                <Typography color="text.secondary" className="text-xs! bg-gray-300! rounded-full! flex! items-center! gap-2! px-3! py-2!">
                  <InfoOutlined />
                  جزئیات رزرو
                </Typography>
              </Stack>
            </Stack>
          </FixedBottomButton>
        </Stack>
      </Grid>
    </Container>
  );
}
