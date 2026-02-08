import { motion } from "framer-motion";
import { Search, BrainCircuit, Link as LinkIcon, Lock, Users, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Structured Analysis",
    description: "Ingest PDFs, emails, and scanned contracts. Our engine parses unstructured data into queryable JSON formats.",
    tags: ["OCR", "NLP", "Semantic Search"]
  },
  {
    icon: BrainCircuit,
    title: "Human–AI Review",
    description: "AI flags anomalies; human experts verify them. A dual-layer consensus mechanism ensures 99.9% accuracy.",
    tags: ["Consensus", "RLHF", "Audit Trails"]
  },
  {
    icon: LinkIcon,
    title: "On-Chain Indices",
    description: "Finalized accountability scores are hashed and anchored on-chain for immutable historical record keeping.",
    tags: ["Ethereum", "Merkle Proofs", "Smart Contracts"]
  },
  {
    icon: Lock,
    title: "Permissioned Privacy",
    description: "Sensitive data is encrypted. Public verification happens via Zero-Knowledge Proofs without revealing raw PII.",
    tags: ["ZKP", "Encryption", "GDPR"]
  },
  {
    icon: Users,
    title: "Community Governance",
    description: "Token holders vote on data schemas and audit parameters to self govern. A decentralized approach to truth.",
    tags: ["DAO", "Voting", "Proposals"]
  },
  {
    icon: BarChart3,
    title: "Real-time Dashboards",
    description: "Visualize spending efficiency and compliance metrics across thousands of public entities instantly.",
    tags: ["Analytics", "Visualizations", "Alerts"]
  }
];

export function Features() {
  return (
    <section className="py-24 bg-[#0a0c12]" id="infrastructure">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            The Infrastructure of <span className="text-[#4fd1c5]">Truth</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            We've built a multi-layered stack designed to handle the complexity of public sector documentation while guaranteeing the integrity of the output.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl bg-[#101321] border border-white/5 hover:border-[#4fd1c5]/30 transition-all hover:bg-[#15192b]"
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#4fd1c5]/10 text-[#4fd1c5] group-hover:bg-[#4fd1c5] group-hover:text-black transition-colors">
                <feature.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 font-display">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {feature.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {feature.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-black/40 text-white/40 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
