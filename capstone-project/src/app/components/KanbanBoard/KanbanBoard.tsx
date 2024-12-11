"use client";

import React, { useState } from "react";
import KanbanCard from "./KanbanCard";

type KanbanTask = {
  id: string;
  title: string;
  description: string;
  dueDate: string;
};

type KanbanColumnType = {
  id: string;
  title: string;
  cards: KanbanTask[];
};

type KanbanBoardProps = {
  initialColumns?: KanbanColumnType[];
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

  const [newTask, setNewTask] = useState<KanbanTask>({
    id: "",
    title: "",
    description: "",
    dueDate: "",
  });

  const [selectedColumnId, setSelectedColumnId] = useState<string>("1");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleAddTask = () => {
    if (!newTask.title || !newTask.description) return;

    setColumns((prevColumns) =>
      prevColumns.map((column) =>
        column.id === selectedColumnId
          ? { ...column, cards: [...column.cards, { ...newTask, id: `${Date.now()}` }] }
          : column
      )
    );

    setNewTask({ id: "", title: "", description: "", dueDate: "" });
  };

  const handleDeleteTask = (columnId: string, taskId: string) => {
    setColumns((prevColumns) =>
      prevColumns.map((column) =>
        column.id === columnId
          ? { ...column, cards: column.cards.filter((card) => card.id !== taskId) }
          : column
      )
    );
  };

  return (
    <div className="relative flex flex-col items-center min-h-screen bg-gradient-to-br from-teal-500 via-blue-600 to-purple-600 dark:from-gray-900 dark:via-gray-800 dark:to-purple-800 p-10">
      {/* Kanban Columns */}
      <div className="flex w-full justify-between gap-8">
        {columns.map((column) => (
          <div
            key={column.id}
            className="flex flex-col w-1/3 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <h2 className="text-lg font-bold text-center text-gray-800 dark:text-gray-100 bg-teal-500 dark:bg-teal-800 py-4">
              {column.title}
            </h2>
            <div className="flex flex-col gap-4 p-4 h-96 overflow-y-auto">
              {column.cards.map((card) => (
                <KanbanCard
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  description={card.description}
                  dueDate={card.dueDate}
                  onDelete={() => handleDeleteTask(column.id, card.id)}            />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Add Task Section */}
      <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-800 shadow-md p-4 flex items-center gap-4 z-10">
        <select
          value={selectedColumnId}
          onChange={(e) => setSelectedColumnId(e.target.value)}
          className="p-2 rounded border dark:bg-gray-700 dark:text-white"
        >
          {columns.map((column) => (
            <option key={column.id} value={column.id}>
              {column.title}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newTask.title}
          onChange={handleInputChange}
          className="p-2 rounded border flex-1 dark:bg-gray-700 dark:text-white"
        />
        <input
          type="date"
          name="dueDate"
          value={newTask.dueDate}
          onChange={handleInputChange}
          className="p-2 rounded border dark:bg-gray-700 dark:text-white"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newTask.description}
          onChange={handleInputChange}
          className="p-2 rounded border flex-1 dark:bg-gray-700 dark:text-white"
        />
        <button
          onClick={handleAddTask}
          className="bg-teal-500 text-white p-2 rounded-lg dark:bg-teal-700"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default KanbanBoard;