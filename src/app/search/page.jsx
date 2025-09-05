import { Suspense } from "react";
import SearchPage from "./searchContent";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading search...</div>}>
      <SearchPage />
    </Suspense>
  );
}
