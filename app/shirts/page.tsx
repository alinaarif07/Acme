import React, { Suspense } from "react";
import ProductCatalog from "../components/ProductCatalog";

export default function ShirtsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black text-white p-8">Loading shirts...</div>}>
      <ProductCatalog defaultCategory="shirts" />
    </Suspense>
  );
}
