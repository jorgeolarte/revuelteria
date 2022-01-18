import { Navbar } from "@/components/navbars";
import { Layout } from "@/components/layouts/";
import { SignInModal } from "@/components/modals/";
import { Notification } from "@/components/notifications/";
import { Free } from "@/components/headers/";
import {
  HowToWorks,
  Faqs,
  Final,
  Footer,
  WhatWeDo,
  Testimonials,
} from "@/components/sections/";

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <SignInModal />
      <Free />
      <HowToWorks />
      <WhatWeDo />
      <Testimonials />
      <Faqs />
      <Final />
      <Footer />
      <Notification />
    </Layout>
  );
}
