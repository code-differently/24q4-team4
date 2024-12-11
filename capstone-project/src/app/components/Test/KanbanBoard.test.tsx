import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import KanbanBoard from "../KanbanBoard/KanbanBoard";

describe("KanbanBoard Component", () => {
  test("renders the board with default columns", () => {
    render(<KanbanBoard title="My Kanban Board" />);

    // Use getByRole for headings
    expect(screen.getByRole("heading", { name: "To Do" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "In Progress" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Completed" })
    ).toBeInTheDocument();
  });

  test("adds a new task to the selected column", async () => {
    render(<KanbanBoard title="My Kanban Board" />);

    // Find and interact with form elements
    fireEvent.change(screen.getByPlaceholderText("Title"), {
      target: { value: "New Task" },
    });
    fireEvent.change(screen.getByPlaceholderText("Description"), {
      target: { value: "This is a new task" },
    });

    // Click the 'Add Task' button
    fireEvent.click(screen.getByRole("button", { name: "Add Task" }));

    // Debug to inspect the DOM after clicking
    screen.debug();

    // Wait for the task to appear in the document
    await screen.findByText("New Task");
  });
});
