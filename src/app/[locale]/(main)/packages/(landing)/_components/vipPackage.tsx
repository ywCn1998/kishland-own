import CategoryDetailCards from '@/app/[locale]/(main)/entertainment/(landing)/categories/_components/categoryDetailCards'
import { ImageAndText } from '@/components/shared/ui'
import GoldenText from '@/components/shared/ui/GoldenText'
import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import FreePackageDetails from './freePackageDetails'
import CallIcon from '@mui/icons-material/Call'
import VipPackageDetails from './vipPackageDetails'

export default function VipPackage() {
  return (
    <div className='flex! md:flex-col! flex-col-reverse! gap-10! md:mt-10! mt-0! mb-10! md:mb-0!'>
      <Stack className='md:hidden!'>
        <CategoryDetailCards />
      </Stack>
      <ImageAndText
        imgUrl='/images/package/vippackage.png'
        imgGridSIze={{ xs: 12, md: 6 }}
        childrenGridSIze={{ xs: 12, md: 6 }}
        height={{ xs: 'auto', md: 500 }}
      >
        <Stack className='flex! flex-col! gap-4!'>
          <Typography className='text-slate-500! md:text-lg! text-base!'>
            تجربه‌ای لوکس و اختصاصی برای سفری به یادماندنی در کیش
          </Typography>

          <Typography className='md:text-5xl! text-xl! font-bold! leading-[45px]! md:leading-[75px]!'>
            <GoldenText
              text='پکیج‌های'
              textColor='primary'
              textClass='inline! md:text-5xl! text-xl! font-bold! leading-[45px]! md:leading-[75px]!'
            />{' '}
            <GoldenText
              text='VIP'
              textColor='secondary'
              textClass='inline! md:text-5xl! text-xl! font-bold! leading-[45px]! md:leading-[75px]!'
            />{' '}
            کیش
            <br />
            تجمل، راحتی و امکانات ویژه برای یک سفر استثنائی
          </Typography>

          <Typography className='md:text-xl! text-sm! leading-[40px]!'>
            پکیج‌های VIP برای کسانی طراحی شده که به دنبال تجربه‌ای خاص و لوکس از سفر
            به کیش هستند. اقامتگاه‌های مجلل، خدمات اختصاصی، امکانات رفاهی درجه یک و
            تفریحات خصوصی در محیطی آرام و بی‌نظیر، تضمین‌کننده سفری فراتر از انتظار.
          </Typography>

          <Stack className='md:gap-3! gap-4! md:flex-row! flex-col!'>
            <Button variant='outlined' className='text-nowrap! px-10!' startIcon={<CallIcon color='primary'/>}>
              دریافت مشاوره
            </Button>

            <Stack className='rounded-lg! flex! flex-row! items-center! justify-between! w-full! bg-[#F5F7FA]! p-2!'>
              <Stack className='flex! flex-col! gap-2!'>
                <Typography
                  className='text-sm! text-slate-500!'
                  sx={{ textDecoration: 'line-through' }}
                >
                  15,020,000 تومان
                </Typography>

                <Typography className='text-lg! font-bold!'>
                  15,020,000 تومان
                </Typography>
              </Stack>

              <Button variant='contained' className='text-white! text-sm!' size='large'>
                رزرو پکیج
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </ImageAndText>

      <Stack className='md:block! hidden!'>
        <CategoryDetailCards />
      </Stack>

      <VipPackageDetails />
    </div>
  )
}
