import { NextRequest, NextResponse } from "next/server";
import { globalApiConfig } from "../../api";
import { cookies } from "next/headers";
import { parse } from "cookie";
import { AxiosError } from "axios";

export const POST = async (request: NextRequest) => {
  try {
    const userData = await request.json();

    console.log(userData, typeof userData);

    const res = await globalApiConfig.post("/auth/login", userData);

    const cookieStore = await cookies();

    const setCookie = res.headers["set-cookie"];

    if (setCookie) {
      const arr = Array.isArray(setCookie) ? setCookie : [setCookie];

      for (const cookie of arr) {
        const parsedCookie = parse(cookie);
        const options = {
          expires: parsedCookie.Expires
            ? new Date(parsedCookie.Expires)
            : undefined,
          path: parsedCookie.Path,
          maxAge: Number(parsedCookie["Max-Age"]),
        };

        if (parsedCookie.accessToken) {
          cookieStore.set("accessToken", parsedCookie.accessToken, options);
        }
        if (parsedCookie.refreshToken) {
          cookieStore.set("refreshToken", parsedCookie.refreshToken, options);
        }
      }

      return NextResponse.json(res.data);
    }

    return NextResponse.json(
      {
        message: "Error with Auth method",
      },
      {
        status: 401,
      }
    );
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Login request failed", {
        status: error.response?.status,
        response: error.response?.data,
      });
      return NextResponse.json(
        error.response?.data ?? { message: "Error with Auth method" },
        { status: error.response?.status ?? 500 }
      );
    }

    console.error("Login request failed", error);
    return NextResponse.json(
      {
        message: "Error with Auth method",
      },
      {
        status: 500,
      }
    );
  }
};
