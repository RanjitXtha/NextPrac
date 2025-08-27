import { MetadataRoute } from "next";
import { Product } from "../types/types";

export default async function sitemapLaptops(): Promise<MetadataRoute.Sitemap> {
  const res = await fetch("https://dummyjson.com/products/category/laptops?limit=100");
  const data = await res.json();

  return data.products.map((product: Product ) => ({
    url: `http://localhost:3000/products/${product.id}`,
  }));
}