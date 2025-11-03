"use client"
import { Button, Typography, Stack, Grid } from "@mui/material";
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import { useRouter } from "next/navigation";
import RHFTextInput from "@/components/shared/form/RHFTextInput";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FormProvider from "@/providers/FormProvider";
import useTicket from "./_hook/useTicket";
import RHFTextarea from "@/components/shared/form/RHFTextarea";
import { useState } from "react";
import RHFUploadButton from "@/components/shared/form/RHFChooseFile";

export default function NewTicket() {
    const [html, setHtml] = useState("");

    const router = useRouter()
    const { OnSubmit, methods } = useTicket()
    return (
        <Stack>
            <Stack mb={3} className="border-1! border-slate-200! py-4 px-6! rounded-2xl! flex! flex-row! justify-between! items-center!">
                <Typography className="font-semibold! text-base!">
                    ثبت تیکت جدید
                </Typography>
                <Button onClick={() => router.back()} variant="text" className="p-1! text-base!" sx={{ color: "text.secondary" }} endIcon={<KeyboardArrowLeftOutlinedIcon />}>
                    برگشت
                </Button>
            </Stack>

            <FormProvider onSubmit={OnSubmit} methods={methods}>
                <Grid container spacing={2}>
                    <Grid size={6}>
                        <RHFTextInput name="firstName" startIcon={<PersonOutlineOutlinedIcon />} placeholder="نام" />
                    </Grid>

                    <Grid size={6}>
                        <RHFTextInput name="lastName" startIcon={<PersonOutlineOutlinedIcon />} placeholder="نام خانوادگی" />
                    </Grid>

                    <Grid size={12}>
                        <RHFTextInput name="birthDay" startIcon={<LocationOnOutlinedIcon />} placeholder="تاریخ تولدت" />
                    </Grid>


                    <Grid size={12}>
                        <RHFTextarea name="message" onChange={setHtml} height={300} />

                        <Stack className="px-3! py-4! rounded-xl! flex! flex-row! justify-between! items-center! border-1! border-slate-200!" mt={3}>
                            <Typography color="text.secondary" className="text-sm!">فایل های خود را برای اپلود انتخاب کنید</Typography>
                            <Stack className="w-fit!">
                                <RHFUploadButton sx={{ color: "secondary.main" }} className="text-sm! border-0! p-2!" name="t" buttonText="انتخاب فایل" />
                            </Stack>
                        </Stack>
                        <Typography mt={1} color="text.secondary" className="text-xs!">پسوند های مجاز: .jpg, .gif, .jpeg, .png, .zip, .pdf, (Max file size: 512MB)</Typography>

                    </Grid>

                    <Stack className="flex! flex-row! gap-8! w-full!" mt={4}>
                        <Button className="w-full! text-lg! text-black! rounded-2xl!" variant="outlined">انصراف و بازگشت</Button>
                        <Button className="w-full! text-lg! text-white! rounded-2xl!" variant="contained" type="submit">ارسال</Button>
                    </Stack>
                </Grid>
            </FormProvider>
        </Stack>
    )
}