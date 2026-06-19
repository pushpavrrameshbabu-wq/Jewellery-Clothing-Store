"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "../context/CartProvider";

export default function Header() {
  const { totalCount } = useCart();
  const [q, setQ] = useState("");

  return (
    <header className="w-full border-b bg-white/60 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold">Ultimate Collections</Link>
        <div className="flex items-center gap-4">
          <form action="/" method="get" className="hidden sm:block">
            <input
              name="q"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search products..."
              className="border rounded px-3 py-1 text-sm"
            />
          </form>
          <nav className="flex gap-4 items-center">
            <Link href="/cart" className="text-sm hover:underline">
              Cart ({totalCount})
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
