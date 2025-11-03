import { Button, Container, Typography, Stack } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export default function OfferBanner({
  caption,
  title,
  buttonText,
  bgColor ,
  className,
  responsiveCaption,
  href,
}: {
  responsiveCaption?: string;
  caption?: string;
  title?: string;
  buttonText?: string;
  bgColor?: string;
  className?: string;
  href?:string;
}) {
  return (
    // <Container maxWidth="xl">
    <Stack
      className={`flex! flex-row! justify-between! items-center!  p-4  lg:p-5! py-5 lg:py-10! lg:rounded-2xl! reveal xs-fullwidth ${className}`}
    >
      <div>
        <Typography className="hidden lg:block text-xl! text-slate-400! mb-5! reveal-down">
          {caption}
        </Typography>
        <Typography className=" block lg:hidden !text-[8px] text-slate-400! mb-2! reveal-down text-nowrap">
          {responsiveCaption}
        </Typography>
        <Typography className="font-bold! sm:text-base  lg:text-5xl! reveal-down">
          {title}
        </Typography>
      </div>
      <div>
        <Button
          endIcon={
            <KeyboardBackspaceIcon className="text-gray-600! reveal-down" />
          }
          variant="outlined"
          className="!hidden lg:!flex border-1 border-black! bg-white! text-black! py-4! reveal-down"
          href={href}
        >
          {buttonText}
        </Button>
        <Button
          endIcon={
            <KeyboardBackspaceIcon className="text-slate-400! reveal-down" />
          }
          variant="text"
          size="small"
          className="lg:!hidden text-slate-400! reveal-down"
        >
          <Typography className="!text-xs text-nowrap ">مشاهده همه</Typography>
        </Button>
      </div>
    </Stack>
    // </Container>
  );
}
