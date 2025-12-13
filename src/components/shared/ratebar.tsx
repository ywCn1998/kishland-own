import { Box, Rating, styled, Typography } from "@mui/material";
import StarRoundedIcon from '@mui/icons-material/StarRounded';

const GRAY = '#B8C0D9';
const PEACH_BG = '#FFF3E0'


const ORANGE = '#F79009';     // track + ring

const StyledRating = styled(Rating)(({ theme }) => ({
    direction: 'rtl', // if your page is RTL you can omit this; kept for clarity
    gap: 8,
    '& .MuiRating-icon': {
        position: 'relative',
        width: 28,
        height: 28,
        fontSize: 28,
    },
    // Filled / selected
    '& .MuiRating-iconFilled': {
        color: ORANGE,
        // subtle soft background circle (like the screenshot)
        backgroundColor: PEACH_BG,
        borderRadius: '9999px',
        boxShadow: `0 0 0 2px ${ORANGE}`,
    },
    // Hover color (optional)
    '& .MuiRating-iconHover': {
        color: ORANGE,
    },
    // Empty with a diagonal slash
    '& .MuiRating-iconEmpty': {
        color: GRAY,
        opacity: 1,
    },
    '& .MuiRating-iconEmpty::after': {
        content: '""',
        position: 'absolute',
        inset: 0,
        margin: 'auto',
        width: '70%',
        height: 2,
        backgroundColor: GRAY,
        transform: 'rotate(-25deg)',
        borderRadius: 2,
        opacity: 0.8,
        pointerEvents: 'none',
    },
}));


export function RateBar() {
    return (
        <Box className="w-full flex justify-between items-center gap-4 pt-6">
            {/* Left text (RTL sample) */}
            <StyledRating
                name="custom-rate"
                value={2}
                icon={<StarRoundedIcon fontSize="inherit" />}
                emptyIcon={<StarRoundedIcon fontSize="inherit" />}
                max={5}
                size="large"
                style={{ direction: 'rtl' }}
            />

            <Typography color='textSecondary' variant='body2' >1 از 5</Typography>


        </Box>
    );
}
