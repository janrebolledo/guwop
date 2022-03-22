import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Instagram from "../public/SocialIcons/Instagram.png";
import Twitter from "../public/SocialIcons/Twitter.png";
import YouTube from "../public/SocialIcons/YouTube.png";
import Twitch from "../public/SocialIcons/Twitch.png";
import TikTok from "../public/SocialIcons/TikTok.png";
import Discord from "../public/SocialIcons/Discord.png";

import OT from "../public/Trusted-By/Overtime.png";
import Parallel from "../public/Trusted-By/Parallel.png";
import UOF from "../public/Trusted-By/UOF.png";

import styles from "../styles/home.module.css";

import Post1 from "../public/Instagram/Post12.jpg";
import Post2 from "../public/Instagram/Post11.jpg";
import Post3 from "../public/Instagram/Post9.jpg";
import Post4 from "../public/Instagram/Post8.jpg";
import Post5 from "../public/Instagram/Post7.jpg";
import Post6 from "../public/Instagram/Post6.jpg";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Guwop — Social Media Manager</title>
      </Head>
      <section className={styles.landing_section}>
        <div className={styles.landing_container}>
          <div className="flex flex-col justify-center basis-11/12">
            <h1 className="text-5xl font-bold">LIFESTYLE &amp; MEDIA</h1>
            <p className="text-2xl">SOCIAL MEDIA MANAGER</p>
            <div className={styles.landing_container__socials}>
              <Link href="https://www.instagram.com/jameshcamer0n/" passHref>
                <p className="p-2 bg-zinc-900 w-10 h-10 mr-2">
                  <Image
                    src={Instagram}
                    width={24}
                    height={24}
                    className="hover:opacity-80 cursor-pointer"
                    alt="Instagram"
                  />
                </p>
              </Link>
              <Link href="https://www.twitter.com/gnwop/" passHref>
                <p className="p-2 bg-zinc-900 w-10 h-10 mr-2">
                  <Image
                    src={Twitter}
                    width={24}
                    height={24}
                    className="hover:opacity-80 cursor-pointer"
                    alt="Twitter"
                  />
                </p>
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCc3VcxPP9L7kcNoWjgAZN8Q"
                passHref
              >
                <p className="p-2 bg-zinc-900 w-10 h-10 mr-2">
                  <Image
                    src={YouTube}
                    width={24}
                    height={24}
                    className="hover:opacity-80 cursor-pointer"
                    alt="YouTube"
                  />
                </p>
              </Link>

              <Link href="https://www.twitch.tv/guwop1x" passHref>
                <p className="p-2 bg-zinc-900 w-10 h-10 mr-2">
                  <Image
                    src={Twitch}
                    width={24}
                    height={24}
                    className="hover:opacity-80 cursor-pointer"
                    alt="Twitch"
                  />
                </p>
              </Link>
              <Link href="https://www.tiktok.com/@gnwop" passHref>
                <p className="p-2 bg-zinc-900 w-10 h-10 mr-2">
                  <Image
                    src={TikTok}
                    width={24}
                    height={24}
                    className="hover:opacity-80 cursor-pointer"
                    alt="TikTok"
                  />
                </p>
              </Link>
              <Link href="https://discord.com/invite/aaVScpfmvA" passHref>
                <p className="p-2 bg-zinc-900 w-10 h-10 mr-2">
                  <Image
                    src={Discord}
                    width={24}
                    height={24}
                    className="hover:opacity-80 cursor-pointer"
                    alt="Discord"
                  />
                </p>
              </Link>
            </div>
            <p className="underline hover:text-gray-300 cursor-pointer">
              <Link href="/services" passHref>
                VIEW SERVICES + MORE &rarr;
              </Link>
            </p>
          </div>
          <div className="flex flex-row w-full justify-between items-end text-sm text-stone-400 font-bold basis-1/12">
            <div>
              <p>TRUSTED BY</p>
              <div className="flex flex-row">   
                <div className="mr-4">
                  <Image src={Parallel} width={24} height={24} alt="Parallel" />
                </div>
                <div className="mr-0">
                  <Image
                    src={UOF}
                    width={24}
                    height={24}
                    alt="University of Alabama"
                  />
                </div>
              </div>
            </div>
            <p className="text-white">
              <Link href="mailto:guwopinfo@gmail.com" passHref>
                GUWOPINFO@GMAIL.COM
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-zinc-900 text-stone-400 px-8 py-12 md:px-24">
        <h1>
          MY RECENT{" "}
          <span className="underline">
            <Link href="https://www.instagram.com/jameshcamer0n/" passHref>
              INSTAGRAM
            </Link>
          </span>{" "}
          POSTS
        </h1>

        <div className="grid-cols-1 md:grid-cols-3 mt-4 grid gap-2 flex-row flex-wrap">
          <div className="aspect-square cursor-pointer hover:opacity-50 transition-all">
            <Link href="https://www.instagram.com/p/CbLG9qcOLLu/" passHref>
              <Image src={Post1} alt="Instagram Post" />
            </Link>
          </div>
          <div className="aspect-square cursor-pointer hover:opacity-50 transition-all">
            <Link href="https://www.instagram.com/p/Ca7gmaxlFxv/" passHref>
              <Image src={Post2} alt="Instagram Post" />
            </Link>
          </div>
          <div className="aspect-square cursor-pointer hover:opacity-50 transition-all">
            <Link href="https://www.instagram.com/p/CYJ9rU1LQo8/" passHref>
              <Image src={Post3} alt="Instagram Post" />
            </Link>
          </div>
          <div className="aspect-square cursor-pointer hover:opacity-50 transition-all">
            <Link href="https://www.instagram.com/p/CXytV-iLe58/" passHref>
              <Image src={Post4} alt="Instagram Post" />
            </Link>
          </div>
          <div className="aspect-square cursor-pointer hover:opacity-50 transition-all">
            <Link href="https://www.instagram.com/p/CXboWNJpuBB/" passHref>
              <Image src={Post5} alt="Instagram Post" />
            </Link>
          </div>
          <div className="aspect-square cursor-pointer hover:opacity-50 transition-all">
            <Link href="https://www.instagram.com/p/CW0_ZGlpCtO/" passHref>
              <Image src={Post6} alt="Instagram Post" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
