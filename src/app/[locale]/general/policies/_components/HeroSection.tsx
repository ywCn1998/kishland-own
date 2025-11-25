"use client";
import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import AdbIcon from "@mui/icons-material/Adb";
import { useAtom } from "jotai";
import { headerTitleAtom } from "@/store/atomHeader";
import { useEffect } from "react";

export default function HeroSection() {
    const [, setHeaderTitle] = useAtom(headerTitleAtom);
    useEffect(() => {
        setHeaderTitle("قوانین و مقررات");
    }, []);
    return (
        <Stack className="flex! flex-col! md:gap-8! gap-4! md:items-center! md:justify-center! w-full! mt-10! md:mt-0! mb-10!">
            <Stack className="relative! w-[140px]! h-[140px]!">
                <Image src="/images/general/policies/hero.png" alt="policies" fill />
            </Stack>

            <Typography color="text.secondary" className="text-sm! md:text-base!" fontWeight={500}>شفاف، مسئولانه و قابل‌اعتماد</Typography>

            <Typography className="md:text-center! text-xl! md:text-5xl! font-bold!">قوانین و مقررات استفاده از خدمات کیش لندیار</Typography>

            <Typography color="text.secondary" className="text-sm! md:text-2xl! leading-8! md:leading-9!">برای اطمینان از تجربه‌ای ایمن و رضایت‌بخش، لطفاً پیش از استفاده از خدمات، قوانین ما را با دقت مطالعه فرمایید.</Typography>
            <Stack className="w-full! flex! flex-col! md:flex-row! gap-4! md:gap-8!" mt={2}>
                <Button
                    className="w-full! md:w-6/12 text-black! rounded-xl! text-lg! reveal"
                    variant="outlined"
                    startIcon={<AdbIcon />}
                >
                    دانلود اپلیکیشن
                </Button>
                <Button
                    className="w-full! md:w-6/12 text-white! rounded-xl! text-lg! reveal"
                    variant="contained"
                >
                    ارتباط با ما
                </Button>
            </Stack>

            <Typography className="md:mt-5! text-sm! md:text-lg! md:text-center! text-white! md:py-6! py-4 px-4! rounded-xl! md:rounded-2xl! bg-[#FA5050]! w-full! leading-8!">گردشگران و مسافرین محترم حتما قبل از واریز وجه و هزینه مشخص شده مطالب زیر را با دقت مطالعه فرمایید.</Typography>
        </Stack>
    )
}