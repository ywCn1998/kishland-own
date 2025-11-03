"use client";

import { useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
  Stack,
  Button,
  IconButton,
  Typography,
  FormHelperText,
  Tooltip,
  SxProps,
} from "@mui/material";
import { CloudUpload, Close, Download } from "@mui/icons-material";

export default function RHFUploadButton({
  name,
  buttonText = "بارگذاری",
  helperComponenet,
  onDownloadTemplate,
  disableClear,
  disabled,
  showFileName = true,
  maxSizeMB = 512, // ✅ new limit 512MB
  className,
  sx
}: {
  name: string;
  buttonText?: string;
  helperComponenet?: React.JSX.Element;
  onDownloadTemplate?: () => void;
  disableClear?: boolean;
  disabled?: boolean;
  showFileName?: boolean;
  maxSizeMB?: number;
  className?: string;
  sx?: SxProps
}) {
  const { control, setError, clearErrors } = useFormContext();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const ACCEPTED_TYPES = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "application/pdf",
    "application/zip",
    "application/x-zip-compressed",
  ];

  const EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif", ".pdf", ".zip"];

  const openPicker = () => inputRef.current?.click();

  const validateFile = (file: File) => {
    const isValidMime = ACCEPTED_TYPES.includes(file.type);
    const hasValidExt = EXTENSIONS.some((ext) =>
      file.name.toLowerCase().endsWith(ext)
    );

    if (!isValidMime && !hasValidExt) {
      return "فرمت فایل معتبر نیست. فایل‌های مجاز: .jpg, .png, .gif, .jpeg, .pdf, .zip";
    }

    const maxBytes = maxSizeMB * 1024 * 1024;
    if (file.size > maxBytes) {
      return `حجم فایل زیاد است. حداکثر حجم: ${maxSizeMB}MB`;
    }

    return null;
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const file = field.value as File | null;

        const handlePick = (e: React.ChangeEvent<HTMLInputElement>) => {
          const picked = e.target.files?.[0];
          if (!picked) return;
          const err = validateFile(picked);
          if (err) {
            setError(name as any, { type: "validate", message: err });
            return;
          }
          clearErrors(name as any);
          field.onChange(picked);
        };

        const clearFile = () => {
          if (inputRef.current) inputRef.current.value = "";
          field.onChange(null);
          clearErrors(name as any);
        };

        return (
          <Stack gap={0.75}>
            <input
              ref={inputRef}
              type="file"
              accept=".jpg,.jpeg,.png,.gif,.pdf,.zip"
              style={{ display: "none" }}
              onChange={handlePick}
              disabled={disabled}
            />

            <Stack direction="row" alignItems="center" gap={1.25}>
              <Button
                variant="outlined"
                startIcon={<CloudUpload />}
                onClick={openPicker}
                disabled={disabled}
                className={className}
                sx={{...sx}}
              >
                {buttonText}
              </Button>

              {onDownloadTemplate && (
                <Tooltip title="دانلود قالب">
                  <span>
                    <Button
                      variant="text"
                      startIcon={<Download />}
                      onClick={onDownloadTemplate}
                      disabled={disabled}
                    >
                      دانلود قالب
                    </Button>
                  </span>
                </Tooltip>
              )}

              {!disableClear && file && (
                <Tooltip title="حذف فایل">
                  <span>
                    <IconButton onClick={clearFile} disabled={disabled}>
                      <Close fontSize="small" />
                    </IconButton>
                  </span>
                </Tooltip>
              )}
            </Stack>

            {showFileName && file && (
              <Typography variant="caption" color="text.secondary">
                {file.name}
              </Typography>
            )}

            {!!error?.message && (
              <FormHelperText error>{error.message}</FormHelperText>
            )}

            {helperComponenet}
          </Stack>
        );
      }}
    />
  );
}
