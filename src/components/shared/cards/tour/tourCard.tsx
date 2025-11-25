import Image from "next/image";
import { Grid, Stack, Typography } from "@mui/material";
import UpgradeIcon from "@mui/icons-material/Upgrade";

interface TourCardProps {
  image: string;
  title: string;
  startDate: string;
  endDate: string;
  index?: number;
}

export function TourCard({ image, title, startDate, endDate, index = 0 }: TourCardProps) {
  const isEven = index % 2 === 0;
  
  return (
    <Grid size={3} className="flex flex-col gap-6! h-full cursor-pointer">
      {/* Image */}
      <Stack
        className={`relative w-full overflow-hidden rounded-2xl ${isEven ? 'h-9/12' : 'h-7/12'}`}
        sx={{
          "& img": {
            transition: "transform 0.4s ease-in-out",
          },
          "&:hover img": {
            transform: "scale(1.15)",
          },
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover mb-3! reveal" // rounded moved to parent
        />
      </Stack>

      {/* Content */}
      <Stack className={`w-full ${isEven ? 'h-3/12' : 'h-5/12'}`}>
        <Typography className="md:text-2xl! text-lg! font-semibold! mb-3! reveal-down">
          {title}
        </Typography>

        <div className="flex flex-row justify-between">
          <span className="text-sm text-slate-400 flex items-center gap-1 reveal-down">
            <UpgradeIcon /> {startDate}
          </span>
          <span className="text-sm text-slate-400 flex items-center gap-1 reveal-down">
            {endDate} <UpgradeIcon />
          </span>
        </div>
      </Stack>
    </Grid>
  );
}
