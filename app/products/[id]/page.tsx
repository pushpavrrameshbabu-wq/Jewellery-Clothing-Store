import { notFound } from "next/navigation";
import AddToCart from "../../components/AddToCart";
import { products } from "../../data/products";

type Props = { params: { id: string } };

export default function ProductPage({ params }: Props) {
  const prod = products.find((p) => p.id === params.id);
  if (!prod) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="text-xl font-bold">Debug: product not found</h2>
        <pre className="mt-4 bg-gray-100 p-4 rounded">{JSON.stringify({ params, ids: products.map(p => p.id) }, null, 2)}</pre>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={prod.image} alt={prod.name} className="w-full h-[420px] object-cover rounded" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{prod.name}</h1>
          <p className="mt-4 text-lg font-semibold">${prod.price.toFixed(2)}</p>
          <p className="mt-4 text-gray-600">Beautiful handcrafted jewellery.</p>
          <AddToCart product={prod} />
        </div>
      </div>
    </div>
  );
}
