import React from "react";

type KanbanCardProps = {
    id: string;
    title: string;
    description: string;
    tags: string;
    dueDate: string;
};
  
const KanbanCard: React.FC<KanbanCardProps> = ({ id, title, description, tags, dueDate}) => {
    return (
        // Defines Kanban Card content
        <div>
            <h1>
                {title}
            </h1>
            <h2>
                {dueDate}
            </h2>
            <h3>
                {tags}
            </h3>
            <h4>
                {description}
            </h4>
        </div>
    );
};

export default KanbanCard;