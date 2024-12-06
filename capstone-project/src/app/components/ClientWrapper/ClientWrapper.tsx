'use client';

import { ClerkProvider, SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";

interface ClientWrapperProps {
  children: React.ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  return (
    <ClerkProvider>
      <div className="min-h-screen">
        <SignedOut>
          <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-400 px-6 dark:from-gray-800 dark:to-gray-900">
            <div className="grid w-full max-w-5xl grid-cols-1 gap-6 rounded-lg bg-white shadow-2xl dark:bg-gray-800 md:grid-cols-2">
              <div className="flex flex-col justify-center px-8 py-12 md:py-16">
                <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl dark:text-white">
                  Welcome to <span className="text-blue-600 dark:text-blue-400">The Kanban App</span>
                </h1>
                <p className="mt-6 text-2xl font-bold text-blue-700 md:text-3xl dark:text-blue-400 animate-pulse">
                  Organize your tasks and projects effortlessly.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center px-8 py-12 bg-blue-50 dark:bg-gray-700">
                <div className="w-full max-w-sm rounded-md bg-white p-8 shadow-md dark:bg-gray-800">
                  <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                    "Welcome aboard! We’re excited to have you join our community and get ready to explore and achieve amazing things!"
                  </p>
                  <SignInButton>
                    <button className="mt-8 w-full rounded-lg bg-blue-600 px-4 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600">
                      Sign Up
                    </button>
                  </SignInButton>
                  <SignInButton>
                    <button className="mt-8 w-full rounded-lg bg-blue-600 px-4 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600">
                      Sign In
                    </button>
                  </SignInButton>
                </div>
              </div>
            </div>
          </div>
        </SignedOut>

        <SignedIn>
          <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
            <div className="flex items-center justify-between w-full px-6 py-4 bg-white shadow-md dark:bg-gray-800">
              <h1 className="text-lg font-semibold text-gray-800 dark:text-white">The Kanban App</h1>
              <UserButton />
            </div>
            <main className="flex-grow p-8">{children}</main>
          </div>
        </SignedIn>
      </div>
    </ClerkProvider>
  );
}