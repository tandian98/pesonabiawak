import * as React from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "../components/ui/sheet"
import { Menu } from "lucide-react"
import {Logo } from "../assets/icons"

export default function Navbar() {
  const [open, setOpen] = React.useState(false)
  const location = useLocation()

  const navItems = [
    { href: "/", label: "Beranda" },
    { href: "/about", label: "Tentang" },
    {href: "/product", label: "Produk"},
  ]

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 h-20 px-4 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      {/* ↑ Tambahkan fixed, z-50, backdrop-blur */}
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} className="h-16 w-16" />
            <span className="font-bold text-xl">Pesona Biawak</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`font-semibold transition-colors ${
                  location.pathname === item.href
                    ? "text-[#80CC28]"
                    : "text-gray-600 hover:text-[#80CC28]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            
            <SheetContent side="right">
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      to={item.href}
                      className={`text-lg font-medium ${
                        location.pathname === item.href
                          ? "text-purple-600"
                          : "text-gray-600"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}