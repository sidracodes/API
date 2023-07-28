import { NextRequest, NextResponse } from "next/server";
import { books } from "../data";
export function GET(request: NextRequest, {params}:{params:{id: number}}){
  const bookId =  books.find((book)=>{
        return book.id == params.id
    })
return NextResponse.json({bookId})
}