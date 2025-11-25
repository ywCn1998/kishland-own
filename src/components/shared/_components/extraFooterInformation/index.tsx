import AboutSection from "@/components/shared/_components/extraFooterInformation/_components/information";
import Journey from "@/components/shared/_components/extraFooterInformation/_components/journey";
import { Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import GoldenText from "../GoldenText";
import FooterHotels from "./_components/hotels";
import HotelsList from "@/app/[locale]/tour/(landing)/_components/HotelsList";

export default function ExtraFooterInformation({
  honerOfColobrate = true,
  moreToRead = false,
  companies = true,
  hotels = false,
  hasHeader = true
}: {
  honerOfColobrate?: boolean;
  moreToRead?: boolean;
  companies?: boolean;
  hotels?: boolean;
  hasHeader?: boolean
}) {
  return (
    <Container maxWidth="xl">
      {/* partners */}
      {honerOfColobrate && (
        <Stack
          className="flex! flex-col! justify-center! items-center! "
          mt={5}
          spacing={2}
        >
          <Typography className="text-slate-400! text-sm! lg:text-lg! reveal-down">
            افتخار همکاری با این شرکت ها را داریم
          </Typography>
          <GoldenText
            textClass="text-3xl! lg:text-5xl! font-bold! reveal-down"
            text="همکاران کیش لندیار"
            bgColor="orange"
            bgWidth="125%"
            bgColorSx={{ left: -47, bottom: -10 }}
            bgHeight={0}
          />
        </Stack>
      )}

      {companies && (
        <Stack className="xs-fullwidth">
          <Stack
            sx={{ objectFit: "contain" }}
            className="relative! h-36! w-full! reveal !hidden lg:!block"
            mt={5}
            spacing={2}
          >
            <Image src="/images/partners.png" alt="s" fill />
          </Stack>
          <Stack
            sx={{ objectFit: "contain" }}
            className="relative! h-36! w-full! reveal lg:!hidden "
            mt={5}
            spacing={2}
          >
            <Image src="/footer/partnersresponsive.png" alt="s" fill />
          </Stack>
        </Stack>
      )}
      {
        hotels && (
          <HotelsList className="bg-white! px-0!" />
        )
      }

      <Stack mt={{ lg: companies ? 10 : 5, xs: 2 }} spacing={{ lg: 3, xs: 4 }}>
        {
          hasHeader && (
            <>
              <Typography className="text-slate-400! text-sm! lg:text-base! reveal-down leading-[30px]!">
                <span className="text-[#088DEF]">تور کیش،</span> تور کیش ارزان و تور
                کیش لحظه آخری با بهترین قیمت ها شامل{" "}
                <span className="text-[#088DEF]">
                  تور کیش از تهران ، تور کیش از مشهد ، تور کیش از شیراز ، و تور کیش از
                  اصفهان{" "}
                </span>{" "}
                با بلیط چارتر هواپیما و ترنسفر رایگان - تورهای لحظه آخری کیش با تخفیف
                ویژه
              </Typography>
              <Stack spacing={{ lg: 2, xs: 4 }}>
                <GoldenText
                  textClass="!text-xl lg:text-4xl! font-semibold! reveal-down "
                  textColor="primary"
                  bgWidth="81%"
                  bgColor="orange"
                  text={
                    <>
                      <span className="text-black!">راهنمای تور کیش با </span>{" "}
                      کیشلندیار
                    </>
                  }
                />

                <Typography className="text-gray-900! text-sm! leading-[30px]! md:text-base! reveal-down ">
                  جزیره کیش یکی از زیبا ترین جزیره های مرجانی در جهان است که همه ساله
                  پذیرای سیل عظیمی از گردشگران تور کیش چه از داخل کشور و چه از خارج
                  کشور است. جزیره کیش دارای مکان های تاریخی بسیاری می باشد که برخی از
                  آن ها مانند شهر زیر زمینی کاریز کیش و شهر تاریخی حریره با قدمتی بیش
                  از 1000 سال شناخته می شوند.
                </Typography>
                {moreToRead && (
                  <Button
                    className="text-slate-400! texr-lg! w-full! mt-8!"
                    variant="outlined"
                  >
                    خواندن بیشتر توضیحات
                  </Button>
                )}
              </Stack>
            </>
          )
        }


      </Stack>

      <Journey />

      <AboutSection />
    </Container>
  );
}
