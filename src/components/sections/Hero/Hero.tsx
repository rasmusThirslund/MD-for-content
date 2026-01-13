import Image from "next/image";
import Button from "@/components/atoms/Button/Button";
import Heading from "@/components/atoms/Heading/Heading";
import Text from "@/components/atoms/Text/Text";
import type { HeroContent } from "@/lib/content";

interface HeroProps {
  content: HeroContent;
}

export default function Hero({ content }: HeroProps) {
  const { heading, description, image, cta } = content;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <Heading as="h1" className="text-white mb-6">
          <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            {heading.highlight}
          </span>
          <br />
          <span className="text-white/90">{heading.main}</span>
        </Heading>

        <Text size="lg" muted className="max-w-2xl mx-auto">
          {description}
        </Text>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary">{cta.primary.label}</Button>
          <Button variant="secondary">{cta.secondary.label}</Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  );
}
