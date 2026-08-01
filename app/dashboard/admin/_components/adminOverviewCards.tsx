import Link from "next/link";
import { Building2, FileText, Users } from "lucide-react";

export default function AdminOverviewCards({
  propertiesCount,
  rentalRequestsCount,
  usersCount,
}: {
  propertiesCount: number;
  rentalRequestsCount: number;
  usersCount: number;
}) {
  const cards = [
    {
      title: "Properties",
      value: propertiesCount,
      icon: Building2,
      href: "/dashboard/admin/properties",
    },
    {
      title: "Rental Requests",
      value: rentalRequestsCount,
      icon: FileText,
      href: "/dashboard/admin/rentals",
    },
    {
      title: "Users",
      value: usersCount,
      icon: Users,
      href: "/dashboard/admin/users",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <Link
            key={card.title}
            href={card.href}
            className="rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{card.title}</p>
                <p className="mt-2 text-2xl font-semibold">{card.value}</p>
              </div>
              <div className="rounded-lg bg-slate-100 p-3">
                <Icon className="h-5 w-5 text-slate-700" />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
