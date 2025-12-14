"use client"
import {
    Box,
    Button,
    Dialog,
    DialogProps,
    Divider,
    Grid,
    MenuItem,
    Rating,
    Stack,
    Typography,
} from "@mui/material";
import { Person } from "@mui/icons-material";
import { ReactNode, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CustomAccordion from "@/components/shared/collapse/collapse";
import useSubmitRating from "./hooks/ratingSubmition";
import FormProvider from "@/providers/FormProvider";
import RHFSelect from "@/components/shared/form/RHFSelect";
import RHFTextarea from "@/components/shared/form/RHFTextarea";
import RHFTextInput from "@/components/shared/form/RHFTextInput";
import RHFSimpleSelect from "@/components/shared/form/RHFSimpleSelect";
import HotelClassOutlinedIcon from '@mui/icons-material/HotelClassOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import LoginPhoneModal from "@/components/auth/authModals/login/loginPhoneModal";
import TravelFirstModal from "@/components/shared/modal/commentsModals/travelFirstModal";
import SuccessModal from "@/components/shared/modal/commentsModals/failOrSuccessModal";

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
    const [openLoginModal, setOpenLoginModal] = useState<boolean>(false)
    const [openTravelledModal, setOpenTravelledModal] = useState<boolean>(false)
    const [openStatusModal, setOpenStatusModal] = useState<boolean>(false)
    const [status, setStatus] = useState<boolean>(false)

    const isLogin = true;
    const isTraveled = true;
    const error = true;
    const handleSubmit = () => {
        if (!isLogin) {
            setOpenLoginModal(!openLoginModal)
        } else {
            if (isTraveled) {
                if (error) {
                    setStatus(false)
                    setOpenStatusModal(!openStatusModal)
                } else {
                    setStatus(true)
                    setOpenStatusModal(!openStatusModal)
                }
            } else {
                setOpenTravelledModal(!openTravelledModal)
            }
        }
    }


    return (
        <Dialog
            open={open}
            onClose={CloseHandle}
            maxWidth={"xl"}
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
            <FormProvider methods={methods} onSubmit={OnSubmit} className=" flex! flex-col! justify-between! h-screen! ">
                <Grid container className="flex! flex-row! " spacing={6}>
                    <Grid size={4} className="flex! flex-col! ">
                        <Typography className="text-xl! font-medium!">
                            امتیاز دهی
                        </Typography>
                        <Divider className="mt-2!" />
                        <Stack className="py-8! flex! flex-col! gap-2!">
                            <Typography color="textSecondary" className="text-base! mx-4!">
                                5 ستاره بهترین و 1 ستاره بدترین امتیاز می باشد
                            </Typography>
                            <Stack className="mt-6!">
                                <CustomAccordion title="ارزش نسبت به قیمت" >
                                    <div className="flex! flex-row! justify-between! items-center! gap-1! py-4!">
                                        <Rating
                                            sx={{
                                                direction: "rtl",
                                                "& .MuiRating-icon": {
                                                    mx: { lg: 2, md: 1, sm: 0 },
                                                },
                                            }}
                                            defaultValue={1}
                                            size="large"
                                        />
                                        <span className="text-slate-400 text-xs lg:text-sm! text-nowrap!">
                                            1 از 5
                                        </span>
                                    </div>
                                    <Divider />

                                </CustomAccordion>
                            </Stack>
                            <CustomAccordion title="کیفیت خدمات">
                                <div className="flex! flex-row! justify-between! items-center! gap-1! py-4!">
                                    <Rating
                                        sx={{
                                            direction: "rtl",
                                            "& .MuiRating-icon": {
                                                mx: { lg: 2, md: 1, sm: 0 },
                                            },
                                        }}
                                        defaultValue={1}
                                        size="large"
                                    />
                                    <span className="text-slate-400 text-xs lg:text-sm! text-nowrap!">
                                        1 از 5
                                    </span>
                                </div>
                                <Divider />

                            </CustomAccordion>
                            <CustomAccordion title="بهداشت و ایمنی">
                                <div className="flex! flex-row! justify-between! items-center! gap-1! py-4!">
                                    <Rating
                                        sx={{
                                            direction: "rtl",
                                            "& .MuiRating-icon": {
                                                mx: { lg: 2, md: 1, sm: 0 },
                                            },
                                        }}
                                        defaultValue={1}
                                        size="large"
                                    />
                                    <span className="text-slate-400 text-xs lg:text-sm! text-nowrap!">
                                        1 از 5
                                    </span>
                                </div>
                                <Divider />
                            </CustomAccordion>
                            <CustomAccordion title="هیجان و لذت تجربه">
                                <div className="flex! flex-row! justify-between! items-center! gap-1! py-4!">
                                    <Rating
                                        sx={{
                                            direction: "rtl",
                                            "& .MuiRating-icon": {
                                                mx: { lg: 2, md: 1, sm: 0 },
                                            },
                                        }}
                                        defaultValue={1}
                                        size="large"
                                    />
                                    <span className="text-slate-400 text-xs lg:text-sm! text-nowrap!">
                                        1 از 5
                                    </span>
                                </div>
                                <Divider />
                            </CustomAccordion>
                            <CustomAccordion title="دسترسی و موقعیت مکانی">
                                <div className="flex! flex-row! justify-between! items-center! gap-1! py-4!">
                                    <Rating
                                        sx={{
                                            direction: "rtl",
                                            "& .MuiRating-icon": {
                                                mx: { lg: 2, md: 1, sm: 0 },
                                            },
                                        }}
                                        defaultValue={1}
                                        size="large"
                                    />
                                    <span className="text-slate-400 text-xs lg:text-sm! text-nowrap!">
                                        1 از 5
                                    </span>
                                </div>
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

                        <Stack className="py-8! flex! flex-col! justify-between! h-full!">
                            <Stack className="flex! flex-col! gap-6!">
                                <Stack>
                                    <RHFSimpleSelect name="title" label={"عنوان را انتخاب کنید"} options={[{ label: "هتل", value: "hotel" }, { label: "هتل", value: "hotel" }]} />
                                </Stack>
                                <Stack>
                                    <RHFTextInput name="comment" minRows={6} multiline label={"متن نظر شما"} />
                                </Stack>
                                <Stack className="flex! flex-row! justify-between! items-center! border-1! border-slate-300! rounded-xl! p-4!">
                                    <Stack className="flex! flex-col! gap-4!">
                                        <Typography className="text-lg! font-medium! flex! items-center! gap-1!">
                                            <HotelClassOutlinedIcon />
                                            توصیه شما برای دیگران
                                        </Typography>
                                        <Typography className="text-base! " color="textSecondary">
                                            ایا این تفریح را به دیگران هم توصیه می کنید ؟
                                        </Typography>

                                    </Stack>
                                    <Stack className="flex! flex-row! items-center! gap-6!">
                                        <Button variant="outlined" color="info" className="text-nowrap! py-3! px-4! text-sm!  rounded-lg! flex! items-center! " startIcon={<ThumbUpOutlinedIcon />}>
                                            پیشنهاد میکنم
                                        </Button>
                                        <Button variant="outlined" color="error" className="text-nowrap! py-3! px-4! text-sm!  rounded-lg! flex! items-center! " startIcon={<ThumbDownOffAltOutlinedIcon />}>
                                            پیشنهاد نمیکنم
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
                <Stack className="flex! flex-row-reverse! w-full! absolute bottom-10! left-15!">
                    <Button variant="contained" className="w-[25%]! text-white!" onClick={() => handleSubmit()}>
                        ثبت و ارسال نظر
                    </Button>
                </Stack>
            </FormProvider>
            <LoginPhoneModal open={openLoginModal} setOpen={setOpenLoginModal} title="ثبت نظر" description="برای ثبت نظر ابتدا باید وارد حساب کاربری خود شوید" />
            <TravelFirstModal open={openTravelledModal} setOpen={setOpenTravelledModal} />
            <SuccessModal open={openStatusModal} setOpen={setOpenStatusModal} success={status}/>

        </Dialog >
    );
};

export default RatingModal;
