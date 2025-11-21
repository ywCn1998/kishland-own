"use client";
import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  Stack,
  Typography,
  IconButton,
  Slide,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FilterAltOutlined, Close } from "@mui/icons-material";
import FilterBox from "..";

const Transition = React.forwardRef(function Transition(props: any, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FilterContainer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);

  if (!isMobile) {
    return <FilterBox />;
  }

  // ✅ در موبایل: دکمه و دیالوگ
  return (
    <Stack>
      {/* دکمه باز کردن فیلتر */}
      <Button
        variant="outlined"
        startIcon={<FilterAltOutlined fontSize="large" />}
        onClick={() => setOpen(true)}
        className="h-14! w-full"
        sx={{
          color: "text.secondary",
          // px: 2,
          // py: 2.2,
          fontWeight: 400,
          borderRadius: 1.5,
          fontSize: 14,
          backgroundColor: "white"
        }}
      >
        فیلتر
      </Button>

      {/* دیالوگ فیلترها */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        onClose={() => setOpen(false)}
        fullScreen={false}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 4,
            overflow: "hidden",
            p: 0,
            m: 1.5,
            [theme.breakpoints.down("sm")]: {
              borderRadius: "16px",
              m: 1,
            },
          },
        }}
      >
        {/* 🔹 هدر بالای مودال */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            px: 2,
            py: 1.5,
            borderBottom: "1px solid",
            borderColor: "divider",
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <Typography variant="subtitle1" fontWeight={600}>
            فیلتر
          </Typography>

          <IconButton onClick={() => setOpen(false)}>
            <Close />
          </IconButton>
        </Stack>

        {/* 🔹 محتوای فیلترها */}
        <DialogContent
          sx={{
            p: 2,
            overflowY: "auto",
            maxHeight: "75vh",
          }}
        >
          <FilterBox />
        </DialogContent>
      </Dialog>
    </Stack>
  );
}
