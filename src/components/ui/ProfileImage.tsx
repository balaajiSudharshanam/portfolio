import Image from "next/image";
import { ReactNode } from "react";

interface ProfileImageProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  children?: ReactNode;
}

export function ProfileImage({ imageUrl, firstName, lastName, children }: ProfileImageProps) {
  return (
    <div className="relative aspect-square rounded-2xl overflow-hidden border-4 border-primary/20 w-full group">
      <Image
        src={imageUrl}
        alt={`${firstName} ${lastName}`}
        fill
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Online Badge */}
      <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
        <div className="relative">
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
          <div className="absolute inset-0 w-2.5 h-2.5 bg-green-500 rounded-full animate-ping" />
        </div>
        <span className="text-xs font-medium text-white">Online</span>
      </div>

      {children}
    </div>
  );
}