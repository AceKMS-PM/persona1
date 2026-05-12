"use client";

import { useState } from "react";
import { useAction } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const signIn = useAction(api.auth.signIn);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await signIn({
        provider: "password",
        params: { email, password, flow: isSignUp ? "signUp" : "signIn" },
      });
      router.push("/admin");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign in failed");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-brand-canvas flex items-center justify-center px-5">
      <div className="max-w-md w-full">
        <h1 className="display-lg mb-8 text-center">Admin Access</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-3 border border-brand-outline bg-transparent focus:border-brand-slate outline-none"
              required
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-3 border border-brand-outline bg-transparent focus:border-brand-slate outline-none"
              required
            />
          </div>
          {error && <p className="text-red-500 body-md">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="block w-full bg-brand-charcoal text-white label-caps px-8 py-4 text-center hover:opacity-80 transition-opacity disabled:opacity-50"
          >
            {loading ? "Loading..." : isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <p className="text-center body-md mt-6">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            type="button"
            onClick={() => { setIsSignUp(!isSignUp); setError(""); }}
            className="underline hover:opacity-80 transition-opacity"
          >
            {isSignUp ? "Sign in" : "Sign up"}
          </button>
        </p>
      </div>
    </div>
  );
}