'use client';

import { SignedOut, SignInButton } from "@clerk/nextjs";

export default function SignIn() {
  return (
    <SignedOut>
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-200 to-green-500 px-6 dark:from-gray-800 dark:to-gray-900">
        <div className="grid w-full max-w-5xl grid-cols-1 rounded-lg bg-white shadow-2xl dark:bg-gray-800 md:grid-cols-2">
          <div className="flex flex-col justify-center px-8 py-12 md:py-16">
            <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl dark:text-white">
              Welcome to <span className="text-blue-600 dark:text-blue-400">The Kanban App</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700 md:text-xl dark:text-gray-300">
              Organize your tasks and projects effortlessly. Sign in or create a new account to get started.
            </p>
            <a
              href="/sign-up"
              className="mt-8 inline-block rounded-md bg-green-600 px-5 py-2 text-white shadow-lg transition hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:bg-green-500 dark:hover:bg-green-600"
            >
              Sign Up
            </a>
          </div>
          <div className="flex flex-col items-center justify-center bg-blue-50 px-6 py-12 dark:bg-gray-700 md:px-12">
            <div className="w-full max-w-sm rounded-md bg-white p-8 shadow-md dark:bg-gray-800">
              <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white">Sign In</h2>
              <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                Access your workspace by signing in with your credentials.
              </p>
              <SignInButton>
                <button className="mt-8 w-full rounded-lg bg-blue-600 px-4 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600">
                  Sign In
                </button>
              </SignInButton>
            </div>
          </div>
        </div>
      </div>
    </SignedOut>
  );
}