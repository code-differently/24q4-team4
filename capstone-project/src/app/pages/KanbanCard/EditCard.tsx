import { useRouter } from "next/router";
import { useState } from "react";
import { GetServerSidePropsContext } from "next";
import { Prisma } from "@prisma/client"; // Adjust the path based on your project structure
import { prisma } from "@/lib/prisma";

type Task = {
  id: number;
  title: string;
  description: string;
  tags?: string;
  dueDate: string;
};

type EditPageProps = {
  task: Task;
};

const EditTaskPage: React.FC<EditPageProps> = ({ task }) => {
  const [formData, setFormData] = useState({
    title: task.title,
    description: task.description,
    tags: task.tags || "",
    dueDate: task.dueDate.slice(0, 10), // Format the date correctly for the input
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/task/${task.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push(`/task/${task.id}`); // Redirect to task details page after saving
      } else {
        console.error("Failed to update the task.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleCancel = () => {
    router.push(`/task/${task.id}`); // Redirect back to task details
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Tags</label>
          <input
            type="text"
            name="tags" 
            value={formData.tags}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default EditTaskPage;

// Fetch task details from the database
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const taskId = context.params?.taskId;

  if (!taskId || Array.isArray(taskId)) {
    return { notFound: true };
  }

  const task = await prisma.task.findUnique({
    where: { id: parseInt(taskId, 10) },
  });

  if (!task) {
    return { notFound: true };
  }

  return {
    props: {
      task: JSON.parse(JSON.stringify(task)), // Serialize Prisma data for Next.js
    },
  };
}
