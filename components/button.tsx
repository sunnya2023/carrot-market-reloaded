"use client";
import { useFormStatus } from "react-dom";

interface IBtnProps {
  text: string;
}

function Button({ text }: IBtnProps) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="primary-btn h-10 disabled:bg-neutral-400 disabled:text-neutral-300 disabled:cursor-not-allowed"
    >
      {pending ? "Loading..." : text}
    </button>
  );
}

export default Button;
