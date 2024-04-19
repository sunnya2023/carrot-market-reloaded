import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function SocialLogin() {
  return (
    <>
      <div className="w-full h-px bg-neutral-500" />

      <div className="flex flex-col gap-3">
        <Link
          href="/github/start"
          className="primary-btn flex h-10 items-center justify-center gap-2"
        >
          <img src="/github.svg" className="size-6" />
          <span>Continue with Github</span>
        </Link>

        <Link
          href="/sms"
          className="primary-btn flex h-10 items-center justify-center gap-2"
        >
          <span>
            <ChatBubbleOvalLeftEllipsisIcon className="size-6" />
          </span>
          <span>Continue with SMS </span>
        </Link>
      </div>
    </>
  );
}

export default SocialLogin;
