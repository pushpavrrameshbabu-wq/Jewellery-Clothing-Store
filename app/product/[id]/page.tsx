import { products } from "../../../src/lib/products";

export const dynamic = 'force-dynamic';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductById({ params }: Props) {
  const { id } = await params;
  const prod = products.find((p) => p.id === id);
  if (!prod) {
    return <div className="p-6">Product not found for id: {id}</div>;
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={prod.image} alt={prod.name} className="w-full h-[420px] object-cover rounded" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{prod.name}</h1>
          {prod.category && <p className="mt-2 text-sm text-gray-500">{prod.category}</p>}
          <p className="mt-4 text-lg font-semibold">${prod.price.toFixed(2)}</p>
          <p className="mt-4 text-gray-600">{prod.description || "Premium quality handcrafted jewellery."}</p>
          <div className="mt-6 flex gap-3">
            <a 
              href={`https://wa.me/9490731606?text=Hi, I'm interested in ${prod.name} (₹${prod.price})`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded bg-green-500 text-white px-4 py-3 text-center font-medium hover:bg-green-600"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
