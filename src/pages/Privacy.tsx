import SectionReveal from "@/components/SectionReveal";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-maroon-deep">
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <SectionReveal>
            <span className="text-red-vibrant font-bold tracking-widest text-xs uppercase">
              Legal
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-light mt-2 mb-12">
              Privacy Policy
            </h1>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="font-body space-y-8 text-maroon-deep/90 leading-relaxed">
              <p className="text-sm uppercase tracking-widest text-maroon-deep/60">
                Last updated: March 2025
              </p>
              <p>
                At ADYAH Connecting Souls, we respect your privacy. This policy
                describes how we collect, use, and protect your personal
                information when you use our services or visit our website.
              </p>
              <div>
                <h2 className="font-display text-xl font-semibold text-maroon-deep mt-10 mb-4">
                  Information We Collect
                </h2>
                <p>
                  We may collect information you provide when you book a session,
                  complete an enquiry form, or contact us. This may include your
                  name, email address, phone number, and any message you send.
                </p>
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold text-maroon-deep mt-10 mb-4">
                  How We Use Your Information
                </h2>
                <p>
                  We use your information to respond to enquiries, manage
                  bookings, and improve our services. We do not sell or share
                  your data with third parties for marketing purposes.
                </p>
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold text-maroon-deep mt-10 mb-4">
                  Contact
                </h2>
                <p>
                  For questions about this privacy policy, please contact us at{" "}
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

export default Privacy;
