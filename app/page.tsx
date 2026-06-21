"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function IndexRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/best-skin-care-clinic-in-pune/");
  }, [router]);

  return (
    <>
      <head>
        <meta httpEquiv="refresh" content="0; url=/best-skin-care-clinic-in-pune/" />
        <title>Redirecting...</title>
      </head>
      <div className="flex min-h-[60vh] items-center justify-center text-center px-4">
        <p className="text-gray-500 font-medium">
          Redirecting to <a href="/best-skin-care-clinic-in-pune/" className="text-[var(--purple)] hover:underline font-bold">best skin care clinic in Pune</a>...
        </p>
      </div>
    </>
  );
}