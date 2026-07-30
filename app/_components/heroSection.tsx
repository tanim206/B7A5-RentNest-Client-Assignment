import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Home, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-50 via-white to-white">
      {/* Background Blur */}
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-green-200/40 blur-[120px]" />

      <div className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-sm">
            <Building2 className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium text-slate-700">
              Trusted by Landlords & Tenants
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl">
            Find Your Perfect
            <span className="block text-green-600">Rental Home</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            RentNest helps tenants discover verified properties and empowers
            landlords to manage rentals effortlessly—all in one modern platform.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="rounded-xl px-8">
              <Link href="/properties">
                Explore Properties
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-xl px-8"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-lg">
              <Home className="mx-auto mb-4 h-10 w-10 text-green-600" />
              <h3 className="text-3xl font-bold text-slate-900">500+</h3>
              <p className="mt-2 text-slate-500">Verified Properties</p>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-lg">
              <Building2 className="mx-auto mb-4 h-10 w-10 text-green-600" />
              <h3 className="text-3xl font-bold text-slate-900">150+</h3>
              <p className="mt-2 text-slate-500">Trusted Landlords</p>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-lg">
              <ShieldCheck className="mx-auto mb-4 h-10 w-10 text-green-600" />
              <h3 className="text-3xl font-bold text-slate-900">100%</h3>
              <p className="mt-2 text-slate-500">Secure Booking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
