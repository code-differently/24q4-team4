'use client';

import { ClerkProvider, SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";

interface ClientWrapperProps {
  children: React.ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  return (
    <ClerkProvider>
      {/* Full-screen container */}
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-400 via-blue-500 to-indigo-700">
        {/* Animated Gradient and Twinkling Stars */}
        <div className="absolute inset-0 z-0 animate-gradient-flow">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-blue-500 to-indigo-700 opacity-90"></div>
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-1 h-1 bg-white rounded-full opacity-50 animate-twinkle`}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Floating Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-24 h-24 bg-purple-500 rounded-full opacity-50 animate-orb absolute top-20 left-10"></div>
          <div className="w-32 h-32 bg-blue-400 rounded-full opacity-40 animate-orb absolute bottom-16 right-24"></div>
          <div className="w-16 h-16 bg-pink-400 rounded-full opacity-30 animate-orb absolute top-40 right-1/4"></div>
        </div>

        <SignedOut>
          <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
            <div className="grid w-full max-w-5xl grid-cols-1 gap-6 rounded-lg bg-white shadow-2xl dark:bg-gray-800 md:grid-cols-2">
              {/* Content Section */}
              <div className="flex flex-col justify-center px-8 py-12 md:py-16 text-center md:text-left">
                <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
                  Welcome to <span className="text-blue-600 dark:text-blue-400">The Kanban App</span>
                </h1>
                <p className="mt-6 text-3xl font-bold text-blue-700 dark:text-blue-400">
                  Organize your tasks and projects effortlessly.
                </p>
              </div>
              {/* Sign-In Box */}
              <div className="flex flex-col items-center justify-center px-8 py-12 bg-blue-50 dark:bg-gray-700 rounded-lg shadow-lg">
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