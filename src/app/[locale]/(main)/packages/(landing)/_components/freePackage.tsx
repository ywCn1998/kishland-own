import CategoryDetailCards from '@/app/[locale]/(main)/entertainment/(landing)/categories/_components/categoryDetailCards'
import { ImageAndText } from '@/components/shared/ui'
import GoldenText from '@/components/shared/ui/GoldenText'
import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import EchoPackageDetails from './echopackageDetails'
import FreePackageDetails from './freePackageDetails'

export default function FreePackage() {
    return (
        <div className='flex! flex-col! gap-10! mt-10!'>
            <ImageAndText imgUrl='/images/package/freePackage.png' imgGridSIze={{ xs: 12, md: 6 }} childrenGridSIze={{ xs: 12, md: 6 }} flexDirection='row-reverse'>
                <Stack className='flex! flex-col! gap-4!'>
                    <Typography className='text-slate-500! text-lg!'>
                    ایده‌آل برای سفرهای راحت و مقرون‌به‌صرفه در کیش                    </Typography>
                    <Typography className='text-5xl! font-bold! leading-[45px]! md:leading-[75px]!'>
                        <GoldenText text="پکیج‌های" textColor='primary' textClass='inline! text-5xl! font-bold! leading-[45px]! md:leading-[75px]!' />{' '}
                        <GoldenText text="اقتصادی" textColor='secondary' textClass='inline! text-5xl! font-bold! leading-[45px]! md:leading-[75px]!' />{' '}
                        کیش تجربه‌ای ساده و به‌صرفه با امکانات کاربردی                    </Typography>
                    <Typography className='text-xl! leading-[40px]!'>
                    پکیج‌های اقتصادی ویژه افرادی است که به دنبال سفری ساده، راحت و مقرون‌به‌صرفه به کیش هستند. اقامتگاه‌های مناسب، امکانات اساسی و تفریحات عمومی در فضایی دوستانه و بدون هزینه‌های اضافی، انتخابی مناسب برای سفرهای کوتاه و برنامه‌ریزی‌شده با حداکثر انعطاف‌پذیری                  
                      </Typography>
                      <Stack className='rounded-lg! flex! flex-row! items-center! justify-between! w-full! bg-[#F5F7FA]! p-2!'>
                        <Stack className='flex! flex-col! gap-2!'>
                            <Typography className='text-sm! text-slate-500! ' sx={{textDecoration: "line-through"}}>
                            15,020,000تومان
                            </Typography>
                            <Typography className='text-lg! font-bold! '>
                            15,020,000تومان
                            </Typography>
                        </Stack>
                        <Button variant='contained' className='text-white! text-sm!' size='large'>
                        رزرو پکیج
                        </Button>
                      </Stack>
                </Stack>
            </ImageAndText>
            <Stack className='mt-10!'>
            <CategoryDetailCards />

            </Stack>
            <FreePackageDetails/>
        </div>
    )
}
