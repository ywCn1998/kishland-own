"use client";

import { useMemo, useState } from "react";
import { ButtonBase, Stack } from "@mui/material";
import ImageGalleryDialog from "@/components/shared/ui/ImageGalleryDialog";

interface ViewsGalleryStripProps {
    images: string[];
    additionalImages?: string[];
    visibleCount?: number;
}

export default function ViewsGalleryStrip({
    images,
    visibleCount = 4,
    additionalImages
}: ViewsGalleryStripProps) {
    const [open, setOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const { visibleImages, remainingCount } = useMemo(() => {
        const sliced = images.slice(0, visibleCount);
        return {
            visibleImages: sliced,
            remainingCount: Math.max(images.length - 13, 0),
        };
    }, [images, visibleCount]);

    const handleOpen = (index: number) => {
        setCurrentIndex(index);
        setOpen(true);
    };

    return (
        <>
            <Stack className="bg-white! h-20! rounded-full! flex! flex-row! gap-2.5! p-2.5! shadow-lg!">
                {additionalImages?.slice(0, 4)?.map((img, index) => {
                    const isFirst = index === 0;
                    const isLast = index === visibleImages.length - 1;
                    const tileClasses = [
                        "h-full!",
                        `${additionalImages?.length === 1 ? "w-full!" : additionalImages.length === 2 ? "w-1/2!" : additionalImages.length === 3 ? "w-1/3!"  : "w-1/4!"}`,
                        "overflow-hidden!",
                        "relative!",
                        "cursor-pointer!",
                        "transition-all!",
                        "duration-300!",
                        "ease-in-out!",
                        "focus-visible:outline-none!",
                    ];

                    if (additionalImages?.length < 4) {
                        tileClasses.push("rounded-4xl!");
                    } else if (isFirst) {
                        tileClasses.push("rounded-l-md!", "rounded-r-4xl!");
                    } else if (isLast) {
                        tileClasses.push("rounded-r-md!", "rounded-l-4xl!");
                    } else {
                        tileClasses.push("rounded-md!");
                    }

                    return (
                        <ButtonBase
                            key={`${img}-${index}`}
                            className={tileClasses.join(" ")}
                            sx={{ p: 0 }}
                            onClick={() => handleOpen(index)}
                        >
                            <img
                                src={img}
                                alt={`hotel-gallery-${index}`}
                                className="w-full! h-full! object-cover! transition-transform! duration-[400ms]! ease-in-out! hover:scale-[1.1]"
                            />

                            {isFirst && remainingCount > 0 && (
                                <Stack className="absolute! inset-0! bg-[#0000008F]! flex! items-center! justify-center! text-white! text-xl! font-medium! select-none!">
                                    +{remainingCount}
                                </Stack>
                            )}
                        </ButtonBase>
                    );
                })}
            </Stack>

            <ImageGalleryDialog
                open={open}
                onClose={() => setOpen(false)}
                images={images}
                currentIndex={currentIndex}
                onChangeIndex={setCurrentIndex}
                productName="hotel-gallery"
            />
        </>
    );
}


