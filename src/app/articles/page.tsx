import { useQuery } from "convex-react-client";
import { api } from "@/convex/_generated/api";
import Link from "next/link";

export default function ArticlesPage() {
  const articles = useQuery(api.articles.getArticles);

  return (
    <div className="editorial-grid px-5 pt-20 pb-20">
      <div className="col-span-12 md:col-span-8 lg:col-span-6 mb-12">
        <h1 className="display-lg mb-4">Writing</h1>
        <p className="body-md text-brand-smoke">
          Essays on engineering, design philosophy, and the pursuit of knowledge.
        </p>
      </div>

      <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
        {articles?.map((article) => (
          <Link key={article._id} href={`/articles/${article.slug}`} className="group">
            <div className="overflow-hidden bg-brand-outline aspect-[4/3] mb-4">
              {article.coverImage ? (
                <img src={article.coverImage} alt={article.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              ) : (
                <div className="w-full h-full bg-brand-outline" />
              )}
            </div>
            <span className="label-caps text-brand-smoke">{article.category}</span>
            <h2 className="headline-sm mt-2 group-hover:text-brand-slate transition-colors">{article.title}</h2>
            <p className="label-caps mt-4 text-brand-smoke opacity-50">{article.publishedDate}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
