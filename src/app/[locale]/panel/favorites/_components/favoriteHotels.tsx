import FavoriteHotelCard from "./card/favoriteHotelCard";
import { Grid } from "@mui/material";

export default function FavoriteHotels() {
    const items = Array.from({ length: 9 });

    return (
        <Grid container spacing={2.5}>
            {items.map((_, index) => (
                <Grid key={index} size={4}>
                    <FavoriteHotelCard
                        isTicketTemplate={index % 3 === 1}
                    />
                </Grid>
            ))}
        </Grid>
    );

}