import { getArticleByDateAndId } from "@/lib/directory";
import { NextResponse } from "next/server";

export async function GET(req, {params}) {
  const {date, id} = params;

  try {
    const article = await getArticleByDateAndId(Number(date), id);

    return NextResponse.json(
      { message: article, error: false },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error wow", error: true },
      { status: 500 },
    );
  }
}
