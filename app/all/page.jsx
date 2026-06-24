import React, { Suspense } from "react";
import ProductCatalog from "../components/ProductCatalog";

export default function AllPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black text-white p-8">Loading catalog...</div>}>
      <ProductCatalog defaultCategory="all" />
    </Suspense>
  );
}
