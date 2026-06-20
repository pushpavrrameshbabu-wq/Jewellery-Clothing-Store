"use client";

import { useState } from "react";
import ProductCard from "./components/ProductCard";
import { products } from "../src/lib/products";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="mx-auto max-w-6xl px-6 py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">
            Ultimate Collections
          </h1>

          <p className="mt-2 text-lg text-gray-700">
            Premium Imitation Jewellery & Fashion Wear
          </p>
        </header>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="border rounded-lg p-3 w-full"
          />

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className="border rounded-lg p-3"
          >
            <option value="All">All Categories</option>
            <option value="Jewellery">Jewellery</option>
            <option value="Handbags">Handbags</option>
            <option value="Sarees">Sarees</option>
            <option value="Kurtis">Kurtis</option>
            <option value="Kids Wear">Kids Wear</option>
          </select>
        </div>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Featured Products
          </h2>

          {filteredProducts.length === 0 ? (
            <p className="text-gray-500">
              No products found.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}