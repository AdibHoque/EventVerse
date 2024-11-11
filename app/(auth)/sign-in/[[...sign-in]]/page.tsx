import {SignIn} from "@clerk/nextjs";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Sign In - EventVerse",
  description:
    "Sign in to your EventVerse account to access exclusive events and experiences.",
  icons: {
    icon: "/assets/images/logo.svg",
    shortcut: "/assets/images/logo.svg",
  },
  openGraph: {
    title: "Sign In - EventVerse",
    description:
      "Log in to EventVerse to continue exploring and organizing events.",
    url: "https://eventversely.vercel.app/sign-in",
    siteName: "EventVerse",
  },
  twitter: {
    card: "summary",
    title: "Sign In - EventVerse",
    description:
      "Log in to EventVerse to continue exploring and organizing events.",
  },
};

export default function Page() {
  return (
    <div className="w-full my-6 flex justify-center items-center">
      <SignIn />;
    </div>
  );
}
