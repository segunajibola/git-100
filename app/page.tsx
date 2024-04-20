/**
 * v0 by Vercel.
 * @see https://v0.dev/t/z1KSmD6dWbz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Hero } from "@/app/section/index";
import { Features } from "@/app/section/index";
import { GetStarted } from "@/app/section/index";
import { Testimonials } from "@/app/section/index";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <GetStarted />
      <Testimonials />
    </>
  );
}
