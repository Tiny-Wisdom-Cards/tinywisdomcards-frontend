import { NextResponse } from "next/server";
export function middleware(req) {
    const country = req.geo?.country || "US";
    const res = NextResponse.next();
    res.cookies.set("country", country);
    return res;
}