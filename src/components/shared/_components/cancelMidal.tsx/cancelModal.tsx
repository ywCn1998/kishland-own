import React from "react";
import BaseModal from "../../modal/BaseModal";
import { Button, Stack, Switch, Typography } from "@mui/material";

interface cancelProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}
export default function CancelModal({ open, setOpen }: cancelProps) {
  return (
    <div>
      <BaseModal open={open} setOpen={setOpen} title="قوانین استرداد" showIcon={false}>
        <Stack className="flex! flex-col! gap-5! items-center! mt-6!">
          <Stack className="bg-[#FAFAFA]! flex! justify-between! p-3! w-full flex-row! items-center rounded-lg!">
            <Stack className="flex! flex-col! gap-2!">
              <Typography className="text-lg! font-semibold!">استرداد عادی</Typography>
              <Typography className="text-base! " color="primary">
                استرداد بلیط این هتل بدون بازگشت وجه خواهد بود
              </Typography>
            </Stack>
            <Switch />
          </Stack>
          <Stack className="bg-[#FAFAFA]! flex! justify-between! p-3! w-full flex-row! items-center rounded-lg!">
            <Stack className="flex! flex-col! gap-2!">
              <Stack className="flex! flex-row! items-center! gap-1">
                <Typography className="text-lg! font-semibold!"> استرداد بدون جریمه</Typography>
                <Typography className="text-base! font-medium! " color="secondary">420,000 برای هر مسافر</Typography>
              </Stack>
              <Typography className="text-base! " color="secondary">
                در صورت استرداد تا قبل از 12 ساعت، مبلع بدون جریمه به شما
                برمیگردد.{" "}
              </Typography>
            </Stack>
            <Switch />
          </Stack>
          <Stack className="bg-[#F5F7FA]! flex! justify-between! p-3! w-full flex-row! items-center rounded-lg!">
            <Stack className="flex! flex-col! gap-2!">
                <Typography className="text-sm! text-slate-500!"> مجموع پرداخت</Typography>
            
              <Typography className="text-lg! font-semibold!">
           2,407,600 تومان
              </Typography>
            </Stack>
            <Button variant="contained" className="px-10!">
              <Typography className="text-white ">تایید و پرداخت</Typography>
            </Button>
          </Stack>
        </Stack>
      </BaseModal>
    </div>
  );
}
