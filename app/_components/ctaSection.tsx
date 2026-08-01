import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1868cd] via-[#155ebc] to-[#104b97] p-10 md:p-16 text-white text-center shadow-xl">
          {/* Background Decorative Circles */}
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-xl" />
          <div className="absolute -right-10 -bottom-10 h-60 w-60 rounded-full bg-white/10 blur-2xl" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold md:text-5xl leading-tight">
              Ready to Find Your Next Home?
            </h2>
            <p className="mt-4 text-blue-100 text-base md:text-lg">
              Join thousands of happy tenants and landlords. Start exploring or
              list your property in less than 2 minutes.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#1868cd] hover:bg-slate-100 rounded-xl px-8 font-semibold shadow-md"
              >
                <Link href="/properties">
                  Browse Properties
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

           
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
