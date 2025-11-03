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
  title: string | ReactNode;
  children: ReactNode;
  maxWidth?: DialogProps["maxWidth"];
  fullWidth?: boolean;
  showIcon?: boolean;
  closeText?: string;
  bgImage?: string;
  onClose?: ()=>void;
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
  bgImage,
  onClose,
}: Props) => {
  const CloseHandle = () => setOpen(!open);

  return (
    <Dialog
      open={open}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      onClose={CloseHandle}
      PaperProps={{
        sx: {
          borderRadius: 4,
          overflow: "hidden",
          p: 0,
        },
      }}
    >
      <Box
        sx={{
          backgroundImage: bgImage ? `url(${bgImage})` : "none",
          backgroundSize: "cover", 
          backgroundPosition: "center",
          
          width: "100%",
          height: "100%",
        }}
      >
        <Box sx={{ p: 5 }}>
          <Stack
            direction="row-reverse"
            alignItems="center"
            justifyContent="space-between"

          >
            <Button
              variant="text"
              size="small"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "text.secondary",
              }}
              onClick={onClose ? onClose : CloseHandle}
            >
              <Typography variant="body2">{closeText}</Typography>
              <ArrowBackIcon fontSize="small" />
            </Button>
          
            
            <Typography variant="h6" sx={{ display: "flex", alignItems: "center" }}>
              {showIcon && <Person sx={{ mr: 1, mb: "2px" }} />}
              {title}
            </Typography>
          </Stack>

          <Divider sx={{ mt: 2, mb: 3 }} />

          {children}
        </Box>
      </Box>
    </Dialog>
  );
};

export default BaseModal;
