import Link from "next/link";
import Image from "next/image";

import Instagram from "../../public/SocialIcons/Instagram.png";
import Twitter from "../../public/SocialIcons/Twitter.png";
import YouTube from "../../public/SocialIcons/YouTube.png";
import Twitch from "../../public/SocialIcons/Twitch.png";
import TikTok from "../../public/SocialIcons/TikTok.png";
import Discord from "../../public/SocialIcons/Discord.png";

export default function Footer() {
  return (
    <footer className="text-stone-400 text-sm flex flex-wrap flex-col py-8 bg-zinc-900 px-8 md:px-24 w-full">
      <div className="flex flex-col md:flex-row w-full justify-between mb-4">
        <div className="flex flex-row justify-between w-full md:w-1/4 mb-4">
          <Link href="/" passHref>
            HOME
          </Link>
          <Link href="/services" passHref>
            SERVICES
          </Link>
          <Link href="/services#contact" passHref>
            CONTACT
          </Link>
        </div>
        <div className="flex flex-row items-center justify-between w-full md:w-1/4">
          <Link href="https://www.instagram.com/jameshcamer0n/" passHref>
            <Image
              src={Instagram}
              width={24}
              height={24}
              className="cursor-pointer"
              alt="Instagram"
            />
          </Link>
          <Link href="https://www.twitter.com/gnwop" passHref>
            <Image
              src={Twitter}
              width={24}
              height={24}
              className="cursor-pointer"
              alt="Twitter"
            />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCc3VcxPP9L7kcNoWjgAZN8Q"
            passHref
          >
            <Image
              src={YouTube}
              width={24}
              height={24}
              className="cursor-pointer"
              alt="YouTube"
            />
          </Link>
          <Link href="https://www.tiktok.com/@gnwop" passHref>
            <Image
              src={TikTok}
              width={24}
              height={24}
              className="cursor-pointer"
              alt="TikTok"
            />
          </Link>
          <Link href="https://discord.gg/aaVScpfmvA" passHref>
            <Image
              src={Discord}
              width={24}
              height={24}
              className="cursor-pointer"
              alt="Discord"
            />
          </Link>
          <Link href="https://www.twitch.tv/guwop1x" passHref>
            <Image
              src={Twitch}
              width={24}
              height={24}
              className="cursor-pointer"
              alt="Twitch"
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-row w-full justify-between">
        <p>COPYRIGHT © 2022 JAMES CAMERON</p>
        <p>
          DIGITAL EXPERIENCE BY{" "}
          <span className="underline">
            <Link href="https://janrebolledo.com" passHref>
              JAN REBOLLEDO
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
}
