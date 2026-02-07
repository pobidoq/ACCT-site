import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  organization: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log(values);
    toast({
      title: "Request Received",
      description: "We'll be in touch with your access credentials shortly.",
    });
    
    setIsSubmitting(false);
    form.reset();
  }

  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#4fd1c5]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 bg-[#101321]/80 backdrop-blur-md border border-white/5 rounded-3xl p-8 lg:p-12 shadow-2xl">
          
          <div>
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Get Early Access
            </h2>
            <p className="text-muted-foreground mb-8">
              We are currently onboarding partners for our private beta. If you represent a public entity, research institution, or auditing firm, please reach out.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#4fd1c5]/10 flex items-center justify-center text-[#4fd1c5] shrink-0 mt-1">
                  1
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Request API Keys</h4>
                  <p className="text-sm text-muted-foreground">Access our raw data streams via REST or GraphQL.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#4fd1c5]/10 flex items-center justify-center text-[#4fd1c5] shrink-0 mt-1">
                  2
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Integration Support</h4>
                  <p className="text-sm text-muted-foreground">Direct line to our engineering team for setup.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#4fd1c5]/10 flex items-center justify-center text-[#4fd1c5] shrink-0 mt-1">
                  3
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Governance Rights</h4>
                  <p className="text-sm text-muted-foreground">Early partners get voting weight in the protocol DAO.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#05060a]/50 p-6 rounded-2xl border border-white/5">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Jane Doe" className="bg-[#101321] border-white/10 focus:border-[#4fd1c5]/50 text-white" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="jane@institute.org" className="bg-[#101321] border-white/10 focus:border-[#4fd1c5]/50 text-white" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="organization"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Organization (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Research Institute / Gov" className="bg-[#101321] border-white/10 focus:border-[#4fd1c5]/50 text-white" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your use case..." 
                          className="bg-[#101321] border-white/10 focus:border-[#4fd1c5]/50 text-white min-h-[100px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-[#4fd1c5] to-[#2f855a] text-[#020305] font-bold hover:shadow-lg transition-all"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <span className="flex items-center gap-2">Submit Request <Send className="w-3 h-3" /></span>}
                </Button>
              </form>
            </Form>
          </div>

        </div>
      </div>
    </section>
  );
}
