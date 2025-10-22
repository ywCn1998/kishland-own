import Image from "next/image";
import { Stack, Typography } from "@mui/material";

export default function CategoryCard({
  isActive,
  src,
}: {
  isActive?: boolean;
  src: string;
}) {
  return (
    <Stack
      className="flex! flex-col! justify-center items-center h-full! py-2! cursor-pointer "
      spacing={1}
    >
      <Stack
        className="rounded-full! h-full! "
        sx={{
          borderRadius: "50%",
          p: "3px", // border thickness
          background: isActive
            ? "linear-gradient(to bottom, #088DEF, #80928c, #FB7201)"
            : "#bfc4d5",
          backgroundClip: "padding-box, border-box",
          backgroundOrigin: "border-box",
          "& > *": {
            borderRadius: "50%",
            backgroundColor: "#fff", // inner background
          },
          boxShadow: isActive
            ? `
          0 0 0px #088DEF,   /* blue glow */
          0 0 0px #80928c,   /* mid glow */
          0 0 10px #FB7201    /* orange glow */

        `
            : "none",
        }}
      >
        <Image
          src={src}
          className="rounded-full! p-1!"
          alt="intertainment"
          width={60}
          height={60}
        />
      </Stack>
      <Typography className="text-slate-500! text-center reveal-down "  sx={{textWrap : "nowrap" , fontSize : {lg : "14px" , xs : "10px"}}}  >تفریحات این ماه</Typography>
    </Stack>
  );
}
