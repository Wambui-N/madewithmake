import { Accordion, AccordionTrigger, AccordionContent, AccordionItem } from '@radix-ui/react-accordion'
import React from 'react'

const faqs = () => {
  return (
    <section id="faqs" className="container mx-auto py-20">
        <h2 className="mb-12 text-3xl font-bold">Frequently Asked Questions</h2>
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full max-w-3xl"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              How long does implementation typically take?
            </AccordionTrigger>
            <AccordionContent>
              Implementation time varies based on the complexity of your needs,
              but most projects are completed within 2-4 weeks. We'll provide a
              specific timeline during your discovery call.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              What types of businesses do you work with?
            </AccordionTrigger>
            <AccordionContent>
              We work with service-based businesses of all sizes, from
              solopreneurs to established companies. Our solutions are
              particularly valuable for businesses looking to scale their
              operations efficiently.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Do you provide ongoing support?</AccordionTrigger>
            <AccordionContent>
              Yes, we offer ongoing support and maintenance packages to ensure
              your automations continue to run smoothly and can be adjusted as
              your business grows.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              What makes your AI solutions different?
            </AccordionTrigger>
            <AccordionContent>
              Our AI solutions are custom-built for your specific needs and
              integrated seamlessly with your existing workflows. We focus on
              practical applications that deliver real business value.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
  )
}

export default faqs