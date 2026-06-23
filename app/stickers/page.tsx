import React, { Suspense } from "react";
import ProductCatalog from "../components/ProductCatalog";

export default function StickersPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black text-white p-8">Loading stickers...</div>}>
      <ProductCatalog defaultCategory="stickers" />
    </Suspense>
  );
}
