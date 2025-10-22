import { Container, Grid, Stack } from "@mui/material";
import BlogCard from "../../cards/blogCard"; // unified BlogCard

export default async function MainBlogs() {
  const leftColumn = [
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

  const rightColumn = [
    {
      title: "پاهایم را به آرامی روی شن های ساحل می گذارم",
      imageUrl: "/images/blog1.png",
      hasFloatImage: true,
      dateText: "۲۷ اسفند ۱۴۰۳، ۱۴:۱۴",
      views: 589,
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ marginBottom: "50px", mt: 4 }}>
      <Grid
        container
        spacing={2}
        sx={{ p: 2, height: "550px", flexDirection: "row-reverse" }}
      >
        {/* ستون سمت چپ */}
        <Grid
          size={7}
          sx={{ height: "100%" }}
          className="flex! flex-row gap-4!"
        >
          {/* Left 2×2 layout */}
          <Stack className="h-full! w-full!" spacing={2}>
            {leftColumn.slice(0, 2).map((item, i) => (
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
            {leftColumn.slice(2, 4).map((item, i) => (
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
        <Grid size={5} sx={{ height: "100%" }}>
          {rightColumn.map((item, i) => (
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
            />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
