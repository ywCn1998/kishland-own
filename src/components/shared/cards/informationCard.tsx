import Image from "next/image";
import { Grid, Stack, Typography } from "@mui/material";

interface AboutInformationProps {
  image: string;
  title: string;
  description: string;
}

export default function InformationCard({
  image,
  title,
  description,
}: AboutInformationProps) {
  return (
    <Grid
      size={{ sm: 12, lg: 3 }}
      className="flex! lg:flex-col! justify-between! items-center! lg:p-4! !px-4 lg:border-1! border-slate-200! rounded-2xl! lg:gap-5! "
    >
      <Grid className="!flex items-center !flex-row lg:!flex-col lg:!gap-4  gap-2!">
        <Stack className="relative! h-12! w-12! reveal">
          <Image src={image} alt={title} fill />
        </Stack>

        {/* Title */}
        <Typography className="font-semibold! !text-xs lg:text-lg! mb-1! reveal-down !text-nowrap">
          {title}
        </Typography>
      </Grid>

      {/* Description */}
      <Typography className="text-slate-500! reveal-down !text-xs lg:!text-lg !text-nowrap">
        {description}
      </Typography>
    </Grid>
  );
}
