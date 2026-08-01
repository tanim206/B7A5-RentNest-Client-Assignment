import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Get in Touch
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            Have questions about a property or need assistance? Reach out to us
            and our team will get back to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Info Cards Side */}
          <div className="space-y-4 lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-blue-50 text-[#1868cd] flex items-center justify-center shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Call Us</h4>
                <p className="text-xs text-slate-500 mt-1">+880 1700-000000</p>
                <p className="text-xs text-slate-400">Mon - Sat, 9am - 8pm</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-blue-50 text-[#1868cd] flex items-center justify-center shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Email Us</h4>
                <p className="text-xs text-slate-500 mt-1">
                  support@rentalhome.com
                </p>
                <p className="text-xs text-slate-400">
                  Response within 24 hours
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-blue-50 text-[#1868cd] flex items-center justify-center shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Office Address
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Gulshan, Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm lg:col-span-2">
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#1868cd]/20 focus:border-[#1868cd] transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#1868cd]/20 focus:border-[#1868cd] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Inquiry about rental properties"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#1868cd]/20 focus:border-[#1868cd] transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#1868cd]/20 focus:border-[#1868cd] transition-all resize-none"
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full sm:w-auto rounded-xl bg-[#1868cd] hover:bg-slate-900 text-white px-8 py-3 text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-300"
              >
                <Send size={14} />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
