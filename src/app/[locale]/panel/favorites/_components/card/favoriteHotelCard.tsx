import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextIcon from "@/components/shared/textIcon";
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { Stack } from "@mui/material";
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

// 2. -------- کامپوننت کارت محصول (با قابلیت دریافت Props) --------
export default function FavoriteHotelCard({ isTicketTemplate = false }: { isTicketTemplate?: boolean }) {
    // product prop حاوی اطلاعات یک محصول است
    return (
        <Card
            sx={{
                width: "100%",
                // height: 400,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",          // clip zoomed image
                borderRadius: 1.3,
                boxShadow: 0,
                backgroundColor: isTicketTemplate ? "secondary.50" : "white",
                "& img": { transition: "transform 0.4s ease-in-out" },
                "&:hover img": { transform: "scale(1.15)" },
            }}
            className={`${!isTicketTemplate && "border-1! border-slate-200!"}`}
        >
            {/* Media area */}
            <Box sx={{ position: "relative", flex: "0 0 52%" /* ~208px of 400 */ }}>
                {/* Put spacing on wrapper instead of image padding */}
                <Box sx={{ height: "90%", borderRadius: 2, overflow: "hidden", m: 1.2, position: "relative" }}>
                    <CardMedia
                        component="img"
                        image={"/images/hotel-armis.png"}
                        alt={""}
                        sx={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <Stack className="rounded-lg! p-2! absolute! z-10! top-3! left-3!" sx={{ backgroundColor: "error.main" }}>
                        <FavoriteOutlinedIcon className=" text-white! text-xl!" />
                    </Stack>
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
                <Stack className="flex! flex-row! justify-between! items-center! px-3!" mb={1.5}>
                    <TextIcon text="5 ستاره (32 نظر)" className="text-base!" startIcon={<StarPurple500OutlinedIcon className="text-[#FFA733]! text-lg!" />} />
                    <Button sx={{ backgroundColor: "error.main" }} className="rounded-lg! text-white! p-2! text-sm!">تا 25 % تخفیف</Button>
                </Stack>
                <div className="px-3!">
                    <Typography variant="h6" className="text-lg! mb-3!">
                        هتل بین المللی کیش
                    </Typography>

                    <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                        <TextIcon startIcon={<FmdGoodOutlinedIcon className="text-lg!" />} text="آدرس : تقاطع بلوار سنایی و بلوار دریا" className="text-slate-400! text-sm!" />
                    </Box>
                </div>

                {
                    isTicketTemplate ? (
                        <div className="half-circle-divider-white my-2!">
                            <span className="w-6! h-5! bg-white! rounded-full!"></span>
                            <hr />
                            <span className="bg-white! w-6! h-5! rounded-full!"></span>
                        </div>
                    ) : (
                        <div className="half-circle-divider my-2! text-white!">
                            <span className="half-circle left"></span>
                            <hr />
                            <span className="half-circle right"></span>
                        </div>
                    )
                }

                <div className="flex! items-end! justify-center! w-full! p-0!">
                    <Button className="bg-[#F5F7FA]! px-1! w-[90%]! rounded-lg!" sx={{ boxShadow: "none" }} variant="contained">
                        <Typography fontWeight={500} className="text-sm! text-[#06274B]!">مشاهده هتل</Typography>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
