import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const checkAdmin = query({
  args: { tokenIdentifier: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_token", (q) => q.eq("tokenIdentifier", args.tokenIdentifier))
      .unique();
    return user?.isAdmin === true;
  },
});

export const addUser = mutation({
  args: { name: v.string(), email: v.string(), tokenIdentifier: v.string(), isAdmin: v.boolean() },
  handler: async (ctx, args) => {
    await ctx.db.insert("users", args);
  },
});
