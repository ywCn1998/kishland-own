import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";


interface IProp {
    title: string;
    img: string;
    onClick?: () => void;
    btn_title: string;
    description?: string;
    title_font?: string
    isToursSection?: boolean
    btnClassName?: string
}

export default function ChanceCard({
    title,
    img,
    onClick,
    description,
    btn_title,
    title_font = '20px',
    isToursSection,
    btnClassName
}: IProp) {
    return (
        <Stack
            className={`flex ${isToursSection ? "flex-row! items-center! w-full! rounded-2xl! gap-4! py-3! px-3! " : "flex-col! rounded-4xl items-center p-6 mt-8"} bg-[#F0F7FF]   `}
        >
            <Image
                src={img}
                alt={img}
                height={60}
                width={80}
            />

            <Stack className={`${isToursSection && "flex! flex-col!"}`}>
                <Typography variant="h4" sx={{ textAlign: 'center', fontSize: title_font, mt: 3 }}>{title}</Typography>

                {description &&
                    <Typography color="textSecondary" variant="caption2" sx={{ mt: 2, textAlign: 'center' }}>{description}</Typography>
                }


                <Button className={`text-white! mt-6! w-full ${btnClassName}`} variant="contained" onClick={onClick}>
                    <Typography variant="button" >
                        {btn_title}
                    </Typography>
                </Button>
            </Stack>

        </Stack>
    )
}