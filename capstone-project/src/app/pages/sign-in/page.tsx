import { SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";

const SignIn = () => {
  return (
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
              Welcome to{" "}
              <span className="text-teal-500 dark:text-teal-400">
                The Kanban App
              </span>
            </h1>
            <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
              Your productivity journey starts here.
            </p>

            <div className="mt-8 flex flex-col space-y-4">
              <SignUpButton>
                <Link href="/pages/sign-in">
                  <button className="w-full rounded-lg bg-teal-500 px-6 py-3 text-lg font-semibold text-white shadow-md transition-transform transform hover:scale-105 hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-400">
                    Sign Up
                  </button>
                </Link>
              </SignUpButton>
              <SignInButton>
                <Link href="/pages/sign-in">
                  <button className="w-full rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-400">
                    Sign In
                  </button>
                </Link>
              </SignInButton>
            </div>
          </div>
        </div>
      </SignedOut>
    </div>
  );
};

export default SignIn;
