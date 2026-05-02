import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { getArticle, articles, type Article as ArticleType } from "@/lib/site-data";

export const Route = createFileRoute("/writing/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    if (!a) return { meta: [{ title: "Article" }] };
    return {
      meta: [
        { title: `${a.title} — Writing` },
        { name: "description", content: a.excerpt },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.excerpt },
        { property: "article:published_time", content: a.date },
      ],
    };
  },
  errorComponent: ({ error, reset }) => {
    const router = useRouter();
    return (
      <div className="mx-auto max-w-2xl px-6 pt-40 text-center">
        <h1 className="font-display text-5xl">Something broke.</h1>
        <p className="mt-3 text-muted-foreground">{error.message}</p>
        <button onClick={() => { router.invalidate(); reset(); }} className="mt-6 editorial-link">
          Try again →
        </button>
      </div>
    );
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 pt-40 text-center">
      <h1 className="font-display text-5xl">Article not found.</h1>
      <Link to="/writing" className="mt-6 inline-block editorial-link">All writing →</Link>
    </div>
  ),
  component: Article,
});

function Article() {
  const { article } = Route.useLoaderData() as { article: ArticleType };
  const idx = articles.findIndex((a) => a.slug === article.slug);
  const next = articles[(idx + 1) % articles.length];

  return (
    <article className="mx-auto max-w-3xl px-6 pb-24 pt-40 md:px-10">
      <Reveal>
        <Link to="/writing" className="font-mono-ui text-xs uppercase tracking-[0.2em] editorial-link">
          ← All writing
        </Link>
        <p className="section-num mt-8">
          {new Date(article.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} · {article.readingTime}
        </p>
        <h1 className="mt-4 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
          {article.title}
        </h1>
        <p className="mt-6 font-display text-2xl italic text-muted-foreground">
          {article.excerpt}
        </p>
      </Reveal>

      <div className="mt-16 space-y-8 border-t border-rule pt-12 text-lg leading-[1.75]">
        {article.body.map((p, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <p className={i === 0 ? "drop-cap font-display text-xl md:text-2xl" : ""}>
              {p}
            </p>
          </Reveal>
        ))}
      </div>

      <div className="mt-24 border-t border-rule pt-8">
        <p className="font-mono-ui text-xs text-muted-foreground">Next →</p>
        <Link to="/writing/$slug" params={{ slug: next.slug }} className="mt-2 block font-display text-3xl editorial-link">
          {next.title}
        </Link>
      </div>
    </article>
  );
}
