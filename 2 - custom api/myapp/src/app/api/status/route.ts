import { NextRequest, NextResponse } from "next/server";
import {books} from "./data";

export function GET(request: NextRequest){
return NextResponse.json(
    {
    message:"success",
    data:books,
    status: "ok"
})
}
export async function POST(request: NextRequest) {


    // send data in body raw json 
    // {
    //     "id": 145,
    //     "name": "Me",
    //     "type": "fiction",
    //     "available": true
    // }


    const req = await request.json();
    const updatedBook = books.push(req)
      return NextResponse.json(
        {
           updatedBook,
            status: "success"
        }
      );
    
    
  }