import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ViewsOfSafari from "./viewOfSafari";
import CategoryDetailCards from "./categoryDetailCards";

export default function LearnMoreSafari() {
  return (
    <>
      <Accordion className="border-none! px-0!">
        <AccordionSummary expandIcon={<ExpandMoreIcon />} className="px-0!">
          <Typography className="text-lg! font-[500]! reveal">
            سافاری در دل جزیره کیش را بهتر بشناسید
          </Typography>
        </AccordionSummary>
        <Divider />
        <AccordionDetails
          className="
        px-0! w-[100%]! mt-4! reveal-down"
        >
          <Grid className="rereveal-down">
            <ViewsOfSafari />
          </Grid>
          <Grid className="flex! flex-col! gap-14!">
            <Grid className="flex! flex-col! gap-10! reveal-down">
              <Typography className="text-3xl! font-[650]!">
                سافاری در دل جزیره کیش | تجربه‌ای مهیج در قلب کویر
              </Typography>
              <Typography className="text-lg! font-[400]!">
                اگر به‌دنبال هیجان، ماجراجویی و تجربه‌ای متفاوت از سفر به کیش
                هستید،سافاری کیش گزینه‌ای بی‌نظیر برای شماست. این تفریح مهیج در
                دل طبیعت گرم و کویری جزیره، فرصتی عالی برای عاشقان آدرنالین و
                ماجراجویی فراهم می‌کند.
              </Typography>
            </Grid>
            <Grid className="flex! flex-col! gap-10! reveal-down">
              <Typography className="text-2xl! font-[600]!">
                معرفی سافاری کیش
              </Typography>
              <Typography className="text-lg! font-[400]!">
                سافاری کیش مجموعه‌ای تفریحی و گردشگری است که با استفاده از
                خودروهای آفرود، باگی، موتورهای چهارچرخ و شترسواری، بازدیدکنندگان
                را به گشت‌و‌گذاری متفاوت در مسیرهای کویری جزیره می‌برد. این
                مجموعه در محدوده‌ای امن و سازمان‌یافته راه‌اندازی شده و یکی از
                پرطرفدارترین جاذبه‌های گردشگری کیش به‌حساب می‌آید.
              </Typography>
            </Grid>
            <Grid className="flex! flex-col! gap-10! reveal-down">
              <Typography className="text-2xl! font-[600]!">
                امکانات و فعالیت‌ها
              </Typography>
              <Grid className="flex! flex-col! gap-8!">
                <Typography className="text-lg! font-[400]!">
                  *سافاری با خودروهای آفرود (4x4): هیجان‌انگیزترین بخش این
                  مجموعه، گشت‌و‌گذار با خودروهای مخصوص در مسیرهای خاکی و پر فراز
                  و نشیب است.
                </Typography>
                <Typography className="text-lg! font-[400]!">
                  *باگی‌سواری: برای کسانی که دوست دارند خودشان پشت فرمان
                  بنشینند، باگی‌سواری یک تجربه متفاوت و پر از هیجان است.
                </Typography>
                <Typography className="text-lg! font-[400]!">
                  *موتور چهارچرخ (ATV): ماجراجویی در دل کویر با موتورهای
                  چهارچرخ، هم برای نوجوانان و هم بزرگسالان جذاب است.
                </Typography>
                <Typography className="text-lg! font-[400]!">
                  *شترسواری: تجربه‌ای سنتی و خاص که حال‌و‌هوای کویری را به‌خوبی
                  منتقل می‌کند.
                </Typography>
                <Typography className="text-lg! font-[400]!">
                  *تونل وحشت، پینت‌بال، بانجی ترامپولین، ترامپولین کودک، و... از
                  دیگر امکانات جانبی این مجموعه هستند.
                </Typography>
              </Grid>
            </Grid>
            <Grid className="flex! flex-col! gap-10! reveal-down">
              <Typography className="text-2xl! font-[600]!">
                ویژگی‌های سافاری کیش
              </Typography>
              <Grid className="flex! flex-col! gap-8!">
                <Typography className="text-lg! font-[400]!">
                  مناسب برای همه سنین (با رعایت موارد ایمنی)
                </Typography>
                <Typography className="text-lg! font-[400]!">
                  تیم‌های حرفه‌ای و راهنماهای مجرب
                </Typography>
                <Typography className="text-lg! font-[400]!">
                  محیطی امن و استاندارد برای خانواده‌ها و گروه‌های دوستانه
                </Typography>
                <Typography className="text-lg! font-[400]!">
                  امکان عکاسی و فیلم‌برداری حرفه‌ای از لحظات شما
                </Typography>
              </Grid>
            </Grid>
            <Grid className="reveal-down">
            <CategoryDetailCards />

            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
