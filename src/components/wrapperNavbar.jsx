import { Suspense } from "react";
import Navbar from "./navbar";

export default function WrapperNavbar() {
  return (
    <Suspense fallback={<Navbar />}>
      <Navbar />
    </Suspense>
  );
}
