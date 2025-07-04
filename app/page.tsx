import BlogSection from "@/components/section/blog-section";
import HeroSection from "@/components/section/hero-section";

export default function Home() {
  return (
    <main className="pb-10">
      <HeroSection />
      <BlogSection />
    </main>
  );
}
