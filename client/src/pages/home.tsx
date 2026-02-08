import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { ContactForm } from "@/components/contact-form";
import { ProblemSection } from "@/components/problem-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#05060a] text-[#f5f7ff] font-sans selection:bg-[#4fd1c5]/30 selection:text-[#4fd1c5]">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <Features />
        <ContactForm />
      </main>
      
      <footer className="py-12 border-t border-white/5 bg-[#0a0c12]">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-sm text-white font-display font-bold">
              pobidoq
            </div>
            <div className="text-xs text-muted-foreground">
              © 2026 pobidoq • Built around accountability, evidence, and verifiable process.
            </div>
          </div>
          <div className="flex flex-wrap gap-6 text-xs text-muted-foreground uppercase tracking-wider font-medium">
            {/* Email Contact */}
            <a href="mailto:pranshoe@gmail.com" className="hover:text-[#4fd1c5] transition-colors">
              Contact
            </a>
            <span className="text-white/10 hidden sm:inline">|</span>
            
            {/* Privacy - Coming Soon */}
            <button 
              onClick={() => alert('Privacy Policy coming soon. For questions, email pranshoe@gmail.com')}
              className="hover:text-[#4fd1c5] transition-colors cursor-pointer"
            >
              Privacy
            </button>
            <span className="text-white/10 hidden sm:inline">|</span>
            
            {/* Terms - Coming Soon */}
            <button 
              onClick={() => alert('Terms of Service coming soon. For questions, email pranshoe@gmail.com')}
              className="hover:text-[#4fd1c5] transition-colors cursor-pointer"
            >
              Terms
            </button>
            <span className="text-white/10 hidden sm:inline">|</span>
            
            {/* LinkedIn - Your Profile */}
            <a 
              href="https://www.linkedin.com/company/nodemints" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#4fd1c5] transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-white/10 hidden sm:inline">|</span>
            
            {/* Twitter/X - Create later */}
            <a 
              href="https://twitter.com/nodemints" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#4fd1c5] transition-colors"
            >
              Twitter
            </a>
            <span className="text-white/10 hidden sm:inline">|</span>
            
            {/* GitHub - Create organization/repo */}
            <a 
              href="https://github.com/pobidoq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#4fd1c5] transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
