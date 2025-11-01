import { Stack } from "@mui/material";
import { SuggestionsCard } from "./card/suggestionsCard";

export default function SuggestHotels() {
    return (
        <Stack spacing={3}>
            <SuggestionsCard />
            <SuggestionsCard />
        </Stack>
    )
}