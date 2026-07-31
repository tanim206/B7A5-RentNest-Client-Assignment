import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import PaymentButton from "../rentals/_components/paymentButton";

export default function RentalRequestCard({ rental }: { rental: any }) {
  const property = rental.properties;
  console.log(rental);

  return (
    <Card>
      <CardContent className="space-y-4 p-6">
        <h2 className="text-xl font-bold">{property.title}</h2>

        <p>{property.location}</p>

        <p>৳ {property.price}</p>

        <Badge>
          {rental.rentalStatus === "APPROVED" && (
            <PaymentButton rentalRequestId={rental.id} />
          )}
        </Badge>
      </CardContent>
    </Card>
  );
}
