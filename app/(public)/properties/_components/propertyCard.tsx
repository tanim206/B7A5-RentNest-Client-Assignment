import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Home, MapPin, DollarSign } from "lucide-react";
import { IProperty } from "@/lib/types";

type Props = {
  property: IProperty;
};

export default function PublicPropertyCard({ property }: Props) {
  return (
    <Card className="overflow-hidden rounded-xl border transition-all hover:-translate-y-1 hover:shadow-xl">
      {/* Property Image Placeholder */}
      <div className="flex h-52 items-center justify-center bg-slate-100">
        <Home className="h-14 w-14 text-slate-400" />
      </div>

      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="line-clamp-1 text-xl">
            {property.title}
          </CardTitle>

          <Badge
            variant={
              property.availabilityStatus === "AVAILABLE"
                ? "default"
                : "secondary"
            }
          >
            {property.availabilityStatus}
          </Badge>
        </div>

        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin size={16} />
          {property.location}
        </p>
      </CardHeader>

      <CardContent className="space-y-5">
        <p className="line-clamp-3 text-sm text-muted-foreground">
          {property.description}
        </p>

        <div className="flex items-center justify-between">
          <Badge variant="outline">{property.propertyType}</Badge>

          <div className="flex items-center gap-1 text-lg font-semibold">
            <DollarSign size={16} />৳ {property.price}
          </div>
        </div>

        <Button asChild className="w-full">
          <Link href={`/properties/${property.id}`}>View Details</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
