import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { Rating, Stack } from "@mui/material";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MoodIcon from "@mui/icons-material/Mood";

// 2. -------- کامپوننت کارت محصول (با قابلیت دریافت Props) --------
export default async function HotelCards({
  image,
  title,
  description,
  startDate,
  endDate,
  height,
  rating,
  nights,
  time,
  price,
  discount,
  commentsCount,
  happiness,
}: {
  image?: string;
  title?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  height?: string;
  rating?: string;
  nights?: string;
  time?: string;
  price?: string;
  discount?: string;
  commentsCount?: string;
  happiness?: string;
}) {
  // product prop حاوی اطلاعات یک محصول است
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 500,
        maxHeight: 540,
        display: "flex",
        flexDirection: "column",
        borderRadius: 1.3,
        boxShadow: 0,
        background: "white",
        overflow: "hidden",
        "& img": { transition: "transform 0.4s ease-in-out" },
        "&:hover img": { transform: "scale(1.02)" },
      }}
      className="border-1! border-slate-200! reveal"
    >
      {/* Media area */}
      <Box sx={{ position: "relative", flex: "0 0 52%" /* ~208px of 400 */ }}>
        {/* Put spacing on wrapper instead of image padding */}
        <Box
          sx={{
            height: "90%",
            borderRadius: { sm: 1, lg: 2 },
            overflow: "hidden",
            mx: 1.5,
            
          }}
        >
          <CardMedia
            component="img"
            image={image}
            alt={""}
            sx={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>

      {/* Content area */}
      <CardContent
        sx={{
          flex: 1, // takes remaining space
          pt: 1,
          px: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        className="mb-0! pb-4!"
      >
        <div className="px-3!">
          <Stack className="flex! flex-row! justify-between! items-center! mb-4!">
            <div className="flex! flex-row! justify-between! items-center! gap-1!">
              <Rating
                className="!text-lg lg:text-xl! "
                defaultValue={5} // ⭐⭐⭐☆☆
              />
              <span className="text-[#FFA733] text-xs lg:text-xs! font-bold text-nowrap">
                {rating}
              </span>
            </div>
            <div className="flex! flex-row! justify-between! items-center! lg:gap-1! gap-1">
              <span className="text-slate-500! lg:text-xs! text-xs">
                ({commentsCount} نظر)
              </span>
               <span className="text-slate-500! lg:text-sm! text-xs font-medium">
                {happiness}/5
              </span>
              <MoodIcon
                sx={{ color: "green" }}
                className="lg:text-xl! !text-sm "
              />
            </div>
          </Stack>
          <Typography
            variant="h6"
            className="!text-sm lg:text-lg! font-semibold! mb-2!"
          >
            {title}
          </Typography>
          <Typography
            variant="h4"
            className="!text-sm lg:text-base! font-light! mb-4! text-slate-500"
          >
            <LocationOnIcon fontSize="small" className="text-red" /> آدرس :{" "}
            {description}
          </Typography>

          <Stack className="flex! flex-row! justify-between">
            <Button color="secondary" className="px-1! py-2!">
              مشاهده بر روی نقشه
            </Button>{" "}
            <Button color="secondary" className="px-1! py-2!">
              {" "}
              اطلاعات هتل
            </Button>
          </Stack>
        </div>

        <div className="half-circle-divider overflow-hidden mt-4">
          <span className="half-circle left"></span>
          <hr />
          <span className="half-circle right"></span>
        </div>

        <div className="flex! flex-col items-center justify-center! w-full! pt-3! gap-3">
          <Stack className="bg-red-100  w-[90%]! items-center py-2 rounded-md">
            <Typography className="text-red text-sm! font-semibold!">
              تا {discount} تخفیف
            </Typography>
          </Stack>
          <Stack
            className="bg-[#F5F7FA]! px-1! w-[90%]! rounded-lg! py-2!"
            sx={{ boxShadow: "none" }}
          >
            <div className="flex! flex-row-reverse! justify-between! items-center! w-full! !px-1 lg:px-2!">
              <Button
                variant="contained"
                className="bg-slate-200! py-5! rounded-sm! lg:rounded-lg! !px-1 lg:!px-3"
                href="/fa/hotel/hotel-details"
              >
                <Typography className="!text-xs lg:!text-base">
                  مشاهده
                </Typography>
              </Button>
              <Stack className="flex flex-col gap-2 p-1">
                <Stack className="flex flex-row! gap-1">
                  <Typography className="!text-xs lg:text-sm! text-nowrap! text-slate-500">
                    شروع قیمت برای
                  </Typography>
                  <Typography className="!text-xs lg:text-sm! text-nowrap! text-primary">
                    {nights} شب
                  </Typography>
                </Stack>

                <Typography className="!text-[10px] lg:text-lg! text-nowrap! font-semibold!">
                  {price}
                </Typography>
              </Stack>
            </div>
          </Stack>
        </div>
      </CardContent>
    </Card>
  );
}
