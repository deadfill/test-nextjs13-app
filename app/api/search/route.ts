import dbConnect from "@/libs/mongodb";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("q") as string;
  try {
    await dbConnect();
    const product = await Product.find({ $text : { $search : search }});
    // const product = await Product.find({name: { $regex: queryParams, $options: 'i' }}).exec();
    return NextResponse.json({ product });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}