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
            لیست سانس ها
          </Typography>
          <Typography color="textSecondary" variant="body1">
            (مبنای قیمت برای 1 نفر)
          </Typography>
        </Stack>
      </AccordionSummary>

      <AccordionDetails className="p-0!">
        <Stack className="w-full! flex flex-col! gap-4 pt-4">
          <DaysSwiper items={days} />

          <Grid container spacing={2}>
            <Grid size={{ md: 6 }}>
              <Stack className="flex flex-row! items-center justify-between py-4!">
                <Typography sx={{ fontWeight: 500 }} variant="h3">
                  سانس ساعت 20:00
                </Typography>
                <Typography color="textSecondary" variant="body1">
                  ۲ مورد
                </Typography>
              </Stack>
              <Divider />

              <Stack className="flex flex-col! gap-5 mt-5">
                <SanseCard />
                <SanseCard />
              </Stack>
            </Grid>

            <Grid size={{ md: 6 }}>
              <Stack className="flex flex-row! items-center justify-between py-4!">
                <Typography sx={{ fontWeight: 500 }} variant="h3">
                  سانس ساعت 20:00
                </Typography>
                <Typography color="textSecondary" variant="body1">
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

          <Grid container spacing={2} className="mt-4!">
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

          <Stack>
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