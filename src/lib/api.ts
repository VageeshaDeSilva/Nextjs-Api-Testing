import { error } from "console";
import ErrorMsg from "../components/ErrorMsg";

export interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  image?: string;
  category?: string;
}

// getting all products from dataBase
export async function getProducts(): Promise<Product[]> {
  const res = await fetch('https://fakestoreapi.com/productss', {
    cache: 'no-store' // this mean no caching save and every time user calls this api, user get latest product list, or use 'force-cache' for SSG
  });
  
  if (!res.ok){
    throw new Error('Failed to fetch products');
  }
  return res.json();
}

export async function getProduct(id: string): Promise<Product | null> {
  const res = await fetch(`https://api.example.com/products/${id}`, {
    next: { revalidate: 3600 } // ISR: Revalidate every hour
  });
  
  if (!res.ok) return null;
  return res.json();
}

// For static generation: get all product IDs
export async function getAllProductIds(): Promise<string[]> {
  const products = await getProducts();
  return products.map(p => p.id);
}