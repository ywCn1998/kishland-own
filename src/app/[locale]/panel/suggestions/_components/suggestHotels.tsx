import { Stack } from "@mui/material";
import { SuggestionsCard } from "./card/suggestionsCard";
import { AirCard } from "@/app/[locale]/entertainment/list/_components/blitType/aircard";

export default function SuggestHotels() {
    return (
        <Stack sx={{ backgroundColor: { xs: "background.paper", md: "white" } }}>
            <Stack className="hidden! md:block!" spacing={3}>
                <SuggestionsCard />
                <SuggestionsCard />
            </Stack>
            <Stack className="md:hidden! p-4!" spacing={2}>
                <AirCard onClick={() => { }} />
                <AirCard onClick={() => { }} />
            </Stack>
        </Stack>
    )
}
