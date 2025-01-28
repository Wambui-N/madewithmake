import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Process from "@/components/sections/process";
import FreeAutomation from "@/components/sections/freeAutomation";
import Cta from "@/components/sections/cta";
import Faqs from "@/components/sections/faqs";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Process />
      <FreeAutomation />
      {/* <Faqs /> */}
      <Cta />
    </main>
  );
}
