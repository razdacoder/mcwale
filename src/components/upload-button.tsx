"use client";
import { Upload } from "lucide-react";
import { CldUploadWidget } from "next-cloudinary";

type Props = {
  handleUpload: (result: any) => void;
};

export default function UploadButton({ handleUpload }: Props) {
  return (
    <CldUploadWidget
      onSuccess={handleUpload}
      uploadPreset="mcwale_cloudinary_app"
      options={{
        maxFiles: 1,
      }}
    >
      {({ open, widget }) => {
        return (
          <button
            type="button"
            onClick={() => open?.()}
            className="flex aspect-square w-[84px] items-center justify-center rounded-md border border-dashed"
          >
            <Upload className="h-4 w-4 text-muted-foreground" />
            <span className="sr-only">Upload</span>
          </button>
        );
      }}
    </CldUploadWidget>
  );
}
