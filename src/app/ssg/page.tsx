import Image from "next/image";

type Product = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
};

async function fetchProducts() {
  const res = await fetch("https://dummyjson.com/products?limit=20", {
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
        ))}
      </ul>
    </div>
  );
}
