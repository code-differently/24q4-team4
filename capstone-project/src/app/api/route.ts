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
  const { userId } = getAuth(request);

  if (!userId) {
    return response({ success: false, error: "Unauthorized" }, 401);
  }

  try {
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

    return response({ success: true, data: boards });
} catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    console.error("Error fetching boards:", errorMessage);
    return response({ success: false, error: "Failed to fetch boards", details: errorMessage }, 500);
  }
  
}

// Create a new board for the authenticated user
export async function POST(request: NextRequest) {
  const { userId } = getAuth(request);

  if (!userId) {
    return response({ success: false, error: "Unauthorized" }, 401);
  }

  try {
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

    return response({ success: true, data: newBoard }, 201);
} catch (error) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
      return response({ success: false, error: "An error occurred", details: error.message }, 500);
    } else {
      console.error("Unknown error:", error);
      return response({ success: false, error: "An unknown error occurred" }, 500);
    }
  }
}  
