import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

export default defineSchema({
  ...authTables,
  users: defineTable({
    name: v.optional(v.string()),
    email: v.optional(v.string()),
    image: v.optional(v.string()),
    phone: v.optional(v.string()),
    emailVerificationTime: v.optional(v.number()),
    phoneVerificationTime: v.optional(v.number()),
    isAnonymous: v.optional(v.boolean()),
    isAdmin: v.optional(v.boolean()),
  }).index("email", ["email"])
    .index("phone", ["phone"]),

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
});
