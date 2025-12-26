"use client";
import Image from "next/image";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import DaysSwiper from "./dateSlider";
import SanseCard from "./sanseCard";

type DayItem = {
  id: string;
  dateFa: string;
  nameFa: string;
  isWeekend?: boolean;
};

interface SansListProps {
  days: DayItem[];
  posterImage?: string;
  totalPrice?: string;
  taxNote?: string;
}

export default function SansList({
  days,
  posterImage = "/images/entertainment/list/poster.jpg",
  totalPrice = "585,000 تومان",
  taxNote = "با احتساب 9 درصد مالیات برارزش افزوده",
}: SansListProps) {
  return (
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
          backgroundColor: { xs: "background.paper", md: "transparent" },
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
            لیست سانس ها
          </Typography>
          <Typography color="textSecondary" className="text-xs! sm:text-sm! md:text-base!">
            (مبنای قیمت برای 1 نفر)
          </Typography>
        </Stack>
      </AccordionSummary>

      <AccordionDetails className="p-0!">
        <Stack className="w-full! flex flex-col! gap-4 pt-4">
          <DaysSwiper items={days} />

          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Stack className="flex flex-row! items-center justify-between py-4!">
                <Typography className="text-lg! sm:text-xl! md:text-2xl! font-semibold!">
                  سانس ساعت 20:00
                </Typography>
                <Typography color="textSecondary" className="text-xs! sm:text-sm! md:text-base!">
                  ۲ مورد
                </Typography>
              </Stack>
              <Divider />

              <Stack className="flex flex-col! gap-5 mt-5 w-full">
                <SanseCard />
                <SanseCard />
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Stack className="flex flex-row! items-center justify-between py-4!">
                <Typography className="text-lg! sm:text-xl! md:text-2xl! font-semibold!">
                  سانس ساعت 20:00
                </Typography>
                <Typography color="textSecondary" className="text-xs! sm:text-sm! md:text-base!">
                  ۲ مورد
                </Typography>
              </Stack>
              <Divider />
              <Stack className="flex flex-col! gap-5 mt-5">
                <SanseCard />
                <SanseCard />
                <SanseCard />
              </Stack>
            </Grid>
          </Grid>

          <Grid container spacing={2} className="mt-4! hidden! md:flex!">
            <Grid
              size={{ md: 6 }}
              className="flex flex-col! items-center justify-center gap-2"
            >
              <Typography variant="h3" color="primary">
                {totalPrice}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {taxNote}
              </Typography>
            </Grid>

            <Grid size={{ md: 6 }} className="flex flex-col! gap-2">
              <Button variant="contained" color="primary">
                <Typography variant="button" sx={{ color: "white" }}>
                  رزرو و دریافت بلیط
                </Typography>
              </Button>
              <Button variant="contained" color="secondary">
                <Typography variant="button" sx={{ color: "white" }}>
                  ادامه خرید
                </Typography>
              </Button>
            </Grid>
          </Grid>

          <Stack className="hidden! md:block!">
            <Image
              src={posterImage}
              alt="poster"
              height={150}
              width={200}
              style={{
                width: "100%",
                height: "490px",
                marginTop: 40,
              }}
            />
          </Stack>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}
