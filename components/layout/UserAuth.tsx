import { Link } from "@/i18n/routing";
import { getSession } from "@/lib/getSession";
import React from "react";
import { Button } from "../ui/button";

type AuthProps = {
  onSignOut: () => Promise<void>;
};

const UserAuth: React.FC<AuthProps> = async ({ onSignOut }) => {
  const session = await getSession();
  const user = session?.user;
  return (
    <>
      {!user ? (
        <>
          <li>
            <Link href="/login" className="hover:text-gray-400">
              Login
            </Link>
          </li>
        </>
      ) : (
        <li>
          <Button type="button" variant="ghost" onClick={onSignOut}>
            Logout
          </Button>
        </li>
      )}
    </>
  );
};

export default UserAuth;
