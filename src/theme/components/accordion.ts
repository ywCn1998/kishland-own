// AccordionComponents.ts
import { Components, Theme } from "@mui/material/styles";

const AccordionComponents: Components<Theme> = {
  MuiAccordion: {
    styleOverrides: {
      root: {
        borderRadius: "16px",
        border: "1px solid #e2e8f0", 
        backgroundColor: "#fff",
        marginBottom: "8px",
        boxShadow: "none", 
        "&:before": {
          display: "none", // حذف خط بالا در MUI Accordion
        },
      },
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        minHeight: 48,
        "&.Mui-expanded": {
          minHeight: 48,
        },
      },
      content: {
        margin: "8px 0",
        "&.Mui-expanded": {
          margin: "8px 0",
        },
      },
    },
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: {
        padding: "16px",
      },
    },
  },
};

export default AccordionComponents;
