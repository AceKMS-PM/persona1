import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getArticles = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("articles").collect();
  },
});

export const getArticleBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("articles")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .unique();
  },
});

export const createArticle = mutation({
  args: { 
    title: v.string(), 
    slug: v.string(), 
    content: v.string(), 
    category: v.string(), 
    publishedDate: v.string(), 
    coverImage: v.optional(v.string()), 
    authorId: v.string() 
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("articles", args);
  },
});
