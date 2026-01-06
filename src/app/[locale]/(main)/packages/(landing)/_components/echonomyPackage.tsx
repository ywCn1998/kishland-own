import CategoryDetailCards from '@/app/[locale]/(main)/entertainment/(landing)/categories/_components/categoryDetailCards'
import { ImageAndText } from '@/components/shared/ui'
import GoldenText from '@/components/shared/ui/GoldenText'
import { Stack, Typography } from '@mui/material'
import React from 'react'
import EchoPackageDetails from './echopackageDetails'

export default function EchonomyPackage() {
    return (
        <div className='flex! md:flex-col! flex-col-reverse!  gap-10! md:mt-10! mt-0! mb-10! md:mb-0!'>
            <Stack className='md:hidden!'>
                <CategoryDetailCards />
            </Stack>
            <ImageAndText imgUrl='/images/package/economypackage.png' imgGridSIze={{ xs: 12, md: 6 }} childrenGridSIze={{ xs: 12, md: 6 }} height={{ xs: 'auto', md: 500 }}>
                <Stack className='flex! flex-col! gap-4!'>
                    <Typography className='text-slate-500! md:text-lg! text-base!'>
                        مناسب برای سفرهای جمع‌وجور، بی‌دردسر و با امکانات کاربردی در کیش
                    </Typography>
                    <Typography className='md:text-5xl! text-xl! font-bold! leading-[45px]! md:leading-[75px]!'>
                        <GoldenText text="پکیج‌های" textColor='primary' textClass='inline! md:text-5xl! text-xl! font-bold! leading-[45px]! md:leading-[75px]!' />{' '}
                        <GoldenText text="اکونومی" textColor='secondary' textClass='inline! md:text-5xl! text-xl! font-bold! leading-[45px]! md:leading-[75px]!' />{' '}
                        کیش تجربه‌ای جذاب با امکانات پایه و مقرون‌به‌صرفه
                    </Typography>
                    <Typography className='md:text-xl! text-sm! leading-[40px]!'>
                        پکیج‌های اکنومی مخصوص افرادی طراحی شده که به‌دنبال تجربه‌ای ساده، خودمانی و کاربردی از سفر به کیش هستند. اقامتگاه‌های راحت، امکانات پایه و تفریحات عمومی در محیطی دوستانه و مقرون‌به‌صرفه، بدون هزینه‌های اضافه. انتخابی هوشمندانه برای سفرهایی با برنامه‌ریزی سبک و انعطاف‌پذیر.
                    </Typography>
                </Stack>
            </ImageAndText>
            <Stack className='md:block! hidden!'>
                <CategoryDetailCards />
            </Stack>
            <EchoPackageDetails />
        </div>
    )
}
