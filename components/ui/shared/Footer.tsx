import Image from "next/image";
import Link from "next/link";
import EventVerseLogo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex flex-between flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/" className="w-36">
          <EventVerseLogo />
        </Link>
        <p>&copy; 2024 EventVerse. All rights reserved.</p>
      </div>
    </footer>
  );
}
