
import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-2 text-9xl font-bold text-primary">404</h1>
      <h2 className="mb-6 text-3xl font-semibold">Page Not Found</h2>
      <p className="mb-8 max-w-md text-muted-foreground">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link to="/">
        <Button>
          <ArrowLeft className="mr-2" size={16} />
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
