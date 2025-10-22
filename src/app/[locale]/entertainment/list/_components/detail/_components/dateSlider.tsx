'use client';

import { useMemo, useState } from 'react';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import ChevronRightRounded from '@mui/icons-material/ChevronRightRounded';
import ChevronLeftRounded from '@mui/icons-material/ChevronLeftRounded';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// ---- colors (tweak if needed)
const ORANGE = '#F79009';
const RAIL = '#D9DFEB';
const CREAM = '#FFF8EA';
const RED = '#EF4444';

type DayItem = {
    id: string;
    dateFa: string;   // e.g., "۲۳ فروردین"
    nameFa: string;   // e.g., "شنبه"
    isWeekend?: boolean; // جمعه/پنج‌شنبه?
};

function DayCard({
    item,
    selected,
    onClick,
}: {
    item: DayItem;
    selected: boolean;
    onClick: () => void;
}) {
    return (
        <Stack
            onClick={onClick}
            className="cursor-pointer select-none"
            sx={{
                gap: 2,
                px: 6,
                py: 2.5,
                borderRadius: 2,
                bgcolor: selected ? CREAM : 'transparent',
                outline: selected ? `3px solid ${ORANGE}` : 'none',
                outlineOffset: 0,
                transition: 'background-color 150ms, outline 150ms',
            }}
            justifyContent="center"
            alignItems="center"
            gap={0.5}
        >
            <Typography sx={{ color: '#8091B0', fontWeight: 600, fontSize: 14 }}>
                {item.dateFa}
            </Typography>
            <Typography
                sx={{
                    fontWeight: 700,
                    fontSize: 18,
                    color: item.isWeekend ? RED : '#0B1A2A',
                }}
            >
                {item.nameFa}
            </Typography>
        </Stack>
    );
}

export default function DaysSwiper({
    items,
    initialIndex = 3,
}: {
    items: DayItem[];
    initialIndex?: number;
}) {
    const [active, setActive] = useState(initialIndex);

    const nav = useMemo(
        () => ({
            prevEl: '.days-prev',
            nextEl: '.days-next',
        }),
        []
    );

    return (
        <Box className="w-full">
            <Stack
                direction="row"
                alignItems="center"
                className="rounded-2xl border border-[#E1E6F0] relative"
                sx={{ px: 1, py: 1 }}
            >
                {/* Prev */}
                <IconButton className="days-prev" sx={{ color: '#8091B0' }}>
                    {/* In RTL, left button shows “›” visually; keep icons as you prefer */}
                    <ChevronRightRounded />
                </IconButton>

                {/* Swiper */}
                <Stack sx={{ width: '100%', overflow: 'hidden' }} >
                    <Swiper
                        modules={[Navigation]}
                        navigation={nav}
                        style={{ width: '100%' }}
                        // dir="rtl"
                        slidesPerView={5.2}
                        spaceBetween={0}
                        centeredSlides={false}
                        initialSlide={initialIndex}
                        slidesOffsetBefore={4}
                        slidesOffsetAfter={8}
                        onSlideChange={(s) => setActive(s.activeIndex)}
                        breakpoints={{
                            0: { slidesPerView: 2.2 },
                            480: { slidesPerView: 3.2 },
                            768: { slidesPerView: 4.2 },
                            1024: { slidesPerView: 'auto' },
                        }}
                    >
                        {items.map((it, i) => (
                            <SwiperSlide key={'day' + i} className='w-fit!'>
                                <Stack className='flex flex-row! h-full py-4!'>
                                    {/* left divider (except first) */}


                                    <DayCard
                                        item={it}
                                        selected={i === active}
                                        onClick={() => setActive(i)}
                                    />
                                    {i !== active && (
                                        <Box
                                            sx={{
                                                width: '1px',
                                                bgcolor: RAIL,
                                                // mx: 2,
                                                // my: 2,
                                            }}
                                        />
                                    )}
                                    {/* right divider (always) */}
                                    {/* {i !== active &&
                                        <Box
                                            sx={{
                                                width: '1px',
                                                bgcolor: RAIL,
                                                // mx: 2,
                                                // my: 2,
                                            }}
                                        />
                                    } */}
                                </Stack>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Stack>

                {/* Next */}
                <IconButton className="days-next" sx={{ color: '#8091B0' }}>
                    <ChevronLeftRounded />
                </IconButton>
            </Stack>
        </Box>
    );
}
