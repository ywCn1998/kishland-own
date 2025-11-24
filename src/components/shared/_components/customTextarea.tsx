// LiteRichEditor.tsx  (unchanged)
"use client";

import {
  Paper, Stack, IconButton, Select, MenuItem, Divider, Box, Typography,
} from "@mui/material";
import {
  FormatBold, FormatItalic, FormatUnderlined,
  FormatAlignRight, FormatAlignCenter, FormatAlignLeft,
  FormatListBulleted, FormatListNumbered, Notes,
} from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";

export type LiteRichEditorProps = {
  value?: string;
  defaultHtml?: string;
  onChange?: (html: string) => void;
  height?: number | string;
  label?: string;
};

export default function LiteRichEditor({
  value,
  defaultHtml,
  onChange,
  height = 240,
  label = "پاسخ به تیکت",
}: LiteRichEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState<"small" | "normal" | "large">("normal");

  useEffect(() => {
    if (editorRef.current && defaultHtml && !value) {
      editorRef.current.innerHTML = defaultHtml;
    }
  }, [defaultHtml, value]);

  useEffect(() => {
    if (editorRef.current && value !== undefined && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value;
    }
  }, [value]);

  const emitChange = () => {
    if (onChange && editorRef.current) onChange(editorRef.current.innerHTML);
  };

  const cmd = (command: string, val?: string) => {
    document.execCommand(command, false, val);
    emitChange();
  };

  const setSize = (s: "small" | "normal" | "large") => {
    setFontSize(s);
    const map = { small: "2", normal: "3", large: "4" } as const;
    cmd("fontSize", map[s]);
  };

  return (
    <>
      <Typography variant="caption" color="text.secondary" sx={{ mb: .4 }}>
        {label}
      </Typography>

      <Paper variant="outlined" sx={{ borderRadius: 1, overflow: "hidden", direction: "rtl" }}>
        <Stack direction="row" alignItems="center" spacing={0.5}
          sx={{ px: 1, py: 1, bgcolor: "#f5f8fc", borderBottom: 1, borderColor: "divider" }}>
          <IconButton size="small" onClick={() => cmd("bold")}><FormatBold fontSize="small" /></IconButton>
          <IconButton size="small" onClick={() => cmd("italic")}><FormatItalic fontSize="small" /></IconButton>
          <IconButton size="small" onClick={() => cmd("underline")}><FormatUnderlined fontSize="small" /></IconButton>

          <Select size="small" value={fontSize} onChange={(e) => setSize(e.target.value as any)}
            variant="standard" disableUnderline sx={{ mx: 0.5, fontSize: 14, minWidth: 64 }}>
            <MenuItem className="text-sm!" value="small">کوچک</MenuItem>
            <MenuItem className="text-sm!" value="normal">عادی</MenuItem>
            <MenuItem className="text-sm!" value="large">بزرگ</MenuItem>
          </Select>

          <IconButton size="small" onClick={() => cmd("justifyRight")}><FormatAlignRight fontSize="small" /></IconButton>
          <IconButton size="small" onClick={() => cmd("justifyCenter")}><FormatAlignCenter fontSize="small" /></IconButton>
          <IconButton size="small" onClick={() => cmd("justifyLeft")}><FormatAlignLeft fontSize="small" /></IconButton>

          {/* <IconButton size="small" onClick={() => cmd("insertUnorderedList")}><FormatListBulleted fontSize="small" /></IconButton> */}
          {/* <IconButton size="small" onClick={() => cmd("insertOrderedList")}><FormatListNumbered fontSize="small" /></IconButton> */}

          <Divider orientation="vertical" flexItem sx={{ mx: 0.5 }} />

          <IconButton size="small" onClick={() => cmd("formatBlock", "p")}><Notes fontSize="small" /></IconButton>
        </Stack>

        <Box
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          onInput={emitChange}
          dir="rtl"
          sx={{
            p: 2,
            height,
            overflow: "auto",
            bgcolor: "white",
            outline: "none",
            fontSize: 14,
            lineHeight: 1.9,
          }}
        />
      </Paper>
    </>
  );
}
