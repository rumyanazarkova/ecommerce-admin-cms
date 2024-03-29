import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
    try {
        const { userId } = auth()
        const body = await req.json()
       
        const { name } = body

        if (!userId) {
            return new NextResponse('Name is required', { status: 400 })
        }
        if (!name) {
            return new NextResponse('Unauthorized', { status: 401 })
        }

        const store=await prismadb.store.create({
            data:{
             name,
             userId   
            }
        })

        return NextResponse.json(store)

    } catch (error) {
        console.log('STORES POST ROUTE', error);
        return new NextResponse('Internal error', { status: 500 })
    }
}