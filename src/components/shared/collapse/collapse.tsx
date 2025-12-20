"use client"
import { ReactNode, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Fade,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface CustomAccordionProps {
  title: string | ReactNode;
  children: ReactNode;
  defaultExpanded?: boolean;
  titleClass?: string
}

const CustomAccordion: React.FC<CustomAccordionProps> = ({
  title,
  children,
  defaultExpanded = false,
  titleClass
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <Accordion
      expanded={expanded}
      onChange={(_, isExpanded) => setExpanded(isExpanded)}
      disableGutters
      elevation={0}
      sx={{
        boxShadow: "none",
        border: "none",
        borderRadius: 0,
        "&:before": { display: "none" },
        backgroundColor: "transparent",
      }}
    >
      {/* Header */}
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel-content"
        id="panel-header"
        sx={{
          borderBottom: expanded ? "1px solid #e0e0e0" : "", // static border under header
          mb: 0,
        }}
      >
        <Typography component="span" variant="subtitle1" className={titleClass} fontWeight={500}>
          {title}
        </Typography>
      </AccordionSummary>

      {/* Content */}
      <AccordionDetails sx={{ pt: 1, px: 0 }}>
        <Fade in={expanded} timeout={300}>
          <Stack>{children}</Stack>
        </Fade>
      </AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordion;
