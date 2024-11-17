"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {VisuallyHidden} from "@radix-ui/react-visually-hidden";
import {Separator} from "@radix-ui/react-separator";
import {Menu, MenuIcon, X} from "lucide-react";
import Link from "next/link";
import EventVerseLogo from "./Logo";
import {useState} from "react";

import {headerLinks} from "@/constants";
import {usePathname} from "next/navigation";

function MobileNav() {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="md:hidden opacity-80">
      <Sheet open={open}>
        <SheetTrigger className="align-middle">
          <Menu onClick={() => setOpen(true)} className="size-6" />
        </SheetTrigger>

        <SheetContent className="flex flex-col gap-6 border-gray-100 dark:border-gray-700 bg-white dark:bg-black md:hidden">
          <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
            <X onClick={() => setOpen(false)} className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </SheetClose>
          <VisuallyHidden>
            <SheetTitle>Sidebar</SheetTitle>
          </VisuallyHidden>

          <Link href="/" className="w-36">
            <EventVerseLogo />
          </Link>
          <Separator className="border border-gray-100 dark:border-gray-700" />

          <ul className="flex md:flex-between w-full flex-col items-start gap-5 md:flex-row">
            {headerLinks.map((link) => {
              const isActive = pathName === link.route;
              return (
                <li
                  onClick={() => setOpen(false)}
                  key={link.route}
                  className={`${
                    isActive && "text-primary-500"
                  } flex-center p-medium-16 whitespace-nowrap`}
                >
                  <Link href={link.route}>{link.label}</Link>
                </li>
              );
            })}
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default MobileNav;
