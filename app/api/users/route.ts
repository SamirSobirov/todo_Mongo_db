import dbConnect from "../../../lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import users from "../../../models/users";

export async function GET() {
  await dbConnect();

  try {
    const data = await users.find({});

    return NextResponse.json({ message: "ok", data }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: e }, { status: 200 });
  }
}

export async function POST(req: NextRequest) {
  await dbConnect();

  try {

    const data = await users.create(req.body)

    return NextResponse.json({ message: "ok" }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: e }, { status: 200 });
  }
}
// export default async function handlers(req: NextRequest, res: NextResponse) {

//     const {method} = req

//     switch (method) {
//         case 'GET':
//             return NextResponse.json({message: "ok", date: {name: 'Alex'}}, {status: 200})

//         default:
//             break;
//     }

// }
