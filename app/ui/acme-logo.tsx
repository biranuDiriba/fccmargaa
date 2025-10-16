import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";

export default function FccLogo() {
  return (
    <div className={`${lusitana.className} flex justify-center items-center`}>
      <Image
        src="/logoWithText.png"
        width={180}
        height={80}
        className="hidden sm:block"
        alt="logo image for fcc"
      />
      <Image
        src="/logoWithText.png"
        width={100}
        height={40}
        className="  sm:hidden"
        alt="logo image for fcc"
      />
    </div>
  );
}
