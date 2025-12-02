import { Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const companies: any[] = [
    {
        image : "/images/package/miakamal.png",
        name : "میاکامال"
    },
    {
        image : "/images/package/pingo.png",
        name : "پارک برفی پنگوئن"
    },
    {
        image : "/images/package/safarip.png",
        name : "سافاری"
    },
    {
        image : "/images/package/dolphins.png",
        name : "پارک دلفین"
    },
    {
        image : "/images/package/sewaming.png",
        name : "کلوپ غواصی مارینا"
    },
    {
        image : "/images/package/iranfun.png",
        name : "ایران فان"
    },
    {
        image : "/images/package/miakamal.png",
        name : " بانجی"
    }

]


export default function CompanyCards() {
    return (
        <>
            <Stack className='flex! flex-row! justify-between! w-full! items-center! mt-10! reveal-down!'>
                {companies.map((company) => (
                    <Stack key={company.id} className='flex! flex-col! items-center! gap-4! reveal!'>
                        <Stack className='border-1! w-40! h-35! flex! items-center! justify-center! rounded-xl! border-[var(--secondary-100)]! bg-[var(--secondary-200)]! '>
                            <Image src={company.image} alt={company.name} width={70} height={70} />
                        </Stack>
                        <Typography>{company.name}</Typography>
                    </Stack>
                ))}
            </Stack>
        </>
    )
}
