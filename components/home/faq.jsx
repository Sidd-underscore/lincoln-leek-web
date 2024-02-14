import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "../ui/link";

const qs = [
  {
    question: "Why does this exist?",
    answer: (
      <span>
        Our current school newspaper, the Cardinal Times, is exclusive to
        students in the Communications class. While this is an incredible
        opportunity to those students, others also want to let their voice be
        heard. Thus, we wanted to create a newspaper that could grant anyone who
        can write the ability to be heard. Hence, the{" "}
        <span className="font-heading italic">Leek</span> was born! You can
        learn more in our &quot;<Link href="/about">About</Link>&quot; page.
      </span>
    ),
  },
  {
    question: "How do I submit an article?",
    answer: (
      <span>
        Head to <Link href="/submit">the submit page</Link> to send your article
        to us. We will review it against our{" "}
        <Link href="/guidelines">guidelines</Link>, and, if it passes, we will
        publish it! Note that further email communication may be required.
      </span>
    ),
  },
  {
    question: "Are there any rules to what can be published?",
    answer: (
      <span>
        Yes! We do have certain <Link href="/guidelines">guidelines</Link> to
        make sure we don&apos;t spread hate. In summary, be kind and use common
        sense: don&apos;t be racist, homophobic, transphobic, etc.
      </span>
    ),
  },
];

export function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {qs.map((q, index) => (
        <AccordionItem key={q.question} value={q.question}>
          <AccordionTrigger className="text-base font-semibold">
            {q.question}
          </AccordionTrigger>
          <AccordionContent>{q.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
