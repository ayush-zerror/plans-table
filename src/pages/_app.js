import SmoothScroller from "@/components/smoothScroll/SmoothScroll";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SmoothScroller />
      <Component {...pageProps} />
    </>
  );
}
