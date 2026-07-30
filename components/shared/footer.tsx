import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Logo & Tagline */}
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-[#0B132B] tracking-tight">
              RentNest.
            </h2>
            <p className="text-xs text-slate-500">
              Property management made simple.
            </p>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-600">
            <li>
              <Link
                href="/properties"
                className="hover:text-indigo-600 transition-colors"
              >
                Properties
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-indigo-600 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-indigo-600 transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="hover:text-indigo-600 transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>

          {/* Copyright */}
          <div className="text-xs text-slate-400">
            © {new Date().getFullYear()} RentNest. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
