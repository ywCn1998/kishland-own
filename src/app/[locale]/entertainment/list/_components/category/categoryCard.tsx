import Image from "next/image";
import { Stack, Typography } from "@mui/material";

export default function CategoryCard({
  isActive,
  src,
  title
}: {
  isActive?: boolean;
  src: string;
  title: string
}) {
  return (
    <Stack
      className="h-full! w-auto! flex! flex-col! justify-center items-center  cursor-pointer    "
      spacing={1}



    >
      <Stack
        className="w-[152px]! h-[140px]! flex justify-center items-center "
        sx={{
          borderRadius: 2,
          backgroundColor: (theme) => isActive ? theme.palette.primary.main : theme.palette.background.paper,
          border: 1,
          borderColor: (theme) => isActive ? theme.palette.primary.main : theme.shape.borderColor,
        }}
      >
        <Image
          src={src}
          className=" p-1!"
          alt="intertainment"
          width={95}
          height={95}
        />
      </Stack>

      <Typography variant={isActive? "subtitle1":"subtitle2"} color={isActive ? "primary" : "textPrimary"} className="text-center mt-6!">{title}</Typography>
    </Stack>
  );
}
