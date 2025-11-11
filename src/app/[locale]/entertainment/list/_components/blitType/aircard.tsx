"use client";
import {
  AccessTimeOutlined,
  CloudCircle,
  LocationOn,
  LocationOnOutlined,
  MapOutlined,
  PinOutlined,
  Search,
  WhatshotOutlined,
} from "@mui/icons-material";
import { Button, Divider, Grid, Stack, Typography } from "@mui/material";
import HotelClassIcon from "@mui/icons-material/HotelClass";

// @ts-ignore
import { UilFire, UilMapMarker } from "@iconscout/react-unicons";

export function AirCard({ onClick }: { onClick: (val: boolean) => void }) {
  return (
    <Grid size={12}>
      <Stack
        alignItems={"center"}
        // reveal
        className="flex w-full flex-col border-1 border-slate-200 rounded-2xl   p-4"
      >
        <Stack
          alignItems={"center"}
          sx={{
            position: "relative",
            width: "100%",
            gap: 2,
          }}
          className="flex md:flex-row! flex-col!"
          onClick={() => onClick(true)}
        >
          <img
            src={"/images/entertainment/list/jong.jpg"}
            className="md:h-[265px] h-[150px] w-full! md:w-auto!"
          />

          <Stack
            className="w-full md:flex-row! flex-col!"
            sx={{ alignItems: "stretch" }} // ensure children stretch vertically
          >
            {/* -------- LEFT SIDE -------- */}
            <Stack className="md:w-4/6! w-full! flex flex-col!">
              <Stack className="flex! flex-row! items-center! justify-between!">
                <Stack className="md:hidden! flex! flex-row! gap-1! items-center!">
                  <HotelClassIcon color="success" className="text-base!" />
                  <Typography color="textSecondary" className="text-sm!">
                    (32 نظر) 4.8/5
                  </Typography>
                </Stack>
                <Stack className="text-white! bg-[#FA5050] self-start p-2 md:p-3 rounded-lg flex flex-row! gap-2 items-center!">
                  <UilFire className="text-sm! md:text-base!" />
                  <Typography className="text-sm! md:text-base!">
                    پیشنهاد ویژه کیش لندیار
                  </Typography>
                </Stack>
              </Stack>

              <Typography
                className="mt-4!"
                sx={{ fontSize: { xs: "24px", sm: "26px" } }}
                fontWeight={600}
              >
                جنگ شبانه پازل شو کیش
              </Typography>

              <Stack className="hidden! md:flex! flex-row! gap-1! items-center! mt-4!">
                <HotelClassIcon color="success" className="text-base!" />
                <Typography color="textSecondary">(32 نظر) 4.8/5</Typography>
              </Stack>

              <Stack className="flex flex-row! gap-2 md:mt-12 mt-6  items-center!">
                <UilMapMarker color={"#FA5050"} />
                <Typography
                  color="textSecondary"
                  className="text-sm! md:text-base!"
                >
                  آدرس : تقاطع بلوار سنایی و بلوار دریا
                </Typography>
              </Stack>

              <Stack className="flex flex-row! items-center gap-2 mt-2">
                <Stack className="border-1 border-slate-200 rounded-xl flex flex-row! items-center! gap-2 px-3 py-3 ">
                  <AccessTimeOutlined
                    sx={{ color: "#626E94", fontWeight: 100 }}
                    className="md:text-xl! text-base!"
                  />
                  <Typography
                    color="textSecondary"
                    className="md:text-base! text-xs!"
                  >
                    180 دقیقه
                  </Typography>
                </Stack>

                <Stack className="border-1 border-slate-200 rounded-xl flex flex-row! px-3 py-3 ">
                  <Typography
                    color="textSecondary"
                    className="md:text-base! text-xs!"
                  >
                    دارای کافی شاپ
                  </Typography>
                </Stack>

                <Stack className="border-1 border-slate-200 rounded-xl flex flex-row! px-3 py-3 ">
                  <Typography
                    color="textSecondary"
                    className="md:text-base! text-xs!"
                  >
                    خانوادگی
                  </Typography>
                </Stack>
              </Stack>
            </Stack>

            {/* -------- DIVIDER -------- */}
            <Divider
              orientation="vertical"
              flexItem
              sx={(theme) => ({
                mx: 4,
                border: 0,
                borderRight: `2px dashed ${theme.palette.divider}`,
                borderImage: `repeating-linear-gradient(
      to bottom,
      ${theme.palette.divider} 0,
      ${theme.palette.divider} 15px,
      transparent 15px,
      transparent 30px
    ) 1`,
                [theme.breakpoints.down("md")]: {
                  my: 2,
                  mx: 0,
                  width: "100%",
                  height: "2px",
                  borderRight: "none",
                  borderBottom: `2px dashed ${theme.palette.divider}`,
                  borderImage: `repeating-linear-gradient(
        to right,
        ${theme.palette.divider} 0,
        ${theme.palette.divider} 15px,
        transparent 15px,
        transparent 30px
      ) 1`,
                  orientation: "horizontal",
                },
              })}
            />

            {/* -------- RIGHT SIDE -------- */}
            <Stack className="md:w-2/6! w-full! md:flex! flex-col! relative! h-[265px] hidden!">
              <Typography
                variant="button"
                className="rounded-lg py-2 bg-[#FFE5E5] w-full text-center text-[#FA5050]"
              >
                تا 25 % تخفیف
              </Typography>

              <Typography
                className="text-center mt-8! line-through "
                color="textSecondary"
              >
                8,800,000 تومان
              </Typography>
              <Typography
                className="text-center font-bold! md:text-xl! mt-2!"
                color="secondary"
              >
                8,500,000 تومان
              </Typography>

              <Stack className="absolute! bottom-0! flex flex-col! w-full gap-4">
                <Typography
                  className="mt-4! text-center md:text-xs!"
                  color="textSecondary"
                >
                  شروع قیمت برای یک نفر
                </Typography>
                <Button
                  onClick={() => onClick(true)}
                  variant="contained"
                  fullWidth
                  className="text-white! "
                >
                  <Typography>رزرو بلیط</Typography>
                </Button>
              </Stack>
            </Stack>
            <Stack className=" w-full! flex! flex-col!  md:hidden! gap-6!">
              <Stack className="flex! flex-row! items-center! justify-between!">
                <Typography
                  className="text-center line-through "
                  color="textSecondary"
                >
                  8,800,000 تومان
                </Typography>
                <Typography
                  variant="button"
                  className="rounded-lg py-2 bg-[#FFE5E5] w-2/5 text-center text-[#FA5050]"
                >
                  تا 25 % تخفیف
                </Typography>
              </Stack>
              <Stack className="flex! flex-row! items-center! justify-between!">
                <Typography
                  className="text-center font-bold! text-xl!"
                  color="secondary"
                >
                  8,500,000 تومان
                </Typography>{" "}
                <Typography
                  className=" text-center text-xs!"
                  color="textSecondary"
                >
                  شروع قیمت برای یک نفر
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Grid>
  );
}
