// import { getLandlordRequests } from "../../landlord/request/_actions/getLandlordRequests";
// import RequestCard from "../../landlord/request/_components/RequestCard";

import { getLandlordRequests } from "./_actions/getLandlordRequests";
import RequestCard from "./_components/RequestCard";

export default async function LandlordRequestsPage() {
  const result = await getLandlordRequests();

  const rentals = result?.data || [];

  return (
    <section className="container mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Rental Requests</h1>

        <p className="text-muted-foreground">Requests for your properties.</p>
      </div>

      {rentals.length === 0 ? (
        <div className="rounded-lg border py-20 text-center">
          No Rental Requests
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-2">
          {rentals.map((rental: any) => (
            <RequestCard key={rental.id} rental={rental} />
          ))}
        </div>
      )}
    </section>
  );
}
