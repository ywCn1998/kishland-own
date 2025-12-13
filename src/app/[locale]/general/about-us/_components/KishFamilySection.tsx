"use client";
import { Box, Stack, Typography, Card, CardContent, Avatar, Container, Divider, IconButton } from "@mui/material";
import ReusableSwiper from "@/components/shared/reusableSwiper";
import GoldenText from "@/components/shared/ui/GoldenText";
import { styled } from "@mui/material/styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function KishFamilySection() {
    return (
        <>
            <Stack
                className="flex! flex-col! justify-center! items-center! "
                mt={10}
                spacing={2}
            >
                <Typography className="text-slate-400! z-10! text-sm! md:text-lg! reveal-down">
                    خدمت به شما افتخار ما است
                </Typography>
                <Typography className="text-2xl! md:text-5xl! font-bold! reveal-down">
                    <GoldenText text={
                        <>
                            <span className="text-black!">خانواده</span> <span className="text-secondary-500">کیش</span> {""} <span className="text-primary">لندیار</span>
                        </>
                    }
                        bgColor="orange" textColor="secondary" bgWidth="85%" bgColorSx={{ left: 20, bottom: -10 }} />
                </Typography>
            </Stack>
            <Container
                maxWidth="xl"
                disableGutters
                sx={{
                    width: "100%",
                    // mx: "auto",
                    py: 4,
                    display: "flex",
                    flexDirection: "row",
                    borderRadius: 2,
                    marginTop: { xs: 1, md: 5 },
                    pl: { xs: 3, md: 0 },
                }}
                className="reveal-down"
            >
                <ReusableSwiper
                    dots={true}
                    slidePerViewXs="1.3"
                    slidePerviewLg={4}
                    spaceBetween={30}
                    pagination={true}
                >
                    {Array(6)
                        .fill(null)
                        .map((_, i) => (
                            <Stack className="pt-3!">
                                <KishFamilyCard />
                            </Stack>
                        ))}
                </ReusableSwiper>
            </Container>
        </>
    );
}


const HoverWrap = styled("div")(({ theme }) => ({
    position: "relative",
    display: "inline-block",
    direction: "rtl", // Farsi layout
    // center the "shadow image" under the card
    "&:hover .hover-shadow": {
        opacity: 1,
        transform: "translateY(6px) scale(1.02)",
    },
}));

const SoftCard = styled(Card)(({ theme }) => ({
    width: "auto",
    minHeight: "auto",
    borderRadius: 16,
    border: "1px solid rgba(225, 230, 240, 1)",
    background: "#fff",
    transition: "transform .25s ease, box-shadow .25s ease",
    backdropFilter: "saturate(180%) blur(2px)",
    transform: "translateY(-2px)",
    boxShadow: "0 1px 2px rgba(18,38,63,.03), 0 8px 24px rgba(18,38,63,.06)", // subtle default
    "&:hover": {
        transform: "translateY(-2px)",
        boxShadow: "0 1px 2px rgba(18,38,63,.03), 0 8px 24px rgba(18, 38, 63, 0.13)", // subtle default
    },
}));

function KishFamilyCard() {
    return (
        <HoverWrap>
            {/* Shadow image (hidden until hover) */}
            <Box
                className="hover-shadow"
                aria-hidden
                sx={{
                    position: "absolute",
                    inset: "auto 0 -18px 0",
                    mx: "auto",
                    width: "auto",
                    height: 34,
                    backgroundImage: "url(/assets/shadow.png)", // ← your shadow image
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    opacity: 0,
                    transform: "translateY(0)",
                    transition: "opacity .25s ease, transform .25s ease",
                    pointerEvents: "none",
                    filter: "drop-shadow(0 6px 18px rgba(41,71,180,.18))",
                }}
            />

            <SoftCard elevation={0}>
                <CardContent
                    sx={{ p: 2 }}
                    className="flex! flex-col! justify-between! items-center! reveal py-4!"
                >
                    {/* Avatar + name */}

                    <div className="flex! flex-col! justify-between! items-center! gap-3!">
                        <Avatar
                            src="/images/ghasem.png" // ← your avatar
                            alt="قاسم سبحانی"
                            sx={{ width: 100, height: 100 }}
                        />

                        <Stack
                            direction="column"
                            spacing={0.5}
                            alignItems="center"
                        >
                            <Typography className="text-lg! text-black!" fontWeight={500}>
                                قاسم سبحانی
                            </Typography>
                            <Typography className="text-sm! text-slate-500!">
                                توسعه دهنده وب
                            </Typography>
                        </Stack>


                    </div>

                    {/* Text */}
                    <Typography className="text-black! text-center! mt-4! text-sm! leading-[28px]">
                        مفتخریم که بیش از دو دهه است که در خدمت گردشگران از سرار ایران و دنیا بوده ایم.
                    </Typography>

                    <div className="w-full! h-[1px]! bg-slate-200! mb-2! mt-4!" />

                    <Stack className="flex! flex-row! justify-center! items-center! gap-3!">
                        <IconButton>
                            <InstagramIcon className="text-slate-400! text-3xl!" />
                        </IconButton>
                        <IconButton>
                            <LinkedInIcon className="text-slate-400! text-3xl!" />
                        </IconButton>
                    </Stack>
                </CardContent>
            </SoftCard>
        </HoverWrap>
    );
}
