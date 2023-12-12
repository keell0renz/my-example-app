import { NextRequest, NextResponse } from 'next/server';

export default function middleware(req: NextRequest) {
    // console.log(`Middleware for ${req.url}`)

    // const response = NextResponse.next()

    // if (req.cookies.has("my-nextjs-app")) {
    //     console.log("Custom cookie found!")
    // } else {
    //     response.cookies.set("my-nextjs-app", "value")
    // }

    // return response
}

export const config = {
    matcher: "/"
}
