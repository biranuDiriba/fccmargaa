import FccLogo from "@/app/ui/acme-logo";
import Image from "next/image";
import Link from "next/link";
import { Button, Text } from "./ui";

export default function Page() {
  return (
    <main className="flex min-h-screen   flex-col p-6">
      <div className="flex h-25 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52 flex-row">
        <FccLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <Text className="font-semibold" variant="displayLarge">
            Welcome to Fcc.
          </Text>

          <Text variant="titleLarge" className={`  text-gray-600 `}>
            From Challenge to Change—Together
          </Text>

          <Link href="/login">
            <Button
              className="  bg-blue-500    m text-white transition-colors hover:bg-blue-400 md:text-base"
              endIcon="ArrowRight"
            >
              Join Us
            </Button>
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </div>
    </main>
  );
}
