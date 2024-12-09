import { useState, useEffect } from "react";
import KanbanColumn from "./KanbanColumn";

interface Card {
  id: number; // Keep id as a number
  title: string;
  content?: string;
}

interface List {
  id: number;
  title: string;
  cards: Card[];
}

interface Board {
  id: number;
  title: string;
  lists: List[];
}

export default function KanbanBoard() {
  const [boards, setBoards] = useState<Board[]>([]);

  useEffect(() => {
    const fetchBoards = async () => {
      const res = await fetch("/api/boards");
      if (res.ok) {
        const data = await res.json();
        setBoards(data.data);
      }
    };

    fetchBoards();
  }, []);

  return (
    <div>
      <h1>Your Boards</h1>
      {boards.map((board) => (
        <div key={board.id}>
          <h2>{board.title}</h2>
          <div style={{ display: "flex", gap: "20px" }}>
            {board.lists.map((list) => (
              <KanbanColumn
                key={list.id}
                title={list.title}
                cards={list.cards.map((card) => ({
                  ...card,
                  id: card.id.toString(), // Convert id to string
                }))}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
