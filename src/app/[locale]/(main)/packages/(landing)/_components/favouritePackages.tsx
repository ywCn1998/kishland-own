"use client";

import GoldenText from '@/components/shared/ui/GoldenText';
import { Stack, Typography, Button, Tabs, Tab } from '@mui/material'
import React, { useState } from 'react'
import EchonomyPackage from './echonomyPackage';
import FreePackage from './freePackage';
import VipPackage from './vipPackage';

// Customize these 3 options here
const options = [
    { id: 0, label: "  پکیج اکونومی" },
    { id: 1, label: "پکیج اقتصادی" },
    { id: 2, label: "پکیج VIP" },
];






export default function FavouritePackages() {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tabId: number) => {
        setActiveTab(tabId);
    };

    return (
        <div className='md:mt-12! mt-0!'>
            <Stack className="block! md:hidden! ">
                <Tabs
                    value={activeTab}
                    onChange={(_, newValue) => setActiveTab(newValue)}
                    variant="fullWidth"
                    indicatorColor="primary"
                    textColor="primary"
                    sx={{
                        minHeight: 44,
                        "& .MuiTab-root": {
                            fontSize: "14px",
                            fontWeight: 600,
                            minHeight: 44,
                            textTransform: "none",
                        },
                    }}
                >
                    {options.map((option) => (
                        <Tab key={option.id} label={option.label} />
                    ))}
                </Tabs>
            </Stack>
            <Stack className="bg-[#F5F7FA]! rounded-2xl! px-2! py-8!">
                <Stack
                    className="md:flex! flex-col! justify-center! items-center! hidden! "
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
            {activeTab === 0 && <EchonomyPackage />}
            {activeTab === 1 && <FreePackage />}
            {activeTab === 2 && <VipPackage />}


        </div>
    )
}
