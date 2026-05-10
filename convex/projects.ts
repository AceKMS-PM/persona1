import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getProjects = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("projects").collect();
  },
});

export const createProject = mutation({
  args: { 
    title: v.string(), 
    description: v.string(), 
    link: v.optional(v.string()), 
    image: v.optional(v.string()), 
    tags: v.array(v.string()), 
    date: v.string() 
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("projects", args);
  },
});
