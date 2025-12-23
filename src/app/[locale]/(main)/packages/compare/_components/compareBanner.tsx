import { Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'



const packages: any[] = [
    {
        id: 1,
        name: "پکیج‌های اکونومی",
        discountedPrice: "15,020,000",
        price: "15,020,000",
        count: 1,
        image: '/images/package/economypackage.png',
    },
    {
        id: 2,
        name: "پکیج‌های اقتصادی",
        discountedPrice: "15,020,000",
        price: "15,020,000",
        count: 1,
        image: '/images/package/cheappackage.png',
    },
    {
        id: 3,
        name: "پکیج‌های VIP",
        discountedPrice: "15,020,000",
        price: "15,020,000",
        count: 1,
        image: '/images/package/vippackage.png',
    },
]
export default function CompareBanner() {
    return (
        <Grid container spacing={20} className='mt-10! p-4! px-16! bg-[#FFF9EC]! rounded-xl! border-1! border-[#FFE1A6]! reveal-down'>
            <Grid size={3} className='flex! flex-col! items-center! gap-2! py-4!'>
                <img src="/images/package/kishpackage.png" alt="compare banner" />
                <Typography className='text-center! text-base! mt-6!'>
                    مقایسه کن، انتخاب کن
                </Typography>
                <Button variant='contained' className='text-white! text-lg! font-bold! w-full!'>
                    رزرو کن
                </Button>
            </Grid>
            {packages.map((p: any) => (
                <Grid size={3} className='flex! flex-col! items-center! gap-4! hover:scale-105! transition-all! duration-500! '>
                    <img src={p.image} alt={p.name} />
                    <Typography className='text-center! text-2xl!'>{p.name}</Typography>
                    <Typography className='text-center! text-sm! line-through! text-[var(--primary-500)]!'>{p.discountedPrice}</Typography>
                    <Stack className='flex! flex-row-reverse! items-center! gap-1!'>
                        <Typography className='text-xl! font-bold!' color='secondary'>{p.price} تومان</Typography>
                        <Typography className=' text-sm! text-slate-500!'> {p.count} نفر /</Typography>
                    </Stack>
                </Grid>
            ))}
        </Grid>
    )
}
