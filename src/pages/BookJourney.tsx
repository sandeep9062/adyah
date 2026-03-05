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

// Weekday slots 10 AM–7 PM, one hour each (weekdays only)
const TIME_SLOTS = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
] as const;

const isWeekday = (d: Date) => {
  const day = d.getDay();
  return day >= 1 && day <= 5;
};

const BookJourney = () => {
  const [date, setDate] = useState<Date | undefined>();
  const [timeSlot, setTimeSlot] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) {
      toast.error("Please select a preferred date.");
      return;
    }
    if (!isWeekday(date)) {
      toast.error("Booking is available on weekdays only (Mon–Fri).");
      return;
    }
    if (!timeSlot) {
      toast.error("Please select a time slot.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitted(true);
      toast.success("Manifestation received. We will reach out soon.");
      setIsSubmitting(false);
      setTimeout(() => {
        setName("");
        setEmail("");
        setService("");
        setDate(undefined);
        setTimeSlot("");
        setIsSubmitted(false);
      }, 5000);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] selection:bg-red-vibrant/30">
      {/* 1. Hero – theme aligned, header visible from top */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-sand/20 -skew-x-12 translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <SectionReveal direction="none">
            <span className="text-red-vibrant font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">
              Reservation
            </span>
            <h1 className="font-display text-6xl md:text-8xl font-light text-maroon-deep tracking-tight">
              Begin Your{" "}
              <span className="italic font-serif text-red-vibrant">Ascent</span>
            </h1>
            <p className="mt-6 text-muted-foreground font-body max-w-xl mx-auto leading-relaxed text-base">
              Select your path and preferred timing. Our practitioners will
              curate the space specifically for your energy.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* 2. Main Booking Interface */}
      <section className="pb-32 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white border border-maroon-deep/10 shadow-card rounded-2xl overflow-hidden">
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
                            <label className="block font-body text-[10px] uppercase tracking-widest text-muted-foreground mb-2 group-focus-within:text-red-vibrant transition-colors">
                              Full Name
                            </label>
                            <input
                              type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="John Doe"
                              required
                              className="w-full bg-transparent border-b border-maroon-deep/10 py-3 font-body text-maroon-deep focus:border-red-vibrant focus:outline-none transition-all placeholder:text-muted-foreground/60"
                            />
                          </div>
                          <div className="relative group">
                            <label className="block font-body text-[10px] uppercase tracking-widest text-muted-foreground mb-2 group-focus-within:text-red-vibrant transition-colors">
                              Email Address
                            </label>
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="hello@sanctuary.com"
                              required
                              className="w-full bg-transparent border-b border-maroon-deep/10 py-3 font-body text-maroon-deep focus:border-red-vibrant focus:outline-none transition-all placeholder:text-muted-foreground/60"
                            />
                          </div>
                        </div>

                        <div className="group">
                          <label className="block font-body text-[10px] uppercase tracking-widest text-muted-foreground mb-4 group-focus-within:text-red-vibrant transition-colors">
                            Selected Service
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {services.map((s) => (
                              <button
                                key={s}
                                type="button"
                                onClick={() => setService(s)}
                                className={cn(
                                  "px-4 py-3 text-[11px] rounded-xl border transition-all duration-300",
                                  service === s
                                    ? "bg-red-vibrant text-white border-red-vibrant shadow-[0_4px_16px_rgba(220,38,38,0.25)]"
                                    : "bg-transparent border-maroon-deep/20 text-muted-foreground hover:border-red-vibrant/50 hover:text-maroon-deep",
                                )}
                              >
                                {s}
                              </button>
                            ))}
                          </div>
                        </div>

                        <motion.button
                          whileHover={!isSubmitting ? { scale: 1.02 } : undefined}
                          whileTap={!isSubmitting ? { scale: 0.98 } : undefined}
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full md:w-auto min-h-[44px] flex items-center justify-center gap-4 px-12 py-5 rounded-xl bg-maroon-deep text-white font-body text-[11px] uppercase tracking-[0.3em] hover:bg-red-vibrant transition-colors shadow-[0_4px_24px_rgba(0,0,0,0.15)] disabled:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-vibrant focus-visible:ring-offset-2"
                        >
                          {isSubmitting ? "Sending…" : "Request Consultation"} {!isSubmitting && <ArrowRight size={14} />}
                        </motion.button>
                      </motion.form>
                    ) : (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="h-full flex flex-col items-center justify-center text-center py-20"
                      >
                        <div className="w-20 h-20 bg-red-vibrant/10 text-red-vibrant rounded-full flex items-center justify-center mb-6">
                          <CheckCircle2 size={40} />
                        </div>
                        <h3 className="font-display text-4xl mb-4 text-maroon-deep">
                          Request Sent
                        </h3>
                        <p className="text-muted-foreground max-w-xs mx-auto font-body">
                          The stars are aligning. We have received your request
                          and will reach out via email within 24 hours.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Right Side: Calendar Visual */}
                <div className="lg:col-span-5 bg-sand/30 p-8 md:p-12 lg:p-16 border-l border-maroon-deep/10">
                  <div className="h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-8">
                      <Sparkles size={16} className="text-red-vibrant" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                        Availability
                      </span>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-maroon-deep/5">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(d) => {
                          setDate(d);
                          setTimeSlot("");
                        }}
                        className="w-full"
                        disabled={(d) => {
                        const today = new Date();
                        today.setHours(0, 0, 0, 0);
                        const day = new Date(d);
                        day.setHours(0, 0, 0, 0);
                        return day < today || !isWeekday(d);
                      }}
                        classNames={{
                          day_selected:
                            "bg-red-vibrant text-white hover:bg-red-vibrant hover:text-white rounded-full",
                          day_today:
                            "bg-maroon-deep/10 text-red-vibrant rounded-full font-bold",
                        }}
                      />
                    </div>

                    {date && !isWeekday(date) && (
                      <p className="text-sm text-muted-foreground italic text-center font-body mt-4">
                        Booking is available on weekdays only (Mon–Fri).
                      </p>
                    )}

                    {date && isWeekday(date) && (
                      <div className="mt-6">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">
                          Time slot (1 hour)
                        </p>
                        <div className="grid grid-cols-3 gap-2">
                          {TIME_SLOTS.map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setTimeSlot(slot)}
                              className={cn(
                                "py-2.5 text-xs rounded-xl border transition-all duration-200 font-body",
                                timeSlot === slot
                                  ? "bg-red-vibrant text-white border-red-vibrant"
                                  : "bg-white border-maroon-deep/20 text-maroon-deep hover:border-red-vibrant/50",
                              )}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-auto pt-10">
                      <AnimatePresence>
                        {date ? (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-6 rounded-2xl bg-white border border-red-vibrant/20 shadow-sm space-y-2"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-[10px] uppercase text-muted-foreground mb-1">
                                  Date
                                </p>
                                <p className="font-display text-lg text-maroon-deep">
                                  {date.toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                  })}
                                </p>
                              </div>
                              <div className="w-10 h-10 rounded-full bg-red-vibrant/10 flex items-center justify-center shrink-0">
                                <CheckCircle2 size={18} className="text-red-vibrant" />
                              </div>
                            </div>
                            {timeSlot && (
                              <div>
                                <p className="text-[10px] uppercase text-muted-foreground mb-0.5">
                                  Time
                                </p>
                                <p className="font-display text-lg text-maroon-deep">
                                  {timeSlot}
                                </p>
                              </div>
                            )}
                          </motion.div>
                        ) : (
                          <p className="text-sm text-muted-foreground italic text-center font-body">
                            Select a weekday, then a time slot.
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
      <section className="py-16 text-center border-t border-maroon-deep/5">
        <p className="text-[10px] uppercase tracking-[0.6em] text-muted-foreground">
          Privacy • Intent • Transformation
        </p>
      </section>
    </div>
  );
};

export default BookJourney;
