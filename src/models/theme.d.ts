// src/types/theme.d.ts (ensure this path is included by tsconfig)
import * as React from 'react';
import '@mui/material/styles';
import '@mui/system';

// --- Shape augmentation (MUI's Shape lives in @mui/system; styles re-exports it) ---
declare module '@mui/system' {
  interface Shape {
    borderRadius: number | string;
    borderColor: string;
  }
  interface ShapeOptions {
    borderRadius?: number | string;
    borderColor?: string;
  }
}

declare module '@mui/material/styles' {
  // re-augment here too, in case your code imports Shape via styles re-export
  interface Shape {
    borderRadius: number | string;
    borderColor: string;
  }
  interface ShapeOptions {
    borderRadius?: number | string;
    borderColor?: string;
  }

  // ---- Your custom Typography variants ----
  interface TypographyVariants {
    title: React.CSSProperties;
    sub_title: React.CSSProperties;
    caption2: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    title?: React.CSSProperties;
    sub_title?: React.CSSProperties;
    caption2: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true;
    sub_title: true;
    caption2: true;
  }
}

export { };
