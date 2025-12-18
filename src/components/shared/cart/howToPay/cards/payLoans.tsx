"use client";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Stack,
  Typography,
  Grid,
  Radio,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import React, { useState } from "react";
import LoanDrawer from "@/components/shared/ui/loanDrawers/loanDrawer";

export const Banks = [
  {
    image: "/images/entertainment/reserve/tavana.png",
    name: "توانا کارت",
    link: "#",
    Balance: "22,000,000",
    value: "tavana",
  },
  {
    image: "/images/entertainment/reserve/loant.png",
    name: "تارا کارت",
    link: "#",
    Balance: "22,000,000",
    value: "tara",
  },
];

export default function PayLoan() {
  const [selectedBank, setSelectedBank] = useState<typeof Banks[0] | null>(null);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const handleSelect = (bank: typeof Banks[0]) => {
    setSelectedBank(bank);
  };

  return (
    <Stack className="reveal">
      <Accordion
        sx={{
          border: "1px solid #e2e8f0",
          borderRadius: 1,
          bgcolor: "white",
          boxShadow: "none",
          "&::before": { display: "none" },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="payloan-content"
          id="payloan-header"
          sx={{
            p: 1.5,
            px: 2,
            "& .MuiAccordionSummary-content": {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            },
          }}
        >
          <Stack direction="column" gap={0.5} alignItems="start">
            <Typography className="text-base!" fontWeight={500}>
              <LanguageOutlinedIcon
                sx={{ fontSize: { xs: "medium", lg: "large" }, mr: 0.5 }}
              />{" "}
              پرداخت اقساطی
            </Typography>
            <Typography
              variant="body2"
              color="textDisabled"
              sx={{ fontSize: { xs: "10px", lg: "16px" } }}
            >
              برای شرکت‌ها و سازمان‌های طرف قرارداد
            </Typography>
          </Stack>

          <Grid display={"flex"} gap={{ xs: 1, lg: 3 }} mr={2}>
            {Banks.map((bank, index) => (
              <Stack
                key={index}
                sx={{
                  border: "1px solid #FB7201",
                  height: { xs: "32px", lg: "49px" },
                  px: { xs: 1, lg: 2 },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 1,
                  transition: "all 0.2s ease",
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: "#FFF9EC",
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={bank.image}
                  alt={bank.name}
                  sx={{
                    height: { xs: 16, lg: 29 },
                    width: { xs: 16, lg: "auto" },
                    objectFit: "contain",
                  }}
                />
              </Stack>
            ))}
          </Grid>
        </AccordionSummary>

        <AccordionDetails>
          <Grid
            display="flex"
            flexDirection="row-reverse"
            gap={{ xs: 1, lg: 3 }}
          >
            {Banks.map((bank, index) => {
              const isSelected = selectedBank?.value === bank.value;
              return (
                <Grid
                  key={index}
                  size={12 / Banks.length}
                  gap={2}
                  onClick={() => handleSelect(bank)}
                  sx={{
                    border: isSelected
                      ? "1px solid #FB7201"
                      : "1px solid #E2E8F0",
                    bgcolor: isSelected ? "#FFF9EC" : "white",
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 2,
                    transition: "all 0.5s ",
                    cursor: "pointer",
                  }}
                >
                  <Grid className="flex! items-center! mr-[-10px]!">
                    <Radio
                      checked={isSelected}
                      onChange={() => handleSelect(bank)}
                      value={bank.value}
                      name="bank-radio"
                      sx={{
                        color: "#E8ECED",
                        "&.Mui-checked": {
                          color: "#FB7201",
                        },
                      }}
                    />
                    <Box
                      component="img"
                      src={bank.image}
                      alt={bank.name}
                      sx={{
                        height: { xs: 20, lg: 35 },
                        objectFit: "contain",
                      }}
                    />
                    <Typography>{bank.name}</Typography>
                  </Grid>

                  <Grid display="flex" justifyContent="space-between">
                    <Typography className="text-sm!">موجودی:</Typography>
                    <Typography className="text-base! font-medium!">
                      {bank.Balance} تومان
                    </Typography>
                  </Grid>

                  <Button
                    variant="outlined"
                    sx={{
                      bgcolor: "white",
                      border: isSelected
                        ? "1px solid white"
                        : "1px solid secondary",
                      "&:hover": {
                        border: "1px solid #FB7201",
                        backgroundColor: "#FFF4E5",
                      },
                    }}
                    onClick={() => setOpenDrawer(!openDrawer)}
                  >
                    <Typography sx={{ color: "black" }}>
                      افزایش موجودی +
                    </Typography>
                  </Button>
                </Grid>
              );
            })}
          </Grid>
        </AccordionDetails>
      </Accordion>``

      <LoanDrawer
        open={openDrawer}
        bank={selectedBank}
        setOpen={setOpenDrawer}
      />
    </Stack>
  );
}
