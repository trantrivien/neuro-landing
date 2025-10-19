import About from "@/components/About";
import Documentation from "@/components/Documentation";
import FaqComponent from "@/components/FaqComponent";
import HeroBanner from "@/components/HeroBanner";
import Partners from "@/components/Partners";
import Powers from "@/components/Powers";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="">
      <HeroBanner />
      <About />
      <Services />
      <Powers />
      <Partners />
      <Documentation />
      <FaqComponent />
    </div>
  );
}
