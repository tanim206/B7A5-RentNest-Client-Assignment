import { getRentalRequests } from "../_actions/getRentalRequests";
import RentalRequestCard from "../_components/rentalReqCard";

const TenantRentalRequestPage = async () => {
  const result = await getRentalRequests();

  const rentals = result?.data || [];

  return (
    <section className="container mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">My Rental Requests</h1>

        <p className="text-muted-foreground">
          View all your submitted rental requests.
        </p>
      </div>

      {rentals.length === 0 ? (
        <div className="rounded-lg border py-20 text-center">
          No Rental Requests Found
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {rentals.map((rental: any) => (
            <RentalRequestCard key={rental.id} rental={rental} />
          ))}
        </div>
      )}
    </section>
  );
};

export default TenantRentalRequestPage;
