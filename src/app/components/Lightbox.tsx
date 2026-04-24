import { useState } from "react";
import LightboxComponent from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface LightboxProps {
  images: string[];
  index: number;
  open: boolean;
  onClose: () => void;
}

export function Lightbox({ images, index, open, onClose }: LightboxProps) {
  return (
    <LightboxComponent
      open={open}
      close={onClose}
      index={index}
      slides={images.map((src) => ({ src }))}
      styles={{
        container: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
        slide: { maxWidth: "1280px", margin: "0 auto" },
      }}
      toolbar={{ style: { padding: "80px" } }}
    />
  );
}

interface UseLightboxReturn {
  openLightbox: (images: string[], index: number) => void;
  lightboxProps: {
    images: string[];
    index: number;
    open: boolean;
    onClose: () => void;
  };
}

export function useLightbox(): UseLightboxReturn {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  const openLightbox = (newImages: string[], newIndex: number) => {
    setImages(newImages);
    setIndex(newIndex);
    setOpen(true);
  };

  const closeLightbox = () => {
    setOpen(false);
  };

  return {
    openLightbox,
    lightboxProps: {
      images,
      index,
      open,
      onClose: closeLightbox,
    },
  };
}