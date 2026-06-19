import Image from "next/image";

import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="mx-auto max-w-5xl px-6 py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Ultimate Collections</h1>
          <p className="mt-2 text-lg text-gray-700">Premium Imitation Jewellery & Fashion Wear</p>
        </header>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
