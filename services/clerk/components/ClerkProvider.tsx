import { ReactNode } from "react";
import { ClerkProvider as OriginalClerkProvider } from "@clerk/nextjs";
function ClerkProvider({ children }: { children: ReactNode }) {
  return <OriginalClerkProvider>{children}</OriginalClerkProvider>;
}

export default ClerkProvider;
