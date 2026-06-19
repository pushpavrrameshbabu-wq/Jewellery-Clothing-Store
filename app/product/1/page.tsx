import { redirect } from "next/navigation";

export default function Product1Static() {
  redirect('/product?id=1');
}
