import { getUsers } from "../_actions/getUsers";
import UserTable from "../_components/userTable";

export default async function AdminUsersPage() {
  const result = await getUsers();

  const users = result?.data?.result || [];

  return (
    <section className="container mx-auto py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Manage Users</h1>
        <p className="text-muted-foreground">
          View, ban/unban and delete users.
        </p>
      </div>

      <UserTable users={users} />
    </section>
  );
}
