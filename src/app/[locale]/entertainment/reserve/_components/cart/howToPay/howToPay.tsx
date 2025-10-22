"use client"

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import PayOnline from "./cards/payOnlineCard";
import PayLoan from "./cards/payLoans";
import PayWallet from "./cards/payWallet";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function HowToPay() {
  const [selected, setSelected] = useState<string>("online");
  console.log(selected)

  return (
    <Stack
      sx={{
        border: "1px solid #e2e8f0",
        borderRadius: {xs : "12px" , lg : "16px"},
        backgroundColor: "white",
        overflow: "hidden",
        p: {xs : 0 , lg : 2},
      }}
    >
      <Accordion sx={{ border: "none" }} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="!text-lg lg:!text-xl" fontWeight={{xs : 550 , lg : 500}}>
            شیوه پرداخت
          </Typography>
        </AccordionSummary>

        <Divider sx={{ mt: {xs : 0 , lg : 1} }} />

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
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
}
