import React, { useState } from "react";
import KanbanCard from "./KanbanCard";
import Link from 'next/link';
//import KanbanAddTask from "../../pages/Card/AddCard";

type KanbanColumnProps = {
  title: string;
  cards: { id: string; title: string; description: string; tags: string; dueDate: string }[];
  columnId: string;
  addTask: (columnId: string, task: { id: string; title: string; description: string; tags: string; dueDate: string }) => void;
  deleteTask: (columnId: string, taskId: string) => void;
};

const KanbanColumn: React.FC<KanbanColumnProps> = ({ title, cards, columnId, addTask, deleteTask }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTask = (task: { id: string; title: string; description: string; tags: string; dueDate: string }) => {
    addTask(columnId, task); // Pass the column ID and task to the parent
    setIsModalOpen(false); // Close modal after adding task
  };

  const handleCardClick = (id: string) => {
    <Link href={`/KanbanCard/${id}`}/>
  };

  return (
    <div className="">
      <h2 className="">{title}</h2>
      {/* Add Task Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className=""
      >
        + Add Task
      </button>

      <div className="">
        {cards.map((card) => (
          <div
            key={card.id}
            className="cursor-pointer"
          >
            {/* Task Card and Card page route */}
            <div
              className=""
              onClick={() => handleCardClick(card.id)}
            >
              <KanbanCard
                id={card.id}
                title={card.title}
                description={""}
                tags={""}
                dueDate={""}
              />
            </div>

            {/* Delete Task Button */}
            <button
              onClick={() => deleteTask(columnId, card.id)}
              className=""
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Add Task Modal
      <KanbanAddTask
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        addTask={handleAddTask}
      /> */}
    </div>
  );
};

export default KanbanColumn;