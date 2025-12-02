import { Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

// داده‌های پکیج‌ها (همان داده‌های compareBanner)
const packages: any[] = [
  {
    id: 1,
    name: "پکیج‌های اکونومی",
    discountedPrice: "18,500,000",
    price: "15,020,000",
    count: 1,
    image: '/images/package/economypackage.png',
  },
  {
    id: 2,
    name: "پکیج‌های اقتصادی",
    discountedPrice: "22,000,000",
    price: "18,500,000",
    count: 2,
    image: '/images/package/cheappackage.png',
  },
  {
    id: 3,
    name: "پکیج‌های VIP",
    discountedPrice: "35,000,000",
    price: "28,900,000",
    count: 2,
    image: '/images/package/vippackage.png',
  },
]

// داده‌های مقایسه برای هر ویژگی
const comparisonData = [

  {
    label: 'تعداد شب',
    values: ['2 شب', '3 شب', '4 شب']
  },
  {
    label: 'تعداد نفر',
    type: 'count',
  },
  {
    label: 'نوع هتل',
    values: ['3 ستاره', '4 ستاره', '5 ستاره']
  },
  {
    label: 'صبحانه',
    values: ['✓', '✓', '✓']
  },
  {
    label: 'ناهار',
    values: ['✗', '✓', '✓']
  },
  {
    label: 'شام',
    values: ['✗', '✗', '✓']
  },
  {
    label: 'ترانسفر فرودگاه',
    values: ['✓', '✓', '✓']
  },
  {
    label: 'تورهای تفریحی',
    values: ['1 تور', '2 تور', '3 تور']
  },
  {
    label: 'استخر و جکوزی',
    values: ['✗', '✓', '✓']
  },
  {
    label: 'اسپا و ماساژ',
    values: ['✗', '✗', '✓']
  }
]

export default function DataGrid() {
  return (
    <Grid container className='mt-10! mb-10! reveal-down w-full!'>
      {/* Data Rows */}
      {comparisonData.map((row, rowIndex) => (
        <Grid 
          key={rowIndex} 
          container 
          className={`w-full! border-b-1! border-slate-400! py-3! ${
            rowIndex === 0 ? 'border-b-1! rounded-t-xl!' : ''
          } ${
            rowIndex === comparisonData.length - 1 ? 'border-b-0!' : ''
          }`}
        >
          <Grid 
            size={3} 
            className='p-4! '
          >
            <Typography className='text-start! '>
              {row.label}
            </Typography>
          </Grid>
          {row.type === 'xxxx' ? (
            // سطر قیمت - استفاده از داده‌های واقعی پکیج‌ها
            packages.map((pkg, colIndex) => (
              <Grid 
                key={pkg.id} 
                size={3} 
                className='p-4!'
              >
                <Stack className='flex! flex-col! items-center! gap-1!'>
                  <Typography className='text-center! text-sm! line-through! text-[var(--primary-500)]!'>
                    {pkg.discountedPrice} تومان
                  </Typography>
                  <Typography className='text-center! text-xl! font-bold!' color='secondary'>
                    {pkg.price} تومان
                  </Typography>
                </Stack>
              </Grid>
            ))
          ) : row.type === 'count' ? (
            // سطر تعداد نفر - استفاده از داده‌های واقعی
            packages.map((pkg, colIndex) => (
              <Grid 
                key={pkg.id} 
                size={3} 
                className='p-4!'
              >
                <Typography className='text-center!'>
                  {pkg.count} نفر
                </Typography>
              </Grid>
            ))
          ) : (
            // سایر سطرها
            row.values?.map((value, colIndex) => (
              <Grid 
                key={colIndex} 
                size={3} 
                className='p-4!'
              >
                <Typography className={`text-center! ${
                  value === '✓' ? 'text-green-600! text-xl! font-bold!' : 
                  value === '✗' ? 'text-red-500! text-xl! font-bold!' : ''
                }`}>
                  {value}
                </Typography>
              </Grid>
            ))
          )}
        </Grid>
      ))}
      
      {/* سطر دکمه‌های رزرو */}
      <Grid 
        container 
        className='w-full! py-4!'
      >
        <Grid 
          size={3} 
          className='p-4!'
        >
          {/* ستون خالی برای label */}
        </Grid>
        {packages.map((pkg) => (
          <Grid 
            key={pkg.id} 
            size={3} 
            className='p-4! items-center! justify-center! flex!'
          >
            <Button 
              variant='outlined' 
              className='w-[70%]! text-[var(--primary-500)]! border-[var(--primary-500)]! text-lg! font-bold!'
              fullWidth
            >
              رزرو کن
            </Button>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}
