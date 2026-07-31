"use client";

import { useActionState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import { createPropertyAction } from "../_actions/createProperty";
import { ActionState } from "@/lib/types";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
    <section className="mx-auto w-full max-w-5xl px-6 py-8">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">
          Create Property
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Fill in the details below to publish your rental property.
        </p>
      </div>

      <form action={action} className="space-y-8">
        {/* Property Title */}
        <div className="space-y-2">
          <label
            htmlFor="title"
            className="text-sm font-medium"
          >
            Property Title
          </label>

          <Input
            id="title"
            name="title"
            required
            placeholder="Luxury Apartment in Dhaka"
            className="h-11"
          />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label
            htmlFor="description"
            className="text-sm font-medium"
          >
            Description
          </label>

          <Textarea
            id="description"
            name="description"
            rows={6}
            required
            placeholder="Describe your property..."
          />
        </div>

        {/* Price + Location */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="price"
              className="text-sm font-medium"
            >
              Monthly Rent
            </label>

            <Input
              id="price"
              name="price"
              type="number"
              required
              placeholder="15000"
              className="h-11"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="location"
              className="text-sm font-medium"
            >
              Location
            </label>

            <Input
              id="location"
              name="location"
              required
              placeholder="Mirpur, Dhaka"
              className="h-11"
            />
          </div>
        </div>

        {/* Property Type */}
        <div className="space-y-2">
          <label
            htmlFor="propertyType"
            className="text-sm font-medium"
          >
            Property Type
          </label>

          <select
            id="propertyType"
            name="propertyType"
            required
            className="flex h-11 w-full rounded-md border bg-background px-3 text-sm outline-none"
          >
            <option value="">Select Property Type</option>

            <option value="Apartment">Apartment</option>

            <option value="House">House</option>

            <option value="Villa">Villa</option>

            <option value="Studio">Studio</option>
          </select>
        </div>

        {/* Amenities */}
        <div className="space-y-2">
          <label
            htmlFor="amenities"
            className="text-sm font-medium"
          >
            Amenities
          </label>

          <Input
            id="amenities"
            name="amenities"
            placeholder="Parking, Lift, WiFi, Balcony"
            className="h-11"
          />

          <p className="text-xs text-muted-foreground">
            Separate each amenity with a comma (,)
          </p>
        </div>

        {/* Submit */}
        <div className="pt-2">
          <Button
            type="submit"
            disabled={pending}
            className="h-11"
          >
            {pending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating Property...
              </>
            ) : (
              "Create Property"
            )}
          </Button>
        </div>
      </form>
    </section>
  );
}