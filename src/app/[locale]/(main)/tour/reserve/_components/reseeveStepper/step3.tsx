"use client"
import React from "react";
import { Button, Divider, Grid, Stack, Typography } from "@mui/material";
import RHFTextInput from "@/components/shared/form/RHFTextInput";
import FormProvider from "@/providers/FormProvider";
import useSubmitPerson from "../../hooks/useSubmitPersons";
import PersonIcon from '@mui/icons-material/Person';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AddIcon from '@mui/icons-material/Add';
import TextNumber from "@/components/shared/textNumber";
import { TourCard } from "../../../list/_components/tours/toursCard";
import { SelectedTourCard } from "@/components/shared/cards/tour/selectedTourCard";
import CustomAccordion from "@/components/shared/collapse/collapse";
import TicketCard from "@/components/shared/cards/tour/ticketCard";



export default function Step3() {
    return (
        <>
            <Stack className="border-1! border-slate-200! rounded-2xl! px-4 pt-5 hidden! md:block!">
                <CustomAccordion title={"مشخصات هتل "} titleClass="text-xl!" defaultExpanded={true}>
                    <Stack className="mt-4!">
                        <SelectedTourCard />
                    </Stack>
                </CustomAccordion>
            </Stack>


            <Stack className="border-1! border-slate-200! rounded-2xl! px-4 pt-5">
                <CustomAccordion title={"مشخصات بلیط"} titleClass="text-xl!" defaultExpanded={true}>

                    <Stack className="w-full! flex! flex-row!  gap-5">
                        <Stack className="w-full! flex! flex-row!  gap-5 mt-4!">
                            <TicketCard ticketStatus="hasBought" />
                            <TicketCard ticketStatus="hasBought" />
                        </Stack>
                    </Stack>
                </CustomAccordion>
            </Stack>
        </>
    );
}
