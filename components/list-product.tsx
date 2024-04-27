import Image from "next/image";
import Link from "next/link";
import { formatToTimeAgo, formatToWon } from "../app/lib/utility";

interface IListProudct {
  title: string;
  price: number;
  photo: string;
  created_at: Date;
  id: number;
}

export default function ListProduct({
  title,
  price,
  photo,
  created_at,
  id,
}: IListProudct) {
  return (
    <Link href={`/products/${id}`} className="flex gap-5">
      <div className="relative size-28 rounded-md overflow-hidden">
        <Image fill src={photo} alt={title} />
      </div>
      <div className="flex flex-col gap-1 *:text-white">
        <span className="text-lg">{title}</span>
        <span className="text-sm text-neutral-500">
          {formatToTimeAgo(created_at.toString())}
        </span>
        <span className="text-lg font-semibold">{formatToWon(price)}원</span>
      </div>
    </Link>
  );
}
