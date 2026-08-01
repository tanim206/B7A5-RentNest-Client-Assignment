
import { IProperty } from "@/lib/types";

import { getMyProperties } from "./_actions/getProperty";
import PropertyCard from "./_components/propertyCard";

const PropertiesPage = async () => {
  const result = await getMyProperties();
  console.log(result)

  const properties: IProperty[] = result?.data?.properties || [];

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Properties</h1>
        <p className="mt-2 text-muted-foreground">
          Browse all rental properties.
        </p>
      </div>

      {properties.length === 0 ? (
        <div className="rounded-xl border py-20 text-center">
          <h2 className="text-xl font-semibold">No Properties Found</h2>
          <p className="text-muted-foreground mt-2">
            No properties are available right now.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </section>
  );
};

export default PropertiesPage;
