"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <Accordion type="single" collapsible className="mt-6">
      {[...Array(6)].map((_, index) => (
        <AccordionItem
          key={index}
          value={`item${index}`}
          className="p-2 md:p-3 mb-3 border shadow-md"
        >
          <AccordionTrigger className="hover:no-underline text-xl md:text-2xl">
            Question?
          </AccordionTrigger>
          <AccordionContent>
            <p className="leading-6 md:leading-8 font-light md:text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
              pariatur harum quas dignissimos debitis ea molestiae dolor sint
              cum, dolore expedita. Eum maxime recusandae adipisci?
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
