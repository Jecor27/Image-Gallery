import type { Photo } from "@/models/images";
import Image from "next/image";

type Props = {
  photo: Photo;
};

export default function ImgContainer({ photo }: Props) {
  return (
    <div className="h-64 bg-gray-200 rounded-xl relative overflow-hidden">
      <Image
        src={photo.src.large}
        alt={photo.alt}
        fill={true}
        className="object-cover rounded-xl"
      />
    </div>
  );
}
