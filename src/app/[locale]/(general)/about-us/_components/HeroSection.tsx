import { ImageAndText } from "@/components/shared/ui";
import { Button, Stack, Typography } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";

export default function HeroSection() {
    return (
        <ImageAndText
            imgUrl="/images/general/about-us/hero.png"
            imgAlt="Kishland team"
            imgGridSIze={{ xs: 12, md: 5 }}
            childrenGridSIze={{ xs: 12, md: 7 }}
            height={{ xs: "auto", md: 520 }}
            imgHeight={{ xs: 320, md: 520 }}
        >
            <Stack spacing={3} className="reveal-down">
                <Stack spacing={1} className="mt-10! md:mt-0!">
                    <Typography className="text-3xl! md:text-6xl! font-semibold! md:font-bold! md:leading-[80px]!">
                        <span className="text-primary">کیش</span>{" "}
                        <span className="text-secondary-500">لندیار</span>{" "}
                        <br />
                        دروازه ورود به دنیای آرامش و تفریح در جزیره کیش
                    </Typography>
                </Stack>

                <Typography fontWeight={300} className="text-base! md:text-2xl! text-slate-500! md:leading-10! leading-8!">
                با ما، رزرو هتل و تجربه تورهای جذاب در کیش ساده‌تر، مطمئن‌تر و لذت‌بخش‌تر از همیشه خواهد بود.  <br/> کیش لندیار، همراه لحظه‌های ناب شما در قلب {' '}
                <span className="text-secondary-500 font-semibold relative!"> {' '}
                  خلیج فارس
                  <img src="/images/general/about-us/like.png" alt="persian-gulf" className="w-8 h-8 absolute! top-[-24px]! left-8! md:inline-block! hidden!" />
                  </span>.

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
        </ImageAndText>
    );
}


