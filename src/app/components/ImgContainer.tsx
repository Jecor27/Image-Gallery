import type { Photo } from "@/models/images";
import Image from "next/image";

type Props = {
  photo: Photo;
};

export default function ImgContainer({ photo }: Props) {
  return (
    <div className="h-64 bg-gray-200 rounded-xl relative overflow-hidden shadow-md group">
      <Image
        src={photo.src.large}
        alt={photo.alt}
        fill={true}
        placeholder="blur"
        blurDataURL={photo.blurredDataUrl}
        className="object-cover rounded-xl group-hover:opacity-75"
      />
    </div>
  );
}
