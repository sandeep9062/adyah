import React, { useState } from "react";
import { X, MessageCircle, CheckCircle } from "lucide-react";

const EnquiryWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [token, setToken] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Mental Wellness Service",
    message: "", // Added message state
  });

  const generateToken = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `HEAL-${result}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newToken = generateToken();
    setToken(newToken);
    setSubmitted(true);
    // console.log("Form Data:", formData, "Token:", newToken);
  };

  const toggleWidget = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setSubmitted(false);
  };

  return (
    <>
      {/* 1. FLOATING WIDGET BUTTON */}
      <button
        onClick={toggleWidget}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 active:scale-95 group"
      >
        <MessageCircle
          size={28}
          className="group-hover:rotate-12 transition-transform"
        />
        <span className="font-bold pr-2 hidden md:block">Enquire Now</span>
      </button>

      {/* 2. POPUP MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-4xl bg-white overflow-hidden rounded-2xl flex flex-col md:flex-row shadow-2xl animate-in fade-in zoom-in duration-300">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/5 hover:bg-red-600 text-maroon-900 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            {/* Visual Side (Left) */}
            <div className="md:w-1/2 bg-slate-900 relative min-h-[150px] md:min-h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80"
                alt="Healing"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
                <h2 className="text-3xl font-bold text-white leading-tight">
                  Begin Your <br /> Transformation
                </h2>
                <p className="text-gray-300 mt-2 text-sm">
                  Get your unique healing token today.
                </p>
              </div>
            </div>

            {/* Form Side (Right) - Scrollable for mobile if content is long */}
            <div className="md:w-1/2 p-8 lg:p-12 bg-white flex flex-col justify-center overflow-y-auto max-h-[90vh]">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Service Inquiry
                  </h3>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full border-b-2 border-gray-100 focus:border-red-600 outline-none py-2 transition-all"
                      placeholder="John Doe"
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        className="w-full border-b-2 border-gray-100 focus:border-red-600 outline-none py-2 transition-all"
                        placeholder="hello@healing.com"
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">
                        Interested In
                      </label>
                      <select
                        className="w-full bg-transparent border-b-2 border-gray-100 focus:border-red-600 py-2 outline-none cursor-pointer"
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                      >
                        <option>Mental Wellness Service</option>
                        <option>Face Reading</option>
                        <option>Past Life Regression</option>
                        <option>Breathing Techniques</option>
                        <option>Sahaja Yoga</option>
                      </select>
                    </div>
                  </div>

                  {/* New Message Input */}
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">
                      Your Message
                    </label>
                    <textarea
                      rows="3"
                      className="w-full border-b-2 border-gray-100 focus:border-red-600 outline-none py-2 transition-all resize-none"
                      placeholder="How can we help you?"
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg mt-2"
                  >
                    SUBMIT ENQUIRY
                  </button>
                </form>
              ) : (
                <div className="text-center py-6">
                  <div className="flex justify-center mb-4">
                    <CheckCircle size={54} className="text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Success!
                  </h3>
                  <p className="text-gray-500 mt-2">Your healing token:</p>
                  <div className="mt-4 p-4 bg-slate-50 rounded-lg border-2 border-dashed border-slate-200">
                    <span className="text-2xl font-mono font-bold text-red-600">
                      {token}
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="mt-8 bg-slate-900 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EnquiryWidget;
