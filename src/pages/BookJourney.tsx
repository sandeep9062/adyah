import { useState } from "react";
import { motion } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { Send } from "lucide-react";
import { toast } from "sonner";

const services = [
  "Physiotherapy",
  "Breast & Lymphatic Care",
  "Face Reading",
  "Past Life Regression",
  "Hatha Yoga",
  "Sahaja Yoga",
];

const BookJourney = () => {
  const [date, setDate] = useState<Date | undefined>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your booking request has been sent. We'll be in touch soon.");
    setName("");
    setEmail("");
    setService("");
    setDate(undefined);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-maroon py-24 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-light text-primary-foreground"
          >
            Book Your Journey
          </motion.h1>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 bg-warm-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <SectionReveal>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-body text-xs uppercase tracking-widest text-muted-foreground mb-2">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-transparent border-b border-border py-3 font-body text-foreground focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs uppercase tracking-widest text-muted-foreground mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-transparent border-b border-border py-3 font-body text-foreground focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs uppercase tracking-widest text-muted-foreground mb-2">Service</label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    required
                    className="w-full bg-transparent border-b border-border py-3 font-body text-foreground focus:border-accent focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="mt-8 flex items-center gap-3 px-10 py-4 bg-accent text-accent-foreground font-body text-sm uppercase tracking-[0.15em] hover:bg-red-glow transition-colors"
                >
                  <Send size={16} />
                  Send Request
                </button>
              </form>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-4">Select a Preferred Date</p>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className={cn("rounded-lg border border-border bg-background p-4 pointer-events-auto")}
                  disabled={(d) => d < new Date()}
                />
                {date && (
                  <p className="mt-4 font-body text-sm text-foreground">
                    Selected: <span className="text-accent font-medium">{date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</span>
                  </p>
                )}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookJourney;
