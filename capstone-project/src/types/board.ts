export interface Card {
    id: number;
    title: string;
    content?: string;
  }
  
  export interface List {
    id: number;
    title: string;
    cards: Card[];
  }
  
  export interface Board {
    id: number;
    title: string;
    lists: List[];
  }