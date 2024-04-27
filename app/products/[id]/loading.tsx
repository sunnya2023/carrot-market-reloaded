import { PhotoIcon } from "@heroicons/react/24/solid";

export default function loading() {
  return (
    <div className="animate-pulse p-5 flex flex-col gap-5">
      <div className="aspect-square text-neutral-700 border-neutral-700 border-dashed border-4 rounded-md flex items-center justify-center">
        <PhotoIcon className="h-28" />
      </div>
      <div className="flex gap-2 items-center">
        <div className="size-14 rounded-full bg-neutral-700" />
        <div className="flex flex-col gap-1 *:rounded-md">
          <div className="h-5 w-40 bg-neutral-700" />
          <div className="h-5 w-20 bg-neutral-700" />
        </div>
      </div>
      <div className="h-5 w-80 bg-neutral-700 rounded-md" />
    </div>
  );
}
