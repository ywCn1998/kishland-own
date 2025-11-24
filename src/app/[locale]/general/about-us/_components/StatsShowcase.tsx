import AboutSection from "@/components/shared/_components/extraFooterInformation/_components/information";
import { Box, Typography, Stack, Grid } from "@mui/material";
import Image from "next/image";

const Stats = [
  {
    image: "/images/general/about-us/money.png",
    title: "+100 سال",
    description: "هتل و اقامتگاه",
  },
  {
    image: "/images/general/about-us/grow.svg",
    title: "+150",
    description: "تور با امکان پرداخت اقساط",
  },
  {
    image: "/images/message.png",
    title: "+500",
    description: "تفریح پر هیجان در کیش",
  },
  {
    image: "/images/rocket.png",
    title: "+20 سال",
    description: "افتخار خدمت رسانی",
  },
];

export default function StatsShowcase() {
  return (
    <Box>
      <Grid container spacing={2}>

        {Stats.map((item, i) => (
          <Grid
            size={{ xs: 12, lg: 3 }}
            className="flex! lg:flex-col! justify-between! items-center! lg:p-4! !px-4 border-1! border-slate-200! md:rounded-2xl! rounded-lg! lg:gap-5! py-4!"
          >
            <InformationCard
              key={i}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}


function InformationCard({
  image,
  title,
  description,
  textNowrap = true,
}: any) {
  return (
    <>
      <Grid className="!flex items-center !flex-row lg:!flex-col lg:!gap-4  gap-2! h-fit!">
        <Stack className="relative! md:h-12! md:w-12! h-8! w-8! reveal">
          <Image src={image} alt={title} fill />
        </Stack>

        {/* Title */}
        <Typography className={`text-center! hidden! md:block! font-semibold! !text-xs lg:text-lg! mb-1! reveal-down ${textNowrap ? "!text-nowrap" : ""}`}>
          {title}
        </Typography>
        <Typography className={`text-center! md:hidden! text-slate-500! reveal-down !text-xs lg:!text-lg ${textNowrap ? "!text-nowrap" : ""}`}>
          {description}
        </Typography>

      </Grid>
      {/* Icon */}


      {/* Description */}
      <Typography className={`leading-[40px]! text-center! hidden! md:block! text-slate-500! reveal-down !text-xs lg:!text-lg ${textNowrap ? "!text-nowrap" : ""}`}>
        {description}
      </Typography>
      <Typography className={`text-center! md:hidden! font-semibold! !text-xs lg:text-lg! mb-1! reveal-down ${textNowrap ? "!text-nowrap" : ""}`}>{title}</Typography>
    </>
  );
}



