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
    useMediaQuery,
    useTheme,
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
import LoginPhoneModal from "@/app/[locale]/(client-area)/auth/(desktop)/login/loginPhoneModal";
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
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
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
            fullScreen={!isMdUp}
            PaperProps={{
                sx: {
                    borderRadius: { xs: 0, md: 4 },
                    overflow: { xs: "auto", md: "auto" },
                    px: { xs: 2, md: 8 },
                    py: { xs: 2, md: 4 },
                    width: "100%",
                    height: { xs: "100%", md: "auto" },
                    minHeight: { xs: "100vh", md: "70dvh" },
                    maxHeight: { xs: "100vh", md: "90vh" },
                    m: { xs: 0, md: 2 },
                    display: "flex",
                    flexDirection: "column",
                },
            }}
        >
            <FormProvider methods={methods} onSubmit={OnSubmit} className=" flex! flex-col! justify-between! ">
                <Box sx={{ flex: 1, overflowY: { xs: "auto", md: "visible" }, height: { xs: "auto", md: "100%" }, minHeight: { xs: "100%", md: "70dvh" } }}>
                    <Grid container className="flex! flex-row! " spacing={{ xs: 2, md: 6 }}>
                        <Grid size={{ xs: 12, md: 4 }} className="flex! flex-col! ">
                            <Stack className="flex! flex-row! justify-between! items-center! py-3! md:py-0!">
                                <Typography className="text-xl! font-medium!" sx={{ fontSize: { xs: "18px", md: "20px" } }}>
                                    امتیاز دهی
                                </Typography>
                                <Button
                                    variant="text"
                                    size="small"
                                    sx={{
                                        display: { xs: "flex", md: "none" },
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
                            <Stack className="py-8! flex! flex-col! gap-2!" sx={{ py: { xs: 4, md: 8 } }}>
                                <Typography color="textSecondary" className="text-base! mx-4!" sx={{ fontSize: { xs: "14px", md: "16px" }, mx: { xs: 0, md: 4 } }}>
                                    5 ستاره بهترین و 1 ستاره بدترین امتیاز می باشد
                                </Typography>
                                <Stack className="mt-6!" sx={{ mt: { xs: 3, md: 6 } }}>
                                    <CustomAccordion title="ارزش نسبت به قیمت" >
                                        <div className="flex! flex-row! justify-between! items-center! gap-1! py-4!" style={{ paddingTop: "16px", paddingBottom: "16px" }}>
                                            <Rating
                                                sx={{
                                                    direction: "rtl",
                                                    "& .MuiRating-icon": {
                                                        mx: { lg: 2, md: 1, xs: 0.5 },
                                                        fontSize: { xs: "1.5rem", md: "2rem" },
                                                    },
                                                }}
                                                defaultValue={1}
                                                size="large"
                                            />
                                            <span className="text-slate-400 text-xs lg:text-sm! text-nowrap!" style={{ fontSize: "12px" }}>
                                                1 از 5
                                            </span>
                                        </div>
                                        <Divider />

                                    </CustomAccordion>
                                </Stack>
                                <CustomAccordion title="کیفیت خدمات" >
                                    <div className="flex! flex-row! justify-between! items-center! gap-1! py-4! ">
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
                        <Grid size={{ xs: 12, md: 8 }}>
                            <Stack className="flex! flex-row! items-center! justify-between! " sx={{ flexDirection: { xs: "column", md: "row" }, alignItems: { xs: "flex-start", md: "center" }, gap: { xs: 2, md: 0 } }}>
                                <Typography className="text-xl! font-medium!" sx={{ fontSize: { xs: "18px", md: "20px" } }}>
                                    متن نظر شما
                                </Typography>
                                <Button
                                    variant="text"
                                    size="small"
                                    sx={{
                                        display: { xs: "none", md: "flex" },
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

                            <Stack className="py-8! flex! flex-col! justify-between! h-full!" sx={{ py: { xs: 4, md: 8 } }}>
                                <Stack className="flex! flex-col! gap-6!" sx={{ gap: { xs: 3, md: 6 } }}>
                                    <Stack>
                                        <RHFSimpleSelect name="title" label={"عنوان را انتخاب کنید"} options={[{ label: "هتل", value: "hotel" }, { label: "هتل", value: "hotel" }]} />
                                    </Stack>
                                    <Stack>
                                        <RHFTextInput name="comment" minRows={6} multiline label={"متن نظر شما"} />
                                    </Stack>
                                    <Stack
                                        className="flex! md:flex-row! flex-col! justify-between! items-center! border-1! border-slate-300! rounded-xl! p-4!"
                                        sx={{
                                            flexDirection: { xs: "column", md: "row" },
                                            alignItems: { xs: "flex-start", md: "center" },
                                            gap: { xs: 3, md: 0 },
                                            p: { xs: 2, md: 4 }
                                        }}
                                    >
                                        <Stack className="flex! flex-col! gap-4!" sx={{ gap: { xs: 2, md: 4 } }}>
                                            <Typography className="text-lg! font-medium! flex! items-center! gap-1!" sx={{ fontSize: { xs: "16px", md: "18px" } }}>
                                                <HotelClassOutlinedIcon sx={{ fontSize: { xs: "20px", md: "24px" } }} />
                                                توصیه شما برای دیگران
                                            </Typography>
                                            <Typography className="text-base! " color="textSecondary" sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                                                ایا این تفریح را به دیگران هم توصیه می کنید ؟
                                            </Typography>

                                        </Stack>
                                        <Stack
                                            className="flex! flex-row! items-center! gap-6!"
                                            sx={{
                                                flexDirection: { xs: "column", md: "row" },
                                                width: { xs: "100%", md: "auto" },
                                                gap: { xs: 2, md: 6 }
                                            }}
                                        >
                                            <Button
                                                variant="outlined"
                                                color="info"
                                                className="text-nowrap! py-3! px-4! text-sm!  rounded-lg! flex! items-center!"
                                                startIcon={<ThumbUpOutlinedIcon />}
                                                sx={{
                                                    width: { xs: "100%", md: "auto" },
                                                    fontSize: { xs: "14px", md: "14px" }
                                                }}
                                            >
                                                پیشنهاد میکنم
                                            </Button>
                                            <Button
                                                variant="outlined"
                                                color="error"
                                                className="text-nowrap! py-3! px-4! text-sm!  rounded-lg! flex! items-center!"
                                                startIcon={<ThumbDownOffAltOutlinedIcon />}
                                                sx={{
                                                    width: { xs: "100%", md: "auto" },
                                                    fontSize: { xs: "14px", md: "14px" }
                                                }}
                                            >
                                                پیشنهاد نمیکنم
                                            </Button>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Stack className="w-full!">
                        <Button
                            variant="contained"
                            className="text-white!"
                            onClick={() => handleSubmit()}
                            sx={{
                                width: { xs: "100%", md: "200px", lg: "250px" },
                                py: { xs: 1.5, md: 2 }
                            }}
                        >
                            ثبت و ارسال نظر
                        </Button>
                    </Stack>
                </Box>

            </FormProvider>
            <LoginPhoneModal open={openLoginModal} setOpen={setOpenLoginModal} title="ثبت نظر" description="برای ثبت نظر ابتدا باید وارد حساب کاربری خود شوید" />
            <TravelFirstModal open={openTravelledModal} setOpen={setOpenTravelledModal} />
            <SuccessModal open={openStatusModal} setOpen={setOpenStatusModal} success={status} />

        </Dialog >
    );
};

export default RatingModal;
