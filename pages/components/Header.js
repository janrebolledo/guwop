import Link from "next/link";

export default function Header() {
  return (
    <header className="text-white h-24 flex items-center justify-between px-8 md:px-24 backdrop-blur-xl fixed w-full z-50">
      <h1 className="font-bold hover:text-gray-300 md:basis-3/6">
        <Link href="/" passHref>
          JAMES &quot;GUWOP&quot; CAMERON
        </Link>
      </h1>
      <div className="flex flex-row items-center justify-between md:basis-2/6 lg:basis-3/12">
        <p className="text-sm hidden md:block hover:text-gray-300 hover:underline">
          <Link href="/" passHref>
            HOME
          </Link>
        </p>
        <p className="text-sm hidden md:block hover:text-gray-300 hover:underline">
          <Link href="/services" passHref>
            SERVICES
          </Link>
        </p>
        <p className="text-sm hover:text-gray-300 hover:underline border-2 px-3 py-2">
          <Link href="/services#contact" passHref>
            CONTACT
          </Link>
        </p>
      </div>
    </header>
  );
}
