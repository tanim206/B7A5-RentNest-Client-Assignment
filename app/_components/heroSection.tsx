import Link from "next/link";
import { Search, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600')] bg-cover bg-center opacity-15" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 py-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm text-white backdrop-blur">
            🏡 Find Your Next Rental Home
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Find the Perfect Place
            <span className="block text-emerald-400">to Call Home.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Browse verified rental properties, connect with trusted landlords,
            and move into your dream home with confidence.
          </p>

          {/* Search Box */}
          <div className="mt-10 rounded-2xl bg-white p-4 shadow-2xl">
            <div className="grid gap-4 md:grid-cols-[1fr_auto]">
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                <input
                  type="text"
                  placeholder="Search by location..."
                  className="h-12 w-full rounded-xl border border-slate-200 pl-12 pr-4 outline-none focus:border-emerald-500"
                />
              </div>

              <button className="flex h-12 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-8 font-semibold text-white transition hover:bg-emerald-700">
                <Search className="h-5 w-5" />
                Search
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/properties"
              className="rounded-xl bg-emerald-600 px-8 py-3 font-semibold text-white transition hover:bg-emerald-700"
            >
              Browse Properties
            </Link>

            <Link
              href="/auth/register"
              className="rounded-xl border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Get Started
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-10">
            <div>
              <h3 className="text-3xl font-bold text-white">500+</h3>
              <p className="text-slate-300">Properties</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">1K+</h3>
              <p className="text-slate-300">Happy Tenants</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">150+</h3>
              <p className="text-slate-300">Landlords</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
