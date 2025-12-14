import CityCenterLoactions from "@/app/[locale]/tour/hotel-location/_components/cityCenterLocations";
import CategoryTabs from "@/components/shared/ui/commonQuestions/_components/CategoryTabs";
import GoldenText from "@/components/shared/ui/GoldenText";
import { Stack, Typography } from "@mui/material";

export default function LocationSections() {
    return (
        <Stack spacing={2}>
            <Stack className="bg-[#F5F7FA]! rounded-2xl! md:py-10! py-7!">

                <Stack
                    className="flex! flex-col! justify-between! items-center! md:gap-10! gap-7! md:mb-10! mb-7!"
                >
                    <Typography className="text-slate-400! md:text-lg! text-base!">
                        هر جایی که بخوای بری اینجاهست
                    </Typography>
                    <GoldenText
                        textClass="text-2xl! md:text-5xl! font-bold!"
                        text={"مناطق مختلف کیش"}
                        bgColor="orange"
                        bgColorSx={{ left: -70, bottom: -10 }}
                        bgWidth="130% "
                    />
                </Stack>
                <CategoryTabs />
            </Stack>

            <Stack>
                <CityCenterLoactions isKishMap={true} />
            </Stack>
        </Stack>
    )
}
