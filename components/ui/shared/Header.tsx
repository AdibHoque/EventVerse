import {SignedIn, SignedOut, UserButton} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import {Button} from "../button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import {ModeToggle} from "./ThemeButton";
import EventVerseLogo from "./Logo";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <EventVerseLogo />
        </Link>

        <SignedIn>
          <nav className="hidden md:flex-between w-full max-w-xs">
            <NavItems></NavItems>
          </nav>
        </SignedIn>

        <div className="flex items-center justify-end gap-3 w-36">
          <ModeToggle></ModeToggle>
          <SignedIn>
            <UserButton></UserButton>
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
}
