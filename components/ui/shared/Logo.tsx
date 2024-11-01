import Image from "next/image";

const EventVerseLogo = () => {
  return (
    <div className="flex gap-1 items-center ">
      <Image src="/assets/images/logo.svg" alt="logo" width={34} height={34} />
      <h4 className="font-bold font-sans tracking-wide opacity-90">
        EventVerse
      </h4>
    </div>
  );
};

export default EventVerseLogo;
