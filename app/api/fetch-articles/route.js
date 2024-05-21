import { compileArticlesByDate } from "@/articles/directory";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const articlesByDate = await compileArticlesByDate();
    return NextResponse.json(
      {message: articlesByDate, error: false },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error wow", error: true },
      { status: 500 },
    );
  }
}
