"use client";

import React, { ReactNode } from "react";
import { Stack, Grid } from "@mui/material";
import Step1 from "./step1";
import Discount from "../cart/discount";
import PriceCard from "@/components/shared/cards/cart/PriceCard";
import CustomAccordion from "@/components/shared/collapse/collapse";
import Step3 from "./step3";
import HowToPayCard from "@/components/shared/cards/cart/howToPayCard/howToPayCard";
import TextNumber from "@/components/shared/textNumber";


interface IStep {
  title: string;
  description: string;
  iconPast: ReactNode;
  iconActive: ReactNode;
  iconFuture: ReactNode;
}

export default function ReserveStepper({ steps }: { steps: IStep[] }) {

  // const [activeStep, setActiveStep] = useState<number>(2);
  return (
    <>
      <Stack className="mb-16!">
        <Grid spacing={2.5} container sx={{ display: "flex", justifyContent: "space-between", flexDirection: { lg: "row", xs: "column" } }}>
          <Grid size={{ lg: 9, xs: 12 }} display={"flex"} flexDirection={"column"} gap={2.5}>
            <>
              <TextNumber number={1} text="مشخصات مسافران" className="!" />
              <Step1 />
            </>


            {/* step 2 */}
            <TextNumber number={2} text="پرداخت" className="mt-5!" />

            <Stack className="border-1! border-slate-200! rounded-2xl! px-4 pt-5">
              <CustomAccordion title={"شیوه پرداخت"} titleClass="text-xl!" defaultExpanded={true}>
                <HowToPayCard />
              </CustomAccordion>
            </Stack>
            <Discount />

            {/* step 3 */}
            <TextNumber number={3} text="نگاهی دوباره به وضعیت تور" className="mt-5!" />
            <Step3 />
          </Grid>
          <Grid size={{ lg: 3, xs: 12 }}>
            <PriceCard isReserveTour={true} />
          </Grid>
        </Grid>
        <Stack >

        </Stack>
      </Stack>

      {/* {activeStep === 0 ? (
        <EmptyCartSection onNext={() => setActiveStep(prev => Math.min(prev + 1, steps.length - 1))} />
      ) : activeStep === 1 ? (
        <Step1 onNext={() => setActiveStep(prev => Math.min(prev + 1, steps.length - 1))} />
      ) : (
        activeStep === 2 && <Step2 onNext={() => setActiveStep(prev => Math.min(prev + 1, steps.length - 1))} />
      )} */}
    </>
  );
}
