import { Box, Container, Grid, Stack } from "@mui/material";
import BlogCard from "../../cards/blogCard"; // unified BlogCard
import ReusableSwiper from "../../reusableSwiper";

export default async function MainBlogs() {
  const images = [
    {
      title: "پاهایم را به آرامی روی شن های ساحل می گذارم",
      imageUrl: "/images/blog1.png",
      hasFloatImage: true,
      dateText: "۲۷ اسفند ۱۴۰۳، ۱۴:۱۴",
      views: 589,
    },
    {
      description: "شما اومدید جزیره یا جنگ؟!",
      imageUrl: "/images/blog2.png",
      dateText: "۲۷ اسفند ۱۴۰۳، ۱۴:۱۴",
      views: 589,
    },
    {
      description: "پاهایم را به آرامی روی شن های ساحل می گذارم",
      imageUrl: "/images/blog4.png",
      dateText: "۲۷ اسفند ۱۴۰۳، ۱۴:۱۴",
      views: 589,
    },
    {
      description: "کیش پرماجرا با دو وروجک!",
      imageUrl: "/images/blog3.png",
      dateText: "۲۷ اسفند ۱۴۰۳، ۱۴:۱۴",
      views: 589,
    },
    {
      description: "سفر به کیش با طعم نی نی",
      imageUrl: "/images/blog5.png",
      dateText: "۲۷ اسفند ۱۴۰۳، ۱۴:۱۴",
      views: 589,
    },
  ];

  const floatingImages = [
    "/images/new/float1.png",
    "/images/new/float2.png",
    "/images/new/float3.png",
    "/images/new/float4.png",
  ];

  return (
    <Container maxWidth="xl" sx={{ marginBottom: "50px", mt: 4 }}>
      <Grid
        container
        spacing={2}
        className="p-0! h-[600px]! col! md:flex-row-reverse!"
      >
        {/* ستون سمت چپ */}
        <Grid
          size={7}
          className="flex-row gap-4! h-full! hidden! md:flex!"
        >
          {/* Left 2×2 layout */}
          <Stack className="h-full! w-full!" spacing={2}>
            {images.slice(1, 3).map((item, i) => (
              <div key={i} className="w-full! h-6/12!">
                <BlogCard
                  imageUrl={item.imageUrl}
                  description={item.description}
                  height="100%"
                  dateText={item.dateText}
                  views={item.views}
                />
              </div>
            ))}
          </Stack>

          <Stack className="w-full! h-full! gap-4!">
            <Stack className="h-full! w-full! relative" spacing={2}>
              {images.slice(3, 5).map((item, i) => (
                <div key={i} className="w-full! h-6/12!">
                  <BlogCard
                    imageUrl={item.imageUrl}
                    description={item.description}
                    height="100%"
                    dateText={item.dateText}
                    views={item.views}
                  />
                </div>
              ))}
            </Stack>
          </Stack>

        </Grid>



        {/* ستون سمت راست */}
        <Grid size={{ xs: 12, md: 5 }} sx={{ height: "100%" }}>
          <Stack className="h-[450px]! md:h-full! w-full! relative!">

            {[images[0]].map((item, i) => (
              <BlogCard
                key={i}
                imageUrl={item.imageUrl}
                title={item.title}
                hasFloatImage={item.hasFloatImage}
                // showMeta={item.showMeta}
                dateText={item.dateText}
                views={item.views}
                height="100%"
                titleSize="xl"
                titleClass="mb-20! md:mb-28! text-xl! md:text-4xl!"
              />
            ))}


            <Stack className="absolute! bottom-16! px-6! w-full! z-10! ">
              <Stack className="bg-white! h-16! md:h-22! rounded-full! flex! flex-row! gap-2.5! p-2.5!">
                {floatingImages.map((img, index) => {
                  const isFirst = index === 0;
                  const isLast = index === floatingImages.length - 1;

                  // If it's the last visible item and there are more images


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
          </Stack>
        </Grid>


        <Grid size={12}
          sx={{
            maxWidth: "100%",
            mx: "auto",
            py: 4,
            flexDirection: "row",
            borderRadius: 2,
            marginTop: { xs: 0, md: 5 },
          }}
          className="reveal-down md:hidden!"
        >
          <ReusableSwiper slidePerViewXs={1.4} slidePerviewLg={5} spaceBetween={20} pagination={true}>
            {/* <Stack className="h-full! w-full!" spacing={2}> */}
            {images.slice(1, 3).map((item, i) => (
              <div key={i} className="w-full! h-6/12!">
                <BlogCard
                  imageUrl={item.imageUrl}
                  description={item.description}
                  height="100%"
                  dateText={item.dateText}
                  views={item.views}
                />
              </div>
            ))}
            {/* </Stack> */}
          </ReusableSwiper>
        </Grid>

      </Grid>
    </Container>
  );
}
