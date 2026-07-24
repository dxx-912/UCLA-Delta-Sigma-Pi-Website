import type { Metadata } from "next";
import OffersExplorer from "@/components/OffersExplorer";

export const metadata: Metadata = {
  title: "Our Offers — UCLA Delta Sigma Pi",
};

export default function OffersPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1100px] px-6 py-20">
        <header className="text-center">
          <h1 className="font-display text-4xl font-bold text-ink sm:text-5xl">
            Our Offers
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-neutral-600">
            Check out the great offers that our brothers at Delta Sigma Pi have
            received over the years. Professional excellence is the standard at
            our fraternity and we take immense pride in placing our members
            wherever they want to go.
          </p>
        </header>

        <div className="mt-12">
          <OffersExplorer />
        </div>
      </div>
    </div>
  );
}
