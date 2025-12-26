import { Stack, Typography } from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function PackageCard() {
  return (
    <div className='bg-white! md:w-[49%]! w-full! border-1! border-slate-200! p-4! rounded-xl! flex! flex-row! justify-between! items-center! '>
      <Stack className='flex! flex-row! items-center! gap-4! '>
        <img src='/images/package/packagecard.png' />
        <Stack className='flex! flex-col! gap-4! '>
          <Typography className='text-lg! font-semibold!'>
            شوی شبانه کیش (اتحاد جنگ ها )
          </Typography>
          <Typography className='text-sm! text-slate-600! '>
            <LocationOnIcon color='error'/>
            سالن مجلل کشتی ایرانی یا هتل شایان
          </Typography>
        </Stack>
      </Stack>
      <Stack className='flex! flex-row! items-center! gap-1!'>
        <Typography className='text-sm! text-slate-500!'>
          1 نفر/
        </Typography>
        <Typography className='text-base! font-semibold!' color='secondary'>
          585,000 تومان
        </Typography>
      </Stack>
    </div>
  )
}
