//Make a page for each individual task for the card
import { useRouter } from "next/router";
import React from "react";
import { Prisma } from "@prisma/client"; // Adjust the path if needed
import KanbanCard from "@/app/components/KanbanBoard/KanbanCard"; // Adjust the import path
import { GetServerSidePropsContext } from "next";

// Define the type for the task
type Task = {
  id: number;
  title: string;
  description: string;
  tags?: string;
  deadline: string; // Use Date if working with raw Date objects
};

// Define the props for the TaskPage component
type TaskPageProps = {
  task: Task;
};

const TaskPage: React.FC<TaskPageProps> = ({ task }) => {
  const router = useRouter();

  if (!task) {
    return <div className="text-center text-gray-500">Task not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-100 shadow-md rounded-lg">
      {/* KanbanCard Component */}
      <KanbanCard
        id={task.id.toString()}
        title={task.title}
        description={task.description}
        tags={task.tags || "No tags"} // Fallback for tags
        dueDate={new Date(task.deadline).toLocaleDateString()}
      />
      <button
        onClick={() => router.push("/")}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Back to Kanban Board
      </button>
    </div>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { taskId } = context.params!; // Non-null assertion since taskId is required
  
    try {
      const task = await Prisma.task.findUnique({
        where: { id: parseInt(taskId as string) }, // Ensure taskId is parsed correctly as string
      });
  
      if (!task) {
        return {
          notFound: true,
        };
      }
  
      return {
        props: { task },
      };
    } catch (error) {
      console.error("Error fetching task:", error);
      return {
        notFound: true,
      };
    }
  }

export default TaskPage;
