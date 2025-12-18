"use client";

import GoldenText from '@/components/shared/ui/GoldenText';
import { Stack, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import EchonomyPackage from './echonomyPackage';

// Customize these 3 options here
const options = [
    { id: 0, label: "  پکیج اکونومی" },
    { id: 1, label: "پکیج اقتصادی" },
    { id: 2, label: "پکیج VIP" },
];

// Customize the content for each tab's boxes here
const tabContent: Record<number, Array<{ title: string; description: string; image?: string }>> = {
    0: [
        {
            title: "  تارا کارت",
            description: "در این قسمت شرایط استفاده از تارا کارت نوشته میشه و کاربر با مطالعه این قسمت متوجه میشه که چطوری میتونه با کمک تارا کارت اعتبار شو به دست بیاره. اگر API میشه از تارا کارت گرفت لطفا بررسی بشه.",
            image: "/images/taradetails.png",
        },
    ],
    1: [
        {
            title: "عنوان باکس اول",
            description: "توضیحات باکس اول برای توانا کارت",
            image: "/images/taradetails.png",
        },
    ],
    2: [
        {
            title: "عنوان باکس اول",
            description: "توضیحات باکس اول برای ثمین کارت",
            image: "/images/taradetails.png",
        },
    ]
};







export default function FavouritePackages() {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tabId: number) => {
        setActiveTab(tabId);
    };

    return (
        <div>
            <Stack className="bg-[#F5F7FA]! rounded-2xl! px-2! py-8!">
                <Stack
                    className="flex! flex-col! justify-center! items-center! "
                    spacing={4}
                >
                    <Typography className="text-slate-400! text-lg!">
                    این بار این سفر واست خاطره میشه ...           </Typography>
                    <GoldenText
                        textClass="text-5xl! font-bold!"
                        text={
                            <>
                                <span className="text-black!"> پکیج دلخواهت رو انتخاب کن</span>
                            </>
                        }
                        bgColor="orange"
                        textColor="primary"
                        bgColorSx={{ left: 20, bottom: -10 }}
                        bgWidth="93% "
                    />
                </Stack>

                <Stack className="px-4!  hidden! md:block! mt-8!">
                    <Stack
                        direction="row"
                        spacing={2}
                        className="overflow-x-auto! md:justify-center! md:items-center! gap-2! w-full! px-4!"
                        sx={{
                            "&::-webkit-scrollbar": {
                                display: "none",
                            },
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        {options.map((option) => {
                            const isActive = activeTab === option.id;
                            return (
                                <Button
                                    key={option.id}
                                    onClick={() => handleTabClick(option.id)}
                                    className={`rounded-xl! w-full! text-base! md:text-lg! whitespace-nowrap! transition-all! ${isActive
                                        ? "bg-[#088DEF]! text-white!"
                                        : "bg-white! text-black!"
                                        }`}
                                    sx={{
                                        minWidth: "fit-content",
                                        textTransform: "none",
                                        "&:hover": {
                                            bgcolor: isActive ? "#088DEF" : "white",
                                        },
                                    }}
                                >
                                    {option.label}
                                </Button>
                            );
                        })}
                    </Stack>
                </Stack>


            </Stack>
            {/* Boxes that change based on active tab */}
            {activeTab === 0 && <EchonomyPackage/>}
       
        </div>
    )
}
