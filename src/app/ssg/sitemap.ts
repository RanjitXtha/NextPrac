import { MetadataRoute } from "next";
import { Product } from "../types/types";

export default async function sitemapFragrances(): Promise<MetadataRoute.Sitemap> {
  const res = await fetch("https://dummyjson.com/products/category/fragrances?limit=100");
  const data = await res.json();

  return data.products.map((product: Product ) => ({
    url: `http://localhost:3000/products/${product.id}`,
  }));
}
