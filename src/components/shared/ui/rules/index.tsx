import { Stack, Typography } from "@mui/material";
import TextIcon from "../../textIcon";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { defaultRules, RuleItem } from "./rules";

export type { RuleItem };

interface RulesOfHotelProps {
    rules?: RuleItem[];
}

export default function RulesOfHotel({ rules = defaultRules }: RulesOfHotelProps) {
    return (
        <Stack className="flex! flex-col! gap-4! md:gap-8! mt-5!">
            {rules.map((rule, index) => (
                <Stack key={index} className="flex! flex-col! gap-2!">
                    <TextIcon 
                        className="text-black! font-semibold!" 
                        startIcon={<PlayArrowIcon sx={{ transform: "rotate(180deg)", color: "secondary.main" }} />} 
                        text={rule.title} 
                    />
                    <Stack className="flex flex-col! gap-2! pr-7!">
                        {rule.descriptions.map((description, descIndex) => (
                            <Typography key={descIndex} className="text-sm! md:text-base! text-slate-400! md:text-black!">
                                {description}
                            </Typography>
                        ))}
                    </Stack>
                </Stack>
            ))}
        </Stack>
    )
}
