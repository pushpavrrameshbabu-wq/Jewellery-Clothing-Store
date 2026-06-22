"use client";

import Link from "next/link";

interface CartSummaryProps {
  subtotal: number;
  taxRate?: number;
  shippingCost: number;
  itemCount: number;
}

export default function CartSummary({
  subtotal,
  taxRate = 0.1,
  shippingCost,
  itemCount,
}: CartSummaryProps) {
  const tax = subtotal * taxRate;
  const total = subtotal + tax + shippingCost;

  const handleCheckout = () => {
    // This will be replaced with proper checkout flow in next phase
    const message = `I have ${itemCount} items in my cart worth ₹${total.toFixed(2)}. I want to proceed with checkout.`;
    window.open(
      `https://wa.me/919490731606?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="sticky top-6 bg-zinc-800 rounded-2xl p-6 border border-zinc-700">
      <h2 className="text-xl font-bold text-white mb-6">
        Order Summary
      </h2>

      {/* Summary Lines */}
      <div className="space-y-4 mb-6 pb-6 border-b border-zinc-700">
        <div className="flex justify-between text-zinc-300">
          <span>Subtotal ({itemCount} items)</span>
          <span>₹{subtotal.toLocaleString("en-IN")}</span>
        </div>

        <div className="flex justify-between text-zinc-300">
          <span>Tax (10%)</span>
          <span>₹{tax.toLocaleString("en-IN", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}</span>
        </div>

        <div className="flex justify-between text-zinc-300">
          <span>Shipping</span>
          <span className={shippingCost === 0 ? "text-green-400" : ""}>
            {shippingCost === 0 ? "FREE" : `₹${shippingCost}`}
          </span>
        </div>
      </div>

      {/* Total */}
      <div className="flex justify-between mb-6">
        <span className="text-lg font-semibold text-white">
          Total
        </span>
        <span className="text-2xl font-bold text-green-400">
          ₹{total.toLocaleString("en-IN")}
        </span>
      </div>

      {/* Shipping Info */}
      {subtotal < 500 && (
        <div className="mb-6 p-3 bg-blue-900/30 border border-blue-700 rounded-lg">
          <p className="text-sm text-blue-300">
            🎉 Free shipping on orders above ₹500
          </p>
          <p className="text-xs text-blue-400 mt-1">
            Add ₹{(500 - subtotal).toLocaleString("en-IN")} more to unlock free shipping
          </p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="space-y-3">
        <button
          onClick={handleCheckout}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
        >
          Proceed to Checkout
        </button>

        <Link
          href="/shop"
          className="block w-full text-center border border-zinc-600 hover:border-zinc-500 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
        >
          Continue Shopping
        </Link>
      </div>

      {/* Trust Badges */}
      <div className="mt-6 pt-6 border-t border-zinc-700 text-center text-xs text-zinc-400 space-y-2">
        <p>✓ Secure checkout</p>
        <p>✓ 30-day returns</p>
        <p>✓ Fast delivery</p>
      </div>
    </div>
  );
}
