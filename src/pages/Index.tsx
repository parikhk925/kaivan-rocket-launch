import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import CustomPackageForm from "@/components/CustomPackageForm";
import AddOns from "@/components/AddOns";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Packages />
      <CustomPackageForm />
      <AddOns />
      <About />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
