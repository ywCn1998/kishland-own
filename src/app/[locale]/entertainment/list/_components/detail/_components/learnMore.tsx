"use client";
import Image from "next/image";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import CityCenterLoactions from "@/app/[locale]/tour/hotel-location/_components/cityCenterLocations";
import CategoryDetailCards from "@/app/[locale]/entertainment/(landing)/categories/_components/categoryDetailCards";

export interface ImageGalleryItem {
  src: string;
  alt?: string;
  height?: number;
  width?: number;
}

interface LearnMoreProps {
  title?: string;
  description?: string;
  locationTitle?: string;
  images?: {
    mediumVertical?: string;
    mediumHorizontal?: string[];
    small?: string[];
    big?: string;
    extra?: string;
  };
  showCategoryCards?: boolean;
  showLocation?: boolean;
}

export default function LearnMore({
  title = "شوی شبانه کیش (اتحاد جنگ ها ) را بهتر ببینید و بشناسید",
  description = "بلیط شما حکم پول شماست و همراه داشتن آن هنگام مراجعه به برنامه الزامیست*این بلیط طبق قوانین چارتری صادر گردیده و غیر قابل عودت و کنسلی میباشد.*اعتبار استفاده از بلیت،طبق تاریخ درج شده بر روی بلیت بوده و در صورت انقضا،بلیت فاقد اعتبار می باشد{{*شماره صندلی و ردیف مانند پرواز در هنگام مراجعه به پذیرش یک ساعت قبل از شروع برنامه تعیین خواهد شد.}}برای اشغال هر صندلی تهیه بلیت الزامی است وشرایط سنی مطرح نیست*تهیه ی بلیت برای کودکان ۴ سال به بالا الزامی بوده*",
  locationTitle = "موقعیت مکانی دقیق تفریح و فاصله آن تا جا های مهم شهر",
  images = {
    mediumVertical: "/images/entertainment/list/detail/medium-ver.png",
    mediumHorizontal: [
      "/images/entertainment/list/detail/medium-horiz.png",
      "/images/entertainment/list/detail/medium-horiz.png",
    ],
    small: [
      "/images/entertainment/list/detail/small.png",
      "/images/entertainment/list/detail/small.png",
      "/images/entertainment/list/detail/small.png",
      "/images/entertainment/list/detail/small.png",
    ],
    big: "/images/entertainment/list/detail/big.png",
    extra: "/images/entertainment/list/detail/extra.png",
  },
  showCategoryCards = true,
  showLocation = true,
}: LearnMoreProps) {
  return (
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
        aria-controls={`section1-content`}
        id={`section1-header`}
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
            {title}
          </Typography>
        </Stack>
      </AccordionSummary>

      <AccordionDetails className="p-0! pt-8!">
        <Grid container spacing={2}>
          <Grid size={{ md: 8 }} container spacing={2}>
            <Grid size={{ md: 12 }}>
              <Image
                alt="ban"
                src={images.mediumVertical || "/images/entertainment/list/detail/medium-ver.png"}
                height={300}
                width={100}
                style={{
                  height: "300px",
                  width: "100%",
                  borderRadius: "12px",
                }}
              />
            </Grid>
            <Grid size={{ md: 12 }} container spacing={2}>
              <Grid size={{ md: 6 }} container spacing={2}>
                {images.mediumHorizontal?.map((src, index) => (
                  <Grid key={index} size={{ md: 6 }}>
                    <Image
                      alt="ban"
                      src={src}
                      height={170}
                      width={100}
                      style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "12px",
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
              <Grid size={{ md: 6 }} container className="h-full!">
                <Grid
                  size={{ md: 6 }}
                  className="h-full! flex flex-col! gap-4!"
                >
                  {images.small?.slice(0, 2).map((src, index) => (
                    <Image
                      key={index}
                      alt="ban"
                      src={src}
                      height={170}
                      width={100}
                      style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "12px",
                      }}
                    />
                  ))}
                </Grid>

                <Grid
                  size={{ md: 6 }}
                  className="h-full! flex flex-col! gap-4!"
                >
                  {images.small?.slice(2, 4).map((src, index) => (
                    <Image
                      key={index}
                      alt="ban"
                      src={src}
                      height={170}
                      width={100}
                      style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "12px",
                      }}
                    />
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid size={{ md: 4 }} className="flex flex-col! gap-4!">
            {images.big && (
              <Image
                alt="ban"
                src={images.big}
                height={250}
                width={100}
                style={{
                  height: "250px",
                  width: "100%",
                  borderRadius: "12px",
                }}
              />
            )}
            {images.extra && (
              <Image
                alt="ban"
                src={images.extra}
                height={390}
                width={100}
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "12px",
                }}
              />
            )}
          </Grid>
        </Grid>

        {description && (
          <Typography>{description}</Typography>
        )}

        {showCategoryCards && (
          <Stack className="mt-8!">
            <CategoryDetailCards />
          </Stack>
        )}

        {showLocation && (
          <Stack className="border-1 border-slate-200! px-4! py-8! rounded-xl mt-16!">
            <Typography className="text-2xl! " fontWeight={700} mb={1}>
              {locationTitle}
            </Typography>
            <CityCenterLoactions />
          </Stack>
        )}
      </AccordionDetails>
    </Accordion>
  );
}
