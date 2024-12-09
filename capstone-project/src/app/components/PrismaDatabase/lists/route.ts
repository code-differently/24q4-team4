import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuth } from "@clerk/nextjs/server";

// Helper function for JSON responses
const response = (data: any, status: number = 200) =>
  NextResponse.json(data, { status });

// GET: Fetch all lists for a specific board
export async function GET(request: NextRequest) {
  const { userId } = getAuth(request);
  const boardId = request.nextUrl.searchParams.get("boardId");

  if (!userId) return response({ success: false, error: "Unauthorized" }, 401);
  if (!boardId) return response({ success: false, error: "Board ID is required" }, 400);

  try {
    const lists = await prisma.list.findMany({
      where: { boardId: parseInt(boardId), board: { userId } },
      include: { cards: true },
    });

    return response({ success: true, data: lists });
  } catch (error) {
    console.error("Error fetching lists:", error);
    return response({ success: false, error: "Failed to fetch lists" }, 500);
  }
}
// Create a new list in a board
export async function POST(request: NextRequest) {
  const { userId } = getAuth(request);

  if (!userId) {
    return response({ error: "Unauthorized" }, 401);
  }

  try {
    const body = await request.json();
    const { title, boardId } = body;

    if (!title || !boardId) {
      return response({ error: "Title and boardId are required" }, 400);
    }

    const newList = await prisma.list.create({
      data: {
        title,
        boardId,
      },
    });

    return response(newList, 201);
  } catch (error) {
    console.error("Error creating list:", error);
    return response({ error: "Failed to create list" }, 500);
  }
}

// Delete a list by ID
export async function DELETE(request: NextRequest) {
  const { userId } = getAuth(request);
  const listId = request.nextUrl.searchParams.get("id");

  if (!userId) {
    return response({ error: "Unauthorized" }, 401);
  }

  if (!listId) {
    return response({ error: "List ID is required" }, 400);
  }

  try {
    await prisma.list.delete({
      where: { id: parseInt(listId) },
    });

    return response({ message: "List deleted successfully" });
  } catch (error) {
    console.error("Error deleting list:", error);
    return response({ error: "Failed to delete list" }, 500);
  }
}