"use client";
import {headerLinks} from "@/constants";
import Link from "next/link";
import {usePathname} from "next/navigation";

function NavItems() {
  const pathName = usePathname();
  return (
    <ul className="flex md:flex-between w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathName === link.route;
        return (
          <li
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
  );
}

export default NavItems;
