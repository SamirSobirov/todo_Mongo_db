import dbConnect from "../../../lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export default async function handlers(req: NextRequest, res: NextResponse) {
    
    const {method} = req 


    switch (method) {
        case 'GET':
            return NextResponse.json({message: "ok", date: {name: 'Alex'}}, {status: 200})
    
        default:
            break;
    }

}