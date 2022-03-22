import Head from "next/head";
import Link from "next/link";

import styles from "../styles/contact.module.css";

export default function Services() {
  return (
    <main className="bg-zinc-900 flex flex-col justify-center">
      <Head>
        <title>Guwop — Social Media Manager</title>
      </Head>
      <section className="flex px-8 md:px-24 flex-col justify-center bg-zinc-900 text-white mt-48 mb-8">
        <div className="w-full flex flex-col md:flex-row justify-between">
          <h1 className="font-bold text-2xl">SERVICES</h1>
          <div className="flex">
            <p className="text-white hover:text-gray-400 cursor-pointer underline">
              <Link href="#contact">CONTACT</Link>
            </p>
            <a
              href="/Resume - James Cameron.pdf"
              download
              className="ml-4 text-white hover:text-gray-400 cursor-pointer underline"
            >
              DOWNLOAD MY RESUME
            </a>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="font-bold">SOCIAL MEDIA MANAGEMENT</h2>
          <p>
            GROWING &amp; RUNNING SOCIAL MEDIA PAGES. CREATING ENGAGING AND
            RELATABLE CONTENT ON ALL PLATFORMS INCLUDING INSTAGRAM, TWITTER,
            TIKTOK, YOUTUBE, &amp; MORE. MAINTAINING AND GROWING A SIZEABLE
            FANBASE AND COMMUNITY AROUND YOUR BRAND. COVERING COMPANY EVENTS,
            ENGAGING WITH FANS, ANSWER CUSTOMER INQUIRIES, &amp; SCHEDULE
            UPDATES.
          </p>
          <h2 className="font-bold mt-2">BRAND GROWTH</h2>
          <p>
            CONSTANTLY CREATING AND DEVELOPING PERSONALITIES WITHIN YOUR BRAND.
            CREATING ENGAGING CONTENT TO MAKE MEMBERS OF YOUR COMMUNITY FEEL
            INVOLVED. FINDING WHAT&apos;S NEW AND TRENDING TO KEEP YOUR BRAND
            FRESH AND TIMELESS.
          </p>
        </div>
      </section>
      <section
        className="flex px-8 md:px-24 flex-col mb-8 md:mb-2 bg-zinc-900 text-white"
        id="contact"
      >
        <h1 className="font-bold text-2xl">CONTACT</h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:basis-1/2">
            <p>
              FILL OUT THIS FORM WITH ANY QUESTIONS OR QUESTIONS ABOUT MY
              SERVICES OR A CONSULATION.
            </p>
          </div>
          <div className="md:basis-1/2">
            <form
              action="https://formspree.io/f/mrgowzza"
              method="POST"
              className={styles.form}
            >
              <label htmlFor="name">NAME</label>
              <input type="text" name="name" placeholder="NAME" />
              <label htmlFor="email">EMAIL</label>
              <input type="email" name="email" placeholder="EXAMPLE@MAIL.COM" />
              <label htmlFor="message">MESSAGE</label>
              <textarea type="text" name="message" placeholder="MESSAGE" />
              <input id="submit" type="submit" value="SUBMIT" />
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
