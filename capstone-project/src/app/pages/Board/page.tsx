import Link from "next/link";
import KanbanBoard from "../../components/KanbanBoard/KanbanBoard";

const KanbanPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-blue-200 to-purple-300 p-10">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center text-gray-800">
        <Link href="/">Kanban Board</Link>
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Organize and manage your tasks efficiently.
        </p>
      </header>
      <KanbanBoard id="kanban-board" title="My Kanban Board" />
    </div>
  );
};

export default KanbanPage;