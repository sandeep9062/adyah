import SectionReveal from "@/components/SectionReveal";

const Terms = () => {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-maroon-deep">
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <SectionReveal>
            <span className="text-red-vibrant font-bold tracking-widest text-xs uppercase">
              Legal
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-light mt-2 mb-12">
              Terms of Service
            </h1>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="font-body space-y-8 text-maroon-deep/90 leading-relaxed">
              <p className="text-sm uppercase tracking-widest text-maroon-deep/60">
                Last updated: March 2025
              </p>
              <p>
                Welcome to ADYAH Connecting Souls. By using our website and
                services, you agree to these terms. Please read them carefully.
              </p>
              <div>
                <h2 className="font-display text-xl font-semibold text-maroon-deep mt-10 mb-4">
                  Use of Services
                </h2>
                <p>
                  Our services are offered for personal wellness and
                  self-development. You agree to use them in good faith and in
                  accordance with any guidance provided by our practitioners.
                </p>
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold text-maroon-deep mt-10 mb-4">
                  Bookings and Cancellations
                </h2>
                <p>
                  Session bookings may be subject to cancellation policies. We
                  will communicate these at the time of booking. Please contact
                  us to reschedule or cancel.
                </p>
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold text-maroon-deep mt-10 mb-4">
                  Contact
                </h2>
                <p>
                  For questions about these terms, please contact us at{" "}
                  <a
                    href="mailto:hello@adyah.com"
                    className="text-red-vibrant hover:underline"
                  >
                    hello@adyah.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </SectionReveal>

        </div>
      </section>
    </div>
  );
};

export default Terms;
