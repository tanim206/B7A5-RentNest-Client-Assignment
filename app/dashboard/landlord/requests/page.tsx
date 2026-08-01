import { getLandlordRequests } from "./_actions/getLandlordRequests";
import RequestCard from "./_components/RequestCard";
import { Inbox } from "lucide-react";

export default async function LandlordRequestsPage() {
  const result = await getLandlordRequests();
  const rentals = result?.data || [];

  return (
    <section className="container mx-auto space-y-8 py-8 px-4 max-w-7xl">
      {/* Header Section */}
      <div className="border-b border-slate-100 pb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          Rental Requests
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Review and respond to incoming rental applications for your
          properties.
        </p>
      </div>

      {/* Empty State vs Request List */}
      {rentals.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 py-20 text-center space-y-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#1868cd]">
            <Inbox size={24} />
          </div>
          <p className="text-sm font-semibold text-slate-700">
            No Rental Requests Found
          </p>
          <p className="text-xs text-slate-400 max-w-xs">
            When tenants apply for your properties, their applications will show
            up here.
          </p>
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
