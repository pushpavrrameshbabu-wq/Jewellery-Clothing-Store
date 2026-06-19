import { products } from "../../data/products";

type Props = {
  params: { id: string };
};

export default function ProductById({ params }: Props) {
  const id = params.id;
  const prod = products.find((p) => p.id === id);
  if (!prod)
    return <div className="p-6">Product not found for id: {id}</div>;
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-2xl font-bold">{prod.name}</h1>
      <img src={prod.image} alt={prod.name} className="w-full h-80 object-cover rounded mt-4" />
      <p className="mt-4 text-lg font-semibold">${prod.price.toFixed(2)}</p>
      <p className="mt-4 text-gray-600">Beautiful handcrafted jewellery.</p>
    </div>
  );
}
