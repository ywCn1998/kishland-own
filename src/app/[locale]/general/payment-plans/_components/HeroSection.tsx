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
        <Stack className="flex! flex-col! md:gap-8! gap-4! md:items-center! md:justify-center! w-full! mb-10!">

            <Typography className="text-center! text-2xl! md:text-5xl! lg:text-6xl! xl:text-7xl! font-semibold! leading-10! md:leading-[100px]! mt-10!">
                دستتو بده به <span className="text-primary">ماجراجویی</span>، <br />
                <span className="text-secondary-500">قسطی</span> برو هر جا که خواستی!
            </Typography>

            <Stack className="w-full! flex! flex-col! md:flex-row! gap-4! md:gap-8! justify-center!" mt={2}>
                <Button
                    className="w-full! md:w-fit! text-black! rounded-xl! md:text-xl! text-lg! reveal md:px-20! md:py-5!"
                    variant="outlined"
                    sx={{ fontWeight: 500 }}
                >
                    شرایطش چیه ؟
                </Button>
                <Button
                    className="w-full! md:w-fit! text-white! rounded-xl! md:text-xl! text-lg! reveal md:px-20! md:py-5!"
                    variant="contained"
                    sx={{ fontWeight: 500 }}
                >
                    خرید اقساطی
                </Button>
            </Stack>

            <Stack className="w-full! flex! flex-col! md:flex-row-reverse! gap-4! md:gap-8! justify-center! items-center! md:mt-14!">
                <Stack className="md:w-[45%]! w-full! h-full! flex! flex-row! gap-4! md:gap-8!">
                    <Stack spacing={4}>
                        <Stack className="flex flex-row! gap-4! items-center!">
                            <Stack className="relative! md:h-24! md:w-24! h-12! w-12!">
                                <Image src="/images/general/aghsat/ticket.svg" alt="payment-plans" fill />
                            </Stack>
                            <Stack spacing={0.8}>
                                <Typography className="md:text-3xl! font-bold!">
                                    تفریحتو رزرو کن
                                </Typography>
                                <Typography className="text-xs! md:text-base!" color="text.secondary">
                                    همه چیز از انتخاب یک مقصد جذاب شروع می‌شه.
                                </Typography>
                            </Stack>
                        </Stack>

                        <Stack className="flex flex-row! gap-4! items-center!">
                            <Stack className="relative! md:h-24! md:w-24! h-12! w-12!">
                                <Image src="/images/general/aghsat/beach.svg" alt="payment-plans" fill />
                            </Stack>
                            <Stack spacing={0.8}>
                                <Typography className="md:text-3xl! font-bold!">
                                    سفرتو شروع کن
                                </Typography>
                                <Typography className="text-xs! md:text-base!" color="text.secondary">
                                    فقط چند کلیک تا شروع یک تجربه‌ی به‌یادموندنی.
                                </Typography>
                            </Stack>
                        </Stack>

                        <Stack className="flex flex-row! gap-4! items-center!">
                            <Stack className="relative! md:h-20! md:w-20! h-12! w-12!">
                                <Image src="/images/general/aghsat/time.svg" alt="payment-plans" fill />
                            </Stack>
                            <Stack spacing={0.8}>
                                <Typography className="md:text-3xl! font-bold!">
                                    بعدا پرداخت کن
                                </Typography>
                                <Typography className="text-xs! md:text-base!" color="text.secondary">
                                    با شرایط اقساطی، پرداخت آسون و بی‌دغدغه‌ست.
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>

                <Stack className="relative! md:h-24! h-7! md:w-[14%]! w-full! self-start! md:mt-14! mt-4!">
                    <Image src="/images/general/aghsat/yes-please.png" className="hidden! md:block!" alt="payment-plans" fill />
                    <Image src="/images/general/aghsat/yes-please-mobile.png" className="block! md:hidden!" alt="payment-plans" fill />
                </Stack>

                <Stack className="relative! md:h-[480px]! h-[300px]! md:w-[45%]! w-full!">
                    <Image src="/images/general/aghsat/hero.png" alt="payment-plans" fill />
                </Stack>

            </Stack>

        </Stack>
    )
}
