import { Container, Typography, Stack, Grid } from "@mui/material";
import { getTranslations } from "next-intl/server";
import BlogCard from "../../../../../components/shared/cards/blogCard";

export default async function ViewsOfHotel() {
  return (
    <Container maxWidth="xl" sx={{ marginBottom: "50px", mx:"auto" }}>
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
    </Container>
  );
}
