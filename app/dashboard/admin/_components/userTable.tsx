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
import { MoreHorizontal, ShieldAlert, ShieldCheck, Trash2 } from "lucide-react";

import { updateUserStatus } from "../_actions/updateUserStatus";
import { deleteUser } from "../_actions/deleteUser";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserDetailsDialog from "../users/_components/UserDetailsDialog";

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
    if (!confirm("Are you sure you want to delete this user?")) return;

    const res = await deleteUser(id);

    if (res.success) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <Table>
        <TableHeader className="bg-slate-50/80">
          <TableRow className="border-b border-slate-200/80">
            <TableHead className="font-semibold text-slate-700">Name</TableHead>
            <TableHead className="font-semibold text-slate-700">Email</TableHead>
            <TableHead className="font-semibold text-slate-700">Role</TableHead>
            <TableHead className="font-semibold text-slate-700">Status</TableHead>
            <TableHead className="text-right font-semibold text-slate-700">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="divide-y divide-slate-100">
          {users.length > 0 ? (
            users.map((user) => (
              <TableRow key={user.id} className="hover:bg-slate-50/50 transition-colors">
                <TableCell className="font-semibold text-slate-800 text-sm">
                  {user.name}
                </TableCell>

                <TableCell className="text-slate-500 text-xs sm:text-sm">
                  {user.email}
                </TableCell>

                <TableCell>
                  <Badge variant="secondary" className="text-[11px] font-medium bg-slate-100 text-slate-700">
                    {user.role}
                  </Badge>
                </TableCell>

                <TableCell>
                  <Badge
                    variant="outline"
                    className={`text-[10px] font-bold ${
                      user.activeStatus === "BANNED"
                        ? "bg-rose-50 text-rose-600 border-rose-200"
                        : "bg-emerald-50 text-emerald-600 border-emerald-200"
                    }`}
                  >
                    {user.activeStatus}
                  </Badge>
                </TableCell>

                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg hover:bg-slate-100">
                        <MoreHorizontal className="h-4 w-4 text-slate-500" />
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end" className="w-48 rounded-xl p-1.5 shadow-md border-slate-200">
                      <UserDetailsDialog user={user} />

                      <DropdownMenuItem
                        className="rounded-lg text-xs font-medium cursor-pointer"
                        onClick={() =>
                          handleStatus(
                            user.id,
                            user.activeStatus === "BANNED" ? "UNBANNED" : "BANNED"
                          )
                        }
                      >
                        {user.activeStatus === "BANNED" ? (
                          <div className="flex items-center gap-2 text-emerald-600">
                            <ShieldCheck size={14} /> Unban User
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 text-amber-600">
                            <ShieldAlert size={14} /> Ban User
                          </div>
                        )}
                      </DropdownMenuItem>

                      <DropdownMenuSeparator className="bg-slate-100 my-1" />

                      <DropdownMenuItem
                        className="rounded-lg text-xs font-medium text-rose-600 focus:text-rose-600 focus:bg-rose-50 cursor-pointer"
                        onClick={() => handleDelete(user.id)}
                      >
                        <div className="flex items-center gap-2">
                          <Trash2 size={14} /> Delete User
                        </div>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="py-12 text-center text-xs text-slate-400">
                No users found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}