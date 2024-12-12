"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";

interface ClientWrapperProps {
  children: React.ReactNode;
}

export default function MainContent({ children }: ClientWrapperProps) {
  return (
    <SignedIn>
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <div className="flex items-center justify-between w-full px-6 py-4 bg-white shadow-md">
          <div className="text-lg font-semibold text-gray-800">
            The Kanban App
          </div>
          <UserButton />
        </div>

        {/* Main Content */}
        <main className="flex-grow p-8">{children}</main>
      </div>
    </SignedIn>
  );
}
