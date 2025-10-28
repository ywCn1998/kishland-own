import {
  Box,
  Button,
  Dialog,
  DialogProps,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { Person } from "@mui/icons-material";
import { ReactNode } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  children: ReactNode;
  maxWidth?: DialogProps["maxWidth"];
  fullWidth?: boolean;
  showIcon?: boolean;
  closeText?: string;
}

const BaseModal = ({
  open,
  setOpen,
  title,
  children,
  maxWidth = "md",
  fullWidth = true,
  showIcon = true,
  closeText = "برگشت",
}: Props) => {
  const CloseHandle = () => {
    setOpen(!open);
  };
  return (
    <Dialog
      open={open}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      onClose={CloseHandle}
      PaperProps={{
        sx: {
          borderRadius: 4,
          p: 6,
          backgroundColor: "white",
        },
      }}
    >
      <Box className="bg-white ">
        <Stack className="justify-between items-center flex-row-reverse!  ">
          <Button
            variant="text"
            size="small"
            className="flex-row! items-center gap-2 text-slate-400! "
            onClick={CloseHandle}
          >
            <Typography className="text-sm!">{closeText}</Typography>
            <ArrowBackIcon fontSize="small" />
          </Button>
          <Typography className="flex items-center text-xl! font-medium!">
            {showIcon && <Person className="mb-2 me-1" />}
            {title}
          </Typography>
        </Stack>

        <Divider orientation="horizontal" className="!mt-3" />
        {children}
      </Box>
    </Dialog>
  );
};

export default BaseModal;
