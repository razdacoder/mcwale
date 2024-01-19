import { ReactNode } from "react";

export default function Heading({ children }: { children: ReactNode }) {
  return (
    <div className="text-center mb-4">
      <h2 className="inline-block scroll-m-20 pb-2 uppercase text-center tracking-wider relative text-2xl font-semibold">
        {children}
      </h2>
    </div>
  );
}
