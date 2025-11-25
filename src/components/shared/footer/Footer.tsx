"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { PhoneOutlined } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useState } from "react";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import BackpackOutlinedIcon from "@mui/icons-material/BackpackOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
import { useAtom } from "jotai";
import { hasFooterResponsive } from "@/store/atomHeader";
const footerSections = [
  {
    title: "خدمات کیشلندیار",
    items: [
      {
        icon: <ApartmentOutlinedIcon fontSize="small" />,
        text: "هتل ها و اقامت گاه ها ",
      },
      {
        icon: <BackpackOutlinedIcon fontSize="small" />,
        text: "تور های گردشگری",
      },
      { icon: <BackpackOutlinedIcon fontSize="small" />, text: "تفریحات کیش" },
      {
        icon: <BackpackOutlinedIcon fontSize="small" />,
        text: "خدمات لوکس و vip",
      },
    ],
  },
  {
    title: "تور کیش از ...",
    items: [
      {
        icon: <ApartmentOutlinedIcon fontSize="small" />,
        text: "تور کیش از مشهد",
      },
      {
        icon: <BackpackOutlinedIcon fontSize="small" />,
        text: "تور کیش از شیراز",
      },
      {
        icon: <BackpackOutlinedIcon fontSize="small" />,
        text: "تور کیش از اصفهان",
      },
      {
        icon: <BackpackOutlinedIcon fontSize="small" />,
        text: "تور کیش از تهران",
      },
      {
        icon: <BackpackOutlinedIcon fontSize="small" />,
        text: "مشاهده کامل تور ها",
      },
    ],
  },
  {
    title: "لینک ها و مطالب مفید",
    items: [
      {
        icon: <ApartmentOutlinedIcon fontSize="small" />,
        text: "نقشه کامل کیش",
      },
      {
        icon: <BackpackOutlinedIcon fontSize="small" />,
        text: "مجله خبری و گردشگری",
      },
      {
        icon: <BackpackOutlinedIcon fontSize="small" />,
        text: "بهترین هتل‌های کیش",
      },
      {
        icon: <BackpackOutlinedIcon fontSize="small" />,
        text: "سفرنامه‌های کاربران",
      },
      {
        icon: <BackpackOutlinedIcon fontSize="small" />,
        text: "مشاهده کامل تور ها",
      },
    ],
  },
  {
    title: "کیشلندیار",
    items: [
      {
        icon: <ApartmentOutlinedIcon fontSize="small" />,
        text: "مجله گردشگری",
      },
      {
        icon: <BackpackOutlinedIcon fontSize="small" />,
        text: "مجله خبری و گردشگری",
      },
      {
        icon: <BackpackOutlinedIcon fontSize="small" />,
        text: "انتقادات و پیشنهادات",
      },
      { icon: <BackpackOutlinedIcon fontSize="small" />, text: "درباره ما" },
      { icon: <BackpackOutlinedIcon fontSize="small" />, text: "تماس با ما" },
    ],
  },
];

