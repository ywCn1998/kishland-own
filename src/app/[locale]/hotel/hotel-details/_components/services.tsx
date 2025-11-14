"use client"
import { Grid, Stack, Typography } from "@mui/material";
import CityCenterLoactions from "@/app/[locale]/tour/hotel-location/_locationModalComponents/cityCenterLocations";
import {
    Person,
    LocalTaxi,
    AcUnit,
    ChildCare,
    Build,
    PresentToAll,
} from '@mui/icons-material';
import TextIcon from "@/components/shared/textIcon";
import RulesOfHotel from "@/components/shared/_components/rolesOfHotel";

export const hotelFacilities = [
    {
        title: 'پذیرش ۲۴ ساعته',
        description: 'تعدادی از حمام‌ها دارای وان می‌باشند',
        icon: <Person color="warning" className="ml-3! mb-2!" />,
    },
    {
        title: 'سرویس تاکسی رایگان',
        description: 'تعدادی از حمام‌ها دارای وان می‌باشند',
        icon: <LocalTaxi color="warning" className="ml-3! mb-2!" />,
    },
    {
        title: 'سیستم سرمایشی و گرمایشی',
        description: 'اسپیلت و سرمایش مرکزی',
        icon: <AcUnit color="warning" className="ml-3! mb-2!" />,
    },
    {
        title: 'سرویس برای کودکان',
        description: 'اسپیلت و سرمایش مرکزی',
        icon: <ChildCare color="warning" className="ml-3! mb-2!" />,
    },
    {
        title: 'خدمات فنی ۲۴ ساعته',
        description: 'اسپیلت و سرمایش مرکزی',
        icon: <Build color="warning" className="ml-3! mb-2!" />,
    },
    {
        title: 'سالن کنفرانس',
        description: 'اسپیلت و سرمایش مرکزی',
        icon: <PresentToAll color="warning" className="ml-3! mb-2!" />,
    },
    {
        title: 'سرویس برای کودکان',
        description: 'اسپیلت و سرمایش مرکزی',
        icon: <ChildCare color="warning" className="ml-3! mb-2!" />,
    },
    {
        title: 'خدمات فنی ۲۴ ساعته',
        description: 'اسپیلت و سرمایش مرکزی',
        icon: <Build color="warning" className="ml-3! mb-2!" />,
    },
    {
        title: 'سالن کنفرانس',
        description: 'اسپیلت و سرمایش مرکزی',
        icon: <PresentToAll color="warning" className="ml-3! mb-2!" />,
    },
];




export const HotelNotSupport = [
    {
        title: 'پذیرش ۲۴ ساعته',
        description: 'تعدادی از حمام‌ها دارای وان می‌باشند',
        icon: <Person sx={{ color: "text.secondary" }} className="ml-3! mb-2!" />,
    },
    {
        title: 'سرویس تاکسی رایگان',
        description: 'تعدادی از حمام‌ها دارای وان می‌باشند',
        icon: <LocalTaxi sx={{ color: "text.secondary" }} className="ml-3! mb-2!" />,
    },
    {
        title: 'سیستم سرمایشی و گرمایشی',
        description: 'اسپیلت و سرمایش مرکزی',
        icon: <AcUnit sx={{ color: "text.secondary" }} className="ml-3! mb-2!" />,
    },
    {
        title: 'سرویس برای کودکان',
        description: 'اسپیلت و سرمایش مرکزی',
        icon: <ChildCare sx={{ color: "text.secondary" }} className="ml-3! mb-2!" />,
    },
    {
        title: 'خدمات فنی ۲۴ ساعته',
        description: 'اسپیلت و سرمایش مرکزی',
        icon: <Build sx={{ color: "text.secondary" }} className="ml-3! mb-2!" />,
    },
    {
        title: 'سالن کنفرانس',
        description: 'اسپیلت و سرمایش مرکزی',
        icon: <PresentToAll sx={{ color: "text.secondary" }} className="ml-3! mb-2!" />,
    },

];

export default function HotelServices() {


    return (
        <Stack className="border-1 border-slate-200! p-8! rounded-2xl" mt={5}>
            <Typography className="text-3xl! font-semibold!" mb={4}>اطلاعات  و امکانات هتل </Typography>

            <Stack className="border-1 border-slate-200! px-4! py-8! rounded-xl">
                <Typography className="text-2xl! " fontWeight={700} mb={1}>موقعیت مکانی و فاصله هتل تا مکان های مهم شهر</Typography>
                <CityCenterLoactions />
            </Stack>

            <Stack className="border-1 border-slate-200! px-4! py-6! rounded-xl" mt={4}>
                <Typography className="text-2xl! " fontWeight={600} mb={1}>امکانات و خدمات کلی هتل  </Typography>

                <Grid container spacing={4} mt={4}>
                    {hotelFacilities.map((item, i) => (
                        <Grid size={4}>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <Stack>
                                    <TextIcon text={item.title} sx={{ fontWeight: 500 }} className=" text-lg! text-black!" startIcon={item.icon} />
                                    <Typography variant="body2" color="text.secondary" className="mr-10!">
                                        {item.description}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>

            </Stack>




            <Stack className="border-1 border-slate-200! px-4! py-6! rounded-xl" mt={4}>
                <Typography className="text-2xl! " color="text.secondary" fontWeight={600} mb={1}>این هتل خدمات زیر را ساپورت نمیکند </Typography>


                <Grid container spacing={4} mt={4}>
                    {HotelNotSupport.map((item, i) => (
                        <Grid size={4}>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <Stack>
                                    <TextIcon text={item.title} sx={{ fontWeight: 500, color: "text.secondary" }} className=" text-lg! text-black!" startIcon={item.icon} />
                                    <Typography variant="body2" color="text.secondary" className="mr-10!">
                                        {item.description}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </Stack>



        </Stack>
    )
}