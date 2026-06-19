import { products } from "../../data/products";

export default function Product1() {
  const p = products.find((x) => x.id === "1");
  if (!p) return null;
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-2xl font-bold">Static product 1: {p.name}</h1>
      <img src={p.image} alt={p.name} className="w-full h-80 object-cover rounded mt-4" />
      <p className="mt-4">${p.price.toFixed(2)}</p>
    </div>
  );
}
