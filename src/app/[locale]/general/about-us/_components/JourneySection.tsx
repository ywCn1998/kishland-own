import GoldenText from "@/components/shared/_components/GoldenText";
import { Box, Stack, Typography } from "@mui/material";

const milestones = [
  {
    year: "1394",
    title: "شروع با یک تیم ۳ نفره",
    description: "اولین تورهای اختصاصی کیش رو برای دوستانمون برنامه‌ریزی کردیم.",
  },
  {
    year: "1398",
    title: "ساخت اکوسیستم خدمات",
    description:
      "همکاری با هتل‌ها و تفریحات شکل گرفت تا همه چیز یکجا در دسترس باشه.",
  },
  {
    year: "1402",
    title: "تحول دیجیتال کیش‌لند",
    description:
      "تمام تجربه آفلاین رو به یک پلتفرم آنلاین و شخصی‌سازی شده منتقل کردیم.",
  },
];

export default function JourneySection() {
  return (
    <Box
      className="rounded-[40px]! bg-gradient-to-b from-[#E7F2FF] to-white reveal"
      sx={{ px: { xs: 3, md: 8 }, py: { xs: 4, md: 7 } }}
    >
      <Stack spacing={3}>
        <Typography className="text-sm! text-slate-400!">
          قصه‌ای که هنوز ادامه دارد
        </Typography>
        <Typography className="text-3xl! md:text-5xl! font-bold! leading-snug!">
          <span className="text-slate-900">مسیر </span>
          <GoldenText text="رشد" textColor="secondary" isRightAttention />
          <span className="text-slate-900"> ما در این سال‌ها</span>
        </Typography>
        <Typography className="text-base! md:text-xl! text-slate-500! leading-8!">
          هر فصل با تجربه‌های واقعی مسافران تغییر کردیم و امروز با شبکه‌ای از
          همکاران محلی و تکنولوژی، آماده‌ایم تا بهترین نسخه سفر به کیش رو
          بسازیم.
        </Typography>
      </Stack>

      <Stack spacing={4} mt={5}>
        {milestones.map((milestone, index) => (
          <Stack
            key={milestone.year}
            direction={{ xs: "column", md: "row" }}
            spacing={3}
            className="items-start! md:items-center!"
          >
            <Box
              className="flex! items-center! justify-center! rounded-2xl! bg-white! shadow-md!"
              sx={{
                width: { xs: "100%", md: 140 },
                height: { xs: 70, md: 90 },
                boxShadow: "0 20px 50px rgba(8, 141, 239, 0.08)",
              }}
            >
              <Typography className="text-2xl! md:text-3xl! font-bold! text-secondary">
                {milestone.year}
              </Typography>
            </Box>
            <Stack
              spacing={1}
              sx={{
                borderRight: { md: index === milestones.length - 1 ? "none" : "2px solid #d9e8ff" },
                pr: { md: 4 },
                mr: { md: 4 },
              }}
            >
              <Typography className="text-xl! md:text-2xl! font-bold!">
                {milestone.title}
              </Typography>
              <Typography className="text-base! md:text-lg! text-slate-500! leading-8!">
                {milestone.description}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}


