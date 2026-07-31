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
      const res = await createPayment(rentalRequestId);

      console.log("Payment Result:", res);

      if (!res.success) {
        toast.error(res.message);
        return;
      }

      if (res.data?.paymentUrl) {
        window.location.href = res.data.paymentUrl;
        return;
      }

      toast.error("Payment URL not found.");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Button onClick={handlePayment} className="w-full">
      Pay Now
    </Button>
  );
}
