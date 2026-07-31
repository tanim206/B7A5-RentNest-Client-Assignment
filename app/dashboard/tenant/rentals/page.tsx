// import { getRentalRequests } from "./_actions/getRentalRequests";
// import RentalDetailsDialog from "./_components/RentalDetailsDialog";
import PaymentButton from "./_components/paymentButton";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getRentalRequests } from "../_actions/getRentalRequests";
import RentalDetailsDialog from "./_components/rentalDetailsDialog";

export default async function TenantRentalRequestPage() {
  const result = await getRentalRequests();

  const rentals = result?.data || [];

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">My Rental Requests</h1>
        <p className="text-muted-foreground">View all your rental requests.</p>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {rentals.length > 0 ? (
              rentals.map((rental: any) => (
                <TableRow key={rental.id}>
                  <TableCell>{rental.properties.title}</TableCell>

                  <TableCell>{rental.properties.location}</TableCell>

                  <TableCell>৳ {rental.properties.price}</TableCell>

                  <TableCell>
                    {new Date(rental.createdAt).toLocaleDateString()}
                  </TableCell>

                  <TableCell>
                    <Badge>{rental.rentalStatus}</Badge>
                  </TableCell>

                  <TableCell className="flex gap-2">
                    <RentalDetailsDialog rental={rental} />

                    {rental.rentalStatus === "APPROVED" && (
                      <PaymentButton rentalRequestId={rental.id} />
                    )}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="py-10 text-center">
                  No Rental Requests Found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
