import { NextRequest, NextResponse } from "next/server"

export const GET = async (request: NextRequest) => {
const url = request.nextUrl;
if(url.searchParams.has("name")){
  // http://localhost:3000/api/hello?name=sidra
  const name= url.searchParams.get("name")
  return  NextResponse.json({message: `Hello, from ${name}`});

}
else{
  // http://localhost:3000/api/hello
  return new NextResponse('Hello, from Next.js! If you want to display your name kindly provide your name as query parameter in url');

}
  
}
