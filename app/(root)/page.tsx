import {Button} from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="bg-dotted-pattern bg-primary-50 bg-contain py-5 md:py-10"
      >
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Host, Connect, Celebrate: Your Events, Our Platfrom!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Book and learn helpful tips from 4,269 mentors in world-class
              corporates with our global community.
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>
          <Image
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[80vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>
      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">
          Trusted by<br></br>Thousands of Events
        </h2>
        <div className="flex flex-col w-full gap-5 md:flex-row">
          Search Category
        </div>
      </section>
    </>
  );
}