export function Footer() {
  const theme = useTheme();
  const t = useTranslations("Footer");
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [footer] = useAtom(hasFooterResponsive);
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange =
    (panelIndex: number) =>
      (_event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panelIndex : false);
      };

  if (isMobile && !footer) {
    return null;
  }

  return (
    <Stack
      component="footer"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // maxWidth: "1440px", // keep it centered and not too wide
        // borderTop: "1px solid #ddd",
        mb: { xs: 4, lg: 0 },
        paddingTop: { xs: 0, lg: 7 },
        marginX: "auto",
        borderRadius: 2, // optional if you want rounded edges
        // bgcolor: "#fff", // white card loo
      }}
    >
      <Container maxWidth="xl">
        <Stack
          flexDirection={{ xs: "column", lg: "row" }}
          alignItems="center"
          justifyContent="space-between"
          mx={"auto"}
          gap={{ lg: 20, xs: 0 }}
        >
          <Grid
            container
            spacing={14}
            justifyContent={"end"}
            className="hidden! lg:!flex"
          >
            <Grid size={3} className="flex flex-col gap-5 ">
              <Typography
                className="text-lg! font-bold! reveal-down"
                sx={{ mb: 3 }}
              >
                خدمات کیشلندیار
              </Typography>

              <Stack gap={2}>
                <FooterLinkSection type="address" value={"تور های گردشگری"} />
                <FooterLinkSection type="address" value={"تفریحات کیش"} />
                <FooterLinkSection type="email" value="خدمات لوکس و vip" />
              </Stack>
            </Grid>

            <Grid size={3} display={"flex"} flexDirection={"column"}>
              <Typography
                className="text-lg! font-bold! reveal-down"
                sx={{ mb: 3 }}
              >
                تور کیش از ...
              </Typography>

              <Stack gap={2}>
                <FooterLinkSection type="address" value={"تور کیش از مشهد"} />
                <FooterLinkSection type="address" value={"تور کیش از شیراز"} />
                <FooterLinkSection type="email" value="تو کیش از اصفهان" />
                <FooterLinkSection type="email" value="تور کیش از تهران" />
                <FooterLinkSection type="email" value="مشاهده کامل تور ها" />
              </Stack>
            </Grid>
            <Grid size={3} display={"flex"} flexDirection={"column"}>
              <Typography
                className="text-lg! font-bold! reveal-down"
                sx={{ mb: 3 }}
              >
                لینک ها و مطالب مفید
              </Typography>

              <Stack gap={2}>
                <FooterLinkSection type="address" value={"نقشه کامل کیش"} />
                <FooterLinkSection
                  type="address"
                  value={"مجله خبری و گردشگری"}
                />
                <FooterLinkSection type="email" value="بهترین هتل‌های کیش" />
                <FooterLinkSection type="email" value="سفرنامه‌های کاربران" />
                <FooterLinkSection type="email" value="مشاهده کامل تور ها" />
              </Stack>
            </Grid>

            <Grid size={3} display={"flex"} flexDirection={"column"}>
              <Typography
                className="text-lg! font-bold! reveal-down"
                sx={{ mb: 3 }}
              >
                کیشلندیار
              </Typography>

              <Stack gap={2}>
                <FooterLinkSection type="address" value={"مجله گردشگری"} />
                <FooterLinkSection
                  type="address"
                  value={"مجله خبری و گردشگری"}
                />
                <FooterLinkSection type="email" value="انتقادات و پیشنهادات" />
                <FooterLinkSection type="email" value="درباره ما" />
                <FooterLinkSection type="email" value="تماس با ما" />
              </Stack>
            </Grid>
          </Grid>
          <Stack className="flex flex-col lg:!hidden w-full mt-[-20]!">
            {footerSections.map((section, i) => (
              <Accordion
                key={i}
                expanded={expanded === i}
                onChange={handleChange(i)}
                sx={{
                  border: "none",
                  boxShadow: "none",
                  "&:before": { display: "none" },
                }}
              >
                <AccordionSummary
                  expandIcon={expanded === i ? <RemoveIcon /> : <AddIcon />}
                >
                  <Typography className="!text-lg">{section.title}</Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Stack gap={4}>
                    {section.items.map((item, idx) => (
                      <Stack
                        key={idx}
                        direction="row"
                        alignItems="center"
                        gap={1}
                      >
                        <Typography className="text-slate-500! text-nowrap! reveal-down">
                          {item.icon}
                        </Typography>
                        <FooterLinkSection type="address" value={item.text} />
                      </Stack>
                    ))}
                  </Stack>
                </AccordionDetails>
              </Accordion>
            ))}
            <Divider className="!mt-5" />
          </Stack>

          <Grid
            size={12}
            display={"flex"}
            alignItems={"center"}
            flexDirection={{ lg: "column", xs: "row" }}
            gap={4}
            className="lg:border-1! border-slate-200! rounded-xl! p-4"
          >
            <div className="flex! flex-row! gap-8! reveal">
              <div className="relative !w-20 !h-20    lg:w-25! lg:h-25!  reveal">
                <Image src="/images/e-namad.png" alt="s" fill />
              </div>
              <div className="relative !w-20 !h-20    lg:w-25! lg:h-25! reveal ">
                <Image src="/images/e-namad.png" alt="s" fill />
              </div>
            </div>
            <div className="relative !w-20 !h-20    lg:w-25! lg:h-25!  reveal">
              <Image src="/images/samandehi.png" alt="s" fill />
            </div>
          </Grid>
        </Stack>
        <Divider className="lg:!hidden !mt-5" />
        {/* <Stack className="flex lg:!hidden"> */}
      </Container>

      <Container maxWidth="xl">
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent={{ lg: "space-between", xs: "space-around" }}
          my={{ lg: 5, xs: 2 }}
        >
          <div className=" flex-row! gap-2! items-center reveal !hidden lg:!flex">
            <Image
              src="/images/speaker.png"
              alt="speaker"
              width={70}
              height={70}
            />
            <Typography className="font-bold! text-lg! reveal-down  ">
              ما را در شبکه های اجتماعی دنبال کنید
            </Typography>
          </div>

          <Stack className="h-full! flex! flex-row! items-center! !gap-3 lg:gap-5!  reveal">
            <div className="lg:border-1! border-slate-200! py-2! px-2! lg:py-7! lg:px-5! rounded-lg!">
              <YouTubeIcon className="text-[30px]! lg:text-[40px]! text-slate-400!" />
            </div>
            <div className="lg:border-1! border-slate-200! py-2! px-2! lg:py-7! lg:px-5! rounded-lg!">
              <TelegramIcon className="text-[30px]! lg:text-[40px]! text-slate-400!" />
            </div>
            <div className="lg:border-1! border-slate-200! py-2! px-2! lg:py-7! lg:px-5! rounded-lg!">
              <InstagramIcon className="text-[30px]! lg:text-[40px]! text-slate-400!" />
            </div>
            <div className="lg:border-1! border-slate-200! py-2! px-2! lg:py-7! lg:px-5! rounded-lg!">
              <WhatsAppIcon className="text-[30px]! lg:text-[40px]! text-slate-400!" />
            </div>
            <div className="lg:border-1! border-slate-200! py-2! px-2! lg:py-7! lg:px-5! rounded-lg!">
              <TwitterIcon className="text-[30px]! lg:text-[40px]! text-slate-400!" />
            </div>
            <div className="lg:border-1! border-slate-200! py-2! px-2! lg:py-7! lg:px-5! rounded-lg!">
              <FacebookIcon className="text-[30px]! lg:text-[40px]! text-slate-400!" />
            </div>
          </Stack>
        </Stack>
        <Divider sx={{ my: 2 }} />
      </Container>

      <Container maxWidth="xl">
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          gap={2}
          pb={{ lg: 3, xs: 10 }}
          mt={2}
        >
          <CopyrightOutlinedIcon className=" text-slate-400!" />
          <Typography className="!text-xs  text-slate-400! leading-loose!">
            کلیه حقوق این وب سایت متعلق است به آژانس هواپیمایی سریع سیر.طراحی و
            پیاده سازی توسط تیم IT کیشلندیار
          </Typography>
        </Stack>
      </Container>
    </Stack>
  );
}

const FooterLinkSection = ({
  value,
}: // type
  {
    value: string;
    type: "phone" | "email" | "address" | "link";
  }) => {
  return (
    <Stack className=" w-full  flex-row! gap-2 ">
      {/* <PhoneOutlined /> */}
      <Typography
        sx={{ textAlign: "start" }}
        className="text-slate-500! text-nowrap! reveal-down"
      >
        {value}
      </Typography>
    </Stack>
  );
};

const FooterImage = ({ image, link }: { image: string; link: string }) => {
  return (
    <Link href={link}>
      <Image
        src={image}
        alt={image}
        height={60}
        width={60}
        style={{
          maxWidth: "100%",
          objectFit: "contain",
        }}
      />
    </Link>
  );
};
