"use client";
import Product, { IProduct } from "@/models/Product";
import dbConnect from "@/libs/mongodb";
import ProductItem from "@/components/ProductItem/ProductItem";

export default async function Search(ctx: any) {
  const search = ctx.searchParams.q;
  const data = await getData(search);
  const render = data.product.map((item: any) => {
    return (
      // eslint-disable-next-line react/jsx-key
      <ProductItem key={item._id} data={item}></ProductItem>
    );
  });
  return <div>{render}</div>;
}

async function getData(search: string) {
  const res = await fetch(`http://localhost:3000/api/search?q=${search}`, {
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
