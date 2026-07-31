import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <h1 className="text-8xl font-extrabold text-primary">404</h1>

      <h2 className="mt-4 text-3xl font-bold">Oops! Page Not Found</h2>

      <p className="mt-3 max-w-md text-muted-foreground">
        The page you are looking for doesn't exist or has been moved.
      </p>

      <div className="mt-8 flex gap-4">
        <Button asChild>
          <Link href="/">Go Home</Link>
        </Button>

        <Button variant="outline" asChild>
          <Link href="/properties">Browse Properties</Link>
        </Button>
      </div>
    </div>
  );
}
