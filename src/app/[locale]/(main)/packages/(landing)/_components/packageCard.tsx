import { Stack, Typography } from '@mui/material'
import React from 'react'

export default function PackageCard() {
  return (
    <div className='bg-white! w-[49%]! border-1! border-slate-200! p-4! rounded-xl! flex! flex-row! justify-between! items-center! '>
        <img src='/images/package/packagecard.png'/>
        <Stack>
            <Typography>
            شوی شبانه کیش (اتحاد جنگ ها )
            </Typography>
            <Typography>
            سالن مجلل کشتی ایرانی یا هتل شایان
            </Typography>
        </Stack>
        <Stack className='flex! flex-row! items-center! '>
            <Typography>
            1 نفر/
            </Typography>
            <Typography>
            585,000 تومان
            </Typography>
        </Stack>
    </div>
  )
}
