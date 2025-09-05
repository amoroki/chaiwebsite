import { Button } from "./ui/button";
import { Menu, Phone, Mail } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export function Header() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center">
              <span className="text-white text-sm font-bold">CT</span>
            </div>
            <span className="text-xl font-bold text-green-700">ChaiTrade Kenya</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-green-600"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+254 104 173 050</span>
            </div>
            <Button className="bg-green-600 hover:bg-green-700">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-6 mt-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium transition-colors hover:text-green-600"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 border-t">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                    <Phone className="h-4 w-4" />
                    <span>+254 104 173 050</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                    <Mail className="h-4 w-4" />
                    <span>info@chaitrade.co.ke</span>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Get Quote
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}