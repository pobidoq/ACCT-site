import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { ContactForm } from "@/components/contact-form";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#05060a] text-[#f5f7ff] font-sans selection:bg-[#4fd1c5]/30 selection:text-[#4fd1c5]">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ContactForm />
      </main>
      
      <footer className="py-8 border-t border-white/5 bg-[#0a0c12]">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-display font-bold text-white">pobidoq</span>
            <span>© 2026</span>
          </div>
          <div className="flex gap-6 text-xs text-muted-foreground uppercase tracking-wider">
            <a href="#" className="hover:text-[#4fd1c5] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#4fd1c5] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#4fd1c5] transition-colors">Twitter</a>
            <a href="#" className="hover:text-[#4fd1c5] transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
