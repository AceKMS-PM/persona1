"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";

export default function ArticleDetail() {
  const params = useParams();
  const article = useQuery(api.articles.getArticleBySlug, { slug: params.slug as string });

  if (!article) return <div className="flex justify-center items-center h-screen label-caps">Loading Story...</div>;

  return (
    <article className="px-5 pb-20">
      <div className="mx-auto max-w-[1280px] pt-20">
        <div className="editorial-grid">
          <div className="col-span-12 md:col-span-8 lg:col-span-6">
            <span className="label-caps text-brand-smoke">{article.category}</span>
            <h1 className="display-lg mb-8 mt-2">{article.title}</h1>
            <div className="flex justify-between items-center mb-12 pb-4 border-b border-brand-outline">
              <span className="label-caps text-brand-smoke">{article.publishedDate}</span>
              <span className="label-caps text-brand-smoke">{article.authorId}</span>
            </div>
            
            <div className="body-lg leading-relaxed space-y-6 text-justify">
              <div className="prose-editorial">
                {article.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
