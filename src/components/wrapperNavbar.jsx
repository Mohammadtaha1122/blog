import { Suspense } from "react";
import Navbar from "./navbar";

export default function WrapperNavbar() {
  return (
    <Suspense fallback={<div>Loading search...</div>}>
      <Navbar />
    </Suspense>
  );
}
