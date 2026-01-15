import { NextRequest, NextResponse } from "next/server";
import { globalApiConfig } from "../../api";

export const POST = async (request: NextRequest) => {
  const data = await request.json();
  const res = await globalApiConfig.post("/auth/register", data);
  return NextResponse.json(res.data);
};
