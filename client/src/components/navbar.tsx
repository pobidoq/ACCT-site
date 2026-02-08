import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#05060a]/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <Link href="/">
          <a className="flex items-center gap-3 group">
            {/* Fixed gradient syntax to use arbitrary values for Tailwind v4 compatibility */}
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[radial-gradient(circle_at_20%_20%,#7fffd4,#276b63)] shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_16px_40px_rgba(0,0,0,0.65)] transition-transform group-hover:scale-105">
              <span className="font-display font-bold text-[#020305] text-lg">p</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-sm font-semibold uppercase tracking-wider text-white">pobidoq</span>
              <span className="text-[10px] text-muted-foreground">Accountability-RWA</span>
            </div>
          </a>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {["Methodology", "Live Indices", "Docs", "Governance"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors relative group py-1"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:flex text-muted-foreground hover:text-white">
            Sign In
          </Button>
          <Button className="bg-gradient-to-br from-[#4fd1c5] to-[#2f855a] text-[#020305] font-semibold hover:shadow-[0_0_20px_rgba(79,209,197,0.3)] hover:scale-105 transition-all duration-300 border-0">
            Request Access
          </Button>
        </div>
      </div>
    </header>
  );
}
