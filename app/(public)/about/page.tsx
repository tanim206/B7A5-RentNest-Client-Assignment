import {
  Building2,
  Home,
  ShieldCheck,
  Users,
  Search,
  HeartHandshake,
  BadgeCheck,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  const features = [
    {
      icon: Search,
      title: "Easy Property Search",
      description:
        "Find apartments, houses, and rental properties with powerful search and filtering.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Platform",
      description:
        "Verified landlords and secure booking process ensure a trusted experience.",
    },
    {
      icon: Building2,
      title: "Verified Properties",
      description:
        "Browse quality properties with complete details and transparent pricing.",
    },
    {
      icon: HeartHandshake,
      title: "Trusted Community",
      description:
        "Connecting landlords and tenants with confidence and convenience.",
    },
  ];

  return (
    <main className="bg-slate-50">
      {/* Hero */}
      <section className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            About RentNest
          </span>

          <h1 className="mt-6 text-5xl font-extrabold tracking-tight">
            Find Your Perfect Home With Confidence
          </h1>

          <p className="mt-6 text-lg text-muted-foreground">
            RentNest is a modern property rental platform connecting trusted
            landlords with verified tenants. Our mission is to simplify renting
            by making property discovery, booking, and management secure,
            transparent, and effortless.
          </p>

          <Button size="lg" className="mt-8">
            Explore Properties
          </Button>
        </div>
      </section>

      {/* About */}
      <section className="container mx-auto grid gap-10 px-6 py-20 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold">Who We Are</h2>

          <p className="mt-6 leading-8 text-muted-foreground">
            RentNest is designed to create a seamless experience for both
            landlords and tenants. Whether you're looking for your dream
            apartment or managing multiple rental properties, our platform
            provides all the tools needed to make renting simple and efficient.
          </p>

          <p className="mt-5 leading-8 text-muted-foreground">
            From property listings and secure booking requests to real-time
            management and transparent communication, RentNest brings everything
            together in one place.
          </p>
        </div>

        <Card className="rounded-3xl">
          <CardContent className="flex h-full items-center justify-center p-16">
            <Home className="h-40 w-40 text-green-600" />
          </CardContent>
        </Card>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold">What Makes RentNest Different?</h2>

          <p className="mt-4 text-muted-foreground">
            Everything you need for a smooth rental experience.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item) => (
            <Card
              key={item.title}
              className="rounded-2xl transition hover:-translate-y-2 hover:shadow-xl"
            >
              <CardContent className="space-y-5 p-8">
                <item.icon className="h-12 w-12 text-green-600" />

                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-green-600 py-20 text-white">
        <div className="container mx-auto grid gap-10 px-6 text-center md:grid-cols-4">
          <div>
            <h3 className="text-5xl font-bold">500+</h3>
            <p className="mt-3">Properties Listed</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">120+</h3>
            <p className="mt-3">Verified Landlords</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">1000+</h3>
            <p className="mt-3">Happy Tenants</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">99%</h3>
            <p className="mt-3">Customer Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="container mx-auto grid gap-8 px-6 py-20 lg:grid-cols-2">
        <Card className="rounded-3xl">
          <CardContent className="p-10">
            <BadgeCheck className="mb-6 h-12 w-12 text-green-600" />

            <h2 className="text-3xl font-bold">Our Mission</h2>

            <p className="mt-5 leading-8 text-muted-foreground">
              To provide a transparent, secure, and user-friendly platform where
              landlords and tenants can connect without hassle.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl">
          <CardContent className="p-10">
            <Users className="mb-6 h-12 w-12 text-green-600" />

            <h2 className="text-3xl font-bold">Our Vision</h2>

            <p className="mt-5 leading-8 text-muted-foreground">
              To become the most trusted rental platform by delivering reliable
              services, verified listings, and a seamless rental journey.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 pb-24">
        <Card className="rounded-3xl bg-green-600 text-white">
          <CardContent className="py-20 text-center">
            <h2 className="text-4xl font-bold">
              Ready to Find Your Next Home?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-green-100">
              Explore hundreds of verified rental properties and connect with
              trusted landlords through RentNest.
            </p>

            <Button asChild size="lg" variant="secondary" className="mt-8">
              <Link href="/properties">Browse Properties</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
