"use client";

import { useClerk, useUser } from "@clerk/nextjs";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { useSidebar } from "../ui/sidebar";
import { ProfileImage } from "./ProfileImage";

interface ProfileImageInteractiveProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
}

export function ProfileImageInteractive({
  imageUrl,
  firstName,
  lastName,
}: ProfileImageInteractiveProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { toggleSidebar, open } = useSidebar();
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();

  return (
    <button
      type="button"
      onClick={() => (isSignedIn ? toggleSidebar() : openSignIn())}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="block w-full cursor-pointer"
      aria-label="Toggle AI Chat Sidebar"
    >
      <ProfileImage imageUrl={imageUrl} firstName={firstName} lastName={lastName}>
        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-center space-y-3">
            {open ? (
              <X className="w-12 h-12 text-white mx-auto" />
            ) : (
              <MessageCircle className="w-12 h-12 text-white mx-auto" />
            )}
            <div className="text-white text-xl font-semibold">
              {open ? "Close Chat" : "Chat with AI Twin"}
            </div>
            <div className="text-white/80 text-sm">
              {open ? "Click to close chat" : "Click to open chat"}
            </div>
          </div>
        </div>
      </ProfileImage>
    </button>
  );
}