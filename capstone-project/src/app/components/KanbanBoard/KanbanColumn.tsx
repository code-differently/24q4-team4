import React from "react";

type KanbanColumnProps = {
    title: string;
    cards: [id: string, title: string];
};

//add 

const handleClick = () => {
//route to KanbanCard.tsx page
  };
  
const KanbanColumn: React.FC<KanbanColumnProps> = ({ title, cards }) => {
    return (
        <div>
            <h1>
                {title}
            </h1>
            <button onClick={handleClick}>
                {cards}
            </button>
        </div>
    );
};

export default KanbanColumn;