import { Box, Card, Typography, CardContent, Button, CardMedia, Stack, Rating, Divider } from "@mui/material";
import Image from "next/image";
import { LocalFireDepartment as UilFire } from '@mui/icons-material';
import {
    Star as StarIcon,
    Stars as StarsIcon,
} from '@mui/icons-material';
import TextIcon from "@/components/shared/textIcon";
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function SmallTourCard({ isWide, isOfferCard = false }: { isWide?: boolean, isOfferCard?: boolean }) {
    return (
        <>
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
                <Box sx={{ p: 0.5, height: 200 }}>
                    {/* Put spacing on wrapper instead of image padding */}
                    <Box sx={{ height: "100%", position: "relative", borderRadius: 1.5, overflow: "hidden", m: 1.2 }}>
                        <Image src={"/images/building.png"} alt="building" fill />
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
                    <Stack className="flex! flex-row! justify-between!">
                        <Stack className="flex! items-center! gap-2! flex-row! justify-between!">
                            <Stack className="items-center! text-white! bg-[#FA5050] self-start py-2 px-2  rounded-lg flex flex-row! gap-2">
                                {!isOfferCard && <UilFire className="text-white! text-lg!" />}
                                <Typography fontSize={8} className=" text-nowrap">
                                    {isOfferCard ? "پیشنهاد ویژه" : "پیشنهاد ویژه کیش لندیار"}
                                </Typography>
                            </Stack>
                            <Stack className="flex-row! items-center! gap-2!">
                                <Rating
                                    name="hover-feedback"
                                    value={5}
                                    precision={0.5}
                                    className="text-lg!"
                                    emptyIcon={<StarIcon style={{ opacity: 0.5 }} className="text-xs!" />}
                                />
                                {!isOfferCard &&
                                    <Typography fontSize={10} className="text-nowrap!" color="primary.main">هتل پنج ستاره</Typography>
                                }
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack className="flex! flex-col! gap-2!">
                        <Typography className="text-xl!" fontWeight={500}>هتل بین المللی کیش </Typography>
                    </Stack>
                    <div className="half-circle-divider">
                        <span className="half-circle left bg-[#e1e6f0]! w-3!"></span>
                        {/* <hr className="text-[#e1e6f0]! bg-[#e1e6f0]!" /> */}
                        <Divider orientation="horizontal" className="text-[#e1e6f0]! bg-[#e1e6f0]!" />
                        <span className="half-circle right bg-[#e1e6f0]!  w-3!"></span>
                    </div>

                    <Stack className="">
                        <Typography fontSize={10} color="text.secondary">قیمت تور هر بزرگسال</Typography>
                        <Stack className="flex! flex-row! justify-between! items-center" my={2}>
                            <Typography color="secondary.main" className="text-xl!" fontWeight={700}>850000 تومان</Typography>
                            <Button color="secondary" variant="text" className="p-0! text-xs!">مشاهده بر روی نقشه</Button>
                        </Stack>
                        <Typography fontSize={10} color="text.secondary">قیمت کل تور دو مسافر: 189000000 تومان</Typography>
                    </Stack>
                </CardContent>
            </Card>

        </>
    )
}
