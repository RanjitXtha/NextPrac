import Image from "next/image";
import Link from "next/link";
import { Product } from "../types/types";

async function fetchProducts() {
  const res = await fetch("https://dummyjson.com/products/category/fragrances?limit=100", {
    cache: "force-cache",
  });
  const data = await res.json();
  return data.products as Product[];
}

export default async function SSGProductsPage() {
  const products = await fetchProducts();

  return (
    <div>
      <h1>SSG</h1>
      <ul>
        {products.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <li style={{ marginBottom: "20px" }}>
              <b>{product.title}</b>
              <p>{product.description}</p>
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={150}
                height={150}
              />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
