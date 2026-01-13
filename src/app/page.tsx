import Hero from "@/components/sections/Hero/Hero";
import TextColumn from "@/components/sections/TextColumn/TextColumn";
import { getHomeContent, getMarkdownContent } from "@/lib/content";

export default function Home() {
  const { hero } = getHomeContent();
  const introContent = getMarkdownContent("sections/intro.md");

  return (
    <main>
      <Hero content={hero} />
      <TextColumn content={introContent} />
    </main>
  );
}
