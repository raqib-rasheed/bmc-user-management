import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { lazy } from "react";

const Benefits = lazy(() => import("@/components/Benefits"));
const Creators = lazy(() => import("@/components/Creators"));

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Creators />
      <Footer />
    </>
  );
}
