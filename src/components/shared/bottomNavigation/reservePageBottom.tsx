"use client"

import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';


interface IReservePageBottom {
    step: number,
    setStep: (step: number) => void,
    totalPrice: string,
    maxStep?: number,
}

export default function ReservePageBottom({ step, setStep, totalPrice, maxStep = 2 }: IReservePageBottom) {

    const handleStep = () => {
        if (step < maxStep) {
            setStep(step + 1)
        } else {
            setStep(maxStep)
        }
    }
    return (
        <>
            {step < maxStep ? (
                <Stack
                    className="fixed! bottom-0! left-0! right-0! p-4! bg-white! z-1000! flex! flex-row! gap-4! md:hidden! justify-between! items-center! "
                    sx={{
                        boxShadow: "0px -4px 16px 0px rgba(20, 43, 77, 0.10), 0px -1.6px 4.4px 0px rgba(20, 43, 77, 0.03)"
                    }}
                >
                    <Stack className='flex! flex-col! items-center! gap-2!'>
                        <Stack className='flex! flex-row! items-center! gap-2!'>
                            <Typography className='text-sm! text-slate-500!'>جمع کل</Typography>
                            <Typography className='text-lg! font-medium!'>
                                {totalPrice} ت
                            </Typography>
                        </Stack>
                        <Button className='rounded-full! text-[#626E94]! p-2! text-sm! px-4!' startIcon={<BallotOutlinedIcon />} sx={{ backgroundColor: "#E1E6F0" }} size='medium'>
                            جزئیات رزرو
                        </Button>
                    </Stack>
                    <Button variant="contained" color="primary" size='medium' className='text-lg! text-white! px-8! py-4! w-[50%]!' onClick={handleStep}>
                        {step === 0 ? "ثبت و ادامه" : step === 1 ? "ادامه" : "پرداخت"}
                    </Button>
                </Stack>) : <Stack className="fixed! bottom-0! left-0! right-0! p-4! bg-white! z-10000! flex! flex-row! gap-4! md:hidden! justify-between! items-center! "
                    sx={{
                        boxShadow: "0px -4px 16px 0px rgba(20, 43, 77, 0.10), 0px -1.6px 4.4px 0px rgba(20, 43, 77, 0.03)"
                    }}>
                <Button variant="outlined" color="primary" size='large' className='text-lg! font-medium! px-8! py-4! w-full!' startIcon={<LocalPrintshopOutlinedIcon />}>
                    چاپ بلیط
                </Button>
            </Stack>}
        </>
    )
}
