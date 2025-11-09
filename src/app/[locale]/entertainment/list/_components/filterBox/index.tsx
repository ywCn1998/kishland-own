"use client";
import * as React from "react";
import {
  Slider,
  Box,
  Rating,
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  Stack,
  Typography,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DeleteOutline } from "@mui/icons-material";
import CollapseSelect from "./_components/CollapseSelect";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ChanceCard from "../chanceCard";

const enterns = [
  { title: "کشتی های تفریحی", id: 0, count: 13 },
  { title: "جنگ های شبانه", id: 1, count: 20 },
  { title: "تفریحات آبی", id: 2, count: 2 },
  { title: "پارس سافاری", id: 3, count: 80 },
  { title: "پارک ها", id: 4, count: 9 },
  { title: "رستوران های با موزیک", id: 5, count: 23 },
];

// 🔶 Custom styled switch
const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: 74,
  height: 40,
  padding: 0,
  display: "flex",
  borderRadius: 100,
  alignItems: "center",
  flexDirection: "row",
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(32px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#F79009", // orange when active
        opacity: 1,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 0 0 1px rgba(0,0,0,0.1)",
    width: 37,
    height: 37,
    borderRadius: "50%",
    backgroundColor: "#fff",
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    opacity: 1,
    backgroundColor: "#E1E6F0", // gray when inactive
  },
}));

