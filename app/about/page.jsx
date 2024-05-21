import { Link } from "@/components/ui/link";
import Image from "next/image";

export const metadata = {
  title: "About Us",
  description:
    "the Lincoln Leek is a newspaper focused on making journalism open, enabling stories from anyone to be heard by all.",
};

export default function SubmitPage() {
  return (
    <div className="prose prose-stone mt-24 flex w-full max-w-none justify-center p-6 md:p-12 dark:prose-invert xl:prose-xl prose-h1:text-7xl">
      <div className="z-10 w-full">
        <h1 className="font-heading italic">About Us</h1>

        <p>
          We are <span className="font-heading italic">the Lincoln Leek</span>,
          a newspaper focused on making journalism open, enabling stories from
          anyone to be heard by all.
        </p>

        <p>
          Our mission is to decentralize the journalism scene at Lincoln High
          School and make anyone, regardless of class or affiliation, to publish
          their thoughts in a safe and open environment. To further this
          mission, we have established{" "}
          <Link href="/guidelines">guidelines</Link> that ensure that all
          published articles do not promote hate in any form (ex: racism,
          transphobia, homophobia, etc) and generally help create a safe space
          for all.
        </p>

        <div className="relative h-full w-full">
          <Image alt="" src="/brand/leek-logo-main.svg" fill={true} />
        </div>
      </div>
    </div>
  );
}
