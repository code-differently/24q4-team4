'use client';

import {
  ClerkProvider,
  SignedOut,
  SignInButton,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";

interface ClientWrapperProps {
  children: React.ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  return (
    <ClerkProvider>
      <div className="min-h-screen">
        {/* Signed Out View */}
        <SignedOut>
          <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-teal-500 via-blue-600 to-purple-600 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 -z-10">
              {/* Floating Orbs */}
              <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 opacity-30 blur-3xl animate-move-1"></div>
              <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-40 blur-2xl animate-move-2"></div>
              {/* Pulsating Ring */}
              <div className="absolute inset-0 mx-auto h-[500px] w-[500px] rounded-full border-4 border-dashed border-teal-400 opacity-30 animate-pulse-ring"></div>
            </div>

            {/* Sign-In Card */}
            <div className="relative z-10 max-w-md rounded-xl bg-white shadow-2xl dark:bg-gray-900 p-8">
              <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
                Welcome to <span className="text-teal-500 dark:text-teal-400">The Kanban App</span>
              </h1>
              <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
                Your productivity journey starts here.
              </p>

              <div className="mt-8 flex flex-col space-y-4">
                <SignInButton>
                  <button className="w-full rounded-lg bg-teal-500 px-6 py-3 text-lg font-semibold text-white shadow-md transition-transform transform hover:scale-105 hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-400">
                    Sign Up
                  </button>
                </SignInButton>
                <SignInButton>
                  <button className="w-full rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-400">
                    Sign In
                  </button>
                </SignInButton>
              </div>
            </div>
          </div>
        </SignedOut>

        {/* Signed In View */}
        <SignedIn>
          <div className="relative flex flex-col min-h-screen bg-gradient-to-br from-teal-500 via-blue-600 to-teal-500 dark:from-gray-900 dark:via-gray-800 dark:to-purple-800 overflow-hidden">
            {/* Animated Background for Light Mode */}
            <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-teal-500 via-blue-600 to-purple-600 dark:bg-none"></div>

            {/* Header */}
            <header className="flex items-center justify-between px-10 py-5 bg-gradient-to-r from-teal-600 to-blue-700 shadow-lg dark:from-purple-600 dark:to-indigo-800">
              <h1 className="text-3xl font-extrabold text-white">The Kanban App</h1>
              <UserButton />
            </header>

            {/* Main Content */}
            <main className="flex-grow flex flex-col items-center justify-center p-8">
              <div className="w-full max-w-2xl p-10 bg-white rounded-2xl shadow-xl dark:bg-gray-800">
                {/* Welcome Message */}
                <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
                  Welcome to <span className="text-teal-500 dark:text-teal-400 ">The Kanban App</span>
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                  Ready to build your first Kanban board? Start organizing your tasks and projects with ease!
                </p>

                {/* Create Kanban Board Form */}
                <form className="mt-8 flex flex-col space-y-6">
                  <label htmlFor="board-name" className="block text-xl font-medium text-gray-700 dark:text-gray-300">
                    Name Your Board
                  </label>
                  <input
                    id="board-name"
                    type="text"
                    placeholder="e.g., My First Board"
                    className="w-full rounded-lg border-2 border-gray-300 p-4 text-gray-800 shadow-sm focus:ring-4 focus:ring-teal-400 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-gradient-to-r from-teal-500 to-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-lg transition-all transform hover:scale-105 hover:from-teal-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-500"
                  >
                    Create Kanban Board
                  </button>
                </form>
              </div>
            </main>
          </div>
        </SignedIn>
      </div>
    </ClerkProvider>
  );
}