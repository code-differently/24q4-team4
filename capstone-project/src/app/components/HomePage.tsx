'use client';

import { UserButton } from '@clerk/nextjs';

export default function SignedInView() {
  return (
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
            Welcome to <span className="text-teal-500 dark:text-teal-400">The Kanban App</span>
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
  );
}