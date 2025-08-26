import { Metadata } from "next";
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
};

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function generateMetadata({params}:{params:{id:string}}):Promise<Metadata>{
  const {id} = params;

  const res = await fetch(`https://dummyjson.com/products/${id}`);

  const product:Product = await res.json();

  return{
    title:product.title,
    description:product.description
  }

}

export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/products?limit=20");
  const data = await res.json();

  return data.products.slice(0, 2).map((product: Product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params; 

  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product: Product = await res.json();

  await delay(5000); 

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <Image src={product.thumbnail} width={150} height={150} alt={product.title} />
    </div>
  );
}
