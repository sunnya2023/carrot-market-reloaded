import { resolve } from "path";
import { promise } from "zod";

async function getProduct() {
  return new Promise((resolve) => setTimeout(resolve, 20000));
}

export default async function ProductDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  const loading = await getProduct();
  return <div>Detail{id}</div>;
}
