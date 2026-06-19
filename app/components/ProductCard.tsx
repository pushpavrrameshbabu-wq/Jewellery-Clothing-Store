"use client";

import Link from "next/link";
import { useCart } from "../context/CartProvider";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="rounded-lg border p-4 bg-white flex flex-col">
      <Link href={`/product?id=${product.id}`} className="block w-full h-48 overflow-hidden rounded">
        <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
      </Link>
      <h3 className="mt-3 text-lg font-medium">{product.name}</h3>
      <p className="mt-1 text-sm text-gray-600">${product.price.toFixed(2)}</p>
      <div className="mt-3">
        <button
          onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.image })}
          className="w-full rounded bg-indigo-600 text-white py-2 text-sm hover:bg-indigo-700"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
