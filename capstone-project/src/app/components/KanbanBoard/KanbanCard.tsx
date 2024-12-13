"use client";

import React from "react";

type KanbanCardProps = {
  title: string;
  description: string;
  dueDate: string;
  onDelete: () => void;
};

const KanbanCard: React.FC<KanbanCardProps> = ({
  title,
  description,
  dueDate,
  onDelete,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
        {description}
      </p>
      <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
        <span>{dueDate}</span>
        <button
          onClick={onDelete}
          className="text-sm text-red-500 hover:text-red-700 transition-all"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default KanbanCard;
