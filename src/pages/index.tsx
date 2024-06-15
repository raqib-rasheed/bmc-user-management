import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import { lazy } from "react";

const Benefits = lazy(() => import("@/components/Benefits"));
const Creators = lazy(() => import("@/components/Creators"));

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Benefits />
      <Creators />
    </Layout>
  );
}
