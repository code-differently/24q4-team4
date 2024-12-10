"use client";

import React from "react";

type KanbanCardProps = {
  id: string;
  title: string;
  description: string;
  tags: string;
  dueDate: string;
};

const KanbanCard: React.FC<KanbanCardProps> = ({ id, title, description, tags, dueDate }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{description}</p>
      <div className="flex justify-between items-center text-xs">
        <span className="bg-teal-100 dark:bg-teal-900 text-teal-500 dark:text-teal-400 px-2 py-1 rounded-full font-medium">
          {tags}
        </span>
        <span className="text-gray-500 dark:text-gray-400">{dueDate}</span>
      </div>
    </div>
  );
};

export default KanbanCard;