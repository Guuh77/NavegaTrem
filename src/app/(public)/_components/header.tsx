import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[999] py-4 px-8 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo*/}
        <Link href="/" className="text-3xl font-bold flex-1 text-center">
          Navega<span className="text-purple-800">Trem</span>
        </Link>

        {/* Menu Desktop*/}
        <nav className="hidden md:flex gap-20 text-lg font-bold flex-1 justify-center">
          <ul className="flex gap-20">
            <li className="hover:text-purple-500 cursor-pointer">Início</li>
            <li className="hover:text-purple-400 cursor-pointer">Sobre</li>
            <li className="hover:text-purple-400 cursor-pointer">Planos</li>
            <li className="hover:text-purple-400 cursor-pointer">Contato</li>
          </ul>
        </nav>

        {/* Ações (Login + Menu Mobile) */}
        <div className="flex items-center gap-6">
          {/* Botão Login (desktop) */}
          <Button className="bg-purple-800 text-white px-6 py-2 rounded-md font-medium hover:bg-purple-700 hidden md:block">
            Login
          </Button>

          {/* Menu Mobile */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                className="text-black hover:text-purple-700 md:hidden"
                size="icon"
                variant="ghost"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="p-8">
              {/* Botão de fechar */}
              <div className="flex justify-end">
                <SheetClose asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-black hover:text-purple-700"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </SheetClose>
              </div>

              {/* Menu Mobile */}
              <nav className="flex flex-col gap-8 mt-6 text-lg font-semibold">
                <SheetClose asChild><Link href="/">Início</Link></SheetClose>
                <SheetClose asChild><Link href="/">Sobre</Link></SheetClose>
                <SheetClose asChild><Link href="/">Planos</Link></SheetClose>
                <SheetClose asChild><Link href="/">Contato</Link></SheetClose>
                <SheetClose asChild>
                  <Button className="bg-purple-800 text-white mt-4 px-8 py-2">Login</Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
