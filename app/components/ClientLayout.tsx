"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import LoadingScreen from "./LoadingScreen";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const visitedPages = useRef<Set<string>>(new Set());
  const hasMounted = useRef(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    // Always show loader when path changes or on first mount
    if (!hasMounted.current || !visitedPages.current.has(pathname)) {
      setShowLoader(true);
      timer = setTimeout(() => {
        setShowLoader(false);
      }, 800);

      hasMounted.current = true;
      visitedPages.current.add(pathname);
    } else {
      setShowLoader(false); 
    }

    return () => {
      clearTimeout(timer); 
    };
  }, [pathname]);

  return <>{showLoader ? <LoadingScreen /> : children}</>;
}
