"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ParaisoRedirect() {
  const router = useRouter();
  const { t } = useLanguage();

  useEffect(() => {
    router.push("/real-estate?tab=dr");
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">{t("paraiso.redirectTitle")}</h1>
        <p className="text-gray-600">{t("paraiso.redirectText")}</p>
      </div>
    </div>
  );
}
