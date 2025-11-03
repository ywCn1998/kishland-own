import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function mainBanner({
  caption,
  title,
  imgUrl,
  buttonText,
  bgColor,
}: {
  caption?: string;
  title?: string;
  imgUrl?: string;
  buttonText?: string;
  bgColor?: string;
}) {
  return (
    <Stack
      className="w-full h-[320px] relative rounded-3xl!"
      sx={{ bgcolor: bgColor ? bgColor : "#088DEF" }}
    >
      <Stack >
        <Image
          src={imgUrl ? imgUrl : "/images/tafrih-list.png"}
          alt="s"
          fill
          className="animate-slide-in-left object-cover"
        />
      </Stack>

      <Stack className="text-white flex! flex-col! items-end! justift-center! h-full! pl-24">
        <Stack
          className="flex! flex-col! justify-center! h-full! z-40"
          spacing={2}
        >
          <Typography className="font-light! text-lg! reveal-down">
            {caption ? caption : "صفر تا صد هیجان رو اینجا واست لیست کردیم"}
          </Typography>
          <Typography className="font-bold! text-5xl! reveal-down">
            {title ? title : "دنبال چه تفریحی می گردی ؟!!"}
          </Typography>
          <div className="flex! justify-end w-full! mt-10! reveal-down">
            <Button
              sx={{ color: bgColor ? bgColor : "secondary.500" }}
              className=" bg-white! text-xl! w-[50%] self-start!"
              variant="contained"
              href="/fa/entertainment/list"
            >
              {buttonText ? buttonText : "مشاهده لیست تفریحات"}
            </Button>
          </div>
        </Stack>
      </Stack>
    </Stack>
  );
}
