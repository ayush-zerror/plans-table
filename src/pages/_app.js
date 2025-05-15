import SmoothScroller from "@/components/smoothScroll/SmoothScroller";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SmoothScroller />
      <Component {...pageProps} />
    </>
  );
}
