import { Accordion, AccordionDetails, AccordionSummary, Box, Checkbox, FormControlLabel, Stack, Typography } from "@mui/material";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Check } from "@mui/icons-material";




interface IProps {
    title: string;
    id: string;
    options: { id: number, title: string, count: number }[];
    selectedFields?: { id: number, title: string }[];
    onSelectedFields?: (val: { id: number, title: string }) => void;
}



export default function CollapseSelect({
    title,
    id,
    options
}: IProps) {

    return (

        <Accordion
            disableGutters
            elevation={0}
            square
            sx={{
                py: 1,
                backgroundColor: 'transparent',
                boxShadow: 'none',
                border: 'none',
                '&:before': {
                    display: 'none', // remove default divider line
                },
            }}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${id}-content`}
                id={`${id}-header`}
                sx={{
                    borderBottom: 1,
                    borderBottomColor: '#E1E6F0'
                }}
            >
                <Typography variant="body2" component="span">{title}</Typography>
            </AccordionSummary>

            <AccordionDetails className="p-0!">
                <Stack
                    className="w-full! flex flex-col! gap-4 pt-4"
                >


                    {options.map((item) => (
                        <FormControlLabel
                            key={item.id}
                            control={
                                <Checkbox
                                    checked={false}
                                    // onChange={() => handleToggle(item.id)}
                                    disableRipple
                                    color="default"
                                    sx={{ p: 0, pr: 2 }}
                                    icon={
                                        <Box
                                            sx={{
                                                width: 32,
                                                height: 32,
                                                borderRadius: '8px',
                                                border: '2px solid #E1E6F0',
                                                backgroundColor: 'transparent',
                                                boxSizing: 'border-box',
                                            }}
                                        />
                                    }
                                    checkedIcon={
                                        <Box
                                            sx={{
                                                width: 32,
                                                height: 32,
                                                borderRadius: '8px',
                                                border: '2px solid',
                                                borderColor: 'primary.main',
                                                backgroundColor: 'primary.main',
                                                display: 'grid',
                                                placeItems: 'center',
                                                boxSizing: 'border-box',
                                            }}
                                        >
                                            <Check sx={{ fontSize: 20, color: '#fff' }} />
                                        </Box>
                                    }
                                />
                            }
                            sx={{
                                width: '100%',
                                m: 0,
                                display: 'flex',
                                alignItems: 'center',
                                // make the label span stretch
                                '& .MuiFormControlLabel-label': {
                                    flex: 1,
                                    width: '100%',
                                },
                            }}
                            label={
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    sx={{ width: '100%' }}
                                >
                                    <Typography variant="caption2">{item.title}</Typography>
                                    <Typography variant="caption2" color="text.secondary">
                                        ({item.count})
                                    </Typography>
                                </Stack>
                            }
                        />
                    ))}


                </Stack>
            </AccordionDetails>
        </Accordion>
    )
}