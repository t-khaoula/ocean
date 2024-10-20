import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-end gap-2 ">
      <Image src="/logo.png" alt="logo" width={32} height={32} />
      <div className="relative">
        <h1 className="capitalize text-white font-bold text-xl tracking-wide">
          Ocean
        </h1>
        <div className="absolute -right-2.5 bottom-1.5 w-2 h-2 rounded-full bg-sky-700"></div>
      </div>
    </Link>
  );
};
