import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  ShieldCheck,
  Users,
  Search,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  Target,
  Compass,
} from "lucide-react";

export default function AboutPage() {
  const stats = [
    { label: "Active Properties", value: "2,500+" },
    { label: "Happy Tenants", value: "10,000+" },
    { label: "Verified Landlords", value: "1,200+" },
    { label: "Cities Covered", value: "15+" },
  ];

  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#1868cd]" />,
      title: "Verified Listings",
      description:
        "Every property and landlord is thoroughly verified to ensure safety and prevent fake listings.",
    },
    {
      icon: <Search className="w-6 h-6 text-[#1868cd]" />,
      title: "Smart Search & Filters",
      description:
        "Easily find your dream home using advanced filters like price range, location, and property type.",
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#1868cd]" />,
      title: "Seamless Communication",
      description:
        "Connect directly with landlords or tenants, manage rental requests, and handle agreements effortlessly.",
    },
  ];

  const values = [
    "Transparency in all rental processes",
    "Zero hidden fees for tenants",
    "Secure & instant rental requests",
    "Dedicated 24/7 customer support",
  ];

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white border-b border-slate-100 py-16 sm:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
            <Badge
              variant="outline"
              className="bg-blue-50 text-[#1868cd] border-blue-200 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5"
            >
              <Sparkles size={14} /> Reimagining Rental Solutions
            </Badge>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Finding Your Next Home Should Be{" "}
              <span className="text-[#1868cd]">Simple & Transparent</span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We connect tenants with verified landlords directly—eliminating
              middleman hassles, hidden fees, and fraudulent listings.
              Modernizing rent management for everyone.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Button
                asChild
                className="bg-[#1868cd] hover:bg-[#1455a8] text-white font-semibold rounded-xl px-6 h-11 shadow-md shadow-blue-500/20"
              >
                <Link href="/properties" className="flex items-center gap-2">
                  Browse Properties <ArrowRight size={16} />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold rounded-xl px-6 h-11"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="space-y-1 p-4 rounded-2xl bg-slate-50/60 border border-slate-100"
              >
                <p className="text-2xl sm:text-4xl font-extrabold text-[#1868cd]">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm font-medium text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION SECTION */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Box: Mission */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1868cd] flex items-center justify-center">
                <Target size={24} />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Our Mission</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                To empower house hunters and landlords with an intuitive,
                reliable, and secure platform that makes renting property as
                effortless as a few clicks.
              </p>
            </div>

            {/* Right Box: Vision */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1868cd] flex items-center justify-center">
                <Compass size={24} />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Our Vision</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                To become the most trusted real-estate marketplace, creating a
                transparent ecosystem where renting is completely hassle-free,
                secure, and accessible to all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE FEATURES SECTION */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Why Choose Our Platform?
            </h2>
            <p className="text-slate-500 text-sm">
              We combine modern technology with user-centric design to deliver
              an unparalleled rental experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-slate-200/80 bg-slate-50/30 hover:bg-white hover:shadow-md transition-all duration-300 space-y-3"
              >
                <div className="p-3 w-fit rounded-xl bg-blue-50 border border-blue-100">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COMMITMENT & VALUES SECTION */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 sm:p-12 shadow-xl grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30 px-3 py-1 text-xs">
                Our Guarantee
              </Badge>
              <h2 className="text-2xl sm:text-4xl font-bold leading-tight">
                Built on Trust, Reliability & Convenience
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Whether you are a tenant looking for a comfortable home or a
                landlord seeking trustworthy occupants, our platform bridges the
                gap safely.
              </p>
            </div>

            <div className="space-y-3 bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION (CTA) */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Ready to Find Your Next Home?
          </h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto">
            Join thousands of happy tenants and landlords today. Browse our
            available property listings now.
          </p>
          <div className="pt-2">
            <Button
              asChild
              className="bg-[#1868cd] hover:bg-[#1455a8] text-white font-semibold rounded-xl px-8 h-12 shadow-lg shadow-blue-500/20"
            >
              <Link href="/properties">Explore Properties</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
