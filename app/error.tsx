"use client";

import {Button} from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {useEffect} from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({error, reset}: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Image
        src="/assets/images/error.svg"
        alt="error"
        width={500}
        height={500}
        className="bg-contain"
      />
      <Button asChild className="px-4 py-2">
        <Link href="/">Back Home</Link>
      </Button>
      <p className="text-gray-700 mt-2">
        ERROR: <span className="text-red-700">{error.message}</span>
      </p>
    </div>
  );
}
