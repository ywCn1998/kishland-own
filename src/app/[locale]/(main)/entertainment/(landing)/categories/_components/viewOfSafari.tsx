import BlogCard from "@/components/shared/cards/blogCard";
import { Container, Typography, Stack, Grid } from "@mui/material";
import { getTranslations } from "next-intl/server";

export default  function ViewsOfSafari() {
  return (
    <Container maxWidth="xl" disableGutters  sx={{ marginBottom: "50px" }}>
      <Grid
        container
        spacing={2}
        sx={{ height: "600px", flexDirection: "row-reverse"  , width : "100%"}}
      >
        {/* ستون سمت چپ */}
        <Grid size={5} sx={{ height: "100%" }}>
          <Stack spacing={2} sx={{ height: "100%" }}>
            <BlogCard
              description={""}
              imageUrl="/images/entertainment/landing/safari2.png" // مسیر عکس خود را قرار دهید
              height="50%"
            />
            <Stack className="flex! flex-row! h-full! ">
              <BlogCard
                description={""}
                imageUrl="/images/entertainment/landing/safari3.png"// مسیر عکس خود را قرار دهید
                height="100%"
              />
            </Stack>
          </Stack>
        </Grid>

        {/* ستون سمت راست */}
        <Grid size={7} sx={{ height: "100%" }} spacing={10}>
          <Stack spacing={2} sx={{ height: "100%" }}>
            <BlogCard
              imageUrl="/images/entertainment/landing/safari1.png"// مسیر عکس خود را قرار دهید
              height="100%"
            />
            <Stack
              spacing={0}
              className="flex! flex-row! gap-4!"
              sx={{ height: "100%", width: "100%" }}
            >
              <Stack className="flex! flex-row! gap-4! w-[50%]!">
                <BlogCard
                  description={""}
                  imageUrl="/images/entertainment/landing/safari4.png" // مسیر عکس خود را قرار دهید
                  height="100%"
                />
                <BlogCard
                  description={""}
                  imageUrl="/images/entertainment/landing/safari5.png" // مسیر عکس خود را قرار دهید
                  height="100%"
                />
              </Stack>
              <Stack className="flex! flex-col! gap-4! w-[50%]! h-full!">
                <Stack className="flex! flex-row! gap-4 h-6/12!">
                  <BlogCard
                    description={""}
                    imageUrl="/images/entertainment/landing/safari6.png"  // مسیر عکس خود را قرار دهید
                    height="100%"
                  />
                  <BlogCard
                    description={""}
                    imageUrl="/images/entertainment/landing/safari7.png"  // مسیر عکس خود را قرار دهید
                    height="100%"
                  />
                </Stack>
                <Stack className="flex! flex-row! gap-4! h-6/12!">
                  <BlogCard
                    description={""}
                    imageUrl="/images/entertainment/landing/safari8.png"  // مسیر عکس خود را قرار دهید
                    height="100%"
                  />
                  <BlogCard
                    description={""}
                    imageUrl="/images/entertainment/landing/safari9.png"  // مسیر عکس خود را قرار دهید
                    height="100%"
                  />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
