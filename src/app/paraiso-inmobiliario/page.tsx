"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ParaisoRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push("/real-estate?tab=dr");
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting to Dominican Republic Real Estate...</h1>
        <p className="text-gray-600">Please wait while we redirect you.</p>
      </div>
    </div>
  );
}
