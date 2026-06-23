import React, { Suspense } from "react";
import ProductCatalog from "../components/ProductCatalog";

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black text-white p-8">Searching...</div>}>
      <ProductCatalog defaultCategory="all" />
    </Suspense>
  );
}
