import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const useClientPathname = () => {
  const [clientPathname, setClientPathname] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setClientPathname(pathname);
  }, [pathname]);

  return clientPathname;
};

export default useClientPathname;
