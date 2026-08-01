"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { createPayment } from "../_actions/createPayment";

type Props = {
  rentalRequestId: string;
};

export default function PaymentButton({ rentalRequestId }: Props) {
  const handlePayment = async () => {
    try {
      const result = await createPayment(rentalRequestId);

      console.log("Payment Result:", result);

      if (!result.success) {
        toast.error(result.message || "Unable to create payment session.");
        return;
      }

      if (result.data?.paymentUrl) {
        window.location.href = result.data.paymentUrl;
        return;
      }

      toast.error(
        result.data?.message || result.message || "Payment URL not found.",
      );
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong while creating payment.");
    }
  };

  return (
    <Button onClick={handlePayment} className="w-full">
      Pay Now
    </Button>
  );
}
