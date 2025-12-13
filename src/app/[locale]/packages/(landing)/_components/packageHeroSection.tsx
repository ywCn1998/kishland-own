import React from 'react'
import { ImageAndText } from "@/components/shared/ui";
import { Button, Stack, Typography } from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function PackageHeroSection() {
  return (
    <div className='reveal-down'>
      <ImageAndText
        imgUrl="/images/package/package.png"
        imgAlt="Package hero"
        imgGridSIze={{ xs: 12, md: 5 }}
        childrenGridSIze={{ xs: 12, md: 7 }}
        height={{ xs: "auto", md: 480 }}
        imgHeight={{ xs: 320, md: 480 }}
        flexDirection='row-reverse'
      >
        <Stack className='flex! flex-col! gap-10!'>
          <Typography variant="h1"> پکیج ماجراجویی دلخواهت رو انتخاب کن</Typography>
          <Typography className='text-slate-500! font-light! text-xl! leading-[40px]!'>
            از پکیج اقتصادی تا VIP، گزینه‌های متنوعی برای هر نوع سلیقه و بودجه آماده کرده‌ایم. <br /> امکانات هر پکیج رو مقایسه کن و اون‌چه به سبک سفر تو می‌خوره رو انتخاب کن، یا حتی پکیج اختصاصی خودت رو بساز. <br /> تفریحی فراموش‌نشدنی در انتظارته — راحت، هیجان‌انگیز و دقیقاً همونی که می‌خوای!
          </Typography>
          <Stack className='flex! flex-row! gap-4! w-full! items-center!'>
            <Button variant='outlined' startIcon={<LocalPhoneIcon />} className='w-full! text-black! text-lg!'>
              دریافت مشاوره
            </Button>
            <Button variant='contained' className='w-full! text-white! text-lg!'>
              لیست پکیج ها
            </Button>
          </Stack>
        </Stack>
      </ImageAndText>
    </div>
  )
}
