import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import KanbanCard from "../KanbanBoard/KanbanCard";

describe("KanbanCard Component", () => {
  const mockProps = {
    id: "1",
    title: "Test Task",
    description: "This is a test description",
    dueDate: "2024-12-31",
    onDelete: jest.fn(),
  };

  test("renders the KanbanCard with correct props", () => {
    render(<KanbanCard {...mockProps} />);

    // Check if title is rendered
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();

    // Check if description is rendered
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();

    // Check if due date is rendered
    expect(screen.getByText(mockProps.dueDate)).toBeInTheDocument();

    // Check if delete button is rendered
    expect(screen.getByRole("button", { name: /delete/i })).toBeInTheDocument();
  });

  test("calls onDelete when delete button is clicked", () => {
    render(<KanbanCard {...mockProps} />);

    const deleteButton = screen.getByRole("button", { name: /delete/i });
    fireEvent.click(deleteButton);

    expect(mockProps.onDelete).toHaveBeenCalledTimes(1);
  });
});
