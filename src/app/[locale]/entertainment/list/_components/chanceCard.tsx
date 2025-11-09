import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";



interface IProp {
    title: string;
    img: string;
    onClick: () => void;
    btn_title: string;
    description?: string;
    title_font?: string;
    className?: string;
}


export default function ChanceCard({
    title,
    img,
    onClick,
    description,
    btn_title,
    title_font = '20px',
    className,
}: IProp) {
    return (
        <Stack
            className={`flex flex-col! items-center bg-[#F0F7FF] rounded-4xl mt-8 p-6 ${className}`}
        >
            <Image
                src={img}
                alt={img}
                height={60}
                width={80}
            />


            <Typography variant="h4" sx={{ textAlign: 'center', fontSize: title_font, mt: 3 }}>{title}</Typography>

            {description &&
                <Typography color="textSecondary" variant="caption2" sx={{ mt: 2, textAlign: 'center' }}>{description}</Typography>
            }


            <Button className="text-white! mt-6! w-full" variant="contained" onClick={onClick}>
                <Typography variant="button">
                    {btn_title}
                </Typography>
            </Button>


        </Stack>
    )
}