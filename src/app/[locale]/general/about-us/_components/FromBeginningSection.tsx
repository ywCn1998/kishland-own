import { Grid, Stack, Typography, Button, Box } from "@mui/material";
import GoldenText from "@/components/shared/_components/GoldenText";
import Link from "next/link";
import AdbIcon from "@mui/icons-material/Adb";

export default function FromBeginningSection() {
  return (
    <Grid container spacing={3}>
      <Grid
        size={{ xs: 12, md: 5 }}
        sx={{
          display: "flex",
          flexDirection: { xs: "row", md: "column" },
          gap: { xs: 2, md: 3 },
          justifyContent: { xs: "center", md: "flex-end" },
        }}
      >
        <Stack className="flex! flex-row! gap-4! h-full! w-full!">
          {/* Add animation classes with unique delays for beautiful effect */}
          <Box
            component="img"
            src="/images/general/about-us/split1.png"
            alt="journey"
            className="w-full! rounded-3xl! h-[200px]! md:h-[500px]! object-cover! md:relative! top-[40px]! animate-floating-image1 md:animate-floating-image1-enabled"
          />
          <Box
            component="img"
            src="/images/general/about-us/split2.png"
            alt="journey"
            className="w-full! rounded-3xl! h-[200px]! md:h-[500px]! object-cover! md:relative! top-[90px]! animate-floating-image2 md:animate-floating-image2-enabled"
          />
          <Box
            component="img"
            src="/images/general/about-us/split3.png"
            alt="journey"
            className="w-full! rounded-3xl! h-[200px]! md:h-[500px]! object-cover! animate-floating-image3 md:animate-floating-image3-enabled"
          />

          <style global>{`
            @keyframes floating {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
            .animate-floating-image1,
            .animate-floating-image2,
            .animate-floating-image3 {
              /* On all screens, disable animation by default */
              animation: none !important;
            }
            @media (min-width: 900px) {
              /* md breakpoint (MUI default is 900px) and up: enable animations */
              .animate-floating-image1.md\\:animate-floating-image1-enabled {
                animation: floating 3.5s ease-in-out infinite !important;
                animation-delay: 0s !important;
              }
              .animate-floating-image2.md\\:animate-floating-image2-enabled {
                animation: floating 4.5s ease-in-out infinite !important;
                animation-delay: 1s !important;
              }
              .animate-floating-image3.md\\:animate-floating-image3-enabled {
                animation: floating 4s ease-in-out infinite !important;
                animation-delay: 0.5s !important;
              }
            }
          `}</style>
        </Stack>
      </Grid>
      <Grid size={{ xs: 12, md: 7 }} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Stack spacing={3} className="reveal-down">
          <Typography className="mb-3! text-base! md:text-lg! text-slate-400!">
            از تور تا هتل، همه چیز برای یک سفر فراموش‌نشدنی به کیش
          </Typography>
          <Stack spacing={1}>
            <Typography className="font-bold! text-2xl! md:text-4xl! leading-tight! md:leading-[52px]!">
              قصه <GoldenText text="سفرهای" textColor="secondary" isTopThreeAttention attentionClass="top-[-25px]! hidden! md:inline!" />{" "}
              <span className="text-primary">رویایی</span> شما از اینجا<br className="hidden md:block" />
              آغاز می‌شود
            </Typography>
          </Stack>
          <Typography
            fontWeight={300}
            className="text-slate-800! text-sm! md:text-lg! leading-7! md:leading-9! mb-6!"
          >
            مرکز رزرواسیون آنلاین <Link href="/fa/hotel/list"> <Typography component={"span"} className="text-secondary-500 underline!" fontWeight={500}>هتل های کیش </Typography> </Link>با نام کیشلندیار، زیر نظر آژانس مسافرت هوایی "آسان گشت کیش" به شماره ثبت 12102 فعالیت خود را در اواخر دهه 80 با اخذ قرارداد با بهترین هتل های کیش آغاز نمود. و در این چند سال گذشته بر اساس میزان رضایتمندی مسافران از محل اقامت خود و تجربه به دست آمده کارشناسان رزرواسیون در سایت کیشلندیار، تغییرات زیادی را در انتخاب، معرفی و مشاوره به زائران و مسافران در انتخاب محل اقامت خود بوجود آورده است و با برخورداری از تیمی حرفه ای و "مطلع" از نقاط قوت و ضعف تمامی هتل های کیش در حال حاضر به برترین سایت تخصصی "رزرواسیون آنلاین هتل های کیش" در کشور مبدل شده، که این مهم جز با همراهی و اعتماد شما بزرگواران و همچنین خدمت صاد
          </Typography>
          <Stack className="w-full! flex! flex-col! md:flex-row! gap-4! md:gap-8!" mt={2}>
            <Button
              className="w-full! md:w-6/12 text-black! rounded-xl! text-lg! reveal"
              variant="outlined"
              startIcon={<AdbIcon />}
            >
              دانلود اپلیکیشن
            </Button>
            <Button
              className="w-full! md:w-6/12 text-white! rounded-xl! text-lg! reveal"
              variant="contained"
            >
              مشاهده لیست تور ها
            </Button>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
}


