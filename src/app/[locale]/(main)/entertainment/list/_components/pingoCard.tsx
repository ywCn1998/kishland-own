import { Box, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";




interface IProps {
    img: string;
    title: string;
    description: string;
    last_price: string;
    new_price: string;
    count_preson: string;
}


export function PingoCard({
    img,
    title,
    description,
    last_price,
    new_price,
    count_preson,
}: IProps) {
    return (
        <Grid size={{ md: 4 }}>
            <Stack
                className="flex flex-col! h-full items-center relative rounded-2xl! overflow-hidden! py-7 px-3 cursor-pointer!"
                sx={{
                    position: 'relative',
                    borderRadius: 4,
                    overflow: 'hidden',
                }}
            >
                {/* Blurred background layer */}
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: `url(${img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(12px)',        // increase blur strength
                        transform: 'scale(1.1)',    // prevent edge gaps
                        zIndex: 0,
                    }}
                />

                {/* Optional dark overlay for better text contrast */}
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(0,0,0,0.35)', // adjust opacity to taste
                        zIndex: 1,
                    }}
                />

                {/* Foreground content */}
                <Stack
                    className="flex flex-col! items-center relative"
                    sx={{ zIndex: 2 }}
                >
                    <img
                        src={img}
                        className="h-[90px] w-[90px] rounded-2xl border-4 border-solid border-[#b2b2b2]"
                    />

                    <Typography variant="subtitle1" className="mt-4! text-white!">
                        {title}
                    </Typography>
                    <Typography className="text-center text-white! mt-3!">
                        {description}
                    </Typography>

                    <Stack className="flex flex-row! gap-2 items-center mt-4!">
                        <Typography color="textDisabled" className="line-through">
                            {last_price}
                        </Typography>
                        <Typography className="text-white!">{count_preson} نفر/</Typography>
                        <Typography variant="subtitle1" className="text-white!">
                            {new_price} تومان
                        </Typography>
                    </Stack>
                <Link href={"/fa/entertainment/reserve"}>
                <Typography variant="button"
                        // color="textDisabled"
                        className="mt-8! text-white!" >
                        مشاهده و رزرو پکیج
                    </Typography>
                </Link>
                    
                </Stack>
            </Stack>

        </Grid>

    )

}
