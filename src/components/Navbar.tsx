import { Logo } from "./Logo";
import { Navlink } from "@/constants/Navlink";
import Link from "next/link";
import { MobileNav } from "./MobileNav";

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900/50 backdrop-blur-md z-30">
      <div className="relative container py-6 flex justify-between transition-all">
        <Logo />
        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-8 capitalize ">
          {Navlink.map((link, index) => (
            <Link
              key={index}
              href={`#${link}`}
              className="text-sm font-semibold tracking-wide text-slate-200"
            >
              {link}
            </Link>
          ))}
        </nav>
        {/* Mobile navigation */}
        <MobileNav></MobileNav>
      </div>
    </header>
  );
};
