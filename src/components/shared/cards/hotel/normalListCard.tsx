import { Box, Card, Typography, CardContent, Button, CardMedia, Stack, Rating, Divider } from "@mui/material";
import Image from "next/image";
import { LocalFireDepartment as UilFire } from '@mui/icons-material';
import {
    Star as StarIcon,
    Stars as StarsIcon,
} from '@mui/icons-material';
import TextIcon from "../../textIcon";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { WideListCard } from "./wideListCard";

interface INormalListCard {
    isWide?: boolean;
    isOfferCard?: boolean;
    baught?: boolean;
}

export default function NormalListCard({ isWide, isOfferCard = false, baught = false }: INormalListCard) {
    return (
        <>
            {!isWide ? (
                <Card
                    sx={{
                        width: "100%",
                        // height: 400,
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden",          // clip zoomed image
                        borderRadius: 1.5,
                        boxShadow: 0,
                        background: "white",
                        "& img": { transition: "transform 0.4s ease-in-out" },
                        "&:hover img": { transform: "scale(1.15)" },
                        height: "auto"
                    }}
                    className="border-1! border-slate-200! "
                >
                    {/* Media area */}
                    <Box sx={{ p: 0.5, height: { xs: 250, md: 240 } }}>
                        {/* Put spacing on wrapper instead of image padding */}
                        <Box sx={{ height: "100%", position: "relative", borderRadius: 1.5, overflow: "hidden", m: 1.2 }}>
                            <Image src={"/images/building1.png"} alt="building" fill />
                            {isOfferCard && (
                            <Stack className="items-center! text-white! bg-[#FA5050] self-start p-3 rounded-lg flex flex-row! gap-2 z-10! absolute! bottom-2! right-2!">
                                <UilFire className="text-white!" />
                                <Typography className="text-sm!">
                                    پیشنهاد ویژه کیش لندیار
                                </Typography>
                            </Stack>
                            )}
                        </Box>
                    </Box>

                    {/* Content area */}
                    <CardContent
                        sx={{
                            flex: 1, // takes remaining space
                            pt: 2,
                            px: 1.3,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "",
                            height: "50%",
                            gap: 1.6
                        }}
                        className="mb-0! pb-4! relative!"
                    >
                        <Stack className="flex! flex-row! justify-between! items-center!">
                            <Stack className="flex! items-center! gap-3! flex-row!">
                                <Rating
                                    name="hover-feedback"
                                    value={5}
                                    precision={0.5}
                                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                />
                                {!isOfferCard &&
                                    <Typography className="md:text-sm! text-xs!" color="primary.main">هتل پنج ستاره</Typography>
                                }
                            </Stack>
                            <TextIcon endIcon={<StarsIcon color="success" className="md:text-xl! text-sm!" />} className="text-sm!" sx={{ color: "text.secondary" }} text={<Typography className="md:text-sm! text-xs!">{isOfferCard && <Typography className="text-sm!" component={'span'}> (32 نظر) </Typography>} 4.8/5</Typography>} />
                        </Stack>
                        <Stack className="flex! flex-col! gap-2!">
                            <Typography className="text-xl!" fontWeight={isOfferCard ? 500 : 500}>هتل بین المللی کیش </Typography>
                            <TextIcon className="text-sm!" text="آدرس : تقاطع بلوار سنایی و بلوار دریا" startIcon={<LocationOnIcon color={"error"} sx={{ color: isOfferCard ? "text.secondary" : "" }} />} />
                            {!isOfferCard && (
                                <Stack className="flex! flex-row!" mt={1.5}>
                                    <Button color="secondary" variant="text" className="p-0! text-sm!">مشاهده بر روی نقشه</Button>
                                    <Button color="secondary" variant="text" className="p-0! text-sm! mr-16!" href="/fa/hotel/hotel-details">اطلاعات هتل</Button>
                                </Stack>
                            )}
                        </Stack>
                        {baught ?
                            <Stack className="flex! flex-col! gap-2! items-start! p-4! bg-[#F5F7FA]! rounded-lg! mt-4!">
                                <Typography className="text-xs! text-slate-500!">
                                    قیمت کل تور ۲ مسافر : 18,900,000 تومان
                                </Typography>
                                <Typography className="text-lg! font-semibold!" color="secondary">
                                    18,500,000 تومان
                                </Typography>
                            </Stack>
                            :
                            <>
                                <div className="half-circle-divider flex!">
                                    <span className="half-circle left bg-[#e1e6f0]! w-3!"></span>
                                    {/* <hr className="text-[#e1e6f0]! bg-[#e1e6f0]!" /> */}
                                    <Divider orientation="horizontal" className="text-[#e1e6f0]!" />
                                    <span className="half-circle right bg-[#e1e6f0]!  w-3!"></span>
                                </div>


                                <Typography
                                    variant="button"
                                    fontWeight={isOfferCard ? 500 : 700}
                                    className={`mt-5! md:mt-0! rounded-lg py-2 ${isOfferCard ? "bg-white! border-1! border-[#FA5050]! " : "bg-[#FFE5E5]"} w-full text-center text-[#FA5050]`}
                                >
                                    تا 25 % تخفیف
                                </Typography>

                                <Stack className="flex! flex-row! justify-between! items-center! bg-slate-100! rounded-2xl! p-2!">
                                    <Stack className="flex! flex-col! gap-2!">
                                        <Typography className="text-sm!" color="text.secondary"> شروع قیمت برای <Typography className="text-sm! mr-1!" component={"span"} color="primary"> 1 شب </Typography></Typography>
                                        <Typography className="font-semibold! text-lg!">15,020,000تومان</Typography>
                                    </Stack>
                                    <Button className="bg-slate-200! h-16! rounded-lg! text-[#06274B]!">مشاهده</Button>
                                </Stack>

                            </>}


                    </CardContent>
                </Card>
            ) : <WideListCard isHotelListCard={true} />}
        </>
    )
}
