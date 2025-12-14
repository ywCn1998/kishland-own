"use client";

import GoldenText from '@/components/shared/ui/GoldenText'
import { Stack, Typography, Button, Card, CardContent } from '@mui/material'
import React, { useState } from 'react'

// Customize these 3 options here
const options = [
    { id: 0, label: " تارا کارت" },
    { id: 1, label: " توانا کارت" },
    { id: 2, label: " ثمین کارت" },
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







export default function Providers() {
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
                        به جای عقب انداختن سفر، قسطی برو و لذت ببر.            </Typography>
                    <GoldenText
                        textClass="text-5xl! font-bold!"
                        text={
                            <>
                                <span className="text-black!"> لیست تامین کنندگان تسهیلات</span>
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
            <Stack className=" mt-8! mb-4!">
                <Stack
                    direction="row"
                    spacing={3}
                    className="flex-wrap! justify-center! gap-4! w-full!"
                >
                    {tabContent[activeTab]?.map((box, index) => (
                        <Card
                            key={index}
                            className="bg-white! rounded-xl! border-1! border-slate-200! transition-all! w-full!"
                        >
                            <CardContent className="p-6! flex! flex-row! items-center! justify-between! gap-2!">
                               <Stack className="flex! flex-col! gap-2!">
                               <Typography
                                    variant="h6"
                                    className="font-bold! text-lg! mb-3! text-gray-800!"
                                >
                                    {box.title}
                                </Typography>
                                <Typography
                                    className="text-gray-600! mb-4! text-base!"
                                >
                                    {box.description}
                                </Typography>
                               </Stack>
                               <Stack> <img src={box.image} alt="tarakart"  /></Stack>
                                {/* {box.details && box.details.length > 0 && (
                                    <Stack spacing={1} className="mt-4!">
                                        {box.details.map((detail, detailIndex) => (
                                            <Typography
                                                key={detailIndex}
                                                variant="body2"
                                                className="text-gray-500! text-xs! flex! items-start!"
                                            >
                                                <span className="mr-2!">•</span>
                                                {detail}
                                            </Typography>
                                        ))}
                                    </Stack>
                                )} */}
                            </CardContent>
                        </Card>
                    ))}
                </Stack>
            </Stack>
        </div>
    )
}
