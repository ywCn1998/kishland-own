import { Button, Container, Typography, Stack } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export default function OfferBanner({
  caption,
  title,
  buttonText,
  className,
  responsiveCaption,
  href,
  classNameButton,
  isFullWidth = true,
}: {
  responsiveCaption?: string;
  caption?: string;
  title?: string;
  buttonText?: string;
  className?: string;
  href?: string;
  classNameButton?: string;
  isFullWidth?: boolean;
}) {
  return (
    // <Container maxWidth="xl">
    <Stack
      className={`flex! flex-row! justify-between! items-center!  p-4  lg:p-5! py-5 lg:py-10! lg:rounded-2xl! reveal ${isFullWidth ? "xs-fullwidth" : ""} ${className}`}
    >
      <div>
        <Typography className="hidden lg:block text-xl! text-slate-400! mb-5! reveal-down">
          {caption}
        </Typography>
        <Typography className=" block lg:hidden text-xs! text-slate-400! mb-2! reveal-down">
          {responsiveCaption}
        </Typography>
        <Typography className="font-bold! text-lg!  md:text-5xl! reveal-down">
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
          className={`lg:!hidden text-slate-400! reveal-down ${classNameButton}`}
        >
          <Typography className="!text-xs text-nowrap ">مشاهده همه</Typography>
        </Button>
      </div>
    </Stack>
    // </Container>
  );
}
