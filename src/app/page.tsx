import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CTABanner from "@/components/CTABanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import ClientLogos from "@/components/ClientLogos";
import FAQ from "@/components/FAQ";
import AppointmentBooking from "@/components/AppointmentBooking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <CTABanner
          eyebrow="Talk to us"
          heading="Support that doesn't stop at launch"
          description="Most vendors disappear after handoff. We stay on to monitor, maintain, and iterate, so the system keeps working as your organization grows."
          image="/ai.jpg"
          secondaryLabel="View Pricing"
          secondaryHref="#pricing"
        />
        <WhyChooseUs />
        <About />
        <Testimonials />
        <Pricing />
        <ClientLogos />
        <FAQ />
        <CTABanner
          eyebrow="Ready when you are"
          heading="Ready to build your organization's next state?"
          description="Tell us what you're working with today, and we'll show you what's possible next."
          image="/cta.jpg"
          secondaryLabel="See Our Work"
          secondaryHref="/work"
        />
        <AppointmentBooking />
      </main>
      <Footer />
    </>
  );
}
