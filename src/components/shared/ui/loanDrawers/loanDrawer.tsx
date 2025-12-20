import {
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import FormProvider from "@/providers/FormProvider";
import { Controller, useFormContext } from "react-hook-form";
import useSubmitLoan from "./hooks/useSubmitLoan";
import RHFTextInput from "../../form/RHFTextInput";
import RHFSingleRadioGroup from "../../form/RHFRadio";
import InfoIcon from "@mui/icons-material/Info";
import { Banks } from "@/components/shared/cart/howToPay/cards/payLoans";

interface drawerProps {
  bank: (typeof Banks)[0] | null;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function LoanDrawer({ bank, open, setOpen }: drawerProps) {
  const { OnSubmit, methods } = useSubmitLoan();
  const [isSelected, setIsSelected] = useState(false);

  const handleClose = () => {
    setOpen(!open);
  };

  const handleSelect = () => {
    setIsSelected(!isSelected);
  };

  return (
    <Drawer 
      anchor="right" 
      open={open}
      PaperProps={{
        sx: {
          zIndex: 1400,
        },
      }}
      ModalProps={{
        sx: {
          zIndex: 1400,
        },
      }}
    >
      <Stack className="md:w-[40dvw]! sm:w-[70dvw]! w-full! p-8! py-6!">
        <Stack className="flex! justify-between! items-center! flex-row! py-4!">
          <Button onClick={handleClose} className="py-2!  border-1! border-slate-600! " variant="outlined" size="small">
            <CloseIcon fontSize="small"/>
          </Button>
          <Typography className="text-lg! font-bold!">افزایش موجودی</Typography>
          <Typography>

          </Typography>
        </Stack>
        <Divider />
        <Grid
          onClick={handleSelect}
          gap={2}
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            borderRadius: 2,
            transition: "all 0.5s",
            cursor: "pointer",
            border: `1px solid ${isSelected ? "#FB7201" : "#E2E8F0"}`,
            bgcolor: `${isSelected ? "#FFF9EC" : "none"}`,
            mt: 4,
          }}
        >
          <Grid className="flex! items-center! mr-[-10px]! ">
            <Radio
              checked={isSelected}
              onChange={handleSelect}
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
              src={bank?.image}
              sx={{
                height: { xs: 20, lg: 25 },
                objectFit: "contain",
              }}
            />
            <Typography>{bank?.name}</Typography>
          </Grid>

          <Grid display="flex" justifyContent="space-between">
            <Typography className="text-sm!">موجودی:</Typography>
            <Typography className="text-base! font-medium!">
              {bank?.Balance} تومان
            </Typography>
          </Grid>
        </Grid>

        <FormProvider methods={methods} onSubmit={OnSubmit}>
          {bank?.value === "tara" ? (
            <Stack className="gap-4! mt-8!">
              <Stack className="gap-4!">
                <Typography className="text-sm! text-slate-500">
                  مبلغ مورد نظر خود برای افزایش وارد کنید
                </Typography>
                <RHFTextInput
                  name="pay"
                  placeholder="مبلغ (تومان)"
                  type="number"
                />
              </Stack>
              <Stack className="gap-4! mt-4!">
                <Typography className="text-sm! text-slate-500">
                  شماره موبایل متصل به کیف پول اعتباری تارا{" "}
                </Typography>
                <RHFTextInput
                  name="phone"
                  placeholder="شماره موبایل "
                  type="number"
                />
              </Stack>
              <Box className="!bg-slate-200 p-4! rounded-lg flex! flex-col! gap-4!">
                <Stack className="flex-row! gap-2!">
                  <InfoIcon color="disabled" />
                  <Typography className="text-lg! font-medium!">
                    قوانین و عودت وجه
                  </Typography>
                </Stack>
                <Typography className="text-sm! leading-10 text-slate-500">
                  برگشت وجه به کیف پول تارا فقط تا 7 روز پس از انجام تراکنش
                  امکان پذیر است و در صورت کنسلی سفارش پس از بازه زمانی مجاز
                  تارا امکان عودت و برداشت موجودی تحت هیچ شرایطی میسر نبوده و
                  میتوانید از موجودی اعتبار خود در سفارشات بعدی استفاده نمایید.
                </Typography>
              </Box>
              <Box className="!bg-slate-200 p-4! rounded-lg flex! flex-col! gap-4!">
                <Stack className="flex-row! gap-2!">
                  <InfoIcon color="disabled" />
                  <Typography className="text-lg! font-medium!">
                    تاریخ انقضا{" "}
                  </Typography>
                </Stack>
                <Typography className="text-sm! leading-10 text-slate-500">
                  موجودی کیف اعتبار تارا در کیف پول کیش لندیار بدون هیچ محدودیت
                  زمانی و تا همیشه برای خرید های بعدی شما در دسترس است.
                </Typography>
              </Box>
            </Stack>
          ) : (
            <Stack className="mt-6!">
              <Stack className="gap-4">
                <Typography>انتخاب نوع خرید از توانا کارت :</Typography>
                <RHFSingleRadioGroup
                  name="howToPay"
                  options={[
                    { value: "loan", label: "اقساطی" },
                    { value: "rial", label: "ریالی" },
                  ]}
                />
              </Stack>
              <Stack className="mt-6! gap-4!">
                <Typography>انتخاب تعداد اقساط</Typography>
                <Controller
                  name="length"
                  control={methods.control}
                  render={({ field }) => (
                    <Stack direction="row" spacing={1.5} sx={{ width: {xs: "100%", md: "50%"} }}>
                      {[
                        { value: 1, label: "یکساله" },
                        { value: 6, label: "شش ماهه" },
                        { value: 3, label: "سه ماهه" },
                      ].map((option) => (
                        <Button
                          key={option.value}
                          onClick={() => field.onChange(option.value)}
                          variant={field.value === option.value ? "contained" : "outlined"}
                          size="medium"
                          className="text-sm!"
                          sx={{
                            flex: 1,
                            borderRadius: 2,
                            backgroundColor: field.value === option.value ? "#088DEF" : "transparent",
                            color: field.value === option.value ? "#fff" : "#000",
                            px: 1,
                            py: 2,
                          }}
                        >
                          {option.label}
                        </Button>
                      ))}
                    </Stack>
                  )}
                />
              </Stack>
              <Box>
                <Stack className="flex-row! items-center justify-between py-6 mt-6!" >
                  <Typography className="text-slate-400 md:text-lg! text-baes!">هزینه رزرو</Typography>
                  <Typography className="text-lg! text-slate-400 font-medium!">۱۲,000,000 ت</Typography>
                </Stack>
                <Divider />
                <Stack className="flex-row! items-center justify-between py-6">
                  <Typography className="text-slate-400 md:text-lg! text-base! ">مبلغ محاسبه شده بر اساس خرید قسطی </Typography>
                  <Typography className="md:text-xl! text-base! font-medium! text-nowrap!"> ۱۳,0۳0,000 ت</Typography>
                </Stack>
              </Box>
            </Stack>
          )}
          <Grid className="flex! flex-row! items-center gap-4! mt-8! sticky! bottom-0!">
            <Button className="w-[50%] text-black! bg-slate-100!" variant="outlined" >انصراف</Button>
            <Button className="w-[50%] text-white!" variant="contained"> تایید</Button>
          </Grid>
        </FormProvider>
      </Stack>
    </Drawer>
  );
}
