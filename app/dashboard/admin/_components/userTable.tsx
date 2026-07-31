"use client";

import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { updateUserStatus } from "../_actions/updateUserStatus";
import { deleteUser } from "../_actions/deleteUser";


export default function UserTable({ users }: { users: any[] }) {
  const handleStatus = async (id: string, status: "BANNED" | "UNBANNED") => {
    const res = await updateUserStatus(id, status);

    if (res.success) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this user?")) return;

    const res = await deleteUser(id);

    if (res.success) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };

  return (
    <div className="rounded-lg border overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>

            <TableHead>Email</TableHead>

            <TableHead>Role</TableHead>

            <TableHead>Status</TableHead>

            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>

              <TableCell>{user.email}</TableCell>

              <TableCell>
                <Badge variant="secondary">{user.role}</Badge>
              </TableCell>

              <TableCell>
                <Badge
                  variant={
                    user.activeStatus === "BANNED" ? "destructive" : "default"
                  }
                >
                  {user.activeStatus}
                </Badge>
              </TableCell>

              <TableCell className="text-right space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() =>
                    handleStatus(
                      user.id,
                      user.activeStatus === "BANNED" ? "UNBANNED" : "BANNED",
                    )
                  }
                >
                  {user.activeStatus === "BANNED" ? "Unban" : "Ban"}
                </Button>

                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}

          {users.length === 0 && (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-10">
                No users found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
