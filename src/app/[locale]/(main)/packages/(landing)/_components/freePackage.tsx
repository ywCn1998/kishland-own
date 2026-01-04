import CategoryDetailCards from '@/app/[locale]/(main)/entertainment/(landing)/categories/_components/categoryDetailCards'
import { ImageAndText } from '@/components/shared/ui'
import GoldenText from '@/components/shared/ui/GoldenText'
import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import EchoPackageDetails from './echopackageDetails'
import FreePackageDetails from './freePackageDetails'

export default function FreePackage() {
    return (
        <div className='flex! md:flex-col! flex-col-reverse! gap-10! md:mt-10! mt-0! mb-10! md:mb-0!'>
            <Stack className='md:hidden!'>
                <CategoryDetailCards />
            </Stack>
            <ImageAndText 
                imgUrl='/images/package/freePackage.png' 
                imgGridSIze={{ xs: 12, md: 6 }} 
                childrenGridSIze={{ xs: 12, md: 6 }} 
                flexDirection='row-reverse'
                height={{ xs: 'auto', md: 500 }}
            >
                <Stack className='flex! flex-col! gap-4!'>
                    <Typography className='text-slate-500! md:text-lg! text-base!'>
                    ایده‌آل برای سفرهای راحت و مقرون‌به‌صرفه در کیش                    </Typography>
                    <Typography className='md:text-5xl! text-xl! font-bold! leading-[45px]! md:leading-[75px]!'>
                        <GoldenText text="پکیج‌های" textColor='primary' textClass='inline! md:text-5xl! text-xl! font-bold! leading-[45px]! md:leading-[75px]!' />{' '}
                        <GoldenText text="اقتصادی" textColor='secondary' textClass='inline! md:text-5xl! text-xl! font-bold! leading-[45px]! md:leading-[75px]!' />{' '}
                        کیش تجربه‌ای ساده و به‌صرفه با امکانات کاربردی                    </Typography>
                    <Typography className='md:text-xl! text-sm! leading-[40px]!'>
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
            <Stack className='md:block! hidden! md:mt-8! mt-0! '>
                <CategoryDetailCards />
            </Stack>
            <FreePackageDetails/>
        </div>
    )
}
