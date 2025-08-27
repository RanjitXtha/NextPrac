"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "./types/types";

export default function CSRProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://dummyjson.com/products/category/smartphones?limit=100");
      const data = await res.json();
      setProducts(data.products);
    };

    getData();
  }, []);

  return (
    <div>
      <h1>CSR Example</h1>
      <ul>
        {products.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <li key={product.id} style={{ marginBottom: "20px" }}>
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
