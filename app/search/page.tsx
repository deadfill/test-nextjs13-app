import Product, { IProduct } from "@/models/Product";
import dbConnect from "@/libs/mongodb";
import ProductItem from "@/components/ProductItem/ProductItem";

export default async function Search(ctx: any) {
  const search = ctx.searchParams.q;
  const data = await getData(search);
  const render = data.map((item: any) => {
    return (
      // eslint-disable-next-line react/jsx-key
      <ProductItem key={item._id} data={item}></ProductItem>
    );
  });
  return <div>{render}</div>;
}

async function getData(search: string) {
  await dbConnect();
  const res = await Product.find({ $text: { $search: search } });
  const data = JSON.parse(JSON.stringify(res));
  return data;
}
