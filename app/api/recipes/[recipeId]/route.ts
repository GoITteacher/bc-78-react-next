import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

interface PageProps {
  params: Promise<{ recipeId: string }>;
}

export async function GET(request: NextRequest, { params }: PageProps) {
  try {
    const { recipeId } = await params;

    return NextResponse.json({
      recipeId: recipeId,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error",
        status: "500",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: NextRequest) {
  const userData = await request.json();

  axios.post("", userData);
}
