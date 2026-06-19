import { products } from "../../data/products";

export default function Product1Static() {
  const p = products.find((x) => x.id === "1");
  if (!p) return null;
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-2xl font-bold">{p.name}</h1>
      <img src={p.image} alt={p.name} className="w-full h-80 object-cover rounded mt-4" />
      <p className="mt-4 text-lg font-semibold">${p.price.toFixed(2)}</p>
      <p className="mt-4 text-gray-600">Beautiful handcrafted jewellery.</p>
    </div>
  );
}
