"use client";

import { useCart } from "../context/CartProvider";

export default function CartView() {
  const { items, removeItem, clear, totalCount, totalPrice } = useCart();

  if (items.length === 0) return <div className="p-6">Your cart is empty.</div>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Your cart ({totalCount})</h2>
      <ul className="space-y-4">
        {items.map((it) => (
          <li key={it.id} className="flex items-center gap-4">
            <img src={it.image} alt={it.name} className="w-20 h-20 object-cover rounded" />
            <div className="flex-1">
              <div className="font-medium">{it.name}</div>
              <div className="text-sm text-gray-600">Qty: {it.quantity}</div>
            </div>
            <div className="text-right">
              <div>${(it.price * it.quantity).toFixed(2)}</div>
              <button onClick={() => removeItem(it.id)} className="text-sm text-red-600 mt-2">Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex items-center justify-between">
        <div className="font-semibold">Total: ${totalPrice.toFixed(2)}</div>
        <div className="flex gap-2">
          <button onClick={() => clear()} className="px-3 py-2 border rounded">Clear</button>
          <button className="px-3 py-2 bg-indigo-600 text-white rounded">Checkout</button>
        </div>
      </div>
    </div>
  );
}
