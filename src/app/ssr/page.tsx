import Image from "next/image";
import Link from "next/link";
import { Product } from "../types/types";

async function fetchProducts() {
    const res = await fetch("https://dummyjson.com/products?limit=20", {
        cache: "no-store",
    });
    const data = await res.json();
    return data.products as Product[];
}

export default async function SSRProductsPage() {
    const products = await fetchProducts();

    return (
        <div>
            <h1>SSR Example</h1>
            <ul>
                {products.map((product) => (
                    //prefetch true is defallt. helps in prerendering faster by prefetch js and other stuff. leave it in default i.e trueose
                    //with prefetch truei.e default , it would prefetch those link's js bundles and data fetching ,removing the 5sec delay
                    //prefetch false brings those delay back.
                    <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
                        <li style={{ marginBottom: "20px"}}>
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
