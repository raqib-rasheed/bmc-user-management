import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import { lazy } from "react";

const Benefits = lazy(() => import("@/components/Benefits"));

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Benefits />
    </Layout>
  );
}
