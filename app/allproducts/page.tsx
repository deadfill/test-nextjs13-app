import Product, { IProduct } from "@/models/Product";
import styles from "./Index.module.css";
import ProductItem from "@/components/ProductItem/ProductItem";
import dbConnect from "@/libs/mongodb";

export interface IProps {
  data: IProduct[];
  countProducts: number;
  page: number;
  pages: number;
}

const PAGE_SIZE = 2;

export default async function Index() {
  const { props } = await getData("highest", 1);
  const data = props.data;
  console;

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_menu}>
        <p className={styles.menu_description}>
          Наша компания продает продукцию только оптом и по безналичному
          расчету, работает только с юридическими лицами на основании
          заключенных договоров. Цены, указанные на сайте, не являются публичной
          офертой и носят информационный характер. Все цены указаны в рублях с
          учетом НДС.
        </p>
        <div>
          Сортировка{" "}
          <select value={"newest"}>
            <option value="newest">Сначало новые</option>
            <option value="lowest">Сначало дешевые</option>
            <option value="highest">Сначало дорогие</option>
            <option value="toprated">По рейтингу</option>
          </select>
        </div>
        <div className={styles.products_list}>
          {data.map((item: any) => (
            <ProductItem data={item} key={item._id}></ProductItem>
          ))}
        </div>
      </div>
      <div>
        <div>
          <ul className={styles.pagination}></ul>
        </div>
      </div>
    </div>
  );
}

const getData = async (sort: any, page: any, pageSize = PAGE_SIZE) => {
  const order: any =
    sort === "lowest"
      ? { price: 1 }
      : sort === "highest"
      ? { price: -1 }
      : sort === "toprated"
      ? { vote_average: -1 }
      : sort === "newest"
      ? { createdAt: -1 }
      : { _id: -1 };
  await dbConnect();
  const res = await Product.find()
    .sort(order)
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  const data = JSON.parse(JSON.stringify(res));
  const countProducts = await Product.countDocuments();

  // Pass data to the page via props
  return {
    props: {
      data,
      countProducts,
      page,
      pages: Math.ceil(countProducts / pageSize),
    },
  };
};
