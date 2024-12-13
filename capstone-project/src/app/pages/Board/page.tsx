"use client";

import { useSearchParams } from "next/navigation";
import KanbanBoard from "../../components/KanbanBoard/KanbanBoard";

const KanbanPage = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get("q") || "Untitled Board";

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-teal-500 via-blue-600 to-purple-600 dark:from-gray-900 dark:via-gray-800 dark:to-purple-800 p-10">
      {/* Return Home Header */}
      <header className="flex justify-between items-center mb-8">
        <a
          href="/"
          className="text-lg font-semibold text-white bg-teal-600 dark:bg-gray-700 px-4 py-2 rounded-lg shadow-md hover:bg-teal-700 dark:hover:bg-gray-600 transition-all"
        >
          &larr; Return Home
        </a>
        <h1 className="text-4xl font-extrabold text-white text-center">
          {title}
        </h1>

      </header>

      {/* Kanban Board */}
      <main>
        <KanbanBoard title={title} />
      </main>
    </div>
  );
};

export default KanbanPage;