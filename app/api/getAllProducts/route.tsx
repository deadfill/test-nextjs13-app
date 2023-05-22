import dbConnect from "@/libs/mongodb";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const order = searchParams.get("sort");
  const page = searchParams.get("page");
  console.log(order);
  console.log(page);
  await dbConnect();
  const res = await Product.find()
    .sort({ price: -1 })
    .limit(8)
    .skip(8 * (1 - 1));

  // const countProducts = await Product.countDocuments();
  return NextResponse.json({ res });
}
