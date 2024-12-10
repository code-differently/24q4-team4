"use client"

import React, { useState } from "react";
import KanbanColumn from "./KanbanColumn";

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

const KanbanBoard: React.FC<KanbanBoardProps> = ({ initialColumns }) => {
  // Initialize state with default or provided columns
  const [columns, setColumns] = useState<KanbanColumnType[]>(
    initialColumns || [
      { id: "1", title: "To Do", cards: [] },
      { id: "2", title: "In Progress", cards: [] },
      { id: "3", title: "Completed", cards: [] },
    ]
  );

  // Function to delete a task from a column
  const deleteTask = (columnId: string, taskId: string) => {
    setColumns((prevColumns) =>
      prevColumns.map((column) =>
        column.id === columnId
          ? { ...column, cards: column.cards.filter((card) => card.id !== taskId) }
          : column
      )
    );
  };

  // Function to add a task to a column
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
    <div className="">
      {columns.map((column) => (
        <KanbanColumn
          key={column.id}
          title={column.title}
          columnId={column.id}
          cards={column.cards}
          deleteTask={deleteTask}
          addTask={addTask}
        />
      ))}
    </div>
  );
};

export default KanbanBoard;