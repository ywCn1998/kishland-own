import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Steps({ steps }: { steps: any[] }) {
    const [activeStep, setActiveStep] = useState<number>(2);
    return (
        <Stack
            alignItems="center"
            sx={{
                p: { lg: 3, xs: 0 },
                alignItems: "center",
                borderRadius: { xs: 0, lg: 2 },
                bgcolor: "#fff",
                border: { xs: "none", lg: "1px solid #EAEAEA" },
                borderBottom: { xs: "1px solid #EAEAEA" },
                width: { lg: "100%", xs: "100dvw" },
                overflow: "hidden",
                mb: 4,
                mt: { xs: "115px", lg: 0 },
                display: {
                    xs: activeStep === 0 ? "none" : "flex",
                    lg: "flex",
                },
            }}
            dir="rtl"
            spacing={3}
            className="xs-fullwidth "
        >
            <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                sx={{
                    width: "100%",
                    overflowX: { xs: "auto", lg: "visible" },
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": { display: "none" },
                    px: { xs: 2, lg: 0 },
                    py: { xs: 1, lg: 0 },
                }}
            >
                {steps.map((step, index) => (
                    <React.Fragment key={step.title}>
                        <Stack
                            alignItems="center"
                            spacing={1}
                            sx={{
                                minWidth: { xs: "fit-content", lg: 80 },
                                flexShrink: 0,
                                flexDirection: { xs: "row", lg: "column" },
                            }}
                        >
                            <Box>
                                {index < activeStep
                                    ? step.iconPast
                                    : index === activeStep
                                        ? step.iconActive
                                        : step.iconFuture}
                            </Box>

                            <Typography
                                sx={{
                                    fontWeight: index === activeStep ? 500 : 400,
                                    color:
                                        index < activeStep
                                            ? "#000E08"
                                            : index === activeStep
                                                ? "#FF8A00"
                                                : "text.disabled",
                                    whiteSpace: "nowrap",
                                }}
                                className="text-xs! lg:text-sm!"
                            >
                                {step.title}
                            </Typography>

                            <Typography
                                variant="caption"
                                sx={{
                                    color: "#7E8AAB",
                                    textAlign: "center",
                                    whiteSpace: "nowrap",
                                    display: { xs: "none", lg: "block" },
                                }}
                            >
                                {step.description}
                            </Typography>
                        </Stack>


                        {index < steps.length - 1 && (
                            <Box
                                sx={{
                                    flex: 1,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Box
                                    sx={{
                                        display: { xs: "none", lg: "block" },
                                        flex: 1,
                                        borderTop: `2px dashed ${index < activeStep ? "#FF8A00" : "#E6E6E6"
                                            }`,
                                        alignSelf: "center",
                                    }}
                                />

                                <ArrowBackIcon
                                    sx={{
                                        display: { xs: "block", lg: "none" },
                                        fontSize: "0.9rem",
                                        color: index < activeStep ? "#FF8A00" : "#E6E6E6",
                                    }}
                                />
                            </Box>
                        )}
                    </React.Fragment>
                ))}
            </Stack>
        </Stack>
    )
}