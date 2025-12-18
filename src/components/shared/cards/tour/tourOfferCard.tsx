import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default async function TourOfferCard() {
  return (
    <Card
      sx={{
        width: "100%",
        // height: 400,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        borderRadius: 1.3,
        boxShadow: 0,
        background: "white",
        "& img": { transition: "transform 0.4s ease-in-out" },
        "&:hover img": { transform: "scale(1.15)" },
      }}
      className="border-1! border-slate-200! "
    >
      {/* Media area */}
      <Box sx={{ position: "relative", flex: "0 0 52%" }}>
        <Box sx={{ height: "90%", borderRadius: 2, overflow: "hidden", m: 1.2 }}>
          <CardMedia
            component="img"
            image={"/images/hotel-offer.png"}
            alt={""}
            sx={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
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
          <Typography variant="h6" className="text-base! mb-3!">
            تور کیش هتل آرامیس
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
            <Typography variant="body1" className="text-slate-400! text-sm!">
              از 16 تا 19 خرداد
            </Typography>
          </Box>
        </div>

        <div className="half-circle-divider">
          <span className="half-circle left"></span>
          <hr />
          <span className="half-circle right"></span>
        </div>

        <div className="flex! items-end! justify-center! w-full! p-0!">
          <Button className="bg-[#F5F7FA]! px-1! w-[90%]! rounded-lg!" sx={{ boxShadow: "none" }} variant="contained">
            <div className="flex! flex-row-reverse! justify-between! items-center! w-full! px-2!">
              <Typography className="font-semibold! text-[13px]! sm:text-base!">15,020,000تومان</Typography>
              <Typography className="text-[10px]! sm:text-sm text-nowrap! text-slate-400!">هر نفر برای 3 شب</Typography>
            </div>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
