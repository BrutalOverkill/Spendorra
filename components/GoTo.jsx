'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function GoTo() {

  const isAuthenticated = false;

  const path = usePathname()

    return (
      <div className="goto">
        {path == '/' && (
          <>
            <Link href={'/dashboard?registration=true'}>
            <p>Sign Up</p>
            </Link>
            <Link href={'/dashboard'}>
            <button>Login &rarr;</button>
            </Link>
          </>  
        )}
        {(isAuthenticated && path == '/dashboard') && (
          <button>Logout</button>
        )}
      </div>
    );
  }