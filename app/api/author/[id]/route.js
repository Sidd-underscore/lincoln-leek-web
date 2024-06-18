import { compileAuthors } from "@/lib/directory";
import { NextResponse } from "next/server";

export async function GET(req, {params}) {
  const id = params.id;

  try {
    const authors = await compileAuthors();

    return NextResponse.json(
      { message: authors.get(id), error: false },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error wow", error: true },
      { status: 500 },
    );
  }
}
