import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Search,
  MapPin,
  Building2,
  Home as HomeIcon,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  UserCheck,
  KeyRound,
  Compass,
} from "lucide-react";

export default function HomePage() {
  const propertyTypes = [
    {
      name: "Apartment",
      icon: <Building2 className="w-5 h-5 text-[#1868cd]" />,
      count: "1,200+ Listings",
    },
    {
      name: "Family House",
      icon: <HomeIcon className="w-5 h-5 text-[#1868cd]" />,
      count: "850+ Listings",
    },
    {
      name: "Bachelor Flat",
      icon: <UserCheck className="w-5 h-5 text-[#1868cd]" />,
      count: "450+ Listings",
    },
    {
      name: "Commercial",
      icon: <Compass className="w-5 h-5 text-[#1868cd]" />,
      count: "300+ Listings",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Search & Discover",
      description:
        "Browse verified rental listings based on your preferred location, budget, and amenities.",
    },
    {
      step: "02",
      title: "Send Request",
      description:
        "Submit a rental application directly to the landlord with a single click.",
    },
    {
      step: "03",
      title: "Move In",
      description:
        "Get approved, sign agreements safely, and step into your new ideal home.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* 1. HERO SECTION WITH SEARCH BAR */}
      <section className="relative overflow-hidden bg-white border-b border-slate-100 py-16 sm:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
            <Badge
              variant="outline"
              className="bg-blue-50 text-[#1868cd] border-blue-200 px-3.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5"
            >
              <Sparkles size={14} /> Smart & Transparent Rentals
            </Badge>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Discover a Home That Fits Your{" "}
              <span className="text-[#1868cd]">Lifestyle</span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Find verified apartments, houses, and bachelor flats without
              brokerage hassles. Direct connection between landlords and
              tenants.
            </p>

            {/* Floating Search Card */}
            <div className="w-full max-w-2xl bg-white p-3 sm:p-4 rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/50 space-y-3 mt-4">
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <div className="relative flex-1 w-full">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <Input
                    placeholder="Enter city, area, or location..."
                    className="pl-10 h-11 bg-slate-50/80 border-slate-200 rounded-xl text-xs sm:text-sm focus-visible:ring-[#1868cd]"
                  />
                </div>
                <Button
                  asChild
                  className="bg-[#1868cd] hover:bg-[#1455a8] text-white font-semibold rounded-xl h-11 px-6 w-full sm:w-auto shadow-md shadow-blue-500/20"
                >
                  <Link
                    href="/properties"
                    className="flex items-center justify-center gap-2"
                  >
                    <Search size={16} /> Search Homes
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORIES / PROPERTY TYPES */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {propertyTypes.map((type, index) => (
              <div
                key={index}
                className="group p-5 rounded-2xl border border-slate-200/80 bg-slate-50/40 hover:bg-white hover:border-blue-200 hover:shadow-md transition-all duration-300 flex items-center gap-4 cursor-pointer"
              >
                <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 group-hover:bg-[#1868cd] group-hover:text-white transition-colors">
                  {type.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                    {type.name}
                  </h3>
                  <p className="text-xs text-slate-500">{type.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-7xl space-y-12">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <Badge className="bg-blue-50 text-[#1868cd] border-blue-200 px-3 py-1 text-xs">
              Simple Process
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              How It Works
            </h2>
            <p className="text-slate-500 text-sm">
              Renting a property has never been this easy and straightforward.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((item, index) => (
              <div
                key={index}
                className="relative bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4"
              >
                <span className="text-3xl font-black text-[#1868cd]/20">
                  {item.step}
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US (FEATURE HIGHLIGHT) */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-blue-50 text-[#1868cd] border-blue-200 px-3 py-1 text-xs">
                Trusted Experience
              </Badge>
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
                Designed to Make Renting Safe, Fast & Stress-Free
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                We remove unnecessary friction between tenants and owners. Enjoy
                verified properties, instant status updates, and transparent
                transactions.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "100% verified properties & genuine owners",
                  "No hidden broker fees or surprise charges",
                  "Instant status tracking for your rental requests",
                  "Direct in-app status updates and actions",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-slate-700">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Button
                  asChild
                  className="bg-[#1868cd] hover:bg-[#1455a8] text-white font-semibold rounded-xl px-6 h-11"
                >
                  <Link href="/about" className="flex items-center gap-2">
                    Learn More About Us <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-6 bg-slate-50/70 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="p-3 w-fit rounded-xl bg-blue-50 text-[#1868cd]">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  Verified Badges
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Properties inspected for real listings and active owners.
                </p>
              </div>

              <div className="p-6 bg-slate-50/70 rounded-2xl border border-slate-200/80 space-y-3">
                <div className="p-3 w-fit rounded-xl bg-blue-50 text-[#1868cd]">
                  <KeyRound size={20} />
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  Instant Booking
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Apply directly and get landlord decisions smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION (CTA) */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 sm:p-12 shadow-xl text-center space-y-6 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight">
              Are You a Landlord Looking to Rent Your Property?
            </h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              List your property today and reach thousands of verified tenants
              looking for their next home.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Button
                asChild
                className="bg-[#1868cd] hover:bg-[#1455a8] text-white font-semibold rounded-xl px-8 h-12 shadow-lg shadow-blue-500/20"
              >
                <Link href="/properties">
                  Browat Properties
                </Link>
              </Button>
            
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
