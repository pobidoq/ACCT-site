import { motion } from "framer-motion";

export function ProblemSection() {
  return (
    <section id="methodology" className="py-24 bg-[#05060a] border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-display font-bold text-white mb-6">
              The Problem: Documentation Without Durable <span className="text-[#4fd1c5]">Accountability</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              High-stakes investigations, regulatory actions, and public inquiries generate millions of pages of documentation. Yet only a fraction is ever deeply analyzed, every newsroom and NGO rebuilds timelines from scratch, and there is no shared, structured record of what has been questioned, clarified, or resolved. Public documentation exists, but accountability tracking does not.
            </p>
<div className="mt-8 grid sm:grid-cols-3 gap-6">
  <div>
    <h3 className="text-white font-semibold mb-2">Ephemerality</h3>
    <p className="text-sm text-muted-foreground">Document dumps dominate headlines, then disappear into PDFs and archives with no long-term analysis infrastructure.</p>
  </div>
  <div>
    <h3 className="text-white font-semibold mb-2">Fragmentation</h3>
    <p className="text-sm text-muted-foreground">Each investigation rebuilds timelines and entity networks from scratch, duplicating effort across organizations.</p>
  </div>
  <div>
    <h3 className="text-white font-semibold mb-2">Opacity</h3>
    <p className="text-sm text-muted-foreground">The public cannot easily see progress from "exposed" to "addressed," creating accountability theater rather than genuine resolution.</p>
  </div>
</div>           
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
