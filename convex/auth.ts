import { Password } from "@convex-dev/auth/providers/Password";
import { convexAuth } from "@convex-dev/auth/server";

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [
    Password({
      profile: (params) => {
        return {
          email: params.email as string,
          name: (params.email as string).split("@")[0],
        };
      },
    }),
  ],
  callbacks: {
    async afterUserCreatedOrUpdated(ctx, { userId, existingUserId }) {
      if (existingUserId !== null) return;
      const existingAdmin = await ctx.db
        .query("users")
        .filter((q) => q.eq(q.field("isAdmin"), true))
        .first();
      if (!existingAdmin) {
        await ctx.db.patch(userId, { isAdmin: true });
      }
    },
  },
});
