import { getAdminRentalRequests } from "../_actions/getAdminRentalRequests";
import AdminRentalRequestList from "../_components/adminRentalRequestList";

export default async function AdminRentalsPage() {
  const result = await getAdminRentalRequests();
  const rentalRequests = result?.data || [];

  return (
    <section className="container mx-auto space-y-6 py-8">
      <div>
        <h1 className="text-3xl font-bold">Rental Requests</h1>
        <p className="text-muted-foreground">
          Review tenant requests and their current status.
        </p>
      </div>

      <AdminRentalRequestList requests={rentalRequests} />
    </section>
  );
}
