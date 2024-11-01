import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {Separator} from "@radix-ui/react-separator";
import Image from "next/image";
import NavItems from "./NavItems";
import {Menu} from "lucide-react";
import Link from "next/link";
import EventVerseLogo from "./Logo";

function MobileNav() {
  return (
    <nav className="md:hidden opacity-80">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Menu className="size-6" />
          {/* <Image src="/assets/icons/menu.svg" className="bg-white" alt="menu" /> */}
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white dark:bg-black md:hidden">
          <Link href="/" className="w-36">
            <EventVerseLogo />
          </Link>
          <Separator className="border border-gray-100 dark:border-gray-700" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default MobileNav;
