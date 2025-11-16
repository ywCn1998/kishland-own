"use-client";
import { useState } from "react";
import Image from "next/image";
import {
  AccessTimeOutlined,
  CloseRounded,
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
} from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Container,
  Dialog,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import DaysSwiper from "./_components/dateSlider";
import SanseCard from "./_components/sanseCard";
import RatingModal from "../../../modal";
import ShareModal from "@/components/shared/modal/shareModal/shareModal";
import CategoryDetailCards from "../../../(landing)/categories/_components/categoryDetailCards";
import CityCenterLoactions from "@/app/[locale]/tour/hotel-location/_locationModalComponents/cityCenterLocations";
import RulesOfHotel from "@/components/shared/_components/rolesOfHotel";
import { entertainmentRules } from "@/components/shared/_components/rolesOfHotel/entertainmentRules";
import { CommonQuestions, OfferBanner } from "@/components/shared/_components";
import SansList from "./_components/sansList";
import LearnMore from "./_components/learnMore";
import PeopleComments from "@/components/shared/_components/peopleComments";

type DayItem = {
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

interface IProps {
  open: boolean;
  onClose: (val: boolean) => void;
}

export default function EntertainmentDetailDialog({ open, onClose }: IProps) {
  const [openM, setOpenM] = useState<boolean>(false);
  const [share, setShare] = useState<boolean>(false);
  return (
    <Dialog
      fullWidth
      open={open}
      maxWidth={false}
      sx={{
        padding: 0,
        margin: 0,
        "& .MuiDialog-paper": {
          width: "100%",
          height: "93%",
          maxHeight: "93%",
          margin: 0,
          borderRadius: 0,
          maxWidth: "100%",
          alignSelf: "flex-end",
          borderTopLeftRadius: "24px",
          borderTopRightRadius: "24px",
        },
      }}
      onClose={() => onClose(false)}
    >
      <Stack className="flex-1 bg-white! pb-30">
        <IconButton className="absolute right-0 -top-5 z-10">
          <CloseRounded sx={{ color: "white" }} />
        </IconButton>

        <Grid container className="px-8">
          <Grid size={{ md: 1 }}>
            <Stack className=" flex flex-col! items-center gap-4">
              <Stack className="border-1 border-slate-200  rounded-3xl p-4">
                <RemoveRedEye sx={{ fontSize: 30 }} color="primary" />
              </Stack>

              <Stack className="border-1 border-slate-200  rounded-full p-4">
                <InfoOutlineRounded sx={{ fontSize: 30 }} color="inherit" />
              </Stack>

              <Stack className="border-1 border-slate-200  rounded-full p-4">
                <LocationOnOutlined sx={{ fontSize: 30 }} color="inherit" />
              </Stack>

              <Stack className="border-1 border-slate-200  rounded-full p-4">
                <MessageOutlined sx={{ fontSize: 30 }} color="inherit" />
              </Stack>

              <Stack className="border-1 border-slate-200  rounded-full p-4">
                <ShareOutlined sx={{ fontSize: 30 }} color="inherit" />
              </Stack>

              <Stack className="border-1 border-slate-200  rounded-full p-4">
                <PhoneCallback sx={{ fontSize: 30 }} color="inherit" />
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ md: 11 }}>
            <Stack className="border-1 border-slate-200 flex flex-row! gap-6  rounded-2xl px-4 py-6 w-full">
              <Stack className="flex flex-row! gap-2">
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

                  <Stack className="flex flex-col! items-center rounded-lg justify-center gap-2 bg-[#FA50501A] flex-1">
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

              <Stack className="flex flex-col! full-height justify-evenly gap-2 flex-1">
                <Stack
                  className="flex flex-row! gap-3"
                  divider={<Divider orientation="vertical" />}
                >
                  <Stack className="flex flex-row! gap-1">
                    <MonitorHeart sx={{ color: "#13D397" }} />
                    <Typography sx={{ color: "#13D397" }}>
                      34 گردشگر پیشنهادمی کنند
                    </Typography>
                  </Stack>

                  <Stack className="flex flex-row! gap-1">
                    <Star sx={{ color: "#FFA733" }} />
                    <Typography sx={{ color: "#FFA733" }}>4.9</Typography>
                  </Stack>
                </Stack>

                <Typography className="text-3xl! font-bold!">
                  تله کابین میکامال کیش
                </Typography>

                <Stack className="flex flex-row! items-center gap-2 ">
                  <Stack className="border-1 border-slate-200 rounded-xl flex flex-row! px-3 py-3 ">
                    <AccessTimeOutlined sx={{ color: "#626E94" }} />
                    <Typography color="textSecondary">180 دقیقه</Typography>
                  </Stack>

                  <Stack className="border-1 border-slate-200 rounded-xl flex flex-row! px-3 py-3 ">
                    <Typography>دارای کافی شاپ</Typography>
                  </Stack>

                  <Stack className="border-1 border-slate-200 rounded-xl flex flex-row! px-3 py-3 ">
                    <Typography>خانوادگی</Typography>
                  </Stack>
                </Stack>

                <Typography className="mt-4!">قیمت / نفر</Typography>

                <Typography
                  sx={{ fontSize: "24px" }}
                  variant="h4"
                  color="secondary"
                >
                  350,000 تومان
                </Typography>
              </Stack>

              <Stack className="flex flex-col! justify-between">
                <Stack className="flex flex-row! items-center justify-end gap-2">
                  <IconButton
                    className="border-1! border-[#7E8AAB]!  "
                    onClick={() => setOpenM(!openM)}
                  >
                    <FavoriteBorderOutlined />
                  </IconButton>

                  <IconButton
                    className="border-1! border-[#7E8AAB]!  "
                    onClick={() => setShare(!share)}
                  >
                    <Share />
                  </IconButton>
                </Stack>
                <RatingModal open={openM} setOpen={setOpenM} />
                <ShareModal open={share} setOpen={setShare} />

                <Button
                  variant="contained"
                  color="inherit"
                  href="/fa/entertainment/reserve"
                >
                  انتخاب سانس
                </Button>
              </Stack>
            </Stack>
            <SansList days={days} />
            <LearnMore />
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
                    className="text-2xl! font-semibold!"
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
                    className="text-2xl! font-semibold!"
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
            <Stack className="mt-16!">
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
        </Grid>
      </Stack>
    </Dialog>
  );
}
