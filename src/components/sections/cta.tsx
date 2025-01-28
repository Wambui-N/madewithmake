import React from "react";
import CTAButton from "../cta_button";

const cta = () => {
  return (
    <section className="container mx-auto py-8 text-center">
      <h2 className="from-sky mb-6 mt-4 bg-gradient-to-r to-[#7DCFE6] bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
        Start Today with a Free 30-Min
        <br />
        Discovery Call
      </h2>
      <p className="mx-auto mb-8 max-w-2xl text-xl text-grey">
        No pressure, no strings—just a quick chat to explore how automation can
        transform your business. Let's make things easier for you!
      </p>
      <div>
        <CTAButton />
      </div>
    </section>
  );
};

export default cta;
