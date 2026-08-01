"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { createRentalRequest } from "../_actions/createRentalRequest";

export default function RequestRentalButton({
  propertyId,
}: {
  propertyId: string;
}) {
  const [isPending, startTransition] = useTransition();

  const handleRequest = () => {
    startTransition(async () => {
      try {
        const result = await createRentalRequest(propertyId);

        if (result?.success) {
          toast.success(result.message || "Rental request sent successfully!");
        } else {
          toast.error(result?.message || "Failed to send request.");
        }
      } catch (error) {
        toast.error("Something went wrong. Please try again.");
      }
    });
  };

  return (
    <Button
      disabled={isPending}
      onClick={handleRequest}
      className="w-full sm:w-auto rounded-xl bg-[#1868cd] hover:bg-[#155ebc] text-white px-6 shadow-md transition-all"
    >
      {isPending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending Request...
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" />
          Request To Rent
        </>
      )}
    </Button>
  );
}
