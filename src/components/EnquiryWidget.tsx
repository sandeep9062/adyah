import React, { useState } from "react";
import { MessageCircle, CheckCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const SERVICE_OPTIONS = [
  "Mental Wellness Service",
  "Face Reading",
  "Past Life Regression",
  "Breathing Techniques",
  "Sahaja Yoga",
] as const;

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const EnquiryWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [token, setToken] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Mental Wellness Service" as string,
    message: "",
  });

  const generateToken = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `HEAL-${result}`;
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      setSubmitted(false);
      setErrors({});
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: { name?: string; email?: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    // Simulate submit delay (replace with real API call)
    setTimeout(() => {
      setToken(generateToken());
      setSubmitted(true);
      setIsSubmitting(false);
    }, 800);
  };

  const inputBase =
    "w-full border-b-2 bg-transparent py-2 outline-none transition-all placeholder:text-gray-400 focus:border-red-vibrant";
  const inputError = "border-red-vibrant/50 focus:border-red-vibrant";

  return (
    <>
      {/* Floating widget button - min 44px touch target, brand colors */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open enquiry form"
        className="fixed bottom-6 right-6 z-50 flex min-h-[44px] min-w-[44px] items-center gap-3 bg-red-vibrant p-4 text-white shadow-[0_8px 32px_rgba(0,0,0,0.2)] transition-all hover:scale-105 hover:bg-red-vibrant/90 hover:shadow-[0_12px 40px_rgba(0,0,0,0.25)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-vibrant focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-full group md:min-w-0"
      >
        <MessageCircle
          size={28}
          className="shrink-0 group-hover:rotate-12 transition-transform"
        />
        <span className="font-bold pr-2 hidden md:block">Enquire Now</span>
      </button>

      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogContent
          className="max-w-4xl p-0 flex flex-col md:flex-row gap-0 overflow-hidden border-0 bg-white rounded-2xl"
          aria-describedby={undefined}
        >
          <DialogTitle className="sr-only">Service Enquiry</DialogTitle>
          <DialogDescription className="sr-only">
            Submit your enquiry and receive a unique healing token.
          </DialogDescription>

          {/* Visual side (left) */}
          <div className="md:w-1/2 bg-maroon-deep relative min-h-[150px] md:min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80"
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-60"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/90 to-transparent p-8 flex flex-col justify-end">
              <h2 className="font-display text-3xl font-bold text-white leading-tight">
                Begin Your <br /> Transformation
              </h2>
              <p className="text-white/80 mt-2 text-sm">
                Get your unique healing token today.
              </p>
            </div>
          </div>

          {/* Form side (right) */}
          <div className="md:w-1/2 p-8 lg:p-12 bg-white flex flex-col justify-center overflow-y-auto max-h-[90vh]">
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 text-left"
                noValidate
              >
                <h3
                  id="enquiry-title"
                  className="text-xl font-bold text-maroon-deep mb-2"
                >
                  Service Enquiry
                </h3>

                <div className="space-y-1">
                  <label
                    htmlFor="enquiry-name"
                    className="text-[10px] uppercase tracking-widest font-bold text-gray-500"
                  >
                    Full Name <span className="text-red-vibrant">*</span>
                  </label>
                  <input
                    id="enquiry-name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    placeholder="John Doe"
                    className={cn(
                      inputBase,
                      "border-gray-200",
                      errors.name && inputError
                    )}
                    aria-required
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "enquiry-name-error" : undefined}
                  />
                  {errors.name && (
                    <p
                      id="enquiry-name-error"
                      className="text-xs text-red-vibrant"
                      role="alert"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label
                      htmlFor="enquiry-email"
                      className="text-[10px] uppercase tracking-widest font-bold text-gray-500"
                    >
                      Email Address <span className="text-red-vibrant">*</span>
                    </label>
                    <input
                      id="enquiry-email"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, email: e.target.value }))
                      }
                      placeholder="hello@healing.com"
                      className={cn(
                        inputBase,
                        "border-gray-200",
                        errors.email && inputError
                      )}
                      aria-required
                      aria-invalid={!!errors.email}
                      aria-describedby={
                        errors.email ? "enquiry-email-error" : undefined
                      }
                    />
                    {errors.email && (
                      <p
                        id="enquiry-email-error"
                        className="text-xs text-red-vibrant"
                        role="alert"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="enquiry-service"
                      className="text-[10px] uppercase tracking-widest font-bold text-gray-500"
                    >
                      Interested In
                    </label>
                    <select
                      id="enquiry-service"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          service: e.target.value,
                        }))
                      }
                      className={cn(
                        inputBase,
                        "border-gray-200 cursor-pointer"
                      )}
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="enquiry-message"
                    className="text-[10px] uppercase tracking-widest font-bold text-gray-500"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="enquiry-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, message: e.target.value }))
                    }
                    className={cn(
                      inputBase,
                      "border-gray-200 resize-none"
                    )}
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-vibrant hover:bg-red-vibrant/90 disabled:opacity-70 text-white font-bold py-4 rounded-lg transition-all shadow-[0_4px_20px_rgba(0,0,0,0.15)] active:scale-[0.98] mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-vibrant focus-visible:ring-offset-2 min-h-[44px]"
                >
                  {isSubmitting ? "Sending…" : "SUBMIT ENQUIRY"}
                </button>
              </form>
            ) : (
              <div className="text-center py-6">
                <div className="flex justify-center mb-4">
                  <CheckCircle
                    size={54}
                    className="text-red-vibrant"
                    aria-hidden
                  />
                </div>
                <h3 className="font-display text-2xl font-bold text-maroon-deep">
                  Success!
                </h3>
                <p className="text-maroon-deep/70 mt-2">
                  We&apos;ll be in touch within 24–48 hours.
                </p>
                <p className="text-gray-500 mt-1 text-sm">
                  Your healing token:
                </p>
                <div className="mt-4 p-4 bg-sand/50 rounded-lg border-2 border-dashed border-maroon-deep/10">
                  <span className="text-2xl font-mono font-bold text-red-vibrant">
                    {token}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleOpenChange(false)}
                  className="mt-8 min-h-[44px] px-6 py-2 rounded-full text-sm font-semibold bg-maroon-deep text-white hover:bg-maroon-deep/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon-deep focus-visible:ring-offset-2"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EnquiryWidget;
