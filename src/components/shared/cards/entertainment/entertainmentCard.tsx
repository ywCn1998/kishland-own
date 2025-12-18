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

// 2. -------- کامپوننت کارت محصول (با قابلیت دریافت Props) --------
export default async function EntertainmentCard({
  image,
  title,
  startDate,
  endDate,
  height,
  rating,
  time,
  price,
  dicountedPrice,
}: {
  image?: string;
  title?: string;
  startDate?: string;
  endDate?: string;
  height?: string;
  rating?: string;
  time?: string;
  price?: string;
  dicountedPrice?: string;
}) {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 500,
        display: "flex",
        flexDirection: "column",
        borderRadius: 1.3,
        boxShadow: 0,
        background: "white",
        "& img": { transition: "transform 0.4s ease-in-out" },
        "&:hover img": { transform: "scale(1.15)" },
      }}
      className="border-1! border-slate-200! reveal"
    >
      {/* Media area */}
      <Box sx={{ position: "relative", flex: "0 0 52%" }}>
        <Box
          sx={{
            height: "90%",
            borderRadius: { sm: 1, lg: 2 },
            overflow: "hidden",
            m: 1.2,
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
          flex: 1,
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
                defaultValue={3}
              />
              <span className="text-slate-400 text-xs lg:text-sm!">
                {rating}
              </span>
            </div>
            <div className="flex! flex-row! justify-between! items-center! lg:gap-2! gap-1">
              <WatchLaterIcon
                sx={{ color: "primary.500" }}
                className="lg:text-xl! !text-sm "
              />
              <span className="text-slate-400! lg:text-base! text-xs">
                {time}
              </span>
            </div>
          </Stack>
          <Typography
            variant="h6"
            className="!text-sm lg:text-lg! font-semibold! mb-5!"
          >
            {title}
          </Typography>
        </div>

        <div className="half-circle-divider">
          <span className="half-circle left"></span>
          <hr />
          <span className="half-circle right"></span>
        </div>

        <div className="flex! items-end! justify-center! w-full! pt-3!">
          <Stack
            className="bg-[#F5F7FA]! px-1! w-[90%]! rounded-lg! py-2!"
            sx={{ boxShadow: "none" }}
          >
            <div className="flex! flex-row-reverse! justify-between! items-center! w-full! !px-1 lg:px-2!">
              <Button
                variant="contained"
                className="bg-slate-200! py-3! rounded-sm! lg:rounded-lg! !px-1 lg:!px-4"
              >
                <Typography className="!text-xs lg:!text-lg">افزودن</Typography>
              </Button>
              <Stack>
                <Typography
                  className="!text-[10px] lg:text-xs! text-nowrap! text-slate-400!"
                  sx={{ textDecoration: "line-through" }}
                >
                  {price}
                </Typography>
                <Typography className="!text-xs lg:text-base! text-nowrap! font-semibold!">
                  {dicountedPrice}
                </Typography>
              </Stack>
            </div>
          </Stack>
        </div>
      </CardContent>
    </Card>
  );
}
