import { Box, Dialog, DialogProps, Divider, Typography } from "@mui/material";
import { Close, Person } from "@mui/icons-material";
import { ReactNode } from "react";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  children: ReactNode;
  maxWidth?: DialogProps["maxWidth"];
  fullWidth?: boolean;
  showIcon?: boolean;
  className?: string;
}

const BaseModal = ({
  open,
  setOpen,
  title,
  children,
  maxWidth = "md",
  fullWidth = true,
  showIcon = true,
  className = "",
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
      className={className}
    >
      <Box className="bg-white relative p-5">
        <span className="absolute left-3 top-3" onClick={CloseHandle}>
          <Close />
        </span>
        <Typography className="flex items-center text-xl font-semibold">
          {showIcon && <Person className="mb-2 me-1" />}
          {title}
        </Typography>
        <Divider orientation="horizontal" className="!mt-3" />
        {children}
      </Box>
    </Dialog>
  );
};

export default BaseModal;
