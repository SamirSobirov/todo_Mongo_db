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

    const user = await req.json()
    
    const data = await users.create(user)

    return NextResponse.json({ message: "user created", data }, { status: 201});
  } catch (e) {
    return NextResponse.json({ message: req.body }, { status: 200 });
  }
}