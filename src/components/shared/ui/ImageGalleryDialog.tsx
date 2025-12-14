"use client"
import * as React from "react";
import { Dialog, DialogContent, IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface ImageGalleryDialogProps {
  open: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;                    // galleryIndex
  onChangeIndex: (index: number) => void;  // setGalleryIndex
  productName?: string;                    // mockProduct.name (optional)
}

const ImageGalleryDialog: React.FC<ImageGalleryDialogProps> = ({
  open,
  onClose,
  images,
  currentIndex,
  onChangeIndex,
  productName,
}) => {
  const altBase = productName || "Product image";

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="lg">
      <DialogContent className="relative flex flex-col gap-4 bg-white/60 p-4 md:p-6">
        <IconButton
          onClick={onClose}
          className="absolute w-fit! top-4 z-10 rounded-full bg-black/60 text-white hover:bg-black/80"
        >
          <CloseIcon />
        </IconButton>

        {/* Main image */}
        <Box className="flex items-center justify-center">
          <img
            src={images[currentIndex]}
            alt={`${altBase} gallery ${currentIndex + 1}`}
            className="max-h-[70vh] w-auto rounded-xl object-contain"
          />
        </Box>

        {/* Thumbnails */}
        <Box className="flex items-center justify-center">
          <Box className="flex max-w-full gap-2 overflow-x-auto rounded-xl p-2">
            {images.map((src, index) => (
              <button
                type="button"
                key={`${src}-gallery-${index}`}
                onClick={() => onChangeIndex(index)}
                className={`h-[72px] w-[96px] flex-shrink-0 overflow-hidden rounded-md border ${currentIndex === index
                  ? "border-primary-main"
                  : "border-transparent hover:border-primary-main"
                  }`}
              >
                <img
                  src={src}
                  alt={`${altBase} gallery thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ImageGalleryDialog;
