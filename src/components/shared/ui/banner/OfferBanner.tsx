import { Button, Container, Typography, Stack } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function OfferBanner({
  caption,
  title,
  buttonText,
  className,
  responsiveCaption,
  href,
  classNameButton,
  isFullWidth = true,
  copyBtn = false,
}: {
  responsiveCaption?: string;
  caption?: string;
  title?: string;
  buttonText?: string;
  className?: string;
  href?: string;
  classNameButton?: string;
  isFullWidth?: boolean;
  copyBtn?: boolean;
}) {
   const copyPageLink = async (): Promise<boolean> => {
    try {
      const url = window.location.href;
      await navigator.clipboard.writeText(url);
      return true; // موفقیت
    } catch (error) {
      console.error("Copy failed:", error);
      return false; // خطا
    }
  };
  
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
        <Stack className="flex! flex-row! items-center! gap-4!">
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
          {copyBtn &&
            <Button onClick={copyPageLink} className="border-1! border-orange-400! bg-orange-100! hidden! md:block!">
              <ContentCopyIcon color="primary"/>
            </Button>}
        </Stack>

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
