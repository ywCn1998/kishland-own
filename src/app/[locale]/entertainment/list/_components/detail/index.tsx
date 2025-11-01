'use-client'
import { AccessTimeOutlined, CloseRounded, FavoriteBorderOutlined, FavoriteBorderSharp, InfoOutlineRounded, LocationOnOutlined, MapOutlined, MessageOutlined, MonitorHeart, MonitorHeartOutlined, PercentOutlined, PhoneCallback, PinOutlined, RemoveRedEye, RemoveRedEyeOutlined, Share, ShareOutlined, Star, X } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Button, Dialog, Divider, Grid, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Swiper, SwiperSlide } from "swiper/react";
import DaysSwiper from "./_components/dateSlider";
import SanseCard from "./_components/sanseCard";
type DayItem = {
    id: string;
    dateFa: string;   // e.g., "۲۳ فروردین"
    nameFa: string;   // e.g., "شنبه"
    isWeekend?: boolean; // جمعه/پنج‌شنبه?
};


const days: DayItem[] = [
    { id: 'd1', dateFa: '۲۰ فروردین', nameFa: 'چهارشنبه' },
    { id: 'd2', dateFa: '۲۱ فروردین', nameFa: 'پنج‌شنبه', isWeekend: true },
    { id: 'd3', dateFa: '۲۲ فروردین', nameFa: 'جمعه', isWeekend: true },
    { id: 'd4', dateFa: '۲۳ فروردین', nameFa: 'شنبه' },
    { id: 'd5', dateFa: '۲۴ فروردین', nameFa: 'یک‌شنبه' },
    { id: 'd6', dateFa: '۲۵ فروردین', nameFa: 'دو شنبه', isWeekend: true }, // example
    { id: 'd7', dateFa: '۲۶ فروردین', nameFa: 'سه‌شنبه' },
    { id: 'd1', dateFa: '۲۰ فروردین', nameFa: 'چهارشنبه' },
    { id: 'd2', dateFa: '۲۱ فروردین', nameFa: 'پنج‌شنبه', isWeekend: true },
    { id: 'd3', dateFa: '۲۲ فروردین', nameFa: 'جمعه', isWeekend: true },
    { id: 'd4', dateFa: '۲۳ فروردین', nameFa: 'شنبه' },
    { id: 'd5', dateFa: '۲۴ فروردین', nameFa: 'یک‌شنبه' },
    { id: 'd6', dateFa: '۲۵ فروردین', nameFa: 'دو شنبه', isWeekend: true }, // example
    { id: 'd7', dateFa: '۲۶ فروردین', nameFa: 'سه‌شنبه' },
];


interface IProps {
    open: boolean;
    onClose: (val: boolean) => void
}






