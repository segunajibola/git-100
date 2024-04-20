import { Hero, Features, GetStarted, Testimonials, NewsLetter, TimeLine } from "@/app/section/index";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <GetStarted />
      <Testimonials />
      {/* <div>
      <iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=185lt-wZWweRhCd8kkOFf-EScSovNdn8Jkdo7_ztQP8I&font=Default&lang=en&initial_zoom=2&height=650' width='100%' height='650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe>
      </div> */}
      <TimeLine />
      <GetStarted />
      <NewsLetter />
    </>
  );
}
