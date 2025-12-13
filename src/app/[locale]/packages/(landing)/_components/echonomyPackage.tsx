import CategoryDetailCards from '@/app/[locale]/entertainment/(landing)/categories/_components/categoryDetailCards'
import { ImageAndText } from '@/components/shared/ui'
import GoldenText from '@/components/shared/ui/GoldenText'
import { Stack, Typography } from '@mui/material'
import React from 'react'

export default function EchonomyPackage() {
    return (
        <div className='flex! flex-col! gap-10! mt-10!'>
            <ImageAndText imgUrl='/images/package/economypackage.png' imgGridSIze={{ xs: 12, md: 6 }} childrenGridSIze={{ xs: 12, md: 6 }}>
                <Stack>
                    <Typography>
                        مناسب برای سفرهای جمع‌وجور، بی‌دردسر و با امکانات کاربردی در کیش
                    </Typography>
                    <Typography className='text-5xl! font-bold! leading-[45px]! md:leading-[75px]!'>
                        <GoldenText text="پکیج‌های" textColor='primary' textClass='inline! text-5xl! font-bold! leading-[45px]! md:leading-[75px]!' />{' '}
                        <GoldenText text="اکونومی" textColor='secondary' textClass='inline! text-5xl! font-bold! leading-[45px]! md:leading-[75px]!' />{' '}
                        کیش تجربه‌ای جذاب با امکانات پایه و مقرون‌به‌صرفه
                    </Typography>
                    <Typography>
                        پکیج‌های اکنومی مخصوص افرادی طراحی شده که به‌دنبال تجربه‌ای ساده، خودمانی و کاربردی از سفر به کیش هستند. اقامتگاه‌های راحت، امکانات پایه و تفریحات عمومی در محیطی دوستانه و مقرون‌به‌صرفه، بدون هزینه‌های اضافه. انتخابی هوشمندانه برای سفرهایی با برنامه‌ریزی سبک و انعطاف‌پذیر.
                    </Typography>
                </Stack>
            </ImageAndText>
            <CategoryDetailCards />




        </div>
    )
}
