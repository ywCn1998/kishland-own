"use client";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import PayOnline from "@/components/shared/cart/howToPay/cards/payOnlineCard";
import PayLoan from "@/components/shared/cart/howToPay/cards/payLoans";
import PayWallet from "@/components/shared/cart/howToPay/cards/payWallet";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function HowToPay({ discount = false }: { discount?: boolean }) {
  const [selected, setSelected] = useState<string>("online");

  return (
    <Stack
      sx={{
        border: "1px solid #e2e8f0",
        borderRadius: { xs: "12px", lg: "16px" },
        backgroundColor: "white",
        overflow: "hidden",
        p: { xs: 0, lg: 2 },
      }}
    >
      <Accordion sx={{ border: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            className="!text-lg lg:!text-xl"
            fontWeight={{ xs: 550, lg: 500 }}
          >
            شیوه پرداخت
          </Typography>
        </AccordionSummary>

        <Divider sx={{ mt: { xs: 0, lg: 1 } }} />

        <AccordionDetails>
          <Stack spacing={2}>
            <PayOnline
            // selected={selected }
            // // onClick={() => setSelected("online")}
            />
            <PayLoan
            // selected={selected }
            // // onClick={() => setSelected("loan")}
            />
            <PayWallet
            // selected={selected }
            // // onClick={() => setSelected("wallet")}
            />
            {discount && (
              <Grid className="flex! justify-between items-center mt-5! reveal">
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection : 'column',
                    gap: 1.5,
                    justifyContent: "start",
                  }}
                  size={5}
                >
                  <Typography
                    className="!text-lg lg:!text-xl"
                    fontWeight={{ xs: 550, lg: 500 }}
                  >
                    کد تخفیف
                  </Typography>
                  <Typography
                    fontSize={"12px"}
                    fontWeight={400}
                    className="text-slate-400"
                    sx={{ display: { xs: "none", lg: "block" } }}
                  >
                    در صورت داشتن کد تخفیف آن را اینجا وارد کنید
                  </Typography>
                </Grid>
                <Grid  size={7}>
                  <TextField
                    fullWidth
                    placeholder="کد تخفیف را وارد کنید"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Button variant="text" color="secondary" size="small">
                            <Typography variant="caption2">اعمال</Typography>
                          </Button>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
            )}
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
}
