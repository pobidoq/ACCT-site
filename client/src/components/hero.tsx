import { motion } from "framer-motion";
import { ArrowRight, Database, ShieldCheck, Activity, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative pt-12 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-medium tracking-wider uppercase bg-[#4fd1c5]/10 text-[#4fd1c5] border border-[#4fd1c5]/20">
                PRIVATE BETA
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-medium tracking-wider uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20">
                On-Chain Verified
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                Radical transparency for <span className="text-[#4fd1c5]">public accountability</span>
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-lg">
                pobidoq turns large public document sets into a living map of accountability using structured analysis, Human–AI Review, and on-chain accountability indices.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-2">
              {/* Start Exploring - Scrolls to Contact Form */}
              <Button 
                size="lg" 
                className="h-12 px-8 rounded-full bg-gradient-to-br from-[#4fd1c5] to-[#2f855a] text-[#020305] font-bold hover:shadow-[0_0_25px_rgba(79,209,197,0.4)] transition-all duration-300 border-0"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Start Exploring
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              
              {/* Read Whitepaper - Opens PDF in new tab */}
              <Button 
                size="lg" 
                variant="outline" 
                className="h-12 px-8 rounded-full border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm text-white transition-all"
                onClick={() => window.open('/pobidoq-whitepaper.pdf', '_blank')}
              >
                Read Whitepaper
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground/60 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4fd1c5] animate-pulse" />
              Indexing 14,000+ public sector documents in real-time
            </p>
          </motion.div>

          {/* Right Column: Visualization Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#4fd1c5] to-blue-600 rounded-2xl blur-3xl opacity-20 pointer-events-none" />

            {/* The Panel Card */}
            <div className="relative rounded-2xl border border-white/10 bg-[#101321]/80 backdrop-blur-xl shadow-2xl p-6 overflow-hidden">
              {/* Internal Grid Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(rgba(79,209,197,0.1)_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col gap-6">
                
                {/* Header */}
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <div className="flex items-center gap-3">
                    <Activity className="w-5 h-5 text-[#4fd1c5]" />
                    <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">System Status</span>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] bg-green-500/10 text-green-400 border border-green-500/20">
                    Conceptual Example
                  </span>
                </div>

                {/* Main Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#05060a]/50 border border-white/5 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                      <FileText className="w-4 h-4" />
                      <span className="text-[10px] uppercase tracking-wider font-semibold">Analyzed</span>
                    </div>
                    <div className="text-2xl font-display font-bold text-white">
                      124 <span className="text-sm font-normal text-muted-foreground">GB</span>
                    </div>
                  </div>
                  
                  <div className="bg-[#05060a]/50 border border-white/5 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                      <Database className="w-4 h-4" />
                      <span className="text-[10px] uppercase tracking-wider font-semibold">Entities</span>
                    </div>
                    <div className="text-2xl font-display font-bold text-white">
                      842
                    </div>
                  </div>
                </div>

                {/* Timeline Visualization */}
                <div className="bg-[#090c18] border border-white/5 rounded-xl p-4">
                  <h3 className="text-[11px] uppercase tracking-widest text-muted-foreground mb-4">Latest Ingestion Events</h3>
                  <div className="space-y-4">
                    {[
                      { time: "2m ago", event: "Municipal Bond Audit #4421", status: "Verified" },
                      { time: "15m ago", event: "Infrastructure Spending Report Q3", status: "Processing" },
                      { time: "1h ago", event: "Council Meeting Minutes (Nov)", status: "Archived" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#4fd1c5]" />
                        <span className="text-white/80 flex-1 truncate">{item.event}</span>
                        <span className="text-xs text-muted-foreground whitespace-nowrap">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Accountability Score */}
                <div className="flex items-center justify-between bg-[#4fd1c5]/5 border border-[#4fd1c5]/20 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-8 h-8 text-[#4fd1c5]" />
                    <div>
                      <div className="text-xs text-[#4fd1c5] font-semibold uppercase tracking-wider">Trust Score</div>
                      <div className="text-white/60 text-[10px]">Global Index Average</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold font-display text-white">94.2</div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
