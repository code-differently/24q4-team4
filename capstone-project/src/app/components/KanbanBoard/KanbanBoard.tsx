"use client";

import React, { useState, useEffect } from "react";
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
  title: string;
};

const KanbanBoard: React.FC<KanbanBoardProps> = ({ title }) => {
  const [columns, setColumns] = useState<KanbanColumnType[]>([
    { id: "1", title: "To Do", cards: [] },
    { id: "2", title: "In Progress", cards: [] },
    { id: "3", title: "Completed", cards: [] },
  ]);

  const [newTask, setNewTask] = useState<KanbanTask>({
    id: "",
    title: "",
    description: "",
    dueDate: "",
  });

  const [selectedColumnId, setSelectedColumnId] = useState<string>("1");

  // Fetch tasks from the backend on component mount
  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const response = await fetch("/api/boards");

        // Check if the response is OK before parsing as JSON
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Boards:", data);
      } catch (error) {
        console.error("Error fetching boards:", error);
      }
    };

    fetchBoards();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  // Add new task and save to backend
  const handleAddTask = async () => {
    if (!newTask.title || !newTask.description) return;

    try {
      const response = await fetch("/api/boards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: newTask.title,
          description: newTask.description,
          dueDate: newTask.dueDate,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setColumns((prevColumns) =>
          prevColumns.map((column) =>
            column.id === selectedColumnId
              ? { ...column, cards: [...column.cards, data.data] }
              : column
          )
        );

        setNewTask({ id: "", title: "", description: "", dueDate: "" });
      }
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Delete task and remove from backend
  const handleDeleteTask = async (columnId: string, taskId: string) => {
    try {
      const response = await fetch(`/api/boards?id=${taskId}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (data.success) {
        setColumns((prevColumns) =>
          prevColumns.map((column) =>
            column.id === columnId
              ? {
                  ...column,
                  cards: column.cards.filter((card) => card.id !== taskId),
                }
              : column
          )
        );
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="relative flex flex-col items-center min-h-screen bg-gradient-to-br from-teal-500 via-blue-600 to-purple-600 dark:from-gray-900 dark:via-gray-800 dark:to-purple-800 p-10">
      <h1 className="text-2xl font-bold text-white mb-6">{title}</h1>

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
                  title={card.title}
                  description={card.description}
                  dueDate={card.dueDate}
                  onDelete={() => handleDeleteTask(column.id, card.id)}
                />
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
