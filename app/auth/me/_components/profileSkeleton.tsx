import { Card, CardContent } from "@/components/ui/card";

export default function ProfileSkeleton() {
  return (
    <section className="container mx-auto max-w-5xl px-4 py-10 animate-pulse">
      <Card className="overflow-hidden rounded-2xl border border-slate-100 shadow-xl bg-white">
        <div className="h-48 bg-slate-200" />
        <CardContent className="relative px-6 sm:px-10 pb-10">
          <div className="-mt-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div className="flex flex-col sm:flex-row sm:items-end gap-5">
              <div className="h-32 w-32 rounded-full bg-slate-300 border-4 border-white" />
              <div className="space-y-2 pb-2">
                <div className="h-6 w-40 bg-slate-200 rounded" />
                <div className="h-4 w-56 bg-slate-200 rounded" />
                <div className="flex gap-2 pt-2">
                  <div className="h-5 w-16 bg-slate-200 rounded-full" />
                  <div className="h-5 w-20 bg-slate-200 rounded-full" />
                </div>
              </div>
            </div>
            <div className="h-10 w-28 bg-slate-200 rounded-xl" />
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="h-48 bg-slate-100 rounded-xl" />
            <div className="h-48 bg-slate-100 rounded-xl" />
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="h-28 bg-slate-100 rounded-xl" />
            <div className="h-28 bg-slate-100 rounded-xl" />
            <div className="h-28 bg-slate-100 rounded-xl" />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}