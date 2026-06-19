import AddToCart from "../../components/AddToCart";
import { products } from "../../data/products";

export const dynamic = 'force-dynamic';

type Props = {
  params: {
    id: string;
  };
};

export default function ProductById({ params }: Props) {
  const prod = products.find((p) => p.id === params.id);
  if (!prod) {
    return <div className="p-6">Product not found for id: {params.id}</div>;
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
