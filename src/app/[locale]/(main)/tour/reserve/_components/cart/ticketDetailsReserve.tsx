import TicketCard from "@/components/shared/cards/tour/ticketCard";
import CustomAccordion from "@/components/shared/collapse/collapse";
import { Stack } from "@mui/material";
import React from "react";

export default function TicketDetailsReserve() {
  return (
    <Stack className="border-1! border-slate-200! rounded-2xl! px-4 pt-5">
      <CustomAccordion
        title={"مشخصات هتل "}
        titleClass="text-xl!"
        defaultExpanded={true}
      >
        <Stack className="mt-4!">
          <Stack className="w-full! flex! flex-col! gap-5">
            <TicketCard ticketStatus="hasBought" />
            <TicketCard ticketStatus="canBuyTicket" />
          </Stack>
        </Stack>
      </CustomAccordion>
    </Stack>
  );
}
