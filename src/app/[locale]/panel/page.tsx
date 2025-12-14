"use client"
import { Typography, Container, useMediaQuery, useTheme, Stack, Box, Button, Divider, Avatar } from "@mui/material";
import { redirect } from "next/navigation";
import ChanceMobile from "@/components/shared/ui/banner/chanceMobile";
import {
    PersonOutline,
    ReceiptLongOutlined,
    AccountBalanceWalletOutlined,
    EmojiObjectsOutlined,
    GroupsOutlined,
    FavoriteBorderOutlined,
    HeadsetMicOutlined,
    LogoutOutlined,
    ArticleOutlined,
    ShoppingCartOutlined,
    MapOutlined,
    AppsOutlined,
    KeyboardArrowLeftOutlined,
    Telegram,
    Instagram,
    CopyrightOutlined,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
import Link from "next/link";
import TextIcon from "@/components/shared/textIcon";
import Image from "next/image";

const menuItems = [
    { label: "حساب کاربری", icon: PersonOutline, path: "/fa/panel/user-account" },
    { label: "سفارشات من", icon: ReceiptLongOutlined, path: "/fa/panel/history" },
    { label: "کیف پول", icon: AccountBalanceWalletOutlined, path: "/fa/panel/wallet" },
    { label: "پیشنهادات برای شما", icon: EmojiObjectsOutlined, path: "/fa/panel/suggestions" },
    { label: "لیست مسافران", icon: GroupsOutlined, path: "/fa/panel/passengers/list" },
    { label: "علاقه مندی ها", icon: FavoriteBorderOutlined, path: "/fa/panel/favorites" },
    { label: "درخواست پشتیبانی", icon: HeadsetMicOutlined, path: "/fa/panel/support" },
    { label: "مقالات کیش لندیار", icon: ArticleOutlined, path: "#" },
    { label: "خرید اقساطی", icon: ShoppingCartOutlined, path: "#" },
    { label: "نقشه کیش", icon: MapOutlined, path: "#" },
    { label: "دیگر صفحات های مفید", icon: AppsOutlined, path: "#" },
];

export default function Page() {
    const theme = useTheme()
    const isMdUp = useMediaQuery(theme.breakpoints.up("md"))
    const router = useRouter();

    if (isMdUp) {
        redirect("/fa/panel/user-account");
    }

    return (
        <Container maxWidth="xl" sx={{ pb: 10 }} disableGutters>
            {/* Header Section with Background Image */}
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    mb: 8,
                }}
            >
                {/* Background Image */}
                <Box className="relative! w-full! h-[150px]!">
                    <Image
                        src="/images/panel/header-mobile.png"
                        alt="User Account Header"
                        fill
                        style={{
                            objectFit: "cover",
                        }}
                        priority
                    />
                </Box>

                <Stack
                    sx={{
                        position: "absolute",
                        bottom: "-60px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 3,
                        alignItems: "center",
                    }}
                >
                    <Avatar
                        src=""
                        sx={{
                            width: { xs: 95, sm: 120 },
                            height: { xs: 95, sm: 120 },
                            bgcolor: "#ffc27d",
                            border: "6px solid white",
                            color: "#A62100",
                            mb:.5
                        }}
                    />
                </Stack>
            </Box>

            {/* User Information Section */}
            <Stack
                spacing={1.4}
                sx={{
                    alignItems: "center",
                    mt: { xs: 8, sm: 10 },
                    mb: 2,

                }}
            >
                <Typography
                    className="text-[#1F2937]! font-semibold!"
                    sx={{
                        fontSize: { xs: "18px", sm: "20px" },
                        fontFamily: "var(--font-lahzeh)",
                    }}
                >
                    علیرضا رودی عزیز
                </Typography>
                <Typography color="text.secondary">
                    ۰۹۲۸۳۹۹۳۸۳
                </Typography>
            </Stack>

            <Stack spacing={3} sx={{ px: { xs: 2, md: 0 }, mt: 3 }}>
                {/* Wallet Section */}
                <Stack
                    className="flex! flex-row! items-start! justify-between! rounded-xl! py-4! px-3!"
                    sx={{
                        backgroundColor: "#FFF4E6",
                        background: "linear-gradient(135deg, #FFF4E6 0%, #FFE8CC 100%)",
                    }}
                >
                    <Stack className="flex! flex-row! items-start! gap-2!">
                        <Stack>
                            <TextIcon text="کیف پول" sx={{ color: "primary.main", fontSize: 14 }} startIcon={<AccountBalanceWalletOutlined sx={{ color: "#FF8A00", fontSize: 20 }} />} />
                            <Typography className="text-base! font-semibold! text-[#1F2937]! mt-3!" sx={{ fontFamily: "var(--font-lahzeh)" }}>
                                موجودی : ۱,۵۴۰,۰۰۰ تومان
                            </Typography>
                        </Stack>
                    </Stack>
                    <Button
                        endIcon={<KeyboardArrowLeftOutlined sx={{ fontSize: 20 }} />}
                        sx={{ color: "primary.main" }}
                        className="text-sm! font-light! p-0! "
                        size="small"
                    >
                        افزایش
                    </Button>
                </Stack>

                {/* Chance Mobile Component */}
                <ChanceMobile />

                {/* Menu Items */}
                <Stack spacing={2} className="rounded-xl! overflow-hidden!">
                    {menuItems.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <Button
                                key={index}
                                fullWidth
                                onClick={() => router.push(item.path)}
                                className="flex! flex-row-reverse! justify-end! items-center! py-3! px-4! rounded-none! text-black! normal-case! gap-4"
                                sx={{
                                    "&:hover": { backgroundColor: "#F9FAFB" },
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography className="text-base! font-normal! text-[#1F2937]!" sx={{ fontFamily: "var(--font-lahzeh)" }}>
                                    {item.label}
                                </Typography>
                                <IconComponent sx={{ color: "#6B7393", fontSize: 25 }} />
                            </Button>
                        );
                    })}
                </Stack>

                {/* Logout Section */}
                <Divider sx={{ my: 1 }} />
                <Button
                    fullWidth
                    onClick={() => router.push("/fa/tour")}
                    className="flex! flex-row-reverse! justify-end! gap-4! items-center! py-3! px-4! rounded-xl! text-red-600! normal-case!"
                    sx={{
                        "&:hover": { backgroundColor: "#FEF2F2" },
                        justifyContent: "space-between",
                    }}
                >
                    <Typography className="text-base! font-normal!" sx={{ fontFamily: "var(--font-lahzeh)" }}>
                        خروج از حساب
                    </Typography>
                    <LogoutOutlined sx={{ color: "#EF4444", fontSize: 24 }} />
                </Button>

                {/* Footer Section */}
                <Stack spacing={2} sx={{ mt: 4, alignItems: "center" }}>
                    <Stack direction="row" spacing={2} className="items-center! justify-center!">
                        <Box
                            component={Link}
                            href="#"
                            className="flex! items-center! justify-center! p-2! rounded-lg! border! border-[#E5E7EB]!"
                            sx={{ "&:hover": { backgroundColor: "#F9FAFB" } }}
                        >
                            <Telegram sx={{ color: "#6B7393", fontSize: 24 }} />
                        </Box>
                        <Box
                            component={Link}
                            href="#"
                            className="flex! items-center! justify-center! p-2! rounded-lg! border! border-[#E5E7EB]!"
                            sx={{ "&:hover": { backgroundColor: "#F9FAFB" } }}
                        >
                            <Instagram sx={{ color: "#6B7393", fontSize: 24 }} />
                        </Box>
                        <Box
                            component={Link}
                            href="#"
                            className="flex! items-center! justify-center! p-2! rounded-lg! border! border-[#E5E7EB]!"
                            sx={{ "&:hover": { backgroundColor: "#F9FAFB" } }}
                        >
                            <Instagram sx={{ color: "#6B7393", fontSize: 24 }} />
                        </Box>
                    </Stack>

                    <Stack direction="row" spacing={1} className="items-center! justify-center!">
                        <CopyrightOutlined sx={{ color: "#9CA3AF", fontSize: 16 }} />
                        <Typography className="text-xs! text-[#9CA3AF]! text-center!" sx={{ fontFamily: "var(--font-lahzeh)" }}>
                            کلیه حقوق این وب سایت متعلق است به آژانس هواپیمایی
                        </Typography>
                    </Stack>
                    <Typography className="text-xs! text-[#9CA3AF]! text-center!" sx={{ fontFamily: "var(--font-lahzeh)" }}>
                        سریع میر طراحی و پیاده سازی توسط تیم ۱۳ کیش خندیار
                    </Typography>
                </Stack>
            </Stack>
        </Container>
    )
}