export default function EntertainmentDetailDialog({
    open,
    onClose
}: IProps) {
    return (
        <Dialog
            fullWidth
            open={open}
            maxWidth={false} // disables default maxWidth
            sx={{
                padding: 0,
                margin: 0,
                '& .MuiDialog-paper': {
                    width: '100%',
                    height: '93%',
                    maxHeight: '93%',
                    margin: 0,
                    borderRadius: 0,
                    maxWidth: '100%',
                    alignSelf: 'flex-end',
                    borderTopLeftRadius: '24px',
                    borderTopRightRadius: '24px',
                },
            }}
            onClose={() => onClose(false)}
        >
            <Stack className="flex-1 bg-white! pb-30">
                <IconButton className="absolute right-0 -top-5 z-10">
                    <CloseRounded sx={{ color: 'white' }} />
                </IconButton>

                <Grid container className='px-8'>
                    <Grid size={{ md: 1 }}>

                        <Stack className=" flex flex-col! items-center gap-4">

                            <Stack className="border-1 border-slate-200  rounded-3xl p-4">
                                <RemoveRedEye sx={{ fontSize: 30 }} color="primary" />
                            </Stack>

                            <Stack className="border-1 border-slate-200  rounded-full p-4">
                                <InfoOutlineRounded sx={{ fontSize: 30 }} color="inherit" />
                            </Stack>


                            <Stack className="border-1 border-slate-200  rounded-full p-4">
                                <LocationOnOutlined sx={{ fontSize: 30 }} color="inherit" />
                            </Stack>


                            <Stack className="border-1 border-slate-200  rounded-full p-4">
                                <MessageOutlined sx={{ fontSize: 30 }} color="inherit" />
                            </Stack>

                            <Stack className="border-1 border-slate-200  rounded-full p-4">
                                <ShareOutlined sx={{ fontSize: 30 }} color="inherit" />
                            </Stack>



                            <Stack className="border-1 border-slate-200  rounded-full p-4">
                                <PhoneCallback sx={{ fontSize: 30 }} color="inherit" />
                            </Stack>






                        </Stack>


                    </Grid>






                    <Grid size={{ md: 11 }}>



                        <Stack className="border-1 border-slate-200 flex flex-row! gap-6  rounded-2xl px-4 py-6 w-full">

                            <Stack className="flex flex-row! gap-2">


                                <Stack className="flex flex-col! gap-2">
                                    <Image
                                        className="rounded-lg"
                                        src='/images/entertainment/list/jong.jpg'
                                        alt='jong'
                                        height={230}
                                        width={80}
                                        style={{
                                            width: '80px',
                                            height: '50%',
                                            flex: 1
                                        }}
                                        objectFit="fill"
                                    />

                                    <Stack className="flex flex-col! items-center rounded-lg justify-center gap-2 bg-[#FA50501A] flex-1">


                                        <PercentOutlined />

                                        <Typography sx={{ color: '#FA5050' }}>تا ۲۵٪</Typography>
                                        <Typography sx={{ color: '#FA5050' }}>تخفیف</Typography>

                                    </Stack>




                                </Stack>





                                <Image
                                    src='/images/entertainment/list/jong.jpg'
                                    alt='jong'
                                    className="rounded-lg"
                                    height={230}
                                    width={178}
                                    style={{
                                        width: '178px',
                                        height: '230px'
                                    }}
                                    objectFit="fill"
                                />
                            </Stack>


                            <Stack className="flex flex-col! full-height justify-evenly gap-2 flex-1">

                                <Stack className="flex flex-row! gap-3" divider={<Divider orientation="vertical" />} >

                                    <Stack className="flex flex-row! gap-1">
                                        <MonitorHeart sx={{ color: '#13D397' }} />
                                        <Typography sx={{ color: '#13D397' }}>34 گردشگر پیشنهادمی کنند</Typography>
                                    </Stack>

                                    <Stack className="flex flex-row! gap-1">
                                        <Star sx={{ color: '#FFA733' }} />
                                        <Typography sx={{ color: '#FFA733' }}>4.9</Typography>
                                    </Stack>

                                </Stack>

                                <Typography variant="h3">تله کابین میکامال کیش</Typography>

                                <Stack className="flex flex-row! items-center gap-2 ">
                                    <Stack className="border-1 border-slate-200 rounded-xl flex flex-row! px-3 py-3 ">
                                        <AccessTimeOutlined sx={{ color: "#626E94" }} />
                                        <Typography color="textSecondary">180 دقیقه</Typography>
                                    </Stack>

                                    <Stack className="border-1 border-slate-200 rounded-xl flex flex-row! px-3 py-3 ">
                                        <Typography>دارای کافی شاپ</Typography>
                                    </Stack>

                                    <Stack className="border-1 border-slate-200 rounded-xl flex flex-row! px-3 py-3 ">
                                        <Typography>خانوادگی</Typography>
                                    </Stack>
                                </Stack>

                                <Typography className="mt-4!">قیمت / نفر</Typography>

                                <Typography sx={{ fontSize: '24px' }} variant="h4" color="secondary">350,000 تومان</Typography>

                            </Stack>



                            <Stack className="flex flex-col! justify-between" >
                                <Stack className="flex flex-row! items-center justify-end gap-2">

                                    <IconButton className="border-1! border-[#7E8AAB]!  ">
                                        <FavoriteBorderOutlined />
                                    </IconButton>

                                    <IconButton className="border-1! border-[#7E8AAB]!  ">
                                        <Share />
                                    </IconButton>
                                </Stack>



                                <Button variant="contained" color="inherit" href="/fa/entertainment/reserve">انتخاب سانس</Button>
                            </Stack>







                        </Stack>


                        <Accordion
                            disableGutters
                            elevation={0}
                            square
                            sx={{
                                py: 1,
                                mt: 4,
                                backgroundColor: 'transparent',
                                boxShadow: 'none',
                                border: 'none',
                                '&:before': {
                                    display: 'none', // remove default divider line
                                },
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`section1-content`}
                                id={`section1-header`}
                                sx={{
                                    borderBottom: 1,
                                    borderBottomColor: '#E1E6F0',
                                }}

                            >
                                <Stack className="flex! flex-row! items-center gap-2!">
                                    <Typography variant="h3" component="span">لیست سانس ها</Typography>
                                    <Typography color="textSecondary" variant="body1">(مبنای قیمت برای 1 نفر)</Typography>
                                </Stack>
                            </AccordionSummary>

                            <AccordionDetails className="p-0!">
                                <Stack
                                    className="w-full! flex flex-col! gap-4 pt-4"
                                >

                                    <DaysSwiper
                                        items={days}
                                    />



                                    <Grid container spacing={2}>

                                        <Grid size={{ md: 6 }}>
                                            <Stack className="flex flex-row! items-center justify-between py-4!">
                                                <Typography sx={{ fontWeight: 500 }} variant="h3">سانس ساعت 20:00</Typography>
                                                <Typography color="textSecondary" variant="body1">۲ مورد</Typography>
                                            </Stack>
                                            <Divider />

                                            <Stack className="flex flex-col! gap-5 mt-5">

                                                <SanseCard />
                                                <SanseCard />
                                            </Stack>


                                        </Grid>


                                        <Grid size={{ md: 6 }}>
                                            <Stack className="flex flex-row! items-center justify-between py-4!">
                                                <Typography sx={{ fontWeight: 500 }} variant="h3">سانس ساعت 20:00</Typography>
                                                <Typography color="textSecondary" variant="body1">۲ مورد</Typography>
                                            </Stack>
                                            <Divider />

                                            <Stack className="flex flex-col! gap-5 mt-5">

                                                <SanseCard />
                                                <SanseCard />
                                                <SanseCard />
                                            </Stack>


                                        </Grid>

                                    </Grid>


                                    <Grid container spacing={2} className='mt-4!'>

                                        <Grid size={{ md: 6 }} className='flex flex-col! items-center justify-center gap-2'>
                                            <Typography variant="h3" color="primary">585,000 تومان</Typography>
                                            <Typography variant="caption" color="textSecondary">با احتساب 9 درصد مالیات برارزش افزوده</Typography>
                                        </Grid>

                                        <Grid size={{ md: 6 }} className='flex flex-col! gap-2'>
                                            <Button variant="contained" color="primary">
                                                <Typography variant="button" sx={{ color: 'white' }}>
                                                    رزرو و دریافت بلیط
                                                </Typography>
                                            </Button>
                                            <Button variant="contained" color="secondary">
                                                <Typography variant="button" sx={{ color: 'white' }}>
                                                    ادامه خرید
                                                </Typography>
                                            </Button>

                                        </Grid>


                                    </Grid>




                                    <Stack>
                                        <Image
                                            src='/images/entertainment/list/poster.jpg'
                                            alt="'poster"
                                            height={150}
                                            width={200}
                                            style={{
                                                width: '100%',
                                                height: '490px',
                                                marginTop: 40
                                            }}
                                        />
                                    </Stack>







                                </Stack>
                            </AccordionDetails>
                        </Accordion>






                        <Accordion
                            disableGutters
                            elevation={0}
                            square
                            sx={{
                                py: 1,
                                mt: 4,
                                backgroundColor: 'transparent',
                                boxShadow: 'none',
                                border: 'none',
                                '&:before': {
                                    display: 'none', // remove default divider line
                                },
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`section1-content`}
                                id={`section1-header`}
                                sx={{
                                    borderBottom: 1,
                                    borderBottomColor: '#E1E6F0',
                                }}

                            >
                                <Stack className="flex! flex-row! items-center gap-2!">
                                    <Typography variant="h3" component="span">شوی شبانه کیش (اتحاد جنگ ها ) را بهتر ببینید و بشناسید</Typography>
                                </Stack>
                            </AccordionSummary>

                            <AccordionDetails className="p-0! pt-8!">
                                <Grid
                                    container
                                    spacing={2}
                                >




                                    <Grid size={{ md: 8 }} container spacing={2}>


                                        {/* right top */}
                                        <Grid size={{ md: 12 }} >
                                            <Image
                                                alt="ban"
                                                src={'/images/entertainment/list/detail/medium-ver.png'}
                                                height={300}
                                                width={100}
                                                style={{
                                                    height: '300px',
                                                    width: '100%',
                                                    borderRadius: '12px'
                                                }}
                                            />


                                        </Grid>






                                        {/* right bottom */}
                                        <Grid size={{ md: 12 }} container spacing={2}>

                                            <Grid size={{ md: 6 }} container spacing={2}>

                                                <Grid size={{ md: 6 }} >
                                                    <Image
                                                        alt="ban"
                                                        src={'/images/entertainment/list/detail/medium-horiz.png'}
                                                        height={170}
                                                        width={100}
                                                        style={{
                                                            height: '100%',
                                                            width: '100%',
                                                            borderRadius: '12px'
                                                        }}
                                                    />
                                                </Grid>

                                                <Grid size={{ md: 6 }}>
                                                    <Image
                                                        alt="ban"
                                                        src={'/images/entertainment/list/detail/medium-horiz.png'}
                                                        height={170}
                                                        width={100}
                                                        style={{
                                                            height: '100%',
                                                            width: '100%',
                                                            borderRadius: '12px'
                                                        }}
                                                    />
                                                </Grid>


                                            </Grid>


                                            <Grid size={{ md: 6 }} container  className='h-full!'>

                                                <Grid size={{ md: 6 }} className='h-full! flex flex-col! gap-4!'>
                                                    <Image
                                                        alt="ban"
                                                        src={'/images/entertainment/list/detail/small.png'}
                                                        height={170}
                                                        width={100}
                                                        style={{
                                                            height: '100%',
                                                            width: '100%',
                                                            borderRadius: '12px'
                                                        }}
                                                    />
                                                    <Image
                                                        alt="ban"
                                                        src={'/images/entertainment/list/detail/small.png'}
                                                        height={170}
                                                        width={100}
                                                        style={{
                                                            height: '100%',
                                                            width: '100%',
                                                            borderRadius: '12px'
                                                        }}
                                                    />
                                                </Grid>


                                                <Grid size={{ md: 6 }} className='h-full! flex flex-col! gap-4!'>
                                                    <Image
                                                        alt="ban"
                                                        src={'/images/entertainment/list/detail/small.png'}
                                                        height={170}
                                                        width={100}
                                                        style={{
                                                           height: '100%',
                                                            width: '100%',
                                                            borderRadius: '12px'
                                                        }}
                                                    />
                                                    <Image
                                                        alt="ban"
                                                        src={'/images/entertainment/list/detail/small.png'}
                                                        height={170}
                                                        width={100}
                                                        style={{
                                                           height: '100%',
                                                            width: '100%',
                                                            borderRadius: '12px'
                                                        }}
                                                    />
                                                </Grid>


                                            </Grid>


                                        </Grid>


                                    </Grid>


                                    <Grid size={{ md: 4 }} className='flex flex-col! gap-4!'>
                                        <Image
                                            alt="ban"
                                            src={'/images/entertainment/list/detail/big.png'}
                                            height={250}
                                            width={100}
                                            style={{
                                                height: '250px',
                                                width: '100%',
                                                borderRadius: '12px'
                                            }}
                                        />
                                        <Image
                                            alt="ban"
                                            src={'/images/entertainment/list/detail/extra.png'}
                                            height={390}
                                            width={100}
                                            style={{
                                                height: '100%',
                                                width: '100%',
                                                borderRadius: '12px'
                                            }}
                                        />

                                    </Grid>







                                </Grid>

                                <Typography>
                                    {`بلیط شما حکم پول شماست و همراه داشتن آن هنگام مراجعه به برنامه الزامیست*این بلیط طبق قوانین چارتری صادر گردیده و غیر قابل عودت و کنسلی میباشد.*اعتبار استفاده از بلیت،طبق تاریخ درج شده بر روی بلیت بوده و در صورت انقضا،بلیت فاقد اعتبار می باشد{{*شماره صندلی و ردیف مانند پرواز در هنگام مراجعه به پذیرش یک ساعت قبل از شروع برنامه تعیین خواهد شد.}}برای اشغال هر صندلی تهیه بلیت الزامی است وشرایط سنی مطرح نیست*تهیه ی بلیت برای کودکان ۴ سال به بالا الزامی بوده*`}
                                </Typography>

                            </AccordionDetails>
                        </Accordion>





                    </Grid>






                </Grid >
            </Stack>
        </Dialog>
    )
}