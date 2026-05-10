import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  articles: defineTable({
    title: v.string(),
    slug: v.string(),
    content: v.string(),
    category: v.string(),
    publishedDate: v.string(),
    coverImage: v.optional(v.string()),
    authorId: v.string(),
  }).index("by_slug", ["slug"]),

  projects: defineTable({
    title: v.string(),
    description: v.string(),
    link: v.optional(v.string()),
    image: v.optional(v.string()),
    tags: v.array(v.string()),
    date: v.string(),
  }),

  categories: defineTable({
    name: v.string(),
    slug: v.string(),
  }).index("by_slug", ["slug"]),

  users: defineTable({
    name: v.string(),
    email: v.string(),
    image: v.optional(v.string()),
    tokenIdentifier: v.string(),
    isAdmin: v.boolean(),
  }).index("by_token", ["tokenIdentifier"]),
});
