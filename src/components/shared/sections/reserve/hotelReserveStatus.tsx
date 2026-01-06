"use client"
import { Button, Divider, Grid, Stack, Typography, Box } from "@mui/material";
import React from "react";
import Image from "next/image";
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TourDetailsMobile from "../tourDetailsMobile";



const userInfo = [
    {
        fullName: "علیرضا رودی",
        nationalId: "۰۸۵۰۱۴۵۶۹۸",
        birthDate: "۱۳۷۹/۰۴/۲۰",
    },
    {
        fullName: "علیرضا رودی",
        nationalId: "۰۸۵۰۱۴۵۶۹۸",
        birthDate: "۱۳۷۹/۰۴/۲۰",
    },
    {
        fullName: "علیرضا رودی",
        nationalId: "۰۸۵۰۱۴۵۶۹۸",
        birthDate: "۱۳۷۹/۰۴/۲۰",
    }
];

interface HotelReserveStatusProps {
    isSuccess?: boolean;
    code?: number;
    ticketNumber?: string;
    totalPrice?: string;
    hotelName?: string;
    hotelAddress?: string;
    hotelImage?: string;
    checkInDate?: string;
    checkInTime?: string;
    checkOutDate?: string;
    checkOutTime?: string;
    nights?: number;
    perPersonPrice?: string;
    discount?: string;
    profit?: string;
    phoneNumber?: string;
}

export default function HotelReserveStatus({
    isSuccess = true,
    code = 558452154,
    ticketNumber = "۵۵۸۴۵۲۱۵۴",
    totalPrice = "۲۲,۰۰۰,۰۰۰",
    hotelName = "هتل بین المللی کیش",
    hotelAddress = "تقاطع بلوار سنایی و بلوار دریا",
    hotelImage = "/images/hotel-interior.jpg",
    checkInDate = "جمعه ۲۶ مرداد",
    checkInTime = "۱۶:۰۰",
    checkOutDate = "یکشنبه ۲۸ مرداد",
    checkOutTime = "۱۲:۰۰",
    nights = 2,
    perPersonPrice = "۲,۴۰۷,۶۰۰",
    discount = "۵,۰۰۰,۰۰۰",
    profit = "۵,۶۰۰,۰۰۰",
    phoneNumber = "۰۹۱۵ ۱۲۳۴۵۶۷",
}: HotelReserveStatusProps) {
    return (
        <Stack className="md:hidden! px-4! pb-4!">
            {/* Blue Banner with Ticket Number */}
            <Stack 
                sx={{ 
                    backgroundColor: "#626E94",
                    borderRadius: 2,
                    p: 2,
                }}
                className="mt-2! flex! flex-col! items-start! gap-2!"
            >
                <Typography className="text-white! font-semibold! text-lg!">
                    شماره بلیط : {ticketNumber}
                </Typography>
                <Typography className=" text-sm! text-slate-200!">
                    {totalPrice} تومان پرداخت موفق
                </Typography>
            </Stack>

            {/* Successful Reservation Section */}
            <Stack className="border-1 border-slate-200! rounded-2xl! py-4! px-4!" mt={3}>
                <Typography 
                    className="text-center! text-2xl! font-semibold!" 
                    sx={{ color: "#13D397" }}
                >
                    رزرو موفق
                </Typography>
                <Divider orientation="horizontal" sx={{ my: 2 }} />

                {/* Hotel Image */}
                <Stack className="w-full! h-[200px]! relative! rounded-xl! overflow-hidden!" mb={2}>
                    <Image 
                        alt={hotelName} 
                        src={hotelImage} 
                        fill 
                        style={{ objectFit: "cover" }}
                    />
                </Stack>

                {/* Hotel Name */}
                <Typography className="font-semibold! text-xl! mb-2!">
                    {hotelName}
                </Typography>

                {/* Hotel Address */}
                <Stack direction="row" alignItems="center" spacing={1} mb={3}>
                    <LocationOnIcon sx={{ color: "#EF4444", fontSize: 20 }} />
                    <Typography className="text-base! text-slate-500!">
                        آدرس : {hotelAddress}
                    </Typography>
                </Stack>

                {/* Check-in/Check-out Details */}
                <Grid container spacing={2} mb={3}>
                    <Grid size={6}>
                        <Stack spacing={2}>
                            <Typography className="text-sm! text-slate-500!">تاریخ ورود</Typography>
                            <Typography className="text-base! font-medium! text-slate-500!">{checkInDate}</Typography>
                            <Typography className="text-sm! text-slate-500!">ساعت {checkInTime}</Typography>
                        </Stack>
                    </Grid>
                    
                    <Grid size={6}>
                        <Stack spacing={2} alignItems="flex-end">
                            <Typography className="text-sm! text-slate-500!">تاریخ خروج</Typography>
                            <Typography className="text-base! font-medium! text-slate-500!">{checkOutDate}</Typography>
                            <Typography className="text-sm! text-slate-500!">ساعت {checkOutTime}</Typography>
                        </Stack>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 2 }} />
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography className="text-base! text-slate-500!">به ازای هر نفر</Typography>
                        <Typography className="text-lg! font-semibold!">{perPersonPrice} تومان</Typography>
                    </Stack>

                {/* Pricing Breakdown */}
               
            </Stack>
            <Stack spacing={3} className="flex! flex-col!  mt-6!">
                  
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography className="text-base! text-slate-400!">قیمت برای ۱ شب اقامت</Typography>
                      <Typography className="text-base! font-semibold!">{totalPrice} ت</Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography className="text-base! text-slate-400!">تخفیف</Typography>
                      <Typography className="text-base! font-semibold!" sx={{ color: "#EF4444" }}>
                          {discount} ت
                      </Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography className="text-base! text-slate-400!">سود شما از خرید</Typography>
                      <Typography className="text-base! font-semibold!" sx={{ color: "#13D397" }}>
                          {profit} ت
                      </Typography>
                  </Stack>
                  <Divider />
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                      <Typography className="text-base! text-slate-400!">جمع کل</Typography>
                      <Typography className="text-xl! font-bold!">{totalPrice} ت</Typography>
                  </Stack>
              </Stack>
            {/* SMS Confirmation */}
            <Stack 
                sx={{ 
                    backgroundColor: "#7E8AAB",
                    borderRadius: 2,
                    p: 2,
                }}
                className="mt-6!"
            >
                <Typography className="text-base! text-white! ">
                    اطلاعات بلیط به شماره همراه {phoneNumber} پیامک شد
                </Typography>
            </Stack>

            {/* Passenger Details Section */}
            <Stack mt={3} >
                <Typography className="font-semibold! text-lg! mb-2!">
                    مشخصات مسافران
                </Typography>
                <Stack spacing={3}>
                    {userInfo.map((item, index) => (
                        <TourDetailsMobile {...item} key={`hotel-passenger-${index}`} />
                    ))}
                </Stack>
            </Stack>
        </Stack>
    );
}
