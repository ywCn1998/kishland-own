import { Box, Container, Grid, Stack } from "@mui/material";
import BlogCard from "../../cards/blogCard"; // unified BlogCard
import ReusableSwiper from "../../reusableSwiper";

export default async function MainBlogs() {
  const images = [
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
    {
      title: "پاهایم را به آرامی روی شن های ساحل می گذارم",
      imageUrl: "/images/blog1.png",
      hasFloatImage: true,
      dateText: "۲۷ اسفند ۱۴۰۳، ۱۴:۱۴",
      views: 589,
    },
  ];




  const floatsImages = [
    "/images/float1.png",
    "/images/float2.png",
    "/images/float3.png",
    "/images/float4.png",
  ];

  const floatSlice = floatsImages.slice(0, 4);

  return (
    <Container disableGutters maxWidth="xl" sx={{ marginBottom: "50px", mt: 4 }}>
      <Grid
        container
        spacing={2}
        className="md:h-[750px]! flex-col! md:flex-row-reverse!"
      >
        {/* ستون سمت چپ */}
        <Grid
          size={7}
          className="flex! flex-row gap-4! hidden! md:flex!"
        >
          {/* Left 2×2 layout */}
          <Stack className="h-full! w-full! " spacing={2}>
            {images.slice(0, 2).map((item, i) => (
              <div key={i} className="w-full! h-6/12!">
                <BlogCard
                  imageUrl={item.imageUrl}
                  description={item.description}
                  height="100%"
                  dateText={item.dateText}
                  views={589}
                />
              </div>
            ))}
          </Stack>

          <Stack className="h-full! w-full!" spacing={2}>
            {images.slice(2, 4).map((item, i) => (
              <div key={i} className="w-full! h-6/12!">
                <BlogCard
                  imageUrl={item.imageUrl}
                  description={item.description}
                  height="100%"
                  dateText="۲۷ اسفند ۱۴۰۳، ۱۴:۱۴"
                  views={589}
                />
              </div>
            ))}
          </Stack>
        </Grid>

        {/* ستون سمت راست */}
        <Grid size={{ xs: 12, md: 5 }} className="h-[400px]! md:h-full! relative! px-4! md:px-0! ">
          <BlogCard
            imageUrl={images[4].imageUrl}
            title={images[4].title}
            // hasFloatImage={images[4].hasFloatImage}
            dateText={images[4].dateText}
            views={images[4].views}
            height="100%"
            titleSize="xl"
            titleClass="mb-20! md:mb-28! text-xl! md:text-3xl!"
          />

          {/* ------------------------------------- */}

          <Stack className="absolute! bottom-13! md:bottom-15! left-1/2! -translate-x-1/2! z-10! w-full! px-7!">
            <Stack className="bg-white! h-18! md:h-24! rounded-full! flex! flex-row! gap-1.5! md:gap-2.5! p-1.5! md:p-2.5!">
              {floatSlice.map((img, index) => {
                const isFirst = index === 0;
                const isLast = index === floatSlice.length - 1;


                // Regular image
                return (
                  <Stack
                    key={img}
                    className={`h-full! w-3/12! overflow-hidden! cursor-pointer! ${isFirst
                      ? "rounded-l-md! rounded-r-full!"
                      : isLast
                        ? "rounded-r-md! rounded-l-full!"
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
        </Grid>

      </Grid>

      <Box
        sx={{
          // maxWidth: "100%",
          // mx: "auto",
          pb: 4,
          display: "flex",
          flexDirection: "row",
          borderRadius: 2,
          marginTop: 2,
        }}
        className="reveal-down h-[300px]! md:hidden! pr-4!"
      >
        <ReusableSwiper
          dots={true}
          slidePerViewXs={1.4}
          slidePerviewLg={4}
          spaceBetween={15}
          pagination={true}
        >
          {images.slice(0, 4).map((item, i) => (
            // <div key={i} className="w-full! h-6/12!">
            <BlogCard
              key={i + "blogCard"}
              imageUrl={item.imageUrl}
              description={item.description}
              height="100%"
              dateText="۲۷ اسفند ۱۴۰۳، ۱۴:۱۴"
              views={589}
            />
            // </div>
          ))}
        </ReusableSwiper>
      </Box>
    </Container>
  );
}
