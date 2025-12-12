import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "मुख्य पृष्ठ", href: "/" },
    { label: "गावाची माहिती", href: "/village-profile" },
    { label: "समिती", href: "/committee" },
    { label: "योजना", href: "/schemes" },
    { label: "विकास कामे", href: "/works" },
    { label: "सेवा", href: "/services" },
    { label: "गॅलरी", href: "/gallery" },
    { label: "सरकारी अधिकारी", href: "/govt-officials" },
    { label: "संपर्क", href: "/contact" },
  ];

  return (
    <>


      {/* Main Header */}
      <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo/Title */}
            <Link to="/" className="flex items-center gap-3 flex-1">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-primary">ग्र</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold leading-tight">देवळी (पेंढरी)</h1>
                <p className="text-xs opacity-90">ग्रामपंचायत</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="px-3 py-2 text-sm font-medium rounded-md hover:bg-primary-foreground/10 transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-primary-foreground/10 rounded-md"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <nav className="md:hidden mt-4 flex flex-col gap-2 border-t border-primary-foreground/20 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="px-3 py-2 text-sm font-medium rounded-md hover:bg-primary-foreground/10 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
