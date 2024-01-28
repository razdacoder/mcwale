import Heading from "@/components/ui/Heading";
import Link from "next/link";
import Faq from "./faq-list";

export default function FAQPage() {
  return (
    <div className="px-4 container">
      <div className="py-12 flex flex-col lg:gap-y-6">
        <span className="inline-flex text-muted-foreground text-sm  gap-x-3">
          <Link href="/">Home</Link>|<Link href="/info">Info</Link>|
          <span className="font-medium text-primary">Help & FAQs</span>
        </span>
      </div>
      <section className="">
        <Heading className="text-left text-xl normal-case">Help & FAQs</Heading>

        <Faq />
      </section>
    </div>
  );
}
