import Markdown from "react-markdown";

interface TextColumnProps {
  content: string;
  className?: string;
}

export default function TextColumn({
  content,
  className = "",
}: TextColumnProps) {
  return (
    <section className={`py-20 px-6 bg-slate-950 ${className}`}>
      <article className="max-w-3xl mx-auto prose prose-invert prose-lg prose-headings:font-bold prose-h1:text-4xl prose-h1:bg-gradient-to-r prose-h1:from-cyan-400 prose-h1:to-violet-400 prose-h1:bg-clip-text prose-h1:text-transparent prose-h2:text-2xl prose-h2:text-white prose-p:text-slate-300 prose-strong:text-white prose-blockquote:border-violet-500 prose-blockquote:text-slate-400 prose-li:text-slate-300 prose-li:marker:text-violet-400">
        <Markdown>{content}</Markdown>
      </article>
    </section>
  );
}
