import { Container, Typography, Stack, Grid, Button } from "@mui/material";
import BlogCard from "../../../../../components/shared/cards/blogCard";

const services = [
  "لابی",
  "پذیرش 24 ساعته",
  "آسانسور",
  "صندوق امانات",
  "دستگاه واکس کفش",
  "استخر",
  "جکوزی",
  "فضای سبز",
]

const checkTime = [
  {
    text: "15:00",
    time: "ساعت ورود"
  },
  {
    text: "12:00",
    time: "ساعت خروج"
  },
  {
    text: "198",
    time: "تعداد اتاق"
  },
  {
    text: "16",
    time: "تعداد طبقه"
  },
  {
    text: "100 نفر",
    time: "ظرفیت لابی"
  },
  {
    text: "دریا و خیابان",
    time: "ویو هتل"
  }
]

const images = [
  "/images/lobby-3.png",
  "/images/lobby-hotel.png",
  "/images/hotel-pool.png",
  "/images/lobby-2.png",
  "/images/hotel-room.png",
  "/images/lobby-4.png",
];

export default function ViewsOfHotel({ hasDetails, isIntegrated = true, isHotelLocation }: { hasDetails?: boolean, isIntegrated?: boolean, isHotelLocation?: boolean }) {
  const visibleImages = images.slice(0, 4);
  const remainingCount = images.length - visibleImages.length;
  return (
    <Container maxWidth="xl" sx={{ marginBottom: "10px", mx: "auto" }}>
      <Grid
        container
        spacing={2}
        sx={{ p: 0, height: { xs: "500px", md: "600px" }, flexDirection: "row-reverse" }}
      >
        {/* ستون سمت چپ */}
        <Grid size={5} sx={{ height: "100%", display: { xs: "none", md: "block" } }}>
          <Stack spacing={2} sx={{ height: "100%" }}>
            <BlogCard
              description={""}
              imageUrl="/images/hotel-bathroom.png" // مسیر عکس خود را قرار دهید
              height="50%"
            />
            <Stack className="flex! flex-row! h-full! gap-4!">
              {
                isIntegrated ? (
                  <Stack className="h-full! w-full! relative!">
                    <BlogCard
                      description={""}
                      imageUrl="/images/hotel-pool.png" // مسیر عکس خود را قرار دهید
                      height="100%"
                    />


                    {/* ------------------------------------- */}

                    <Stack className="absolute! bottom-6! px-6! w-full! z-10!">
                      <Stack className="bg-white! h-20! rounded-full! flex! flex-row! gap-2.5! p-2.5!">
                        {visibleImages.map((img, index) => {
                          const isFirst = index === 0;
                          const isLast = index === visibleImages.length - 1;

                          // If it's the last visible item and there are more images
                          if (isLast && remainingCount > 0) {
                            return (
                              <Stack
                                key={img}
                                className={`relative! h-full! w-3/12! overflow-hidden! rounded-r-md! rounded-l-4xl! group! cursor-pointer!`}
                              >
                                <img
                                  src={img}
                                  alt=""
                                  className="w-full! h-full! object-cover! transition-transform! rounded-r-md! duration-[400ms]! ease-in-out! group-hover:scale-[1.15]"
                                />
                                <Stack className="hover:font-bold! absolute! inset-0! bg-[#0000008F]! flex! items-center! justify-center! text-white! text-xl! font-medium! select-none!">
                                  {remainingCount}+
                                </Stack>
                              </Stack>
                            );
                          }

                          // Regular image
                          return (
                            <Stack
                              key={img}
                              className={`h-full! w-3/12! overflow-hidden! cursor-pointer! ${isFirst
                                ? "rounded-l-md! rounded-r-4xl!"
                                : isLast
                                  ? "rounded-r-md! rounded-l-4xl!"
                                  : "rounded-md!"
                                }`}
                            >
                              <img
                                src={img}
                                alt=""
                                className="w-full! h-full! object-cover! transition-transform! duration-[400ms]! ease-in-out! hover:scale-[1.15]"
                              />
                            </Stack>
                          );
                        })}
                      </Stack>
                    </Stack>


                    {/* ------------------------------------- */}
                    {/* <Stack className="absolute! bottom-6! px-6!  w-full! z-10! ">
                      <Stack className="bg-white! h-20! rounded-full! flex! flex-row! gap-2.5! p-2.5!">
                        <Stack className="h-full! w-3/12! overflow-hidden! rounded-l-md! rounded-r-full!">
                          <img
                            src="/images/lobby-3.png"
                            alt=""
                            className="w-full! h-full! transition-transform! duration-[400ms]! ease-in-out! hover:scale-[1.15] object-cover!"
                          />
                        </Stack>

                        <Stack className="h-full! w-3/12! overflow-hidden! rounded-md!">
                          <img
                            src="/images/lobby-hotel.png"
                            alt=""
                            className="w-full! h-full! transition-transform! duration-[400ms]! ease-in-out! hover:scale-[1.15] object-cover!"
                          />
                        </Stack>

                        <Stack className="h-full! w-3/12! overflow-hidden! rounded-md!">
                          <img
                            src="/images/hotel-pool.png"
                            alt=""
                            className="w-full! h-full! transition-transform! duration-[400ms]! ease-in-out! hover:scale-[1.15] object-cover!"
                          />
                        </Stack>

                        <Stack className="h-full! w-3/12! overflow-hidden! rounded-r-md! rounded-l-full!">
                          <img
                            src="/images/lobby-2.png"
                            alt=""
                            className="w-full! h-full! transition-transform! duration-[400ms]! ease-in-out! hover:scale-[1.15] object-cover!"
                          />
                        </Stack>

                      </Stack>
                    </Stack> */}
                  </Stack>
                ) :
                  <>
                    <BlogCard
                      description={""}
                      imageUrl="/images/hotel-pool.png" // مسیر عکس خود را قرار دهید
                      height="100%"
                    />
                    <BlogCard
                      description={""}
                      imageUrl="/images/hotel-pool.png" // مسیر عکس خود را قرار دهید
                      height="100%"
                    />
                    <BlogCard
                      description={""}
                      imageUrl="/images/hotel-pool.png" // مسیر عکس خود را قرار دهید
                      height="100%"
                    />
                  </>
              }
            </Stack>
          </Stack>
        </Grid>

        {/* ستون سمت راست */}
        <Grid size={{ xs: 12, md: 7 }} sx={{ height: "100%" }} spacing={10}>
          <Stack spacing={{ xs: 1, md: 2 }} sx={{ height: "100%" }}>
            <BlogCard
              description={"تور کیش از مشهد"}
              imageUrl="/images/kourosh-hotel.png" // مسیر عکس خود را قرار دهید
              height="100%"
            />
            <Stack
              spacing={0}
              className="flex! flex-row! gap-1.5! md:gap-4!"
              sx={{ height: { xs: "50%", md: "100%" }, width: "100%" }}
            >
              <Stack className="flex! flex-row! gap-1.5! md:gap-4! w-[50%]!">
                <BlogCard
                  description={""}
                  imageUrl="/images/hotel-view.png" // مسیر عکس خود را قرار دهید
                  height="100%"
                />
                <BlogCard
                  description={""}
                  imageUrl="/images/lobby-hotel.png" // مسیر عکس خود را قرار دهید
                  height="100%"
                />
              </Stack>
              <Stack className="flex! flex-col! gap-1.5! md:gap-4! w-[50%]! h-full!">
                <Stack className="flex! flex-row! gap-1.5! md:gap-4! h-6/12!">
                  <BlogCard
                    description={""}
                    imageUrl="/images/lobby-2.png" // مسیر عکس خود را قرار دهید
                    height="100%"
                  />
                  <BlogCard
                    description={""}
                    imageUrl="/images/bathroom-2.png" // مسیر عکس خود را قرار دهید
                    height="100%"
                  />
                </Stack>
                <Stack className="flex! flex-row! gap-1.5! md:gap-4! h-6/12!">
                  <BlogCard
                    description={""}
                    imageUrl="/images/lobby-3.png" // مسیر عکس خود را قرار دهید
                    height="100%"
                  />
                  <BlogCard
                    description={""}
                    imageUrl="/images/lobby-4.png" // مسیر عکس خود را قرار دهید
                    height="100%"
                  />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Grid>

      </Grid>

      {hasDetails && (
        <Stack gap={2}>
          <Stack
            className="flex! flex-row! justify-between!"
            mt={4}
          >
            <Stack
              sx={{
                display: { xs: "grid", md: "flex" },     // Grid on mobile, flex on md+
                gridTemplateColumns: { xs: "repeat(4, 1fr)", md: "none" },
                gap: 2,
              }}
              className="flex-row! gap-3!"
            >
              {services.map((item, index) => (
                <Typography
                  key={"services" + index}
                  className="text-xs! md:text-base! text-center! border-1! border-slate-200! rounded-lg! h-16! flex! items-center px-3!"
                  color="text.secondary"
                >
                  {item}
                </Typography>
              ))}
            </Stack>

            <Button
              sx={{ backgroundColor: "text.secondary" }}
              className="h-16! px-3! rounded-lg! text-white! hidden! md:inline!"
            >
              مشاهده کامل خدمات
            </Button>
          </Stack>


          <Typography className="text-start! leading-10!">
            هتل پنج ستاره کوروش کیش واقع در میدان پردیس در نوروز سال 1397 فعالیت خود را آغاز نمود. این هتل تازه تاسیس در 16 طبقه بنا و دارای 198 باب اتاق و سوئیت اقامتی لوکس با امکانات رفاهی مناسب می‌باشد. موقعیت مکانی هتل موجب دسترسی آسان به ساحل نیلگون خلیج فارس و مراکز خرید مهم جزیره زیبای کیش از جمله پردیس 1 و 2 گردیده است. هتل مجلل کوروش با پرسنلی آموزش دیده و مجرب فرصت میزبانی از شما را غنیمت شمرده و در تلاش اند اقامتی بیادماندنی را برای میهمانان عزیز رقم بزنند. لازم به ذکر است اتاق های رو به دریا تنها دارای چشم انداز دریا می‌باشند.
          </Typography>

          <Grid container spacing={3}>
            {checkTime.map((item, index) => (
              <Grid size={{ xs: 12, md: "grow" }} key={"ckeckTime" + index} >
                <Stack className="border-1! border-slate-200! rounded-xl! h-18! md:h-28! flex! flex-row-reverse! md:flex-col! justify-between! md:justify-center! px-3! items-center! gap-4!">
                  <Typography className="text-lg!" fontWeight={600}>{item?.text}</Typography>
                  <Typography className="" color="text.secondary">{item?.time}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      )}
    </Container>
  );
}
