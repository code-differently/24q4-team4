"use client";

import React, { useState } from "react";
import KanbanColumn from "./KanbanColumn";
import KanbanCard from "./KanbanCard";

// Define types for Kanban
type KanbanTask = {
  id: string;
  title: string;
  description: string;
  tags: string;
  dueDate: string;
};

type KanbanColumnType = {
  id: string;
  title: string;
  cards: KanbanTask[];
};

type KanbanBoardProps = {
  initialColumns?: KanbanColumnType[];
  id: string;
  title: string;
};

const KanbanBoard: React.FC<KanbanBoardProps> = ({ initialColumns, title }) => {
  const [columns, setColumns] = useState<KanbanColumnType[]>(
    initialColumns || [
      { id: "1", title: "To Do", cards: [] },
      { id: "2", title: "In Progress", cards: [] },
      { id: "3", title: "Completed", cards: [] },
    ]
  );

  const deleteTask = (columnId: string, taskId: string) => {
    setColumns((prevColumns) =>
      prevColumns.map((column) =>
        column.id === columnId
          ? { ...column, cards: column.cards.filter((card) => card.id !== taskId) }
          : column
      )
    );
  };

  const addTask = (columnId: string, task: KanbanTask) => {
    setColumns((prevColumns) =>
      prevColumns.map((column) =>
        column.id === columnId
          ? { ...column, cards: [...column.cards, task] }
          : column
      )
    );
  };

  return (
    <div className="relative flex flex-col items-center min-h-screen bg-gradient-to-br from-teal-500 via-blue-600 to-purple-600 dark:from-gray-900 dark:via-gray-800 dark:to-purple-800 p-10">
      <div className="flex w-full justify-between gap-8">
        {columns.map((column) => (
          <div
            key={column.id}
            className="flex flex-col w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <h2 className="text-lg font-bold text-center text-gray-800 dark:text-gray-100 bg-teal-500 dark:bg-teal-800 py-4">
              {column.title}
            </h2>
            <div className="flex flex-col gap-6 p-4">
              {column.cards.map((card) => (
                <KanbanCard
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  description={card.description}
                  tags={card.tags}
                  dueDate={card.dueDate}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;