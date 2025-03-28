

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@components/ui/accordion";

const Questions = () => {
  return (
    <div className="md:w-[60%]">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="bg-[#d2edff] px-4 rounded-md mb-4">
          <AccordionTrigger className="text-lg">How do I book an appointment?</AccordionTrigger>
          <AccordionContent>
          You can book an appointment by selecting your preferred doctor and available time slot on our website. Simply follow the on-screen instructions to confirm your booking.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="bg-[#d2edff] px-4 rounded-md mb-4">
          <AccordionTrigger className="text-lg">Do I need to create an account to book an appointment?</AccordionTrigger>
          <AccordionContent>
          Yes, creating an account helps us store your medical history and appointment records for future reference.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="bg-[#d2edff] px-4 rounded-md mb-4">
          <AccordionTrigger className="text-lg">Can I choose a specific doctor?</AccordionTrigger>
          <AccordionContent>
          Yes, you can browse through our list of doctors and choose the one that best suits your needs.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="bg-[#d2edff] px-4 rounded-md mb-4">
          <AccordionTrigger className="text-lg">How do I join a virtual consultation?</AccordionTrigger>
          <AccordionContent>
          Once you book an appointment, you will receive a link via email or SMS. Click on the link at the scheduled time to join the consultation.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Questions;
