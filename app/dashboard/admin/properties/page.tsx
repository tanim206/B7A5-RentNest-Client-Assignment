import { getAdminProperties } from "../_actions/getAdminProperties";
import AdminPropertyList from "../_components/adminPropertyList";

export default async function AdminPropertiesPage() {
  const result = await getAdminProperties();
  const properties = result?.data?.properties || [];

  return (
    <section className="container mx-auto space-y-6 py-8">
      <div>
        <h1 className="text-3xl font-bold">All Properties</h1>
        <p className="text-muted-foreground">
          Manage and review every property from the admin panel.
        </p>
      </div>

      <AdminPropertyList properties={properties} />
    </section>
  );
}
