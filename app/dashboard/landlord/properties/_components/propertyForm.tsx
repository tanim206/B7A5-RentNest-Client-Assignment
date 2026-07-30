"use client";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { Home, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createPropertyAction } from "../_actions/createProperty";
import { ActionState } from "@/lib/types";

const initialState: ActionState = {
  success: false,
  message: "",
};

export default function CreatePropertyForm() {
  const [state, action, pending] = useActionState(
    createPropertyAction,
    initialState,
  );

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
    } else {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="mx-auto max-w-4xl px-4">
        <div className="rounded-2xl border bg-white p-8 shadow-lg">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-black text-white">
              <Home className="h-7 w-7" />
            </div>

            <div>
              <h1 className="text-3xl font-bold">Create Property</h1>
              <p className="text-muted-foreground">
                Fill all information about your rental property.
              </p>
            </div>
          </div>

          <form action={action} className="space-y-6">
            <div>
              <label className="mb-2 block font-medium">Property Title</label>
              <Input name="title" required placeholder="Luxury Apartment" />
            </div>

            <div>
              <label className="mb-2 block font-medium">Description</label>
              <Textarea name="description" rows={5} required />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-medium">Monthly Rent</label>

                <Input name="price" type="number" required />
              </div>

              <div>
                <label className="mb-2 block font-medium">Location</label>

                <Input name="location" required />
              </div>
            </div>

            <div>
              <label className="mb-2 block font-medium">Property Type</label>

              <select
                name="propertyType"
                required
                className="w-full rounded-lg border p-3"
              >
                <option value="">Select Type</option>
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                <option value="Villa">Villa</option>
                <option value="Studio">Studio</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-medium">Amenities</label>

              <Input name="amenities" placeholder="Parking, Lift, WiFi" />

              <p className="mt-1 text-xs text-muted-foreground">
                Separate with comma (,)
              </p>
            </div>

            <Button type="submit" disabled={pending} className="w-full h-12">
              {pending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating...
                </>
              ) : (
                "Create Property"
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
