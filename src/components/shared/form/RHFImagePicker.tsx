import * as React from "react";
import { useFormContext, useController } from "react-hook-form";
import {
  Stack, TextField, TextFieldProps, InputAdornment,
  IconButton, Button, Tooltip, Box
} from "@mui/material";
import { CloudUpload, Close } from "@mui/icons-material";

export interface IProps {
  name: string;
  label?: string;
  helperComponenet?: React.JSX.Element;
}

type Props = IProps &
  Omit<TextFieldProps, "name" | "value" | "onChange" | "onBlur" | "inputRef" | "type"> & {
    accept?: string;     // default: "image/*"
    maxSizeMB?: number;  // optional size limit
  };

export default function RHFImagePicker({
  name,
  label,
  helperComponenet,
  placeholder = "Choose an image",
  disabled,
  autoFocus,
  accept = "image/*",
  maxSizeMB,
  ...others
}: Props) {
  const { control, setError, clearErrors } = useFormContext();
  const { field, fieldState } = useController({ name, control });
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const file = field.value as File | null | undefined;

  // Create/revoke object URL based on current file value
  const previewUrl = React.useMemo(() => {
    return file ? URL.createObjectURL(file) : "";
  }, [file]);

  React.useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const openPicker = () => inputRef.current?.click();

  const handlePick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const picked = e.target.files?.[0];
    if (!picked) return;

    if (maxSizeMB && picked.size > maxSizeMB * 1024 * 1024) {
      setError(name as any, {
        type: "validate",
        message: `File is too large. Max ${maxSizeMB} MB.`,
      });
      e.currentTarget.value = "";
      return;
    }

    clearErrors(name as any);
    field.onChange(picked);

    // allow picking the same file again
    e.currentTarget.value = "";
  };

  const clearFile = () => {
    field.onChange(null);           // update RHF state
    clearErrors(name as any);       // clear errors
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <Stack gap={2} sx={{ width: "100%" }}>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        style={{ display: "none" }}
        onChange={handlePick}
        disabled={disabled}
      />

      <TextField
        {...others}
        value={file?.name ?? ""}
        onChange={() => {}}
        onClick={openPicker}
        label={label}
        placeholder={placeholder}
        error={!!fieldState.error}
        helperText={fieldState.error?.message || ""}
        disabled={disabled}
        autoFocus={autoFocus}
        inputProps={{ readOnly: true }}
        sx={{ cursor: disabled ? "not-allowed" : "pointer" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {file && (
                <Tooltip title="Clear">
                  <span>
                    <IconButton onClick={clearFile} edge="end" disabled={disabled}>
                      <Close />
                    </IconButton>
                  </span>
                </Tooltip>
              )}
              <Tooltip title="Upload image">
                <span>
                  <Button
                    onClick={openPicker}
                    startIcon={<CloudUpload />}
                    size="small"
                    disabled={disabled}
                    sx={{ ml: 1, whiteSpace: "nowrap" }}
                  >
                    بارگذاری
                  </Button>
                </span>
              </Tooltip>
            </InputAdornment>
          ),
        }}
      />

      {previewUrl && (
        <Box
          component="img"
          src={previewUrl}
          alt="Preview"
          sx={{
            width: "100%",
            maxHeight: 260,
            objectFit: "contain",
            borderRadius: 1,
            border: (t) => `1px solid ${t.palette.divider}`,
          }}
        />
      )}

      {helperComponenet}
    </Stack>
  );
}
