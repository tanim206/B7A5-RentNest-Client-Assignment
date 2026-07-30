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
    <Card className="overflow-hidden rounded-xl transition hover:shadow-xl">
      <div className="flex h-52 items-center justify-center bg-slate-100">
        <Home className="h-14 w-14 text-slate-400" />
      </div>

      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="line-clamp-1">{property.title}</CardTitle>

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

      <CardContent className="space-y-4">
        <p className="line-clamp-3 text-sm text-muted-foreground">
          {property.description}
        </p>

        <div className="flex items-center justify-between">
          <Badge variant="outline">{property.propertyType}</Badge>

          <div className="flex items-center gap-1 font-semibold">
            <DollarSign size={16} />৳ {property.price}
          </div>
        </div>

        <div className="flex gap-2">
          <Button asChild className="flex-1">
            <Link href={`/properties/${property.id}`}>View Details</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            disabled={property.availabilityStatus !== "AVAILABLE"}
          >
            <Link href={`/booking/${property.id}`}>Request</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
