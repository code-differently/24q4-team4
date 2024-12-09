import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAuth } from "@clerk/nextjs/server";

// Helper function for JSON responses
const response = (data: any, status: number = 200) =>
  NextResponse.json(data, { status });

// Type definition for creating a board
interface CreateBoardRequest {
  title: string;
}

// Get all boards for the authenticated user
export async function GET(request: NextRequest) {
  try {
    const { userId } = await getAuth(request); // Ensure getAuth is awaited

    console.log("Authenticated User ID:", userId);

    if (!userId) {
      console.warn("Unauthorized access attempt");
      return response({ success: false, error: "Unauthorized" }, 401);
    }

    const boards = await prisma.board.findMany({
      where: { userId },
      include: {
        lists: {
          include: {
            cards: true,
          },
        },
      },
    });

    console.log("Fetched Boards:", boards);
    return response({ success: true, data: boards });
  } catch (error) {
    console.error("Error fetching boards:", error);
    return response({ success: false, error: "Failed to fetch boards" }, 500);
  }
}

// Create a new board for the authenticated user
export async function POST(request: NextRequest) {
  try {
    const { userId } = await getAuth(request); // Ensure getAuth is awaited

    console.log("Authenticated User ID:", userId);

    if (!userId) {
      console.warn("Unauthorized access attempt");
      return response({ success: false, error: "Unauthorized" }, 401);
    }

    const body = (await request.json()) as CreateBoardRequest;
    const { title } = body;

    if (!title) {
      return response({ success: false, error: "Title is required" }, 400);
    }

    if (title.length > 100) {
      return response({ success: false, error: "Title must be 100 characters or fewer" }, 400);
    }

    const newBoard = await prisma.board.create({
      data: {
        title,
        userId,
      },
    });

    console.log("Created Board:", newBoard);
    return response({ success: true, data: newBoard }, 201);
  } catch (error) {
    console.error("Error creating board:", error);
    return response({ success: false, error: "Failed to create board" }, 500);
  }
}

// Delete a board by ID for the authenticated user
export async function DELETE(request: NextRequest) {
  try {
    const { userId } = await getAuth(request); // Ensure getAuth is awaited
    const boardId = request.nextUrl.searchParams.get("id");

    console.log("Authenticated User ID:", userId);
    console.log("Board ID to delete:", boardId);

    if (!userId) {
      console.warn("Unauthorized access attempt");
      return response({ success: false, error: "Unauthorized" }, 401);
    }

    if (!boardId) {
      return response({ success: false, error: "Board ID is required" }, 400);
    }

    // Find the board to ensure it belongs to the authenticated user
    const board = await prisma.board.findFirst({
      where: {
        id: parseInt(boardId),
        userId, // Filter by userId
      },
    });

    if (!board) {
      console.warn("Board not found or unauthorized deletion attempt");
      return response({ success: false, error: "Board not found or you do not have permission to delete it" }, 404);
    }

    // Delete the board
    await prisma.board.delete({
      where: { id: board.id },
    });

    console.log("Deleted Board ID:", board.id);
    return response({ success: true, message: "Board deleted successfully" });
  } catch (error) {
    console.error("Error deleting board:", error);
    return response({ success: false, error: "Failed to delete board" }, 500);
  }
}
export async function PUT(request: NextRequest) {
  try {
    const { userId } = getAuth(request);

    if (!userId) {
      return response({ success: false, error: "Unauthorized" }, 401);
    }

    const boardId = request.nextUrl.searchParams.get("id");
    const body = await request.json();
    const { title } = body;

    if (!boardId) {
      return response({ success: false, error: "Board ID is required" }, 400);
    }

    if (!title) {
      return response({ success: false, error: "Title is required" }, 400);
    }

    // Step 1: Verify ownership
    const board = await prisma.board.findFirst({
      where: {
        id: parseInt(boardId),
        userId,
      },
    });

    if (!board) {
      return response({ success: false, error: "Board not found or you do not have permission to update it" }, 404);
    }

    // Step 2: Update the board
    const updatedBoard = await prisma.board.update({
      where: { id: parseInt(boardId) }, // Use only the unique 'id'
      data: { title },
    });

    return response({ success: true, data: updatedBoard });
  } catch (error) {
    console.error("Error updating board:", error);
    return response({ success: false, error: "Failed to update board" }, 500);
  }
}