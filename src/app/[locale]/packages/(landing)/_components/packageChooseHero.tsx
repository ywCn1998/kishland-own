import { ImageAndText } from '@/components/shared/ui'
import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';


export default function PackageChooseHero() {
    return (
        <div className='reveal-down! mt-20!'>
            <ImageAndText
                imgUrl='/images/package/package2.png'
                imgAlt='package choose hero'
                imgGridSIze={{ xs: 12, md: 5 }}
                childrenGridSIze={{ xs: 12, md: 7 }}
                height={{ xs: "auto", md: 480 }}
                imgHeight={{ xs: 320, md: 480 }}
                flexDirection='row-reverse'
            >
                <Stack className='flex! flex-col! gap-8!'>
                    <Typography className='text-xl! font-light! text-slate-500!'>
                        سفری شخصی‌سازی‌شده با گزینه‌های متنوع و امکانات خاص در کیش
                    </Typography>
                    <Typography variant='h1'>
                        پکیج‌های انتخابی کیش تجربه‌ای منعطف و مطابق با سلیقه شما
                    </Typography>
                    <Typography className='text-xl! font-light! leading-[40px]!'>
                        پکیج‌های انتخابی برای افرادی طراحی شده که می‌خواهند سفری منحصر به فرد و مطابق با نیازهای خود داشته باشند. شما می‌توانید از بین اقامتگاه‌های متنوع، امکانات مختلف و تفریحات دلخواه خود انتخاب کنید تا تجربه‌ای شخصی‌سازی‌شده و مطابق با سلیقه‌تان داشته باشید. این پکیج، گزینه‌ای عالی برای کسانی است که می‌خواهند آزادی بیشتری در برنامه‌ریزی سفر خود داشته باشند
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
