"use client";
import Link from "next/link";

export function LinkMenu(props: any) {
  return <div className="navbar-nav navbar-nav-scroll" id="texthello">
    <Link href="/" className="nav-item nav-link active1 word" aria-current="page"> Home  </Link>
    <Link href="/Library" className="nav-item nav-link  active1 word"> Library   </Link>
    <Link href="/Magazine" className="nav-item nav-link active1 word"> School Magazine  </Link>
    <Link href="/Activities" className="nav-item nav-link active1 word"> Activites </Link>
    <Link href="/Downloads" className="nav-item nav-link active1 word">Downloads </Link>
  </div>;
}
