"use client";

import {
  Avatar,
  Box,
  Button,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";
import TextIcon from "../../textIcon";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NorthWestIcon from "@mui/icons-material/NorthWest";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";
import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined";

type TicketCardProps = {
  isFade?: boolean;
  canBuyTicket?: boolean;
  ticketType?: "انتخاب بلیط برگشت جدید" | "انتخاب بلیط رفت جدید";
  backTicket?: boolean;
  hasBought?: boolean;
  /** If true: change dash color to secondary.50, add end circles, and show footer strip */
  isTicketShape?: boolean;
  /** footer fields (used when isTicketShape) */
  ticketNumber?: string;
  tripLabel?: "بلیط رفت" | "بلیط برگشت"
};

export default function TicketCard({
  isFade = false,
  canBuyTicket,
  ticketType,
  hasBought,
  isTicketShape = false,
  ticketNumber = "۵۵۴۸۷۴۱",
  tripLabel = "بلیط رفت",
}: TicketCardProps) {
  return (
    <Stack
      className={`${!isTicketShape && "border-slate-200! border-1!"} p-4! w-full!  rounded-2xl! bg-white!`}
      sx={{ position: "relative", overflow: "hidden" }}
    >
      {/* Top: Airline + meta */}
      <Stack className="flex! flex-row! justify-between! items-center!">
        <Stack className="flex! flex-row! gap-2 items-center!">
          <Avatar className="h-12! w-12!" src="/images/ir.png" />
          <Stack className="flex! flex-col! gap-3!">
            <Typography className="text-slate-600! text-base!">شرکت ایران ایر</Typography>
            <Typography className="text-slate-500! text-sm!">Airbus A 350-900</Typography>
          </Stack>
        </Stack>

        <Stack className="flex! flex-col! items-end! gap-4!">
          <TextIcon text="15:40" className="text-sm!" endIcon={<WatchLaterIcon className="text-xl!" />} />
          <TextIcon text="1404/01/18" className="text-sm!" endIcon={<CalendarMonthIcon className="text-xl!" />} />
        </Stack>
      </Stack>

      {/* Middle: times + route */}
      <Stack className="flex! flex-row! justify-between! items-center! w-full! mt-7! h-fit! relative!">
        <Stack className="flex! flex-col! gap-3! w-full! justify-between!">
          <Stack className="flex! flex-row! justify-between!">
            <Typography className="text-xl! font-semibold! md:font-normal! md:text-3xl!">18:55</Typography>
            <Typography className="text-xl! font-semibold! md:font-normal! md:text-3xl!">17:25</Typography>
          </Stack>

          <img
            src="/images/plane-dash.png"
            className="hidden! md:inline! absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-7/12 h-9!"
            alt="plane path"
          />

          {tripLabel === "بلیط رفت" ? (
            <img
              src="/images/go-plane-dash.svg"
              className="md:hidden! absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6/12 h-9!"
              alt="plane path"
            />
          ) : (
            <img
              src="/images/back-plane-dash.svg"
              className="md:hidden! absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6/12 h-9!"
              alt="plane path"
            />
          )}

          <Stack className="flex! flex-row! justify-between!">
            <TextIcon text="مشهد (MHD)" className="md:text-xl!" startIcon={<NorthWestIcon />} />
            <TextIcon text="تهران (THR)" className="md:text-xl!" startIcon={<NorthEastIcon />} />
          </Stack>
        </Stack>
      </Stack>

      {/* ===== Divider (with optional ticket shape cues) ===== */}
      <div className="flex! items-center! justify-center! py-6!" style={{ position: "relative" }}>
        <DashDivider
          dashColor={(theme) =>
            isTicketShape
              ? (theme.palette.secondary as any)?.[50] ?? theme.palette.secondary.light
              : "#e2e8f0" // slate-200 fallback
          }
        >
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              style={{ width: i === 0 || i === 24 - 1 ? "6px" : "12px" }}
            />
          ))}
        </DashDivider>

        {/* circles (no border, bg secondary.50), absolutely positioned */}
        {isTicketShape && (
          <>
            <Box
              sx={{
                position: "absolute",
                left: -25,
                top: "50%",
                transform: "translateY(-50%)",
                width: 25,
                height: 25,
                borderRadius: "50%",
                bgcolor: (t) =>
                  (t.palette.secondary as any)?.[50] ?? t.palette.secondary.light,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                right: -25,
                top: "50%",
                transform: "translateY(-50%)",
                width: 25,
                height: 25,
                borderRadius: "50%",
                bgcolor: (t) =>
                  (t.palette.secondary as any)?.[50] ?? t.palette.secondary.light,
              }}
            />
          </>
        )}
      </div>

      {/* ===== Below divider ===== */}
      {isTicketShape ? (
        // Ticket footer strip (like the screenshot)
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
            justifyContent: "space-between",
            // bgcolor: (t) => (t.palette.secondary as any)?.[50] ?? t.palette.secondary.light,
            // px: 2,
            pb: 1,
            pt: 2.25,
            borderBottomLeftRadius: "16px",
            borderBottomRightRadius: "16px",
            mt: -2, // bring it closer to dots; tweak as needed
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1.25}>


            <Button variant="text" className="p-0! md:text-lg!" sx={{ color: "primary.400" }} endIcon={<LocalActivityOutlinedIcon sx={{ color: "primary.400", fontSize: { xs: 16, md: 22 } }} />}> {tripLabel}</Button>

          </Stack>

          <Typography sx={{ color: "text.secondary", fontWeight: 600, fontSize: { xs: 14, md: 18 } }}>
            <Box component="span" sx={{ color: "text.secondary", fontWeight: 600 }}>
              شماره بلیط :
            </Box>{" "}
            {ticketNumber}
          </Typography>
        </Box>
      ) : (
        // Original price/actions section
        <Stack className="flex! flex-row! justify-between! items-center!">
          <Stack className="flex! flex-row! md:gap-3! gap-1! items-center!">
            <Typography className="text-sm! md:text-xl! font-semibold! text-slate-500! text-nowrap!">
              {`2,500,000 تومان`} <span className="text-xs! md:text-base! font-normal!"> / نفری</span>
            </Typography>
            <Chip
              label="10%-"
              sx={{
                borderRadius: "9999px",
                fontSize: { xs: 9, md: 12 },
                py: 0.5,
                backgroundColor: "#f0f7ff",
                color: "#088def",
                fontWeight: 600,
                height: { xs: 20, md: 25 },
              }}
            />
          </Stack>

          {!hasBought ? (
            <Button variant="text" endIcon={<AddIcon className="md:text-xl!" />} color="secondary" className="text-xs! text-nowrap! md:text-base! p-1!">
              انتخاب این بلیط
            </Button>
          ) : (
            <Button variant="text" endIcon={<FilterListIcon />} className="text-xs! md:text-base text-nowrap! p-1! text-red-500!">
              تغییر بلیط رفت
            </Button>
          )}
        </Stack>
      )}

      {/* Overlay (blur) */}
      {isFade && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(7px)",
            WebkitBackdropFilter: "blur(7px)",
          }}
        >
          <Button
            disabled={canBuyTicket}
            startIcon={<AddIcon className="text-xl!" />}
            variant="outlined"
            color="secondary"
            className="rounded-lg! h-[60px]! text-base! font-semibold!"
            sx={{ backgroundColor: "white" }}
          >
            {ticketType}
          </Button>
        </Box>
      )}
    </Stack>
  );
}

/** Dash divider with configurable color */
export const DashDivider = styled("div", {
  shouldForwardProp: (prop) => prop !== "dashColor",
})<{
  dashColor?: string | ((theme: Theme) => string);
}>(({ theme, dashColor }) => {
  const color =
    typeof dashColor === "function"
      ? dashColor(theme)
      : dashColor || "#e2e8f0";

  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "98%",
    gap: "3px",
    "& > span": {
      height: "2px",
      backgroundColor: color,
      borderRadius: 2,
      flexShrink: 0,
    },
  };
});
