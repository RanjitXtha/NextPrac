import { MetadataRoute } from "next";

type Product = {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
};

//for dynamic routes
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();


    const entries: MetadataRoute.Sitemap = data.products.map((product: Product) => (
        {
            url: `https://dummyjson.com/products/${product.id}`
        }
    ));

    return [
        {
            url: "https://dummyjson.com/products/about"
        },
        ...entries
    ]
}