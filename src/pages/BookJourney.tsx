import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { Send, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const services = [
  "Physiotherapy",
  "Breathing Techniques",
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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) {
      toast.error("Please select a preferred date.");
      return;
    }
    // Simulation of a loading state could go here
    setIsSubmitted(true);
    toast.success("Manifestation received. We will reach out soon.");

    // Reset after delay
    setTimeout(() => {
      setName("");
      setEmail("");
      setService("");
      setDate(undefined);
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-[#FDFCF9] selection:bg-accent/10">
      {/* 1. Refined Hero Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <SectionReveal direction="none">
            <span className="text-accent font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">
              Reservation
            </span>
            <h1 className="font-display text-6xl md:text-8xl font-light text-gray-900 tracking-tighter">
              Begin Your{" "}
              <span className="italic font-serif text-accent">Ascent</span>
            </h1>
            <p className="mt-6 text-gray-500 font-body max-w-xl mx-auto leading-relaxed">
              Select your path and preferred timing. Our practitioners will
              curate the space specifically for your energy.
            </p>
          </SectionReveal>
        </div>
        {/* Subtle background element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent -z-10" />
      </section>

      {/* 2. Main Booking Interface */}
      <section className="pb-32 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white border border-black/5 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] rounded-[2.5rem] overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left Side: Form Inputs */}
                <div className="lg:col-span-7 p-8 md:p-16 lg:p-20">
                  <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        onSubmit={handleSubmit}
                        className="space-y-10"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                          <div className="relative group">
                            <label className="block font-body text-[10px] uppercase tracking-widest text-gray-400 mb-2 group-focus-within:text-accent transition-colors">
                              Full Name
                            </label>
                            <input
                              type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="John Doe"
                              required
                              className="w-full bg-transparent border-b border-gray-200 py-3 font-body text-gray-900 focus:border-accent focus:outline-none transition-all placeholder:text-gray-200"
                            />
                          </div>
                          <div className="relative group">
                            <label className="block font-body text-[10px] uppercase tracking-widest text-gray-400 mb-2 group-focus-within:text-accent transition-colors">
                              Email Address
                            </label>
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="hello@sanctuary.com"
                              required
                              className="w-full bg-transparent border-b border-gray-200 py-3 font-body text-gray-900 focus:border-accent focus:outline-none transition-all placeholder:text-gray-200"
                            />
                          </div>
                        </div>

                        <div className="group">
                          <label className="block font-body text-[10px] uppercase tracking-widest text-gray-400 mb-4 group-focus-within:text-accent transition-colors">
                            Selected Service
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {services.map((s) => (
                              <button
                                key={s}
                                type="button"
                                onClick={() => setService(s)}
                                className={cn(
                                  "px-4 py-3 text-[11px] rounded-full border transition-all duration-300",
                                  service === s
                                    ? "bg-accent text-white border-accent shadow-lg shadow-accent/20"
                                    : "bg-transparent border-gray-200 text-gray-500 hover:border-accent/50 hover:text-accent",
                                )}
                              >
                                {s}
                              </button>
                            ))}
                          </div>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          className="w-full md:w-auto flex items-center justify-center gap-4 px-12 py-5 bg-gray-900 text-white font-body text-[11px] uppercase tracking-[0.3em] rounded-full hover:bg-accent transition-colors shadow-2xl"
                        >
                          Request Consultation <ArrowRight size={14} />
                        </motion.button>
                      </motion.form>
                    ) : (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="h-full flex flex-col items-center justify-center text-center py-20"
                      >
                        <div className="w-20 h-20 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-6">
                          <CheckCircle2 size={40} />
                        </div>
                        <h3 className="font-display text-4xl mb-4">
                          Request Sent
                        </h3>
                        <p className="text-gray-500 max-w-xs mx-auto">
                          The stars are aligning. We have received your request
                          and will reach out via email within 24 hours.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Right Side: Calendar Visual */}
                <div className="lg:col-span-5 bg-[#F9F7F2] p-8 md:p-12 lg:p-16 border-l border-black/5">
                  <div className="h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-8">
                      <Sparkles size={16} className="text-accent" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                        Availability
                      </span>
                    </div>

                    <div className="bg-white rounded-3xl p-6 shadow-sm border border-black/5">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="w-full"
                        disabled={(d) => d < new Date()}
                        classNames={{
                          day_selected:
                            "bg-accent text-white hover:bg-accent hover:text-white rounded-full",
                          day_today:
                            "bg-gray-100 text-accent rounded-full font-bold",
                        }}
                      />
                    </div>

                    <div className="mt-auto pt-10">
                      <AnimatePresence>
                        {date ? (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-6 rounded-2xl bg-white border border-accent/20 flex items-center justify-between shadow-sm shadow-accent/5"
                          >
                            <div>
                              <p className="text-[10px] uppercase text-gray-400 mb-1">
                                Proposed Date
                              </p>
                              <p className="font-display text-xl text-gray-900">
                                {date.toLocaleDateString("en-US", {
                                  month: "long",
                                  day: "numeric",
                                  year: "numeric",
                                })}
                              </p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-accent/5 flex items-center justify-center">
                              <CheckCircle2 size={18} className="text-accent" />
                            </div>
                          </motion.div>
                        ) : (
                          <p className="text-sm text-gray-400 italic text-center">
                            Please select a date on the calendar to proceed.
                          </p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-20 text-center border-t border-black/5">
        <p className="text-[10px] uppercase tracking-[0.6em] text-gray-300">
          Privacy • Intent • Transformation
        </p>
      </section>
    </div>
  );
};

export default BookJourney;