export default function FilterBox() {
  return (
    <Stack>
      <Stack className="flex flex-row! items-center justify-between">
        <Typography variant="body2">فیلتر ها</Typography>

        <Stack className="flex flex-row! items-center gap-2">
          <Typography color="error" variant="caption">
            حذف فیلتر
          </Typography>
          <DeleteOutline color="error" />
        </Stack>
      </Stack>

      <Divider variant="fullWidth" className="mt-5! mb-2!" />

      <CollapseSelect title="نوع تفریح" id="accordion1" options={enterns} />

      <CollapseSelect title="نوع خدمات" id="accordion2" options={enterns} />

      <CollapseSelect title="محدودیت سنی" id="accordion3" options={enterns} />

      <CollapseSelect title="نوع دسترسی" id="accordion4" options={enterns} />

      <CollapseSelect title="زمان برگزاری" id="accordion5" options={enterns} />

      <Accordion
        disableGutters
        elevation={0}
        square
        sx={{
          py: 1,
          backgroundColor: "transparent",
          boxShadow: "none",
          border: "none",
          "&:before": {
            display: "none", // remove default divider line
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`accordion6-content`}
          id={`accordion6-header`}
          sx={{
            borderBottom: 1,
            borderBottomColor: "#E1E6F0",
          }}
        >
          <Typography variant="body2" component="span">
            قیمت (تومان)
          </Typography>
        </AccordionSummary>

        <AccordionDetails className="p-0!">
          {/* <Stack
                        className="w-full! flex flex-col! gap-4 pt-4"
                    > */}

          <PriceRange />

          {/* </Stack> */}
        </AccordionDetails>
      </Accordion>

      <FormControlLabel
        sx={{
          m: 0,
          gap: 1, // small spacing between switch and label
          justifyContent: "space-between",
          flexDirection: "row-reverse",
          ".MuiFormControlLabel-label": {
            fontSize: "1rem",
            color: "#6B7280", // gray like in your screenshot
          },
        }}
        label={
          <Typography
            variant="subtitle2"
            color="textSecondary"
            sx={{ py: 2, px: 2 }}
          >
            فقط تخفیف دار ها
          </Typography>
        }
        labelPlacement="end" // default (label on right)
        control={
          <CustomSwitch
          // checked={checked}
          // onChange={(e) => setChecked(e.target.checked)}
          />
        }
      />

      <Divider />

      <Accordion
        disableGutters
        elevation={0}
        square
        sx={{
          py: 1,
          backgroundColor: "transparent",
          boxShadow: "none",
          border: "none",
          "&:before": {
            display: "none", // remove default divider line
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`accordion6-content`}
          id={`accordion6-header`}
          sx={{
            borderBottom: 1,
            borderBottomColor: "#E1E6F0",
          }}
        >
          <Typography variant="body2" component="span">
            امتیاز کاربران
          </Typography>
        </AccordionSummary>

        <AccordionDetails className="p-0!">
          <RateBar />
        </AccordionDetails>
      </Accordion>

      <ChanceCard
        title="شانس امروزتو امتحان کن !"
        description="هر روز یک گردونه شانس با کلی جایزه"
        btn_title="بچرخون"
        img="/images/entertainment/list/chance.png"
        onClick={() => console.log("dsaf")}
        className="hidden! md:flex!"
      />

      <ChanceCard
        title={`دو تا تفریح بخر یکی جایزه ببر !!`}
        title_font="34px"
        btn_title="بزن بریم"
        img="/images/entertainment/list/beach.png"
        onClick={() => console.log("dsaf")}
        className="hidden! md:flex!"
      />
    </Stack>
  );
}

const ORANGE = "#F79009"; // track + ring
const RAIL = "#B8C0D9"; // light gray rail
const THUMB_FILL = "#FFF3E0"; // soft cream

function PriceRange() {
  const [value, setValue] = React.useState<number[]>([10_000_000, 90_000_000]);

  return (
    <Stack className="w-full pt-4! ">
      {/* Labels row */}
      <div className="flex justify-between items-center mb-2">
        <Typography sx={{ color: RAIL, fontWeight: 500 }}>
          100,000,000
        </Typography>
        <Typography sx={{ color: RAIL, fontWeight: 500 }}>1,000,000</Typography>
      </div>

      {/* Slider */}
      <Slider
        value={value}
        onChange={(_, v) => setValue(v as number[])}
        min={1_000_000}
        max={100_000_000}
        step={100_000}
        disableSwap
        sx={{
          height: 8, // overall height; rail thickness is set below
          px: 0,
          width: "100%",
          // rail (behind)
          "& .MuiSlider-rail": {
            color: RAIL,
            opacity: 1,
            height: 6,
            borderRadius: 9999,
            width: "100%",
          },
          // track (selected range)
          "& .MuiSlider-track": {
            color: ORANGE,
            height: 6,
            border: "none",
            borderRadius: 9999,
          },
          // thumbs
          "& .MuiSlider-thumb": {
            width: 28,
            height: 28,
            backgroundColor: THUMB_FILL,
            border: `4px solid ${ORANGE}`,
            boxShadow: "none",
            "&:hover, &.Mui-focusVisible": {
              boxShadow: "0 0 0 6px rgba(247,144,9,0.15)",
            },
            "&:before": {
              display: "none", // remove default small circle
            },
          },
        }}
      />
    </Stack>
  );
}

const GRAY = "#B8C0D9";
const PEACH_BG = "#FFF3E0";

const StyledRating = styled(Rating)(({ theme }) => ({
  direction: "rtl", // if your page is RTL you can omit this; kept for clarity
  gap: 8,
  "& .MuiRating-icon": {
    position: "relative",
    width: 28,
    height: 28,
    fontSize: 28,
  },
  // Filled / selected
  "& .MuiRating-iconFilled": {
    color: ORANGE,
    // subtle soft background circle (like the screenshot)
    backgroundColor: PEACH_BG,
    borderRadius: "9999px",
    boxShadow: `0 0 0 2px ${ORANGE}`,
  },
  // Hover color (optional)
  "& .MuiRating-iconHover": {
    color: ORANGE,
  },
  // Empty with a diagonal slash
  "& .MuiRating-iconEmpty": {
    color: GRAY,
    opacity: 1,
  },
  "& .MuiRating-iconEmpty::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    margin: "auto",
    width: "70%",
    height: 2,
    backgroundColor: GRAY,
    transform: "rotate(-25deg)",
    borderRadius: 2,
    opacity: 0.8,
    pointerEvents: "none",
  },
}));

function RateBar() {
  const [value, setValue] = React.useState<number | null>(1);

  return (
    <Box className="w-full flex justify-between items-center gap-4 pt-6">
      {/* Left text (RTL sample) */}
      <StyledRating
        name="custom-rate"
        value={value}
        onChange={(_, v) => setValue(v)}
        icon={<StarRoundedIcon fontSize="inherit" />}
        emptyIcon={<StarRoundedIcon fontSize="inherit" />}
        max={5}
        size="large"
        style={{ direction: "rtl" }}
      />

      <Typography color="textSecondary" variant="body2">
        1 از 5
      </Typography>
    </Box>
  );
}
