"use client"
import { Button, Typography, Stack, Grid, MenuItem } from "@mui/material";
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import { useRouter } from "next/navigation";
import RHFTextInput from "@/components/shared/form/RHFTextInput";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FormProvider from "@/providers/FormProvider";
import useTicket from "./hooks/useTicket";
import RHFTextarea from "@/components/shared/form/RHFTextarea";
import { useState } from "react";
import RHFUploadButton from "@/components/shared/form/RHFChooseFile";
import FixedBottomButton from "@/components/shared/fixedBottomBotton/fixedBottomBotton";
import { headerTitleAtom } from "@/store/atomHeader";
import { useEffect } from "react";
import { useAtom } from "jotai";
import RHFSelect from "@/components/shared/form/RHFSelect";

export default function NewTicket() {
    const [html, setHtml] = useState("");

    const [, setHeaderTitle] = useAtom(headerTitleAtom);
    useEffect(() => {
        setHeaderTitle("ثبت تیکت جدید");
    }, []);
    const router = useRouter()
    const { OnSubmit, methods } = useTicket()
    return (
        <Stack className="px-4! md:px-0! mt-5! md:mt-0! " sx={{ backgroundColor: { xs: "background.paper", md: "white" } }}>
            <Stack mb={3} className="border-1! border-slate-200! py-4 px-6! rounded-2xl! hidden! md:flex! flex-row! justify-between! items-center!">
                <Typography className="font-semibold! text-base!">
                    ثبت تیکت جدید
                </Typography>
                <Button onClick={() => router.back()} variant="text" className="p-1! text-base!" sx={{ color: "text.secondary" }} endIcon={<KeyboardArrowLeftOutlinedIcon />}>
                    برگشت
                </Button>
            </Stack>

            <FormProvider onSubmit={OnSubmit} methods={methods}>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6 }} className="border-1! border-slate-300! rounded-xl! px-4! pb-1! pt-3!">
                        <RHFSelect name="F" placeholder="ds" label="بخش">
                            <MenuItem value="knjkh">انتخاب کنید</MenuItem>
                            <MenuItem value="general">عمومی</MenuItem>
                            <MenuItem value="technical">فنی</MenuItem>
                            <MenuItem value="billing">مالی</MenuItem>
                        </RHFSelect>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }} className="border-1! border-slate-300! rounded-xl! px-4! pb-1! pt-3!">
                        <RHFSelect name="F" placeholder="ds" label="واحد">
                            <MenuItem value="knjkh">انتخاب کنید</MenuItem>
                            <MenuItem value="general">عمومی</MenuItem>
                            <MenuItem value="technical">فنی</MenuItem>
                            <MenuItem value="billing">مالی</MenuItem>
                        </RHFSelect>
                    </Grid>

                    <Grid size={{ xs: 12 }} className="border-1! border-slate-300! rounded-xl! px-4! pb-1! pt-3!">
                        <RHFSelect name="F" placeholder="ds" label="اولویت">
                            <MenuItem value="knjkh">انتخاب کنید</MenuItem>
                            <MenuItem value="general">عمومی</MenuItem>
                            <MenuItem value="technical">فنی</MenuItem>
                            <MenuItem value="billing">مالی</MenuItem>
                        </RHFSelect>
                    </Grid>

                    <Grid size={{ xs: 12 }} className="border-1! border-slate-300! rounded-xl! px-4! pb-1! pt-3!">
                        <RHFSelect name="F" placeholder="ds" label="موضوع تیکت">
                            <MenuItem value="knjkh">انتخاب کنید</MenuItem>
                            <MenuItem value="general">عمومی</MenuItem>
                            <MenuItem value="technical">فنی</MenuItem>
                            <MenuItem value="billing">مالی</MenuItem>
                        </RHFSelect>
                    </Grid>



                    <Grid size={12}>
                        <RHFTextarea name="message" onChange={setHtml} height={300} />

                        <Stack className="px-3! py-4! rounded-xl! flex! flex-row! justify-between! items-center! border-1! border-slate-200!" mt={3}>
                            <Typography color="text.secondary" className="text-xs! md:text-sm!">فایل های خود را برای اپلود انتخاب کنید</Typography>
                            <Stack className="w-fit!">
                                <RHFUploadButton sx={{ color: "secondary.main" }} className="text-xs! p-0! md:text-sm! border-0! md:p-2!" name="t" buttonText="انتخاب فایل" />
                            </Stack>
                        </Stack>
                        <Typography mt={1} color="text.secondary" className="text-xs!">پسوند های مجاز: .jpg, .gif, .jpeg, .png, .zip, .pdf, (Max file size: 512MB)</Typography>

                    </Grid>

                    <Stack className="hidden! md:flex! flex-row! gap-8! w-full!" mt={4}>
                        <Button className="w-full! text-lg! text-black! rounded-2xl!" variant="outlined">انصراف و بازگشت</Button>
                        <Button className="w-full! text-lg! text-white! rounded-2xl!" variant="contained" type="submit">ارسال</Button>
                    </Stack>
                </Grid>

                <FixedBottomButton py={2}>
                    <Button className="w-full! text-base! text-white! py-5!" variant="contained">ارسال تیکت</Button>
                </FixedBottomButton>
            </FormProvider>
        </Stack>
    )
}
