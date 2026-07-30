import DashboardPropertyCard from "../_components/landloadPropertyCard";
import { IProperty } from "@/lib/types";
import { getlandloardProperties } from "./_actions/landloadgetProperty";

const landloardPropertiesPage = async () => {
  const result = await getlandloardProperties();

  const properties: IProperty[] = result?.data?.properties || [];

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">My Properties</h1>
        <p className="text-muted-foreground">Manage your listed properties.</p>
      </div>

      {properties.length === 0 ? (
        <div className="rounded-xl border py-20 text-center">
          <h2 className="text-xl font-semibold">No Property Founhgjhghgd</h2>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {properties.map((property) => (
            <DashboardPropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </section>
  );
};

export default landloardPropertiesPage;
