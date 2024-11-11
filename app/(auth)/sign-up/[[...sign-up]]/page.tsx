import {SignUp} from "@clerk/nextjs";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Sign Up - EventVerse",
  description:
    "Create an EventVerse account to start organizing and discovering events.",
  icons: {
    icon: "/assets/images/logo.svg",
    shortcut: "/assets/images/logo.svg",
  },
  openGraph: {
    title: "Sign Up - EventVerse",
    description:
      "Join EventVerse to explore, organize, and connect through events.",
    url: "https://eventversely.vercel.app/sign-up",
    siteName: "EventVerse",
  },
  twitter: {
    card: "summary",
    title: "Sign Up - EventVerse",
    description: "Create an account to start your journey with EventVerse.",
  },
};

export default function Page() {
  return (
    <div className="w-full my-6 flex justify-center items-center">
      <SignUp />
    </div>
  );
}
