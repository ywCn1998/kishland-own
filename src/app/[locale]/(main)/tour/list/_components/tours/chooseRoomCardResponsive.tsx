import { Box, Card, Typography, CardContent, Button, Stack, Rating, Divider, Grid } from "@mui/material";
import { LocalFireDepartment as UilFire } from '@mui/icons-material';
import {
    Star as StarIcon,
    Stars as StarsIcon,
} from '@mui/icons-material';
import BlogCard from "@/components/shared/cards/blogCard";
import TextIcon from "@/components/shared/textIcon";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import ReusableSwiper from "@/components/shared/reusableSwiper";
import BedroomParentIcon from '@mui/icons-material/BedroomParentOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';

export default function ChooseRoomCardResponsive({ isWide, isOfferCard = false }: { isWide?: boolean, isOfferCard?: boolean }) {
    return (
        <>
            <Card
                sx={{
                    width: "100%",
                    // height: 400,
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",          // clip zoomed image
                    borderRadius: 1.8,
                    boxShadow: 0,
                    background: "white",
                    "& img": { transition: "transform 0.4s ease-in-out" },
                    "&:hover img": { transform: "scale(1.15)" },
                    height: "auto"
                }}
                className="border-1! border-slate-200! "
            >
                {/* Media area */}
                <Box sx={{ p: 1.2, height: 240 }}>
                    <Grid size={12} className="flex! flex-row! gap-2! h-full!">
                        <Stack className="w-1/3! gap-2!">
                            <BlogCard className="rounded-xl!" boxShadow={0} overlay="none" imageUrl="/images/building.png" height={"50%"} />
                            <BlogCard className="rounded-xl!" boxShadow={0} overlay="none" imageUrl="/images/building.png" height={"50%"} />
                        </Stack>

                        <Stack className="w-2/3!">
                            <BlogCard className="rounded-xl!" boxShadow={0} overlay="none" imageUrl="/images/building.png" />
                        </Stack>
                    </Grid>
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
                        <Stack className="w-full flex flex-col! h-full! justify-between!">
                            {/* <Stack className="flex! flex-col! gap-3! relative!"> */}
                            <Stack className="flex! flex-row! justify-between! items-center!">
                                <TextIcon startIcon={<FavoriteOutlinedIcon className="text-lg!" />} className="text-sm! border-l-2 border-slate-200! pl-3!" text="34 گردشگر پیشنهادمی کنند" sx={{ color: 'success.main' }} />
                                <Divider orientation="vertical" />
                                <TextIcon sx={{ color: "primary.100" }} startIcon={<StarOutlinedIcon />} text="4.9" className="ml-6!" />
                                <FavoriteBorderOutlinedIcon className=" text-2xl! text-slate-400!" />
                            </Stack>
                            {/* </Stack> */}
                        </Stack>
                    </Stack>
                    <Stack className="flex! flex-col! gap-2!">
                        <Typography className="text-xl!" fontWeight={700}>تور 4 روز هتل کوروش</Typography>
                    </Stack>
                    <ReusableSwiper
                        dots={false}
                        slidePerviewLg={9}
                        slideperviewMd={4}
                        slidePerViewXs={"auto"}
                        spaceBetween={10}
                        pagination={true}
                    >
                        <Button variant="outlined" className="rounded-xl! text-xs! text-slate-400! py-3! px-3! h-10!" startIcon={<BedroomParentIcon />}>ترانسفر فرودگاهی (رایگان)</Button>
                        <Button variant="outlined" className="rounded-xl! text-xs! text-slate-400! py-3! px-3! h-10!">شام و صبحانه</Button>
                        <Button variant="outlined" className="rounded-xl! text-xs! text-slate-400! py-3! px-3! h-10!" startIcon={<WifiOutlinedIcon />}>اینترنت رایگان</Button>
                    </ReusableSwiper>

                    <Stack className="">
                        <Stack className="flex! flex-row! justify-between! items-center" my={2}>
                            <Typography fontSize={10} color="text.secondary"> قیمت هر نفر برای ۳ شب و ۲ روز</Typography>
                            <Typography color="secondary.main" className="text-xl!" fontWeight={700}>850000 تومان</Typography>
                        </Stack>
                        <Button sx={{ backgroundColor: "text.secondary" }} className="text-white! font-semibold text-xl!">انتخاب اتاق</Button>
                    </Stack>
                </CardContent>
            </Card>

        </>
    )
}
