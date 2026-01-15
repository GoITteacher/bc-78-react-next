import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const c = request.nextUrl.searchParams.get("c") || 10;
  const g = request.nextUrl.searchParams.get("g") || 10;
  const a = request.nextUrl.searchParams.get("a") || 10;
  const i = request.nextUrl.searchParams.get("i") || 10;

  const params = Object.fromEntries(request.nextUrl.searchParams.entries());

  const res = await axios.get(
    `https://drinkify.b.goit.study/api/v1/cocktails/`,
    {
      params,
    }
  );

  return NextResponse.json(res.data);
}
