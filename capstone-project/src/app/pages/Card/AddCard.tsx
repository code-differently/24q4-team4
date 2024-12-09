import React, { useState } from "react";

type KanbanAddTask = {
  isOpen: boolean;
  onClose: () => void;
  addTask: (task: { id: string; title: string; description: string; tags: string; dueDate: string }) => void;
};

let KanbanAddTask: React.FC<KanbanAddTask> = ({ isOpen, onClose, addTask }) => {
  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
    tags: "",
    dueDate: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.title && task.dueDate) {
      addTask(task); // Pass task to parent component & reset task form
      setTask({
        id: "",
        title: "",
        description: "",
        tags: "",
        dueDate: "",
      }); 
    }
  };

  if (!isOpen) return null;

// Returns new task
  return (
<div className="">
      <div className="">
        <h2 className="">Add New Task</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleInputChange}
            placeholder="Task Title"
            className=""
            required
          />
          <input
            type="text"
            name="tags"
            value={task.tags}
            onChange={handleInputChange}
            placeholder="Tags (optional)"
            className=""
          />
          <textarea
            name="description"
            value={task.description}
            onChange={handleInputChange}
            placeholder="Description"
            className=""
          />
          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleInputChange}
            className=""
            required
          />
          // Cancels adding task
          <div className="">
            <button
              type="button"
              onClick={onClose}
              className=""
            >
              Cancel
            </button>
            <button
              type="submit"
              className=""
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default KanbanAddTask;
