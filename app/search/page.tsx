import Product, { IProduct } from "@/models/Product";
import dbConnect from "@/libs/mongodb";
import { Suspense } from "react";
import Loading from "./loading";
import ProductItem from "@/components/ProductItem/ProductItem";

export default async function Search() {
  const data: IProduct[] = await getData();
  const render = data.map((item) => {
    return (
      // eslint-disable-next-line react/jsx-key
      <ProductItem key={item._id} data={item}></ProductItem>
    );
  });
  return <div>{render}</div>;
}

async function getData() {
  await dbConnect();
  const res = await Product.find();
  const data = await JSON.parse(JSON.stringify(res));

  return data;
}
