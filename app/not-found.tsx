import {Button} from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Image
        src="/assets/images/Error.svg"
        alt="error"
        width={500}
        height={500}
        className="bg-contain"
      />
      <Button asChild className="px-4 py-2">
        <Link href="/">Back Home</Link>
      </Button>
    </div>
  );
}
