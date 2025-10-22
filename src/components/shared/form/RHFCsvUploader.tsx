import { useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
    Stack,
    TextField,
    TextFieldProps,
    IconButton,
    InputAdornment,
    Tooltip,
    Button,
} from "@mui/material";
import { CloudUpload, Close, Download } from "@mui/icons-material";

export interface IProps {
    name: string;
    label?: string;
    helperComponenet?: React.JSX.Element; // (kept your original spelling)
    /** Accept pattern for input; defaults to CSV only */
    accept?: string; // e.g. "text/csv,.csv"
    /** Max file size in MB (default: 5) */
    maxSizeMB?: number;
    /** Optional: show a download button (e.g. to download a CSV template) */
    onDownloadTemplate?: () => void;
    /** Optional: disable the clear button */
    disableClear?: boolean;
}

const RHFFileCsv = ({
    name,
    label,
    helperComponenet,
    accept = "text/csv,.csv",
    maxSizeMB = 5,
    onDownloadTemplate,
    disableClear,
    placeholder,
    disabled,
    autoFocus,
    ...others
}: IProps & Omit<TextFieldProps, "name" | "onChange" | "type" | "value">) => {
    const { control, setError, clearErrors } = useFormContext();
    const inputRef = useRef<HTMLInputElement | null>(null);

    const openPicker = () => inputRef.current?.click();

    const validateCsv = (file: File) => {
        const isCsvMime =
            file.type === "text/csv" ||
            file.type === "application/vnd.ms-excel" || // some browsers use this for .csv
            file.name.toLowerCase().endsWith(".csv");
        if (!isCsvMime) return "Only .csv files are allowed.";
        const maxBytes = maxSizeMB * 1024 * 1024;
        if (file.size > maxBytes) return `File is too large. Max ${maxSizeMB} MB.`;
        return null;
    };

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => {
                // field.value expected as File | null | undefined
                const file: File | null | undefined = field.value as any;

                const handlePick = (e: React.ChangeEvent<HTMLInputElement>) => {
                    const picked = e.target.files?.[0];
                    if (!picked) return;
                    const err = validateCsv(picked);
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
                            label={label}
                            placeholder={placeholder ?? "Choose a .csv file"}
                            value={file?.name ?? ""}
                            onChange={() => { }}
                            onClick={openPicker}
                            inputProps={{ readOnly: true }}
                            error={!!error?.message}
                            helperText={error?.message || ""}
                            disabled={disabled}
                            autoFocus={autoFocus}
                            sx={{ cursor: disabled ? "not-allowed" : "pointer" }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        {onDownloadTemplate && (
                                            <Tooltip title="Download CSV template">
                                                <span>
                                                    <IconButton
                                                        edge="end"
                                                        onClick={onDownloadTemplate}
                                                        disabled={disabled}
                                                        aria-label="download-template"
                                                    >
                                                        <Download />
                                                    </IconButton>
                                                </span>
                                            </Tooltip>
                                        )}

                                        {!disableClear && file && (
                                            <Tooltip title="Clear">
                                                <span>
                                                    <IconButton
                                                        edge="end"
                                                        onClick={clearFile}
                                                        disabled={disabled}
                                                        aria-label="clear-file"
                                                    >
                                                        <Close />
                                                    </IconButton>
                                                </span>
                                            </Tooltip>
                                        )}

                                        <Tooltip title="Choose CSV">
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

                        {helperComponenet}
                    </Stack>
                );
            }}
        />
    );
};

export default RHFFileCsv;
