import { NextRequest } from "next/server";
import { GET, POST, PUT, DELETE } from "@/app/api/boards/route";
import { prisma } from "@/lib/prisma";
import { getAuth } from "@clerk/nextjs/server";

global.Request = class {
  url: string;
  method: string;
  headers: Headers;
  body: string | null;

  constructor(input: string, init: RequestInit = {}) {
    this.url = input;
    this.method = init.method || "GET";
    this.headers = new Headers(init.headers);
    this.body = init.body ? String(init.body) : null;
  }

  json = async () => (this.body ? JSON.parse(this.body) : {});
} as unknown as typeof Request;

// Mock implementations
jest.mock("@/lib/prisma", () => ({
  prisma: {
    board: {
      findMany: jest.fn(),
      create: jest.fn(),
      findFirst: jest.fn(),
      delete: jest.fn(),
      update: jest.fn(),
    },
  },
}));

jest.mock("@clerk/nextjs/server", () => ({
  getAuth: jest.fn(),
}));

// Helper function to create mock NextRequest
const mockRequest = (
  url: string,
  options: Partial<RequestInit> = {}
): NextRequest => {
  const { method = "GET", body } = options;

  return {
    method,
    url,
    body,
    nextUrl: new URL(url),
    headers: new Headers(),
    json: async () => (body ? JSON.parse(body as string) : {}),
  } as unknown as NextRequest;
};

describe("Boards API Routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // GET Route
  test("GET returns all boards for authenticated user", async () => {
    (getAuth as jest.Mock).mockResolvedValue({ userId: "user_123" });
    (prisma.board.findMany as jest.Mock).mockResolvedValue([
      { id: 1, title: "Board 1", userId: "user_123" },
    ]);

    const response = await GET(mockRequest("http://localhost:3000/api/boards"));
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.data).toEqual([
      { id: 1, title: "Board 1", userId: "user_123" },
    ]);
  });

  // POST Route
  test("POST creates a new board for authenticated user", async () => {
    (getAuth as jest.Mock).mockResolvedValue({ userId: "user_123" });
    (prisma.board.create as jest.Mock).mockResolvedValue({
      id: 1,
      title: "New Board",
      userId: "user_123",
    });

    const requestBody = JSON.stringify({ title: "New Board" });
    const request = mockRequest("http://localhost:3000/api/boards", {
      method: "POST",
      body: requestBody,
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(201);
    expect(data.success).toBe(true);
    expect(data.data).toEqual({
      id: 1,
      title: "New Board",
      userId: "user_123",
    });
  });

  // DELETE Route
  test("DELETE removes a board for authenticated user", async () => {
    (getAuth as jest.Mock).mockResolvedValue({ userId: "user_123" });
    (prisma.board.findFirst as jest.Mock).mockResolvedValue({
      id: 1,
      title: "Board to Delete",
      userId: "user_123",
    });

    const request = mockRequest("http://localhost:3000/api/boards?id=1", {
      method: "DELETE",
    });

    const response = await DELETE(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.message).toBe("Board deleted successfully");
  });

  // PUT Route
  test("PUT updates a board for authenticated user", async () => {
    (getAuth as jest.Mock).mockResolvedValue({ userId: "user_123" });

    (prisma.board.findFirst as jest.Mock).mockResolvedValue({
      id: 1,
      title: "Old Title",
      userId: "user_123",
    });

    (prisma.board.update as jest.Mock).mockResolvedValue({
      id: 1,
      title: "Updated Title",
      userId: "user_123",
    });

    const requestBody = JSON.stringify({ title: "Updated Title" });
    const request = mockRequest("http://localhost:3000/api/boards?id=1", {
      method: "PUT",
      body: requestBody,
    });

    const response = await PUT(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.data).toEqual({
      id: 1,
      title: "Updated Title",
      userId: "user_123",
    });
  });
});
