import React from "react";
import KanbanCard from "./KanbanCard";
import { useRouter } from "next/router";

type KanbanColumnProps = {
    title: string;
    cards:{id: string, title: string}[];
};
  
const KanbanColumn: React.FC<KanbanColumnProps> = ({ title, cards }) => {
    const router = useRouter();

    const handleClick = (id: string) => {
        router.push(`/KanbanCard/${id}`);
    };

    return (
        <div className="">
            <h2 className="">{title}</h2>
            <div className="">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="cursor-pointer"
                        onClick={() => handleClick(card.id)}
                    >
                        <KanbanCard id={card.id} title={card.title} description={""} tags={""} dueDate={""} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KanbanColumn;