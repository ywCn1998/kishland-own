import {
    Box,
    Button,
    Dialog,
    DialogProps,
    Divider,
    Grid,
    MenuItem,
    Stack,
    Typography,
} from "@mui/material";
import { Person } from "@mui/icons-material";
import { ReactNode } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CustomAccordion from "@/components/shared/collapse/collapse";
import useSubmitRating from "./hook/ratingSubmition";
import FormProvider from "@/providers/FormProvider";
import RHFSelect from "@/components/shared/form/RHFSelect";
import RHFTextarea from "@/components/shared/form/RHFTextarea";
import RHFTextInput from "@/components/shared/form/RHFTextInput";
import RHFSimpleSelect from "@/components/shared/form/RHFSimpleSelect";

interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
    onClose?: () => void;
}

const RatingModal = ({
    open,
    setOpen,

    onClose,
}: Props) => {
    const CloseHandle = () => setOpen(!open);
    const { OnSubmit, methods } = useSubmitRating();



    return (
        <Dialog
            open={open}
            onClose={CloseHandle}
            maxWidth={"lg"}
            PaperProps={{
                sx: {
                    borderRadius: 4,
                    overflow: "hidden",
                    px: 8,
                    py: 4,
                    width: "100%",
                    minHeight: "70dvh"
                },
            }}
        >
            <FormProvider methods={methods} onSubmit={OnSubmit} className="h-full! flex! flex-col! justify-between! bg-red-500!">
                <Grid container className="flex! flex-row! " spacing={6}>

      
                    <Grid size={4} className="flex! flex-col! ">

                        <Typography className="text-xl! font-medium!">
                            امتیاز دهی
                        </Typography>
                        <Divider className="mt-2!" />
                        <Stack>
                            <CustomAccordion title="ارزش نسبت به قیمت">
                                <Divider />
                            </CustomAccordion>
                            <CustomAccordion title="کیفیت خدمات">
                                <Divider />

                            </CustomAccordion>
                            <CustomAccordion title="بهداشت و ایمنی">
                                <Divider />
                            </CustomAccordion>
                            <CustomAccordion title="هیجان و لذت تجربه">
                                <Divider />
                            </CustomAccordion>
                            <CustomAccordion title="دسترسی و موقعیت مکانی">
                                <Divider />
                            </CustomAccordion>
                        </Stack>

                    </Grid>
                    <Grid size={8}>
                        <Stack className="flex! flex-row! items-center! justify-between! ">
                            <Typography className="text-xl! font-medium!">
                                متن نظر شما
                            </Typography>
                            <Button
                                variant="text"
                                size="small"
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                    color: "text.secondary",
                                    py: 0,
                                }}
                                onClick={onClose ? onClose : CloseHandle}
                            >
                                <Typography variant="body2">بازگشت</Typography>
                                <ArrowBackIcon fontSize="small" />
                            </Button>
                        </Stack>
                        <Divider className="mt-2!" />

                        <Stack className="py-4! flex! flex-col! justify-between! h-full!">
                            <Stack>
                                <Stack>
                                    <RHFSimpleSelect name="title" label={"عنوان را انتخاب کنید"} options={[{ label: "هتل", value: "hotel" }, { label: "هتل", value: "hotel" }]} />
                                </Stack>
                                <Stack>
                                    <RHFTextInput name="comment" minRows={6} multiline label={"متن نظر شما"} />
                                </Stack>
                                <Stack className="flex! flex-row! justify-between! items-center! border-1! border-slate-300! rounded-xl! p-4!">
                                    <Stack className="flex! flex-col! gap-4!">
                                        <Typography>
                                            توصیه شما برای دیگران
                                        </Typography>
                                        <Typography>
                                            ایا این تفریح را به دیگران هم توصیه می کنید ؟
                                        </Typography>

                                    </Stack>
                                    <Stack className="flex! flex-row! items-center! ">
                                        <Button>
                                            پیشنهاد میکنم
                                        </Button>
                                        <Button>
                                            پیشنهاد نمیکنم
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>



                    </Grid>

                </Grid>
                <Stack >
                    <Button variant="contained" >
                        ثبت و ارسال نظر
                    </Button>
                </Stack>
            </FormProvider>

        </Dialog >
    );
};

export default RatingModal;
